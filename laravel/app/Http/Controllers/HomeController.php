<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AdminUser;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;
use Log;

// 書き出し用ライブラリ
use Symfony\Component\HttpFoundation\StreamedResponse;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
}
