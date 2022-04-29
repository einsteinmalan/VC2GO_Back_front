<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inventorytransfer extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'warehouse_from',
        'warehouse_to',
        'date',

    ];


    /**
     * @return BelongsTo
     */
    public function products()
    {
        return $this->belongsTo(Product::class);
    }

}
