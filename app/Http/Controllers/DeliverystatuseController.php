<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Deliverystatuse;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;



class DeliverystatuseController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Deliverystatuse::get(), 200);
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

        $deliveryStatus =  Deliverystatuse::create($request->all());
        return  response()->json(
            $deliveryStatus, 201
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
        return  Deliverystatuse::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Deliverystatuse  $deliverystatuse
     * @return \Illuminate\Http\Response
     */
    public function edit(Deliverystatuse $deliverystatuse)
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
        //
        $deliverystatuse = Deliverystatuse::findOrFail($id);
        $deliverystatuse->update($request->all());
        return $deliverystatuse;
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
        $deliverystatuse = Deliverystatuse::findOrFail($id);
        $deliverystatuse->delete();

        return 204;
    }
}
