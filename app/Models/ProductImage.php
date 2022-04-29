<?php

namespace App\Models;

use App\Shop\Products\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'src'
    ];

    public $timestamps = false;

    public function image()
    {
        return $this->belongsTo(Product::class);
    }
}
