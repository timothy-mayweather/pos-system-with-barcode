<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Insert some stuff
        DB::table('users')->insert(
            array(
                'id' => 1,
                'firstname' => 'Admin',
                'lastname' => 'Stocky',
                'username' => 'Admin Stocky',
                'email' => 'admin@stocky.com',
                'password' => '$2y$10$v9ta/nVByBFw0yb0pDIKIOJhNbB52sCZu8nGJRrnH9EpySjbMIi66',
                'avatar' => 'no_avatar.png',
                'phone' => '0123456789',
                'role_id' => 1,
                'statut' => 1,
                'is_all_warehouses' => 1,
            )
        );
    }
}
