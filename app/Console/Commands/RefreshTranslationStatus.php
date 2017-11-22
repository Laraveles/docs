<?php

namespace App\Console\Commands;

use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class RefreshTranslationStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'docs:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $status = $this->getLanguageStatus();
        $progress = [];

        foreach ($status->files as $file) {
            $progress[str_replace('.md', '', $file->name)] = round(($file->words_approved * 100) / $file->words);
        }

        Cache::forever('translation-status', $progress);
    }

    protected function getLanguageStatus()
    {
        $client = new Client(['base_uri' => 'https://api.crowdin.com/api/project/laravel-documentation/language-status?key=' . env('CROWDIN_KEY')]);

        $response = $client->post('', [
            'form_params' => [
                'language' => 'es-ES',
                'json'     => true
            ]
        ]);

        $status = json_decode($response->getBody()->getContents());

        return collect($status->files)->first(function ($value) {
            return $value->node_type == 'branch'; // && $state->name = '5.5';
        });
    }
}
