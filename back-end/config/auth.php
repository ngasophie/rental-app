<?php

return [

    'defaults' => [
        'guard' => env('AUTH_GUARD', 'api'),
        'passwords' => 'users',
    ],

    'guards' => [
        'api' => [
          'driver' => 'jwt',
          'provider' => 'users'
        ],
      ],
//     'guards' => [
//         'admins' => [
//             'driver' => 'jwt',
//             'provider' => 'admins',
//         ],
//         'subadmins' => [
//             'driver' => 'jwt',
//             'provider' => 'subadmins',
//         ],
//         'users' => [
//             'driver' => 'jwt',
//             'provider' => 'users',
//         ],
//  ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model'  =>  App\User::class,
        ]
    ],
];