<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MosqueController extends Controller
{

    public function mosqueCreate( Request $request ) {

        $cid = $request->input('cid');
        $title = $request->input('title');
        $detail = $request->input('detail');
        $build_date = $request->input('build_date');
        $image = $request->input('image');
        $address = $request->input('address');
        $latlon = $request->input('latlon');

        try {

            $effective = DB::table('mosque')->insert([
                'cid' => $cid,
                'title' => $title,
                'detail' => $detail,
                'build_date' => $build_date,
                'image' => $image,
                'address' => $address,
                'status' => 0,
                'latlon' => $latlon
            ]);

            $obj["status"] = $effective;
            $obj["message"] = "Insert Success";

        } catch (\Throwable $th) {
            $obj["status"] = false;
            $obj["message"] = "Insert Fail!";
            $obj["error"] = $th;
        }

        return $obj;
    }


    public function mosqueList( Request $request ) {
        $cid = $request->input('cid');

        try {

            $mosqueArr = DB::table('mosque')
            ->where('cid', '=', $cid)
            ->get();

            $obj["status"] = true;
            $obj["message"] = "Select Success!";
            $obj["result"] = $mosqueArr;

        } catch (\Throwable $th) {
            $obj["status"] = false;
            $obj["message"] = "Select Fail!";
            $obj["error"] = $th;
        }

        return $obj;
    }


    public function mosqueDelete( Request $request ) {
        $mid = $request->input('mid');

        try {

            $mosqueArr = DB::table('mosque')
            ->where('mid', '=', $mid)
            ->delete();

            $obj["status"] = true;
            $obj["message"] = "Delete Success!";
            $obj["result"] = $mosqueArr;

        } catch (\Throwable $th) {
            $obj["status"] = false;
            $obj["message"] = "Delete Fail!";
            $obj["error"] = $th;
        }

        return $obj;
    }


    public function mosqueListGuestuser(  ) {

        try {

            $mosqueArr = DB::table('mosque')
            ->offset(0)
            ->limit(8)
            ->orderBy('mid', 'desc')
            ->get();

            $obj["status"] = true;
            $obj["message"] = "Select Success!";
            $obj["result"] = $mosqueArr;

        } catch (\Throwable $th) {
            $obj["status"] = false;
            $obj["message"] = "Select Fail!";
            $obj["error"] = $th;
        }

        return $obj;
    }



}
