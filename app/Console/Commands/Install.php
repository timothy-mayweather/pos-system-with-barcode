<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ensure:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ensure file is installed';

    /**
     * Execute the console command.
     *
     * @return void
     */


    public function handle(): void
    {
      Storage::disk('public')->put('installed', 'Contents');
      $this->info('Successfully installed the app!');
    }
}
