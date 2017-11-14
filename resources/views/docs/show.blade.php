{{-- docs.docs --}}

@extends ('layout')

@section ('content')
    <div id="main" class="fix-sidebar">

        <div class="sidebar">
            <div class="sidebar-inner">
                <div class="sponsors mb-3">
                    <div class="text-muted small mb-1">Patrocinadores</div>
                    <a class="mb-2 d-block" href="https://sys4net.com/?ref=F8397167&utm_source=laraveles&utm_medium=docs&utm_content=sponsorship" target="_blank">
                        <img src="https://laraveles.com/wp-content/themes/sage/dist/images/hosting-sys4net.svg" style="width: 100px"
                             alt="Logotipo de SYS4NET"> </a>
                    <a class="d-block mb-2" href="https://moss.sh/es/?utm_source=laraveles&utm_medium=docs&utm_content=sponsorship" target="_blank">
                        <img src="https://laraveles.com/wp-content/themes/sage/dist/images/moss.png" style="width: 100px"
                             alt="Logotipo de MOSS"></a>

                    <a href="#" class="btn btn-sm btn-outline-danger">Patrocinar</a>
                </div>

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
            <div class="claim rounded mb-3">
                <h4 class="text-danger font-weight-bold">¡Colabora!</h4>
                <p class="small mb-1">En Laraveles estamos trabajando duro traduciendo la documentación completa de Laravel. No es una tarea
                    sencilla y es un camino largo. Buscamos colaboradores comprometidos para finalizar el proceso y ayudar a mantenerlo.</p>
                <button type="button" class="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
                    ¡Sí, quiero colaborar!
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body" style="font-size: 15px;">
                                <p>Antes de nada, por favor ten en cuenta los siguientes puntos:</p>
                                <h4 class="font-weight-bold">1. Seriedad y compromiso</h4>
                                <p>Nos lleva mucho tiempo explicar el proceso de traducción, normas a seguir, etcétera. Es por eso que
                                    buscamos gente comprometida y seria para no perder el tiempo. Si no eres más que un curioso, abstente de
                                    contactar, así ayudarás al proyecto también :)</p>
                                <h4 class="font-weight-bold">2. Se reconocerá tu aportación</h4>
                                <p>Tu perfil pasará a formar parte de una sección exclusiva con los usuarios que han aportado y colaborado
                                    con este proyecto.</p>
                                <h4 class="font-weight-bold">3. Disponibilidad flexible</h4>
                                <p>El proyecto es completamente flexible. Los usuarios realizan las aportaciones que pueden/quieren cuando
                                    pueden/quieren.</p>
                                <h3 class="font-weight-bold">Lo tengo claro, ¡quiero colarborar!</h3>
                                <p>¡Estupendo! Desde nuestro Slack, dirígete a <span class="text-muted">IsraelOrtuno</span>, <span
                                            class="text-muted">Sojeda</span>, <span class="text-muted">Moesis</span> o <span
                                            class="text-muted">Infogon</span>. Cualquiera de ellos se hará cargo de tu petición y te
                                    explicará como proceder.</p>
                                <p>Si todavía no estás en el Slack, recuerda que puedes pedir tu invitación <a target="_blank"
                                                                                                               href="http://slack.laraveles.com/">aquí</a>.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-danger btn-sm">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ad">
                <div class="small text-muted">Ayuda a mantener Laraveles</div>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- Documentacion - Flotante -->
                <ins class="adsbygoogle"
                     style="display:inline-block;width:180px;height:150px"
                     data-ad-client="ca-pub-9354128423670021"
                     data-ad-slot="1657933006"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <article>
                {!! $content !!}
            </article>
        </div>
    </div>
    {{--<div class="row">--}}
    {{--<div class="offset-md-1 col-md-3">--}}

    {{--</div>--}}
    {{--<div class="col-md-7 docs-wrapper">--}}

    {{--</div>--}}
@endsection