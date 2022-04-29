<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShippingratesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shippingrates', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('base_unit_price');
            $table->integer('shippingtype_id')->unsigned()->index();
            $table->foreign('shippingtype_id')->references('id')->on('shippingtypes');
            $table->integer('warehouse_id')->unsigned()->index();
            $table->foreign('warehouse_id')->references('id')->on('warehouses');
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
        Schema::dropIfExists('shippingrates');
    }
}
