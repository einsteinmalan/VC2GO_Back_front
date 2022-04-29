<?php

namespace App\Http\Controllers;

use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
    public function index()
    {
        return ProductImage::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $request->validate([
            'product_id' => 'required',
            'src' => 'required',
        ]);

        ProductImage::create($request->all());
        return response('Image Added Successfully!', 200);
    }

    public function show(ProductImage $productImage)
    {
        //
    }

    public function edit(ProductImage $productImage)
    {
        //
    }

    public function search($id)
    {
        $img = ProductImage::join('products', 'products.id', '=', 'product_images.product_id')
            ->where('products.id', $id)
            ->get(['product_images.src']);
        return $img;
    }

    public function update(Request $request, $id)
    {
        //Find and update ProductImages
        $imgs = ProductImage::find($id);
        $imgs->update($request->all());
        return $imgs;
    }

    public function destroy($id)
    {
        //
        $res = ProductImage::find($id);
        if($res){
            ProductImage::destroy($id);
            return response('Image Deleted');
        }else{
            return response('', 502);
        }
    }
}
