<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function index(){
        $data= Cart::all();
        return $data;
        // return view('product',['products'=>$data]);
    }

    public function show($id){
        $data =Cart::find($id);
        return $data;
    }

    public function search($name){
        return Cart::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $request->validate([
            'product_id' => 'required',
            'product_name' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required',
            'order_id' => 'required',
        ]);

        $customer = Cart::create($request->all());
        return  response()->json(
            $customer, 200
        );
    }

    public function update(Request $request, $id){
        $product = Cart::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        Cart::destroy($id);
    }

    public function addup(Request $request, $id) {
        $prod = Product::find($id);
        $ck = auth()->user()->id;
        if($ck){
        $ct = Cart::create([
            'product_id' => $id,
            'product_name' => $prod->name,
            'order_id' => $request->order_id,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'image' => $prod->picture,
            'user_id' => auth()->user()->id
        ]);
        return response($ct, 201);
    }else{
        return response()->json(['message' => 'Unathenticated'], 400);
    }
    }

    public function removeCart(Request $request)
    {
        Cart::remove($request->id);
    }
}
