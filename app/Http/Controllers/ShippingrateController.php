<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Driver;
use App\Models\Shippingrate;
use App\Http\Requests\StoreShippingrateRequest;
use App\Http\Requests\UpdateShippingrateRequest;
use Illuminate\Http\Request;

class ShippingrateController extends Controller
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
        return response()->json(Shippingrate::get(), 200);
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
            'base_unit_price' => 'required',
            'shippingtype_id' => 'required',
            'warehouse_id' => 'required'
        ]);

        $shippingrate =  Shippingrate::create($request->all());
        return  response()->json(
            $shippingrate, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Shippingrate::where('base_unit_price', 'like', '%'.$name.'%')->get();
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
        return  Shippingrate::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $shippingrate
     * @return \Illuminate\Http\Response
     */
    public function edit(Shippingrate $shippingrate)
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

        $shippingrate = Shippingrate::findOrFail($id);
        $shippingrate->update($request->all());
        return $shippingrate;
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
        $shippingrate = Shippingrate::findOrFail($id);
        $shippingrate->delete();

        return response('', 204);
    }
}
