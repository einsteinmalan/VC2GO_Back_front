<?php

namespace App\Http\Controllers;

use App\Models\AttributeValue;
use Illuminate\Http\Request;

class AttributeValueController extends Controller
{
    //
    public function index(){
        $data= AttributeValue::all();
        return $data;
        // return view('product',['products'=>$data]);
    }

    public function show($id){
        $data =AttributeValue::find($id);
        return $data;
    }

    public function search($name){
        return AttributeValue::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required'
        ]);

        $customer = AttributeValue::create($request->all());
        return  response()->json(
            $customer, 200
        );
    }

    public function update(Request $request, $id){
        $product = AttributeValue::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        AttributeValue::destroy($id);
    }
}
