<?php

namespace App\Http\Controllers;

use App\Models\Basepricelist;
use App\Http\Requests\StoreBasepricelistRequest;
use App\Http\Requests\UpdateBasepricelistRequest;
use App\Models\Coupon;
use App\Models\Inventorytransfer;
use Illuminate\Http\Request;

class BasepricelistController extends Controller
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
        return response()->json(Basepricelist::get(), 200);
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

        $basepricelist =  Basepricelist::create($request->all());
        return  response()->json(
            $basepricelist, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Basepricelist::where('name', 'like', '%'.$name.'%')->get();
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
        return  Basepricelist::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $basepricelist
     * @return \Illuminate\Http\Response
     */
    public function edit(Basepricelist $basepricelist)
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

        $basepricelist = Basepricelist::findOrFail($id);
        $basepricelist->update($request->all());
        return $basepricelist;
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
        $basepricelist = Basepricelist::findOrFail($id);
        $basepricelist->delete();

        return response('', 204);
    }
}
