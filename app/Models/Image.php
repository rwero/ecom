<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
   protected $fillable = [
        'product_id',
        'path',
        'is_primary',
   ];
   public function product(){
	return $this->belongsTo(\App\Models\Product::class);
   }
}
