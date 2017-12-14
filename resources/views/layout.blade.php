<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laraveles – Documentación de Laravel en español</title>

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Miriam+Libre:400,700|Source+Sans+Pro:200,400,700,600,400italic,700italic'
          rel='stylesheet' type='text/css'>

    <script>
        var progress = @json(Cache::get('translation-status'))
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    {{--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-42404242-1"></script>--}}

    <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
    <script>
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
    </script>

    <script>
        googletag.cmd.push(function() {
            googletag.defineSlot('/21673218621/doc-footer', [180, 150], 'div-gpt-ad-1513269504524-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();
        });
    </script>

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-42404242-1');
    </script>

</head>
<body class="@yield('body-class', 'docs') language-php">

<div id="header" class="text-center bg-danger">
    <div class="d-flex align-items-center">
        <a href="/" class="logo">
            <svg width="100%" height="100%" viewBox="0 0 3195 953" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                 style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <g transform="matrix(1,0,0,1,-354.309,-787.763)">
                <g id="Logo-1" transform="matrix(1,0,0,1,115.809,597.388)">
                    <g transform="matrix(0.961414,0,0,0.712204,-76.1521,-399.399)">
                        <path d="M3625.11,946.736C3625.11,899.856 3596.92,861.795 3562.19,861.795L415.167,861.795C380.439,861.795 352.244,899.856 352.244,946.736L352.244,2046.93C352.244,2093.81 380.439,2131.88 415.167,2131.88L3562.19,2131.88C3596.92,2131.88 3625.11,2093.81 3625.11,2046.93L3625.11,946.736Z"
                              style="fill:none;stroke:rgb(255,98,98);stroke-width:56.74px;"/>
                    </g>
                    <g transform="matrix(58.1068,0,0,58.1068,-59390.5,-78710.4)">
                        <text x="1028.94px" y="1370.21px"
                              style="font-family:'MiriamLibre-Regular', 'Miriam Libre';font-size:12px;fill:rgb(255,98,98);">L
                            <tspan x="1034.09px 1040.15px 1045.05px 1051.17px 1056.78px 1062.81px 1066.41px 1072.49px "
                                   y="1370.21px 1370.21px 1370.21px 1370.21px 1370.21px 1370.21px 1370.21px 1370.21px ">araveles
                            </tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>
        </a>

        <div class="ml-auto">
            <span class="small text-white mr-2">Traducción en curso</span>
            <button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#collaborate">¡Participa!</button>
        </div>
    </div>
</div>

<div class="wrapper">

    {{--<div class="claim rounded">--}}
    {{--<h4 class="font-weight-bold text-danger">Traducción en progreso</h4>--}}
    {{--hola--}}
    {{--</div>--}}

    @yield('content')
</div>

<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
