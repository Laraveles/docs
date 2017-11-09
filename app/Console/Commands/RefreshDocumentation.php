<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RefreshDocumentation extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'docs:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $versions = ['5.5'];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $path = storage_path('app/temp');
        $docs = storage_path('app/docs');

        foreach ($this->versions as $version) {
            exec("rm -rf {$path}");
            exec("git clone https://github.com/laraveles/laravel-docs --branch 5.5 {$path}");
            // Remove any previous existing content for the current version.
            exec("rm -rf {$docs}/{$version}");
            // Move the new version content to the docs folder.
            rename("{$path}/es", storage_path("app/docs/{$version}"));
        }

        exec("rm -rf {$path}");
    }
}
