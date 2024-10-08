<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use HasFactory;
	protected $guarded = [];

	public function order(){
		return $this->belongsTo(\App\Models\Order::class,'order_id',"id");
	}
	public function product(){
		return $this->belongsTo(\App\Models\Product::class);
		
	}
}
