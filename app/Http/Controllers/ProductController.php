<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Location;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function index(){
        // return Product::find(1)->image;
        $data= Product::get();
        return response($data);
    }

    public function show($id){
        $data =Product::find($id);
        return response($data);
    }

    public function search($name){
        return Product::where('name', 'like', '%'.$name.'%')->get();
    }

    public function store(Request $request){
        $filename = null;
        $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'stockstatus_id' => 'required',
            'sku' => 'required',

        ]);

       /* if($request->file('image')){
            $img = $request->file;
            if($img != null){
                $file= $request->file('image');
                $filename= date('YmdHi').$file->getClientOriginalName();
                $file-> move(public_path('public/Image'), $filename);
                // $data['image']= $filename;
            }

        }*/

        $file= $request->file('image');
        $filename= date('YmdHi').$file->getClientOriginalName();
       // $file-> move(public_path('public/Image'), $filename);
       // $file-> move(public_path('storage/app/public/products'), $filename);
        $file-> move(storage_path('app/public/products'), $filename);

       // $customer = Product::create($request->all())->image()->create($request->only('id','src'));
        // $img = ProductImage::create($request->only('src', $customer->id));
        $product = new Product();
        $product->name = $request->input('name');
        $product->category_id = $request->input('category_id');
        $product->stockstatus_id = $request->input('stockstatus_id');
        $product->sku = $request->input('sku');
        $product->picture = $filename;
        $product->price_per_kilo = $request->input('price_per_kilo');
        $product->price_per_crate = $request->input('price_per_crate');
        $product->price_per_half_crate = $request->input('price_per_half_crate');
        $product->isActive = $request->input('isActive');
        $product->status = $request->input('status');
        $product->fee_min = $request->input('fee_min');
        $product->fee_max = $request->input('fee_max');
        $product->weight_limit = $request->input('weight_limit');
        $product->save();


        return  response()->json(
            $product, 200
        );
    }

    public function update(Request $request, $id){
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy($id){
        Product::destroy($id);
        return response('deleted', 204);
    }

    function addToCart(Request $req)
    {
        if($req->session()->has('user'))
        {
            $cart= new Cart();
            $cart->user_id=$req->session()->get('user')['id'];
            $cart->product_id=$req->product_id;
            $cart->save();
            return redirect('/');

        }
        else
        {
            return redirect('/login');
        }
    }

    // static function cartItem()
    // {
    //     $userId=Session::get('user')['id'];
    //     return Cart::where('user_id',$userId)->count();
    // }
    // function cartList()
    // {
    //     $userId=Session::get('user')['id'];
    //     $products= DB::table('cart')
    //         ->join('products','cart.product_id','=','products.id')
    //         ->where('cart.user_id',$userId)
    //         ->select('products.*','cart.id as cart_id')
    //         ->get();

    //     return view('cartlist',['products'=>$products]);
    // }

    // function removeCart($id)
    // {
    //     Cart::destroy($id);
    //     return redirect('cartlist');
    // }

    // function orderNow()
    // {
    //     $userId=Session::get('user')['id'];
    //     $total= $products= DB::table('cart')
    //         ->join('products','cart.product_id','=','products.id')
    //         ->where('cart.user_id',$userId)
    //         ->sum('products.price');

    //     return view('ordernow',['total'=>$total]);
    // }

    // function orderPlace(Request $req)
    // {
    //     $userId=Session::get('user')['id'];
    //     $allCart= Cart::where('user_id',$userId)->get();
    //     foreach($allCart as $cart)
    //     {
    //         $order= new Order;
    //         $order->product_id=$cart['product_id'];
    //         $order->user_id=$cart['user_id'];
    //         $order->status="pending";
    //         $order->payment_method=$req->payment;
    //         $order->payment_status="pending";
    //         $order->address=$req->address;
    //         $order->save();
    //         Cart::where('user_id',$userId)->delete();
    //     }
    //     $req->input();
    //     return redirect('/');
    // }

    // function myOrders()
    // {
    //     $userId=Session::get('user')['id'];
    //     $orders= DB::table('orders')
    //         ->join('products','orders.product_id','=','products.id')
    //         ->where('orders.user_id',$userId)
    //         ->get();

    //     return view('myorders',['orders'=>$orders]);
    // }
}
