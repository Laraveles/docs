<?php

namespace App\Services;

use App\CustomParser;
use Illuminate\Filesystem\Filesystem;

class Docs
{
    /**
     * Version to work for.
     *
     * @var string
     */
    protected $version;

    /**
     * @var Filesystem
     */
    protected $file;

    /**
     * Docs constructor.
     *
     * @param Filesystem $file
     * @param CustomParser   $markdown
     */
    public function __construct(Filesystem $file)
    {
        $this->file = $file;
    }

    /**
     * Get the index of sessions.
     *
     * @return string
     */
    public function index()
    {
        return $this->section('documentation');
    }

    /**
     * Provides a single section parsed to html.
     *
     * @param $section
     * @return string
     */
    public function section($section)
    {
        $content = $this->versionLinks(
            $this->file->get($this->sectionPath($section))
        );

        $parser = app()->make(CustomParser::class);

        return $parser->text($content);
    }

    /**
     * Check if a section exists on the current version.
     *
     * @param $section
     * @return bool
     */
    public function exists($section)
    {
        return $this->file->exists($this->sectionPath($section));
    }

    /**
     * Replace the version tag for any link found.
     *
     * @param $content
     * @return mixed
     */
    protected function versionLinks($content)
    {
        return str_replace('{{version}}', $this->version, $content);
    }

    /**
     * Gives the full path for a section.
     *
     * @param $section
     * @return string
     */
    protected function sectionPath($section)
    {
        return storage_path("app/docs/{$this->version}/es/{$section}.md");
    }

    /**
     * Setting the version to work with.
     *
     * @param string $version
     * @return Docs
     */
    public function version($version)
    {
        $this->version = $version;

        return $this;
    }

    /**
     * Get the versions available for a given section.
     *
     * @param $section
     * @return array
     */
    public function versionsOf($section)
    {
        $versions = array_filter($this->versions(), function ($version) use ($section) {
            return app()->make(self::class)
                        ->version($version)
                        ->exists($section);
        });

        // We will filter every version available and leave only those versions
        // that the given section is found in. Then we will combine the array
        // versions with itself to have the same values in keys and values.
        return array_combine($versions, $versions);
    }

    /**
     * Provide the highest version number.
     *
     * @return mixed
     */
    public function lastVersion()
    {
        return max($this->versions());
    }

    /**
     * Give all versions available.
     *
     * @return array
     */
    public function versions()
    {
        return array_map(
            'basename', $this->file->directories(base_path('resources/docs'))
        );
    }
}