<?php

use App\Http\Controllers\ArmsystemUserController;

use App\Http\Controllers\ComplaintController;
use App\Models\Complaint;
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

// Route::get('/armsystemUser/{id}', [ArmsystemUserController::class, 'getComplaintWithAssignee']);
// route for angular http://127.0.0.1:8000/api/armsystemUser/user

    // Users Route
    Route::post('/armsystemUser/user', [ArmsystemUserController::class, 'userRegister']);
    Route::post('/armsystemUser/login', [ArmsystemUserController::class, 'userLogin']);
    Route::get('/armsystemUser/handymans', [ArmsystemUserController::class, 'getHandyMan']);
    Route::put('/armsystemUser/resetPass/{armsystemUser}', [ArmsystemUserController::class, 'updatePassword']);
    Route::get('/armsystemUser/handymans/pendings', [ComplaintController::class, 'getAssignees']);




    // Complaints Routes

    Route::post('/Complaint/userComplaint', [ComplaintController::class, 'create']);

    Route::get('/Complaint/complaintsHistory/{id}', [ComplaintController::class, 'getComplaintsByUser']);

    Route::put('/Complaint/updateStatus',[ComplaintController::class, 'updateStatus']);
    Route::put('/Complaint/updateStatusComplete',[ComplaintController::class, 'updateStatusComplete']);
    Route::get('/Complaint/getApproved', [ComplaintController::class, 'getApproved']);
    Route::get('/Complaint/getAllComplaints', [ComplaintController::class, 'allComplaints']);
    Route::get('/Complaint/{handyman}', [ComplaintController::class ,'getComplaintsByHandyman']);