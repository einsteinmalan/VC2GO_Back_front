<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AttributeController;
use App\Http\Controllers\AttributeValueController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ConfigurationController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\DeliverystatuseController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\MasterDataController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\NotificationtypeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\OtpController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductAttributeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\PurchaseLimitController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ShippingtypeController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StockstatusController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\TickettypeController;
use App\Http\Controllers\TrackOrderController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\ShippingstatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/* attribute
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/address', [AddressController::class, 'index']);
Route::post('/address', [AddressController::class, 'store']);
Route::get('/address/{id}', [AddressController::class, 'show']);
Route::put('/address/{id}', [AddressController::class, 'update']);
Route::delete('/address/{id}', [AddressController::class, 'destroy']);

Route::get('attribute', [AttributeController::class, 'index']);
Route::post('attribute', [AttributeController::class, 'store']);
Route::get('attribute/{id}', [AttributeController::class, 'show']);
Route::put('attribute/{id}', [AttributeController::class, 'update']);
Route::delete('attribute/{id}', [AttributeController::class, 'destroy']);

Route::get('attribute-value', [AttributeValueController::class, 'index']);
Route::post('attribute-value', [AttributeValueController::class, 'store']);
Route::get('attribute-value/{id}', [AttributeValueController::class, 'show']);
Route::put('attribute-value/{id}', [AttributeValueController::class, 'update']);
Route::delete('attribute-value/{id}', [AttributeValueController::class, 'destroy']);

Route::get('cart', [CartController::class, 'index']);
Route::get('cart/{id}', [CartController::class, 'show']);
Route::put('cart/{id}', [CartController::class, 'update']);
Route::delete('cart/{id}', [CartController::class, 'destroy']);
Route::post('cart/add/{id}', [CartController::class, 'addup']);



Route::get('city', [CityController::class, 'index']);
Route::post('city', [CityController::class, 'store']);
Route::get('city/{id}', [CityController::class, 'show']);
Route::put('city/{id}', [CityController::class, 'update']);
Route::delete('city/{id}', [CityController::class, 'destroy']);

Route::get('configuration', [ConfigurationController::class, 'index']);
Route::post('configuration', [ConfigurationController::class, 'store']);
Route::get('configuration/{id}', [ConfigurationController::class, 'show']);
Route::put('configuration/{id}', [ConfigurationController::class, 'update']);
Route::delete('configuration/{id}', [ConfigurationController::class, 'destroy']);

Route::get('country', [CountryController::class, 'index']);
Route::post('country', [CountryController::class, 'store']);
Route::get('country/{id}', [CountryController::class, 'show']);
Route::put('country/{id}', [CountryController::class, 'update']);
Route::delete('country/{id}', [CountryController::class, 'destroy']);

Route::get('coupon', [CouponController::class, 'index']);
Route::post('coupon', [CouponController::class, 'store']);
Route::get('coupon/{id}', [CouponController::class, 'show']);
Route::put('coupon/{id}', [CouponController::class, 'update']);
Route::delete('coupon/{id}', [CouponController::class, 'destroy']);
Route::get('coupon/search/{id}', [CouponController::class, 'search']);

// Route::resource('customer', [CustomerController::class]);
Route::get('customer', [CustomerController::class, 'index']);
Route::post('customer', [CustomerController::class, 'store']);
Route::get('customer/{id}', [CustomerController::class, 'show']);
Route::put('customer/{id}', [CustomerController::class, 'update']);
Route::delete('customer/{id}', [CustomerController::class, 'destroy']);

Route::get('delivery', [DeliveryController::class, 'index']);
Route::post('delivery', [DeliveryController::class, 'store']);
Route::get('delivery/{id}', [DeliveryController::class, 'show']);
Route::put('delivery/{id}', [DeliveryController::class, 'update']);
Route::delete('delivery/{id}', [DeliveryController::class, 'destroy']);

Route::get('deliverystatus', [DeliverystatuseController::class, 'index']);
Route::post('deliverystatus', [DeliverystatuseController::class, 'store']);
Route::get('deliverystatus/{id}', [DeliverystatuseController::class, 'show']);
Route::put('deliverystatus/{id}', [DeliverystatuseController::class, 'update']);
Route::delete('deliverystatus/{id}', [DeliverystatuseController::class, 'destroy']);

Route::get('employee', [EmployeeController::class, 'index']);
Route::post('employee', [EmployeeController::class, 'store']);
Route::get('employee/{id}', [EmployeeController::class, 'show']);
Route::put('employee/{id}', [EmployeeController::class, 'update']);
Route::delete('employee/{id}', [EmployeeController::class, 'destroy']);

Route::get('master-data', [MasterDataController::class, 'index']);
Route::post('master-data', [MasterDataController::class, 'store']);
Route::get('master-data/{id}', [MasterDataController::class, 'show']);
Route::put('master-data/{id}', [MasterDataController::class, 'update']);
Route::delete('master-data/{id}', [MasterDataController::class, 'destroy']);

Route::get('notification', [NotificationController::class, 'index']);
Route::post('notification', [NotificationController::class, 'store']);
Route::get('notification/{id}', [NotificationController::class, 'show']);
Route::put('notification/{id}', [NotificationController::class, 'update']);
Route::delete('notification/{id}', [NotificationController::class, 'destroy']);

Route::get('notificationtype', [NotificationtypeController::class, 'index']);
Route::post('notificationtype', [NotificationtypeController::class, 'store']);
Route::get('notificationtype/{id}', [NotificationtypeController::class, 'show']);
Route::put('notificationtype/{id}', [NotificationtypeController::class, 'update']);
Route::delete('notificationtype/{id}', [NotificationtypeController::class, 'destroy']);

Route::get('order', [OrderController::class, 'index']);
Route::post('order', [OrderController::class, 'store']);
Route::get('order/{id}', [OrderController::class, 'show']);
Route::put('order/{id}', [OrderController::class, 'update']);
Route::delete('order/{id}', [OrderController::class, 'destroy']);

Route::get('order-status', [OrderStatusController::class, 'index']);
Route::post('order-status', [OrderStatusController::class, 'store']);
Route::get('order-status/{id}', [OrderStatusController::class, 'show']);
Route::put('order-status/{id}', [OrderStatusController::class, 'update']);
Route::delete('order-status/{id}', [OrderStatusController::class, 'destroy']);

Route::get('otp', [OtpController::class, 'index']);
Route::post('otp', [OtpController::class, 'store']);
Route::get('otp/{id}', [OtpController::class, 'show']);
Route::put('otp/{id}', [OtpController::class, 'update']);
Route::delete('otp/{id}', [OtpController::class, 'destroy']);

Route::get('payment', [PaymentController::class, 'index']);
Route::post('payment', [PaymentController::class, 'store']);
Route::get('payment/{id}', [PaymentController::class, 'show']);
Route::put('payment/{id}', [PaymentController::class, 'update']);
Route::delete('payment/{id}', [PaymentController::class, 'destroy']);

Route::get('permission', [PermissionController::class, 'index']);
Route::post('permission', [PermissionController::class, 'store']);
Route::get('permission/{id}', [PermissionController::class, 'show']);
Route::put('permission/{id}', [PermissionController::class, 'update']);
Route::delete('permission/{id}', [PermissionController::class, 'destroy']);



Route::get('product-attribute', [ProductAttributeController::class, 'index']);
Route::post('product-attribute', [ProductAttributeController::class, 'store']);
Route::get('product-attribute/{id}', [ProductAttributeController::class, 'show']);
Route::put('product-attribute/{id}', [ProductAttributeController::class, 'update']);
Route::delete('product-attribute/{id}', [ProductAttributeController::class, 'destroy']);

Route::get('product-image', [ProductImageController::class, 'index']);
Route::post('product-image', [ProductImageController::class, 'store']);
Route::get('product-image/{id}', [ProductImageController::class, 'show']);
Route::put('product-image/{id}', [ProductImageController::class, 'update']);
Route::delete('product-image/{id}', [ProductImageController::class, 'destroy']);
Route::get('product-image/product/{id}', [ProductImageController::class, 'search']);

Route::get('province', [ProvinceController::class, 'index']);
Route::post('province', [ProvinceController::class, 'store']);
Route::get('province/{id}', [ProvinceController::class, 'show']);
Route::put('province/{id}', [ProvinceController::class, 'update']);
Route::delete('province/{id}', [ProvinceController::class, 'destroy']);

Route::get('purchase-limit', [PurchaseLimitController::class, 'index']);
Route::post('purchase-limit', [PurchaseLimitController::class, 'store']);
Route::get('purchase-limit/{id}', [PurchaseLimitController::class, 'show']);
Route::put('purchase-limit/{id}', [PurchaseLimitController::class, 'update']);
Route::delete('purchase-limit/{id}', [PurchaseLimitController::class, 'destroy']);

Route::get('role', [RoleController::class, 'index']);
Route::post('role', [RoleController::class, 'store']);
Route::get('role/{id}', [RoleController::class, 'show']);
Route::put('role/{id}', [RoleController::class, 'update']);
Route::delete('role/{id}', [RoleController::class, 'destroy']);

Route::get('shoppingcart', [ShoppingCartController::class, 'index']);
Route::post('shoppingcart', [ShoppingCartController::class, 'store']);
Route::get('shoppingcart/{id}', [ShoppingCartController::class, 'show']);
Route::put('shoppingcart/{id}', [ShoppingCartController::class, 'update']);
Route::delete('shoppingcart/{id}', [ShoppingCartController::class, 'destroy']);

Route::get('stock', [StockController::class, 'index']);
Route::post('stock', [StockController::class, 'store']);
Route::get('stock/{id}', [StockController::class, 'show']);
Route::put('stock/{id}', [StockController::class, 'update']);
Route::delete('stock/{id}', [StockController::class, 'destroy']);

Route::get('ticket', [TicketController::class, 'index']);
Route::post('ticket', [TicketController::class, 'store']);
Route::get('ticket/{id}', [TicketController::class, 'show']);
Route::put('ticket/{id}', [TicketController::class, 'update']);
Route::delete('ticket/{id}', [TicketController::class, 'destroy']);

Route::get('tickettype', [TickettypeController::class, 'index']);
Route::post('tickettype', [TickettypeController::class, 'store']);
Route::get('tickettype/{id}', [TickettypeController::class, 'show']);
Route::put('tickettype/{id}', [TickettypeController::class, 'update']);
Route::delete('tickettype/{id}', [TickettypeController::class, 'destroy']);

Route::get('track-order', [TrackOrderController::class, 'index']);
Route::post('track-order', [TrackOrderController::class, 'store']);
Route::get('track-order/{id}', [TrackOrderController::class, 'show']);
Route::put('track-order/{id}', [TrackOrderController::class, 'update']);
Route::delete('track-order/{id}', [TrackOrderController::class, 'destroy']);








// Stockstatus
Route::get('stockstatus', [StockstatusController::class, 'index']);
Route::post('stockstatus', [StockstatusController::class, 'store']);
Route::get('stockstatus/{id}', [StockstatusController::class, 'show']);
Route::put('stockstatus/{id}', [StockstatusController::class, 'update']);
Route::get('stockstatus/{id}/stockstatus', [StockstatusController::class, 'produce']);
Route::get('stockstatus/all/{id}', [StockstatusController::class, 'search']);
Route::delete('stockstatus/{id}', [StockstatusController::class, 'destroy']);


// Category
Route::get('category', [CategoryController::class, 'index']);
Route::post('category', [CategoryController::class, 'store']);
Route::get('category/{id}', [CategoryController::class, 'show']);
Route::put('category/{id}', [CategoryController::class, 'update']);
Route::get('category/{id}/products', [CategoryController::class, 'produce']);
Route::get('category/all/{id}', [CategoryController::class, 'search']);
Route::delete('category/{id}', [CategoryController::class, 'destroy']);


//Warehouse
Route::get('warehouse', [WarehouseController::class, 'index']);
Route::post('warehouse', [WarehouseController::class, 'store']);
Route::get('warehouse/{id}', [WarehouseController::class, 'show']);
Route::put('warehouse/{id}', [WarehouseController::class, 'update']);
Route::get('warehouse/{id}/products', [WarehouseController::class, 'produce']);
Route::delete('warehouse/{id}', [WarehouseController::class, 'destroy']);


//Location

Route::get('location', [LocationController::class, 'index']);
Route::post('location', [LocationController::class, 'store']);
Route::get('location/{id}', [LocationController::class, 'show']);
Route::put('location/{id}', [LocationController::class, 'update']);
Route::get('location/{id}/location', [LocationController::class, 'produce']);
Route::get('location/all/{id}', [LocationController::class, 'search']);
Route::delete('location/{id}', [LocationController::class, 'destroy']);


//Shipping status

Route::get('shipping-status', [ShippingstatusController::class, 'index']);
Route::post('shipping-status', [ShippingstatusController::class, 'store']);
Route::get('shipping-status/{id}', [ShippingstatusController::class, 'show']);
Route::put('shipping-status/{id}', [ShippingstatusController::class, 'update']);
Route::get('shipping-status/{id}/shippingstatus', [ShippingstatusController::class, 'produce']);
Route::get('shipping-status/all/{id}', [ShippingstatusController::class, 'search']);
Route::delete('shipping-status/{id}', [ShippingstatusController::class, 'destroy']);


//Delivery status

Route::get('delivery-status', [DeliverystatuseController::class, 'index']);
Route::post('delivery-status', [DeliverystatuseController::class, 'store']);
Route::get('delivery-status/{id}', [DeliverystatuseController::class, 'show']);
Route::put('delivery-status/{id}', [DeliverystatuseController::class, 'update']);
Route::get('delivery-status/{id}/deliverystatus', [DeliverystatuseController::class, 'produce']);
Route::get('delivery-status/all/{id}', [DeliverystatuseController::class, 'search']);
Route::delete('delivery-status/{id}', [DeliverystatuseController::class, 'destroy']);


//Order status

Route::get('order-status', [DeliverystatuseController::class, 'index']);
Route::post('order-status', [DeliverystatuseController::class, 'store']);
Route::get('order-status/{id}', [DeliverystatuseController::class, 'show']);
Route::put('order-status/{id}', [DeliverystatuseController::class, 'update']);
Route::get('order-status/{id}/order', [DeliverystatuseController::class, 'produce']);
Route::get('order-status/all/{id}', [DeliverystatuseController::class, 'search']);
Route::delete('order-status/{id}', [DeliverystatuseController::class, 'destroy']);

// Product
Route::get('product', [ProductController::class, 'index']);
Route::post('product', [ProductController::class, 'store']);
Route::put('product/{id}', [ProductController::class, 'update']);
Route::delete('product/{id}', [ProductController::class, 'destroy']);
Route::get('product/search/{name}', [ProductController::class, 'search']);


// driver
Route::get('drivers', [DriverController::class, 'index']);
Route::post('driver', [DriverController::class, 'store']);
Route::put('driver/{id}', [DriverController::class, 'update']);
Route::delete('driver/{id}', [DriverController::class, 'destroy']);
Route::get('driver/search/{name}', [DriverController::class, 'search']);



// driver
Route::get('shippingtype', [ShippingtypeController::class, 'index']);
Route::post('shippingtype', [ShippingtypeController::class, 'store']);
Route::put('shippingtype/{id}', [ShippingtypeController::class, 'update']);
Route::delete('shippingtype/{id}', [ShippingtypeController::class, 'destroy']);
Route::get('shippingtype/search/{name}', [ShippingtypeController::class, 'search']);

//================================================================================
//================================================================================


Route::get('mine', function(){
    return response('Yes!', 204);
});


Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/auth/login', [AuthController::class, 'login']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', function(Request $request) {
        return auth()->user()->name;
    });

    Route::get('/user', function(Request $request) {
        return $request->user();
    });

    Route::post('/auth/logout', [AuthController::class, 'logout']);
});

// Customers' Routes
Route::group(['middleware' => ['role:customer']], function () {
    //

});



