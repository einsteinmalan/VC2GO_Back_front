<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Inventorytransfer;
use App\Http\Requests\StoreInventorytransferRequest;
use App\Http\Requests\UpdateInventorytransferRequest;
use Illuminate\Http\Request;

class InventorytransferController extends Controller
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
        return response()->json(Inventorytransfer::get(), 200);
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
            'product_id' => 'required',
            'warehouse_from' => 'required',
            'warehouse_to' => 'required',
            'date' => 'required',
        ]);

        $inventorytransfer =  Inventorytransfer::create($request->all());
        return  response()->json(
            $inventorytransfer, 201
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search($name){
        return Inventorytransfer::where('date', 'like', '%'.$name.'%')->get();
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
        return  Inventorytransfer::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $innventorytransfer
     * @return \Illuminate\Http\Response
     */
    public function edit(Inventorytransfer $innventorytransfer)
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

        $innventorytransfer = Inventorytransfer::findOrFail($id);
        $innventorytransfer->update($request->all());
        return $innventorytransfer;
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
        $innventorytransfer = Inventorytransfer::findOrFail($id);
        $innventorytransfer->delete();

        return response('', 204);
    }
}
