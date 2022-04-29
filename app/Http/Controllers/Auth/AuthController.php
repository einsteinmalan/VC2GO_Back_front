<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Customer;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    function generateRandomString($length = 16) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }


    public function register(Request $request)
    {
        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'mobile' => 'required|string|unique:users,email,mobile',
            'password' => 'required|string|min:6|confirmed',
            'type' => 'required|ends_with:cust,empl',
            'isVerified' => 'required'
        ]);

        $user = User::create([
            'name' => $attr['name'],
            'mobile' => $attr['mobile'],
            'email' => $attr['email'],
            'isVerified' =>$attr['isVerified'],
            'type' =>$attr['type'],
            'password' => bcrypt($attr['password']),
        ]);
        $mystate = $user->id;

        if($attr['type'] == 'cust'){
            Customer::create([
                'status' => 1,
                'user_id' => $mystate
            ]);
        }elseif($attr['type'] == 'empl'){
            Employee::create([
                'status' => 1,
                'user_id' => $mystate
            ]);
        }

        $token = $user->createToken('myecomtoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $attr = $request->validate([
            'email' => 'required',
            'password' => 'required|min:6',
        ]);

        // Check email
        $user = User::where('email',$attr['email'])->first();

        // Check password
        if(!$user || !Hash::check($attr['password'], $user->password)){
            return response([
                'message' => 'Wrong Credentials!'
            ], 401);
        }else{
            $token = $user->createToken('myecomtoken')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 201)->header('Content-Type', 'application/json');
        }

    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        $mgs = [
            'message' => 'Tokens Revoked'
        ];
        return response($mgs, 204);
    }


}
