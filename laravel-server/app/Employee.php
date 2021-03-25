<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['fullName','email','mobile','city',
'gender','departmentId','hireDate','isPermanent'];
}
