<?php

namespace App\Http\Controllers;

use App\Models\Configuration;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;



class ConfigurationController extends Controller
{
    use ApiResponser;

    //
    public function index(){
        $data= Configuration::all();
        return $data;
        // return view('product',['products'=>$data]);
    }

    public function show($id){
        $data =Configuration::find($id);
        return $data;
    }

    public function search($name){
        return Configuration::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'properties' => 'required',
        ]);

        $customer = Configuration::create($request->all());
        return  response()->json(
            $customer, 200
        );
    }

    public function update(Request $request, $id){
        $product = Configuration::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        Configuration::destroy($id);
    }
}
