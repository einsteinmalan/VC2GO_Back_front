<?php

namespace App\Http\Controllers;

// use App\Models\Address;
use App\Models\Attribute;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;


class AttributeController extends Controller
{
    use ApiResponser;

    public function index(){
        $data= Attribute::all();
        return $data;
        // return view('product',['products'=>$data]);
    }

    public function show($id){
        $data =Attribute::find($id);
        return $data;
    }

    public function search($name){
        return Attribute::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required'
        ]);

        $customer = Attribute::create($request->all());
        return  response()->json(
            $customer, 200
        );
    }

    public function update(Request $request, $id){
        $product = Attribute::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        Attribute::destroy($id);
    }
}
