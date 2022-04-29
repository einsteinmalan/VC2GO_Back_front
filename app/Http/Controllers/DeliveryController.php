<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Delivery;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;


class DeliveryController extends Controller
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
        return response()->json(Delivery::get(), 200);
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
            'employee_id' => 'required',
            'customer_id' => 'required',
            'order_id' => 'required',
            'trackorder_id' => 'required',
            'deliverystatus_id' => 'required',

        ]);

        $delivery =  Delivery::create($request->all());
        return  response()->json(
            $delivery, 200
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return  Delivery::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function edit(Delivery $delivery)
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
    public function update(Request $request,$id)
    {
        $delivery = Delivery::findOrFail($id);
        $delivery->update($request->all());
        return $delivery;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return int
     */
    public function destroy($id)
    {
        $delivery = Delivery::findOrFail($id);
        $delivery->delete();

        return 204;
    }
}
