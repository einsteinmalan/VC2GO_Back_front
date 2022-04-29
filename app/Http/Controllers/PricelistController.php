<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Pricelist;
use App\Http\Requests\StorePricelistRequest;
use App\Http\Requests\UpdatePricelistRequest;
use Illuminate\Http\Request;

class PricelistController extends Controller
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
        return response()->json(Pricelist::get(), 200);
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
            'basepricelist_id' => 'required',
            'name' => 'required',
            'default_factor' => 'required',
            'valid_from' => 'required',
            'valid_to' => 'required',
        ]);

        $pricelist =  Pricelist::create($request->all());
        return  response()->json(
            $pricelist, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Pricelist::where('name', 'like', '%'.$name.'%')->get();
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
        return  Pricelist::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $pricelist
     * @return \Illuminate\Http\Response
     */
    public function edit(Coupon $pricelist)
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

        $pricelist = Pricelist::findOrFail($id);
        $pricelist->update($request->all());
        return $pricelist;
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
        $pricelist = Pricelist::findOrFail($id);
        $pricelist->delete();

        return response('', 204);
    }
}
