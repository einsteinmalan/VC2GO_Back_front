<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\otp;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;



class OtpController extends Controller
{

    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        // return response()->json(Address::all(), 200);
        return response()->json(otp::get(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'verification_code' => 'required',
            'status' => 'required',
            'phone' => 'required',
            'user_id' => 'required'
        ]);

        $otp =  otp::create($request->all());
        return  response()->json(
            $otp, 201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    // public function show(Address $address)
    public function show( $id)
    {
        //
        return  otp::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\otp  $otp
     * @return \Illuminate\Http\Response
     */
    public function edit(otp $otp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $otp = otp::findOrFail($id);
        $otp->update($request->all());
        return $otp;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return int
     */
    public function destroy( $id)
    {
        //
        $otp = otp::findOrFail($id);
        $otp->delete();

        return 204;
    }
}
