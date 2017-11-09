{{-- docs.docs --}}

@extends ('layout')

@section ('content')

    <div class="row">
        <div class="offset-md-1 col-md-3">
            <div class="form-group">
                <label for="">Versión</label>
                {!! Form::select('version', $fileVersions, null, ['class' => 'form-control form-control-sm']) !!}
            </div>

            <div class="docs-index">
                {!! $index !!}
            </div>
        </div>
        <div class="col-md-7 docs-wrapper">
            <article>
                {!! $content !!}
            </article>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- Documentación -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-9354128423670021"
                 data-ad-slot="6920437355"
                 data-ad-format="auto"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
    </div>
@endsection