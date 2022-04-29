<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Stockstatus;
use App\Http\Requests\StoreStockstatusRequest;
use App\Http\Requests\UpdateStockstatusRequest;
use Illuminate\Http\Request;

class StockstatusController extends Controller
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
        return response()->json(Stockstatus::get(), 200);
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

        $stockstatus =  Stockstatus::create($request->all());
        return  response()->json(
            $stockstatus, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Coupon::where('name', 'like', '%'.$name.'%')->get();
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
        return  Stockstatus::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $stockstatus
     * @return \Illuminate\Http\Response
     */
    public function edit(Coupon $stockstatus)
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

        $stockstatus = Stockstatus::findOrFail($id);
        $stockstatus->update($request->all());
        return $stockstatus;
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
        $stockstatus = Stockstatus::findOrFail($id);
        $stockstatus->delete();

        return response('', 204);
    }
}
