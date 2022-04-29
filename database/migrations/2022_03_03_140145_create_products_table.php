<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('category_id')->unsigned()->index();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->string('sku')->unique();
            $table->string('picture')->nullable();
            $table->integer('price_per_kilo');
            $table->decimal('price_per_crate');
            $table->integer('price_per_half_crate');
            $table->integer('isActive')->default(1);
            $table->string('status');
            $table->decimal('fee_min')->default(0);
            $table->decimal('fee_max')->default(0);;
            $table->integer('weight_limit')->default(0);
            $table->integer('stockstatus_id')->unsigned()->index();
            $table->foreign('stockstatus_id')->references('id')->on('stockstatuses');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
