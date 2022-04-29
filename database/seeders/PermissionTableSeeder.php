<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $permissions = [

            'address-access',
            'address-create',
            'address-edit',
            'address-show',
            'address-delete',

            'attribute-access',
            'attribute-create',
            'attribute-edit',
            'attribute-show',
            'attribute-delete',

            'attributevalue-access',
            'attributevalue-create',
            'attributevalue-edit',
            'attributevalue-show',
            'attributevalue-delete',

            'cart-access',
            'cart-create',
            'cart-edit',
            'cart-show',
            'cart-delete',

            'category-access',
            'category-create',
            'category-edit',
            'category-show',
            'category-delete',

            'city-access',
            'city-create',
            'city-edit',
            'city-show',
            'city-delete',

            'configuration-access',
            'configuration-create',
            'configuration-edit',
            'configuration-show',
            'configuration-delete',

            'country-access',
            'country-create',
            'country-edit',
            'country-show',
            'country-delete',

            'coupon-access',
            'coupon-create',
            'coupon-edit',
            'coupon-show',
            'coupon-delete',

            'customer-access',
            'customer-create',
            'customer-edit',
            'customer-show',
            'customer-delete',

            'delivery-access',
            'delivery-create',
            'delivery-edit',
            'delivery-show',
            'delivery-delete',

            'delivery-status-access',
            'delivery-status-create',
            'delivery-status-edit',
            'delivery-status-show',
            'delivery-status-delete',

            'employee-access',
            'employee-create',
            'employee-edit',
            'employee-show',
            'employee-delete',

            'masterdata-access',
            'masterdata-create',
            'masterdata-edit',
            'masterdata-show',
            'masterdata-delete',

            'notification-access',
            'notification-create',
            'notification-edit',
            'notification-show',
            'notification-delete',

            'notification-type-access',
            'notification-type-create',
            'notification-type-edit',
            'notification-type-show',
            'notification-type-delete',

            'order-access',
            'order-create',
            'order-edit',
            'order-show',
            'order-delete',

            'order-status-access',
            'order-status-create',
            'order-status-edit',
            'order-status-show',
            'order-status-delete',

            'otp-access',
            'otp-create',
            'otp-edit',
            'otp-show',
            'otp-delete',

            'payment-access',
            'payment-create',
            'payment-edit',
            'payment-show',
            'payment-delete',

            'permission-access',
            'permission-create',
            'permission-edit',
            'permission-show',
            'permission-delete',

            'product-access',
            'product-create',
            'product-edit',
            'product-show',
            'product-delete',

            'productattribute-access',
            'productattribute-create',
            'productattribute-edit',
            'productattribute-show',
            'productattribute-delete',

            'productimage-access',
            'productimage-create',
            'productimage-edit',
            'productimage-show',
            'productimage-delete',

            'province-access',
            'province-create',
            'province-edit',
            'province-show',
            'province-delete',

            'purchase-limit-access',
            'purchase-limit-create',
            'purchase-limit-edit',
            'purchase-limit-show',
            'purchase-limit-delete',

            'role-access',
            'role-create',
            'role-edit',
            'role-show',
            'role-delete',

            'shoppingcart-access',
            'shoppingcart-create',
            'shoppingcart-edit',
            'shoppingcart-show',
            'shoppingcart-delete',

            'stock-access',
            'stock-create',
            'stock-edit',
            'stock-show',
            'stock-delete',

            'ticket-access',
            'ticket-create',
            'ticket-edit',
            'ticket-show',
            'ticket-delete',

            'ticket-type-access',
            'ticket-type-create',
            'ticket-type-edit',
            'ticket-type-show',
            'ticket-type-delete',

            'trackorder-access',
            'trackorder-create',
            'trackorder-edit',
            'trackorder-show',
            'trackorder-delete',

            'user-access',
            'user-create',
            'user-edit',
            'user-show',
            'user-delete',

            'warehouse-access',
            'warehouse-create',
            'warehouse-edit',
            'warehouse-show',
            'warehouse-delete',

        ];

        $roles = [
            'super-admin',
            'admin',
            'customer',
            'employee',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        foreach ($roles as $role) {
            Role::create(['name' => $role, 'guard_name' => 'web']);
        }

        // $role = Role::create(['name' => 'customer'])
        // ->givePermissionTo('warehouse-show');

        // $user = \App\Models\User::factory()->create([
        //     'name' => 'Mickey Asare',
        //     'email' => 'magadzi@nosmay.com',
        //     'mobile' => '0249715873',
        //     'password' => 'master@all',
        //     'password_confirmation' => 'master@all',
        //     'type' => 'cust',
        //     'isVerified' => '1',
        // ]);
        // $user->assignRole($role);
    }
}
