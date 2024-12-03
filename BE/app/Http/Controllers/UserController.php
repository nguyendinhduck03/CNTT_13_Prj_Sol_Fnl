<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $user = $request->only('email', 'password',);

        $data = User::where('email', $user['email'])->first(); 
        
        $reference_id = $data['reference_id'];

        if (Auth::attempt($user)) {
            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'reference_id' => $reference_id,
                'user' => $data,
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid credentials'
        ], 401);
    }
    public function register(Request $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);

        if ($user) {
            Auth::login($user);

            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'reference_id' => $request->reference_id,
                'user' => $user,
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid credentials'
        ], 401);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'success' => true,
            'message' => "Đăng xuất thành công",
        ]);
    }
}
