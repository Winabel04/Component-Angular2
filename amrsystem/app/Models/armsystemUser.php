<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class armsystemUser extends Model
{

    protected $fillable = [
        'name',
        'email',
        'password',
        'userType',
        'roomNumber',
        'phoneNumber'

    ];
    use HasFactory;


    public function complaint(){
        return $this->hasMany(User::class , 'user_id', 'id');

    }
}
