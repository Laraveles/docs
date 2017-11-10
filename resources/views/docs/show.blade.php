{{-- docs.docs --}}

@extends ('layout')

@section ('content')

    <div id="main" class="fix-sidebar">

        <div class="sidebar">
            <div class="sidebar-inner">
                <div class="form-group">
                    <label for="">Versión</label>
                    {!! Form::select('version', $fileVersions, null, ['class' => 'form-control form-control-sm']) !!}
                </div>

                <div class="docs-index">
                    {!! $index !!}
                </div>
            </div>
        </div>

        <div class="content docs-wrapper">
            <article>
                {!! $content !!}
            </article>

            <div id="ad">
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- Documentación – Index -->
                <ins class="adsbygoogle"
                     style="display:inline-block;width:336px;height:280px"
                     data-ad-client="ca-pub-9354128423670021"
                     data-ad-slot="7084923036"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
    </div>
    {{--<div class="row">--}}
    {{--<div class="offset-md-1 col-md-3">--}}

    {{--</div>--}}
    {{--<div class="col-md-7 docs-wrapper">--}}

    {{--</div>--}}
@endsection