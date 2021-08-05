<?php

namespace App\Http\Controllers;

use App\Models\armsystemUser;
use App\Models\Complaint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class ArmsystemUserController extends Controller
{
    private $apiToken;
    public function __construct()
    {
        $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function userRegister(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'userType' => 'required',
            'roomNumber' => 'required',
            'phoneNumber' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()]);
        }
        $postArray = $request->all();

        $postArray['password'] = bcrypt($postArray['password']);
        $postArray['usertype'] = '';
        $user = armsystemUser::create($postArray);

        $success['token'] = $this->apiToken;
        $success['name'] =  $user->name;
        return response()->json([
            'status' => 'success',
            'data' => $success,
        ]);
    }

    public function userLogin(Request $request)
    {

        $data = armsystemUser::where('email', $request->email)->first();

        if (!$data || !Hash::check($request->password, $data->password)) {
            return response(
                ["Message" => "Login failed"],
                400
            );
        }
        //   $token = $data->createToken('dsds')->plainTextToken;

        $response = [
            'message' => "Login Successfully!",
            'logincredential' => $data,
            //   'token' => $token

        ];

        return response($response, 200);
    }

    public function logout(Request $request)
    {
        $response = [];

        try {
            $request->user()->currentAccessToken()->delete();

            $response['message'] = 'Logout successfully!';
            $response['code'] = 200;
        } catch (\Exception $e) {
            $response['message'] = 'Logout failed!';
            $response['code'] = 400;
        }

        return response($response, $response['code']);
    }


    public function getHandyMan()
    {
        $data = armsystemUser::where('userType', 'handyman')->get();
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\armsystemUser  $armsystemUser
     * @return \Illuminate\Http\Response
     */
    public function show(armsystemUser $armsystemUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\armsystemUser  $armsystemUser
     * @return \Illuminate\Http\Response
     */
    public function edit(armsystemUser $armsystemUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\armsystemUser  $armsystemUser
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(Request $request, armsystemUser $armsystemUser)
    {
    
        if (!Hash::check($request->old_pass, $armsystemUser->password )) {
            return response()->json([
                'errors' => 'Old password not match!'
            ], 400);
        }
        return  $armsystemUser->update([
            'password' => Hash::make($request->new_pass),
            'phoneNumber' => $request->phone
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\armsystemUser  $armsystemUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(armsystemUser $armsystemUser)
    {
        //
    }
}
