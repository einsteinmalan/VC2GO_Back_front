<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Ticket;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;



class TicketController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        return response()->json(Ticket::get(), 200);
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
            'order_id' => 'required',
            'customer_id' => 'required',
            'complaint' => 'required',

        ]);

        $ticket =  Ticket::create($request->all());
        return  response()->json(
            $ticket, 201
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
        return  Ticket::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function edit(Ticket $ticket)
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

        $ticket = Ticket::findOrFail($id);
        $ticket->update($request->all());
        return $ticket;
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
        $type = Ticket::findOrFail($id);
        $type->delete();

        return 204;
    }
}
