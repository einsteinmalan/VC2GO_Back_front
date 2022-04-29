<?php

namespace App\Http\Controllers;

use App\Models\Address;
// use App\Models\Product;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;

class AddressController extends Controller
{
    use ApiResponser;
    //
    public function index(){
        $data= Address::all();
        return $data;
        // return view('product',['products'=>$data]);
    }

    public function show($id){
        $data =Address::find($id);
        return $data;
    }

    public function search($name){
        return Address::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $request->validate([
            'address' => 'required',
            'city' => 'required',
            'country_id' => 'required',
            'customer_id' => 'required'
        ]);

        $customer = Address::create($request->all());
        return  response()->json(
            $customer, 200
        );
    }

    public function update(Request $request, $id){
        $product = Address::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        Address::destroy($id);
    }
}
