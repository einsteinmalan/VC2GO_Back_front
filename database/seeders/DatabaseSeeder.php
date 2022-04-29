<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Customer;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            // CategoryTable::class,
            // CountryTable::class,
            //CustomerTable::class,
             //ProductTable::class,
            CategorySeeder::class,
            BasepricelistSeeder::class,
            DeliveryStatusSeeder::class,
            DriverSeeder::class,
            LocationSeeder::class,
            OrderStatusSeeder::class,
            ShippingrateSeeder::class,
            ShippingstatusSeeder::class,
            ShippingtypeSeeder::class,
            WarehouseSeeder::class


        ]);
    }
}
