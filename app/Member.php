<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    public function courses()
    {
        return $this->belongsToMany('App\Course','buys');
    }
}
