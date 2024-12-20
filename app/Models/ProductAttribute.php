<?php

namespace App\Models;

use App\Models\AttributeValue;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    use HasFactory;
    protected $fillable = [
        'quantity',
        'price',
        'product_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */


    public function attributesValues()
    {
        return $this->belongsToMany(AttributeValue::class);
    }


}
