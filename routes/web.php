<?php


$router->get('/', function () {
    return redirect()->route('docs');
});

$router->get('/docs', 'DocsController@index')->name('docs');
$router->get('/docs/{version}/{section?}', 'DocsController@show')->name('docs.show');