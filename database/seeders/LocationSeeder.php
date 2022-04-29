<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('locations')->insert([
            'name' => 'Malata',
        ]);

        DB::table('locations')->insert([
            'name' => 'Takoradi',
        ]);

        DB::table('locations')->insert([
            'name' => 'Kasoa',
        ]);

        DB::table('locations')->insert([
            'name' => 'Kumasi',
        ]);

        DB::table('locations')->insert([
            'name' => 'Tema',
        ]);
    }
}
