<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CustomerController extends Controller
{

    public function register( Request $request ) {

        $name = $request->input('name');
        $surname = $request->input('surname');
        $email = $request->input('email');
        $password = $request->input('password');

        try {

            $row_effects =  DB::table('customer')->insert([
                'name' => $name,
                'surname' => $surname,
                'email' => $email,
                'password' => $password
            ]);

            $customer = DB::table('customer')->where('email', '=', $email)->get();

            $obj["status"] = $row_effects;
            $obj["message"] = "Register Success";
            $obj["customer"] = $customer;

        } catch (\Throwable $th) {
            $obj["status"] = false;
            $obj["message"] = "Register Fail!";
            $obj["error"] = $th;
        }

        return response()->json($obj);
    }


    // customer login
    public function login( Request $request ) {

        $email = $request->input('email');
        $password = $request->input('password');

        $customer = DB::table('customer')
        ->where('email', '=', $email)
        ->where('password', '=', $password)
        ->get();

        if ( count($customer) > 0 ) {
            $obj["status"] = true;
            $obj["message"] = "Login Success";
            $obj["customer"] = $customer;
        }else {
            $obj["status"] = false;
            $obj["message"] = "Login Failed";
            $obj["customer"] = $customer;
        }

        return response()->json($obj);

    }


}

