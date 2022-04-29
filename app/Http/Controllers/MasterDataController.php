<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\MasterData;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;



class MasterDataController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(MasterData::get(), 200);
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
            'data' => 'required',
        ]);

        $masterData=  MasterData::create($request->all());
        return  response()->json(
            $masterData, 201
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
        return  MasterData::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MasterData  $masterData
     * @return \Illuminate\Http\Response
     */
    public function edit(MasterData $masterData)
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
        $masterData = MasterData::findOrFail($id);
        $masterData->update($request->all());
        return $masterData;
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
        $masterData = MasterData::findOrFail($id);
        $masterData->delete();

        return 204;
    }
}
