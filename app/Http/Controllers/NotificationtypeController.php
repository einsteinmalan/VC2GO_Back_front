<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Notificationtype;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;


class NotificationtypeController extends Controller
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
        return response()->json(Notificationtype::get(), 200);
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
        ]);

        $notificationtype =  Notificationtype::create($request->all());
        return  response()->json(
            $notificationtype, 201
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
        return  Notificationtype::findOrFail($id);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notificationtype  $notificationtype
     * @return \Illuminate\Http\Response
     */
    public function edit(Notificationtype $notificationtype)
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

        $notificationtype = Notificationtype::findOrFail($id);
        $notificationtype->update($request->all());
        return $notificationtype;
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
        $notificationtype = Notificationtype::findOrFail($id);
        $notificationtype->delete();

        return 204;
    }
}