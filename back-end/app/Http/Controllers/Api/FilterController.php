<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use Validator;
class FilterController extends Controller
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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'city' => 'string',
            'district' => 'string',
            'price' => 'numeric',
            'area' => 'numeric',
            'type' => 'string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $city=$request['city'];
        $district=$request['district'];
        $price = $request['price'];
        $area= $request['area'];
        $type=$request['type'];
        $post = Post::with('type','address','facilities','react','images','reviews','user')
        -> whereHas('address',function($query) use($city){
            if($city!= '-1'){
                $query -> where('city','=', $city);
            }
        })
        -> whereHas('address',function($query) use($district){
            if($district != '-1'){
                $query -> where('district','=', $district);
            }
        })
        -> whereHas('facilities',function($query) use($price){
            if($price!= '' && $price ==0){
                $query -> where('price','<=', 2000000);
            }
            else if($price!= '' && $price ==1){
                $query -> where('price','>', 2000000) ->where('price','<=',3000000);
            }
            else if($price!= '' && $price ==2){
                $query -> where('price','>', 3000000)->where('price','<=',5000000);
            }
            else  if($price!= '' && $price ==3){
                $query -> where('price','>', 5000000);
            }
        })
        -> whereHas('type',function($query) use($type){
            if($type!= '-1'){
                $query -> where('type','=', $type);
            }
        })
        -> whereHas('facilities',function($query) use($area){
            if($area == 0){
                $query -> where('area','<=', 30);
            }
            else if($area == 1){
                $query -> where('area','>', 30) -> where('area','<=',50);
            }
            else if( $area == 2){
                $query -> where('area','>', 50);
            }
        })
        ->where('status','>',0)
        ->orderBy('created_at','desc')
        ->paginate(9);
        return $post;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
