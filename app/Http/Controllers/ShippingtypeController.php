<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Shippingtype;
use App\Http\Requests\StoreShippingtypeRequest;
use App\Http\Requests\UpdateShippingtypeRequest;
use Illuminate\Http\Request;

class ShippingtypeController extends Controller
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
        return response()->json(Coupon::get(), 200);
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
            'max_weight' => 'required',
        ]);

        $shippingtype =  Shippingtype::create($request->all());
        return  response()->json(
            $shippingtype, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Shippingtype::where('name', 'like', '%'.$name.'%')->get();
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
        return  Shippingtype::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Shippingtype  $shippingtype
     * @return \Illuminate\Http\Response
     */
    public function edit(Shippingtype $shippingtype)
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

        $shippingtype = Shippingtype::findOrFail($id);
        $shippingtype->update($request->all());
        return $shippingtype;
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
        $shippingtype = Shippingtype::findOrFail($id);
        $shippingtype->delete();

        return response('', 204);
    }
}
