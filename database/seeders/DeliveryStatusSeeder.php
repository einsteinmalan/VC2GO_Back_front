<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;




class DeliveryStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //
        DB::table('deliverystatuses')->insert([
            'name' => 'Pending',
            'color' => '#918F8F',

        ]);

        DB::table('deliverystatuses')->insert([
            'name' => 'In-Progress',
            'color' => '#129AF2',

        ]);

        DB::table('deliverystatuses')->insert([
            'name' => 'Delivered',
            'color' => '#0AA01E',

        ]);

        DB::table('deliverystatuses')->insert([
            'name' => 'Picked',
            'color' => '#0AA01E',

        ]);

        DB::table('deliverystatuses')->insert([
            'name' => 'Cancelled',
            'color' => '#EE3214',

        ]);




    }
}
