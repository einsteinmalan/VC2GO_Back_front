<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;


class NotificationController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Notification::get(), 200);
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
            'notificationtype_id' => 'required',
            'message' => 'required',
            'status' => 'required',
            'read' => 'required'
        ]);

        $Notification =  Notification::create($request->all());
        return  response()->json(
            $Notification, 201
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
        return  Notification::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function edit(Notification $notification)
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

        $notification = Notification::findOrFail($id);
        $notification->update($request->all());
        return $notification;
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
        $notification = Notification::findOrFail($id);
        $notification->delete();

        return 204;
    }
}
