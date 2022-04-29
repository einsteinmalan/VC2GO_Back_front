<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class WarehouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('warehouses')->insert([

            'contact' => '024 xxx xxxx',
            'lon' => 5.57877382,
            'lat' =>  -0.209652,
            'location_id' => 1,
            'name'=> 'MT-SALES',
            'code' => 'MTS'

        ]);


        DB::table('warehouses')->insert([

            'contact' => '024 xxx xxxx',
            'lon' => 4.902520,
            'lat' =>  -1.773391,
            'location_id' => 2,
            'name'=> 'TK-SALES',
            'code' => 'TKS'

        ]);

        DB::table('warehouses')->insert([

            'contact' => '024 xxx xxxx',
            'lon' => 5.540385,
            'lat' =>  -0.43148085,
            'location_id' => 3,
            'name'=> 'KS-SALES',
            'code' => 'KSS'

        ]);


        DB::table('warehouses')->insert([

            'contact' => '024 xxx xxxx',
            'lon' => 6.6682421,
            'lat' =>  -1.568054,
            'location_id' => 4,
            'name'=> 'KUS-SALES',
            'code' => 'KUSS'
        ]);

        DB::table('warehouses')->insert([

            'contact' => '024 xxx xxxx',
            'lon' => 5.6337602,
            'lat' =>  0.002847,
            'location_id' => 5,
            'name'=> 'TM-SALES',
            'code' => 'TMS'

        ]);







    }
}
