<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class CategoryController extends Controller
{

    //
    public function index()
    {
        //
        return response(Category::get()->all(), 200);
    }

    public function search($id)
    {
        //
        $categ = Category::Find($id);
        return response($categ, 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',

        ]);



       // $request->slug = $slug;

       $category =  Category::create($request->all());
        return  response()->json(
            $category, 200
        );
    }

    public function show($id)
    {
        //
        return Category::findOrFail($id);
    }

    public function edit(Category $category)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
        $category = Category::findOrFail($id);
        $category->update($request->all());
        return $category;
    }

    public function produce($id)
    {
        return Category::findOrFail($id)->products;
    }

    public function destroy($id)
    {
        //
        $category = Category::findOrFail($id);
        $category->delete();
        return response('deleted', 204);
    }
}
