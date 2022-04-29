<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShippingstatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('shippingstatuses')->insert([
            'name' => 'Pending',
            'color' => '#918F8F',

        ]);

        DB::table('shippingstatuses')->insert([
            'name' => 'Delivered',
            'color' => '#129AF2',

        ]);

        DB::table('shippingstatuses')->insert([
            'name' => 'Cancelled',
            'color' => '#0AA01E',

        ]);



    }
}
