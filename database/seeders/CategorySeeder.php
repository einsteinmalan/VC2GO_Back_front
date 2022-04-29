<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert([
            'name' => 'Premium - TSS',
            'slug' => 'premium-tss',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);

        DB::table('categories')->insert([
            'name' => 'Premium - SB',
            'slug' => 'premium-sb',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);

        DB::table('categories')->insert([
            'name' => 'Premium - ECO',
            'slug' => 'premium-eco',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);

        DB::table('categories')->insert([
            'name' => 'Premium - REG',
            'slug' => 'premium-reg',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);

        DB::table('categories')->insert([
            'name' => 'Premium - S1',
            'slug' => 'premium-s1',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);

        DB::table('categories')->insert([
            'name' => 'Premium - S2',
            'slug' => 'premium-s2',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);


        DB::table('categories')->insert([
            'name' => 'Premium - S3',
            'slug' => 'premium-s3',
            'description' => 'Description',
            'cover' => '#',
            'status' => 1,

        ]);




    }
}
