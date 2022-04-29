<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\PurchaseLimit;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;



class PurchaseLimitController extends Controller
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
        return response()->json(PurchaseLimit::get(), 200);
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
            'user_id' => 'required',
            'limit_total_sum' => 'required',
            'limit_number_purchase' => 'required',

        ]);

        $purchaseLimit =  PurchaseLimit::create($request->all());
        return  response()->json(
            $purchaseLimit, 201
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
        return  PurchaseLimit::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PurchaseLimit  $purchaseLimit
     * @return \Illuminate\Http\Response
     */
    public function edit(PurchaseLimit $purchaseLimit)
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

        $purchaseLimit = PurchaseLimit::findOrFail($id);
        $purchaseLimit->update($request->all());
        return $purchaseLimit;
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
        $purchaseLimit = PurchaseLimit::findOrFail($id);
        $purchaseLimit->delete();

        return 204;
    }
}
