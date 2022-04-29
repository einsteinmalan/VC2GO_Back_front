<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Shippingstatus;
use App\Http\Requests\StoreShippingstatusRequest;
use App\Http\Requests\UpdateShippingstatusRequest;
use Illuminate\Http\Request;

class ShippingstatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        // return response()->json(Address::all(), 200);
        return response()->json(Shippingstatus::get(), 200);
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
            'name' => 'required',
            'color' => 'required',
        ]);

        $shippingstatus =  Shippingstatus::create($request->all());
        return  response()->json(
            $shippingstatus, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Shippingstatus::where('name', 'like', '%'.$name.'%')->get();
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
        return  Coupon::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $shippingstatus
     * @return \Illuminate\Http\Response
     */
    public function edit(Coupon $shippingstatus)
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

        $shippingstatus = Shippingstatus::findOrFail($id);
        $shippingstatus->update($request->all());
        return $shippingstatus;
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
        $shippingstatus = Shippingstatus::findOrFail($id);
        $shippingstatus->delete();

        return response('', 204);
    }
}
