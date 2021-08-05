<?php

use App\Http\Controllers\ArmsystemUserController;

use App\Http\Controllers\ComplaintController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/users', [UserController::class, 'index']);

Route::post('/armsystemUser/user', [ArmsystemUserController::class, 'userRegister']);
Route::post('/armsystemUser/login', [ArmsystemUserController::class, 'userLogin']);
Route::post('/Complaint/userComplaint', [ComplaintController::class, 'create']);
Route::get('/armsystemUser/handymans', [ArmsystemUserController::class, 'getHandyMan']);
Route::get('/Complaint/complaintsHistory/{id}', [ComplaintController::class, 'getComplaintsByUser']);
Route::put('/armsystemUser/resetPass/{armsystemUser}', [ArmsystemUserController::class, 'updatePassword']);
Route::get('/armsystemUser/handymans/pendings', [ComplaintController::class, 'getAssignees']);
// route for angular http://127.0.0.1:8000/api/armsystemUser/user
