<?php

namespace App\Http\Controllers;

use App\Services\Docs;
use Illuminate\Support\Facades\Cache;

class DocsController extends Controller
{
    /**
     * The Docs service.
     *
     * @var Docs
     */
    protected $docs;

    /**
     * DocsController constructor.
     *
     * @param Docs $docs
     */
    public function __construct(Docs $docs)
    {
        $this->docs = $docs;
    }

    /**
     * Redirect to the current version.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function index()
    {
        return redirect()->route('docs.show', $this->docs->lastVersion());
    }

    /**
     * Display the specified section.
     *
     * @param        $version
     * @param string $section
     * @return \Illuminate\Http\Response
     */
    public function show($version, $section = 'installation')
    {
        $this->docs->version($version);

        $status = Cache::get('translation-status');
        $progress = round(array_sum(array_except($status, 'documentation')) / (count($status) - 1));

        if (! $this->docs->exists($section)) {
            return redirect()->route('docs.show', [$version]);
        }

        return view('docs.show', [
            'index'        => $this->docs->index(),
            'content'      => $this->docs->section($section),
            'status'       => $status[$section] ?? 0,
            'progress'     => $progress,
            'fileVersions' => $this->docs->versionsOf($section)
        ]);
    }

}