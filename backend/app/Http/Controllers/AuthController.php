<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\models\User;

class AuthController extends Controller
{
public $successStatus = 200;


public function register(Request $request)
{
    $request->validate([
    'name' => 'required|string',
    'email' => 'required|string|email|unique:users',
    'password' => 'required|string|confirmed'
    ]);
    $user = new User([
    'name' => $request->name,
    'email' => $request->email,
    'password' => bcrypt($request->password)
    ]);
    $user->save();
    $message['success'] = 'Kullanıcı Başarıyla Oluşturuldu.';
    return response()->json([
    'message' => $message
    ], 201);
}


public function login(Request $request){
    $request->validate([
    'email' => 'required|string|email',
    'password' => 'required|string'
    ]);
    $credentials = request(['email', 'password']);
    if(Auth::attempt($credentials)){
    $user = Auth::user();
    $message['token'] = $user->createToken('MyApp')->accessToken;
    $message['token_type'] = 'Bearer';
    $message['experies_at'] = Carbon::parse(Carbon::now()->addWeeks(1))->toDateTimeString();
    $message['success'] = 'Kullanıcı Girişi Başarılı';

        return response()->json(['message' => $message], $this->successStatus);
    }
    else{
        return response()->json(['error'=>'Unauthorised'], 401);
    }
    }
}
