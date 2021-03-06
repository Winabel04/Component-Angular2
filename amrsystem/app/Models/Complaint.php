<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'problem',
        'time',
        'handyman',
        'room_number',
        'description',
        'status'
    ];

    public function user(){
        return $this->belongsTo(armsystemUser::class , 'user_id', 'id');
    }
  
}

