<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    //
    public function index(){
        $data= Country::all();
        return $data;
        // return view('product',['products'=>$data]);
    }

    public function show($id){
        $data =Country::find($id);
        return $data;
    }

    public function search($name){
        return Country::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'phonecode' => 'required',
            'status' => 'required',
        ]);

        $customer = Country::create($request->all());
        return  response()->json(
            $customer, 200
        );
    }

    public function update(Request $request, $id){
        $product = Country::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        Country::destroy($id);
    }
}
