<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('order_statuses')->insert([
            'name' => 'Pending',
            'color' => '#918F8F',

        ]);

        DB::table('order_statuses')->insert([
            'name' => 'In-Progress',
            'color' => '#129AF2',

        ]);

        DB::table('order_statuses')->insert([
            'name' => 'Delivered',
            'color' => '#0AA01E',

        ]);

        DB::table('order_statuses')->insert([
            'name' => 'Cancelled',
            'color' => '#EE3214',

        ]);




    }
}
