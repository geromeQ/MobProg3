<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    protected $model;

    public function __construct(){
        $this->model = new User();
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);
        try{

            if(!Auth::attempt($credentials)){
                return response(['message' => "Account is not registered"], 401);
            }

            $token = auth()->user()->createToken($request->email . Str::random(8))->plainTextToken;

            return response(['token' => $token, 'message' => 'Successfully logged in'], 200);

        }catch(\Exception $e){
            return response(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:4'
        ]);

        try{
            $request['role'] = '1';
            $user = $this->model->create($request->all());
        if (!$user) {
        return response(['message' => "Data not inserted"], 200);
            }

            return response(['message' => "Successfully created"], 201);
        }catch(\Exception $e){
            return response(['message' => $e->getMessage()], 400);
        }
    }

    
}