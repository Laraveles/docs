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
        foreach ($this->versions as $version) {
            exec('cd ' . storage_path("app/docs/{$version}") . '; git pull');
        }
    }
}
