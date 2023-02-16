<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;


class MakeDb extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:sqlite';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an sqlite database file';

    /**
     * Execute the console command.
     *
     * @return void
     */


    public function handle(): void
    {
        if ($this->confirm('Do you wish to create a new sqlite database?')) {
            $db_file = fopen(config('database.connections.sqlite.database'), 'wb') or die("Unable to create database file!");
            fclose($db_file);
            $this->info('Successfully created database file!');
        }
    }
}
