<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

class ComplaintController extends Controller
{
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
    public function create(Request $request)
    {

        $complaint = new Complaint;
        $complaint->user_id = $request->user_id;
        $complaint->problem = $request->problem;
        $complaint->time = $request->time;
        $complaint->handyman = $request->handyman;
        $complaint->room_number = $request->room_number;
        $complaint->description = $request->description;
        $complaint->status = $request->status;
        $complaint->save();

        // $complaint = Validator::make($request->all(), [
        //     'user_id' => 'required',
        //     'problem' => 'required',
        //     'time' => 'required',
        //     'handyman' => 'required',
        //     'room_number' => 'required',
        //     'status' => 'required',
        // ]);
        // return Complaint::create($complaint->validated());
        // return $user;
    }

    public function getComplaintsByUser($id)
    {
        try {
            $data = Complaint::where('user_id', $id)->get();
            return $data;
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function getAssignees()
    {
       return Complaint::where('status', 'Pending')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function show(Complaint $complaint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function edit(Complaint $complaint)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Complaint $complaint)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
