define(['angular'], function(angular) { /*jshint quotmark: false*/ "use strict"; return angular.module("seed.templates",[]).run(function ($templateCache) {  

  $templateCache.put('seed/auth/_directives/login-info.html',
    "<div class=\"login-info ng-cloak\"><span><a href=\"\" toggle-shortcut><span>{{user.email}}</span> <i class=\"fa fa-angle-down\"></i></a></span></div>"
  );


  $templateCache.put('seed/auth/lock/forms/authLockForm.html',
    "<form class=neo-form><img ng-src={{vm.user.avatar}}><fieldset><h1 class=text-center>{{vm.user.getFullName()}} <small><i class=\"fa fa-lock text-muted\"></i> &nbsp;Locked</small></h1></fieldset><fieldset><div class=input-icon-right><i class=\"icon-append fa fa-lock\"></i> <input class=form-control type=password placeholder=\"{{'Password'|translate}}\"></div><p class=\"no-margin margin-top-5\">{{'Logged as someone else?'|translate}} <a ui-sref=auth.login>{{'Click here'|translate}}</a></p></fieldset><footer><button type=submit class=\"btn btn-primary\">{{'Unlock'|translate}}</button></footer></form>"
  );


  $templateCache.put('seed/auth/login/forms/login/authLoginForm.html',
    "<form class=neo-form ng-submit=vm.login() novalidate><img ng-src={{vm.user.avatar}}><fieldset><h1 class=text-center>{{'Welcome!'|translate}} <small>{{'Please log in'|translate}}</small></h1></fieldset><fieldset><section class=form-group ng-show=vm.formError><p class=\"alert alert-danger\" ng-model=formError><button type=button class=close data-dismiss=alert>&times;</button> {{'Wrong e-mail or password.'|translate}}</p></section><section class=form-group><div class=input-icon-right><i class=\"icon-append fa fa-user\"></i> <input type=email class=form-control placeholder=\"{{'Email'|translate}}\" ng-model=vm.user.login></div></section><section class=form-group><div class=input-icon-right><i class=\"icon-append fa fa-lock\"></i> <input type=password class=form-control placeholder=\"{{'Password'|translate}}\" ng-model=vm.user.password></div><div class=note><a ui-sref=auth.forgotPassword>{{'Forgot password?'|translate}}</a></div></section></fieldset><footer><button type=submit class=\"btn btn-primary\">{{'Log in'|translate}}</button><div class=btn-group ng-show=vm.predefinedLogins.length><button class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown>{{'Login as'|translate}} <span class=caret></span></button><ul class=dropdown-menu><li ng-repeat=\"user in vm.predefinedLogins\"><a href ng-click=vm.loginAs(user)>{{ user.login }}</a></li></ul></div></footer></form>"
  );


  $templateCache.put('seed/auth/login/forms/profileSelect/authProfileSelectForm.html',
    "<form class=neo-form ng-submit=vm.login() novalidate><img ng-src={{vm.user.avatar}}><fieldset><h1 class=text-center>{{'Select profile'|translate}} <small>{{'to continue'|translate}}</small></h1></fieldset><fieldset><div class=\"panel panel-default\"><div class=list-group><button type=button ng-repeat=\"customer in vm.user.customers\" ng-class=\"{'list-group-item-info' : vm.isCustomerActive(customer)}\" ng-click=vm.setCustomerActive(customer) class=list-group-item>{{customer.customerName}} <i class=\"pull-right fa\" ng-class=\"{ 'fa-check-square': vm.isCustomerActive(customer), 'fa-square-o': !vm.isCustomerActive(customer) }\"></i></button></div></div></fieldset><footer><button type=submit class=\"btn btn-primary\">{{'Select'|translate}}</button><div class=btn-group><a class=\"btn btn-default\" ui-sref=auth.login>{{'Back'|translate}}</a></div></footer></form>"
  );


  $templateCache.put('seed/auth/views/view.html',
    "<div class=row><div class=\"col-xs-12 col-sm-12 col-md-4 col-md-offset-4 lockscreen animated flipInY\"><div class=\"well well-light no-padding\" ui-view=auth></div></div></div>"
  );


  $templateCache.put('seed/components/activities/activities.html',
    "<div class=ajax-dropdown ng-controller=\"ActivitiesCtrl as activitiesDropdown\"><div class=\"btn-group btn-group-justified\" data-toggle=buttons><label class=\"btn btn-default\" ng-class=\"{active : isActive(type.name)}\" ng-repeat=\"(key, type) in activities.types\" ng-click=setTab(type.name)><input type=radio name=activity> {{type.title}} ({{type.length}})</label></div><div class=\"ajax-notifications custom-scroll\" ng-switch=activeTab><div ng-include=\"'app-demo/components/activities/tabs/tab-msgs.html'\" ng-switch-when=msgs></div><div ng-include=\"'app-demo/components/activities/tabs/tab-notify.html'\" ng-switch-when=notify></div><div ng-include=\"'app-demo/components/activities/tabs/tab-tasks.html'\" ng-switch-when=tasks></div><div ng-include=\"'app-demo/components/activities/tabs/tab-default.html'\" ng-switch-when=default></div></div><span>Last updated on: {{activities.last_update}} <button type=button data-loading-text=\"<i class='fa fa-refresh fa-spin'></i> Loading...\" class=\"btn btn-xs btn-default pull-right\"><i class=\"fa fa-refresh\"></i></button></span></div>"
  );


  $templateCache.put('seed/components/activities/tabs/tab-default.html',
    "<div><div class=\"alert alert-transparent\"><h4>Click a button to show messages here</h4>This blank page message helps protect your privacy, or you can show the first message here automatically.</div><i class=\"fa fa-lock fa-4x fa-border\"></i></div>"
  );


  $templateCache.put('seed/components/activities/tabs/tab-msgs.html',
    "<ul class=notification-body><li ng-repeat=\"msg in currentActivityItems\"><span ng-class=\"{unread : msg.status == 'unread'}\"><a href=javascript:void(0); class=msg><img ng-src={{msg.image}} alt=\"\" class=\"air air-top-left margin-top-5\" width=40 height=\"40\"> <span class=from>{{msg.title}}</span> <time>{{imsgnfo.time}}</time> <span class=subject>{{msg.subject}}</span> <span class=msg-body>{{msg.message}}</span></a></span></li></ul>"
  );


  $templateCache.put('seed/components/activities/tabs/tab-notify.html',
    "<ul class=notification-body><li ng-repeat=\"not in currentActivityItems\"><span class=padding-10><em class=\"badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5\"><i class=\"fa {{not.icon}} fa-fw fa-2x\"></i></em> <span>{{not.message}}<br><span class=\"pull-right font-xs text-muted\"><i>{{not.time}}</i></span></span></span></li></ul>"
  );


  $templateCache.put('seed/components/activities/tabs/tab-tasks.html',
    "<ul class=notification-body><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><i class=\"fa fa-warning text-warning\"></i> <strong>PRIMARY:</strong> <i>Upgrade Infestructure</i> <span class=\"pull-right semi-bold text-muted\">85%</span></p><div class=\"progress progress-md progress-striped\"><div class=\"progress-bar bg-color-teal\" style=\"width: 85%\"></div></div><em class=\"note no-margin\">last updated on 12/12/2013</em></div></span></li><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><strong>URGENT:</strong> <i>Code foundation</i> <span class=\"pull-right semi-bold text-muted\">65%</span></p><div class=\"progress progress-sm\"><div class=\"progress-bar bg-color-teal\" style=\"width: 65%\"></div></div><em class=\"note no-margin\">last updated on 12/12/2013</em></div></span></li><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><strong>URGENT:</strong> <i>Project Plan</i> <span class=\"pull-right semi-bold text-muted\">25%</span></p><div class=\"progress progress-xs\"><div class=\"progress-bar bg-color-teal\" style=\"width: 25%\"></div></div><em class=\"note no-margin\">last updated on 12/12/2013</em></div></span></li><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><strong>CRITICAL:</strong> <i>Wireframes</i> <span class=\"pull-right semi-bold text-danger\">5%</span></p><div class=\"progress progress-xs\"><div class=\"progress-bar progress-bar-danger\" style=\"width: 5%\"></div></div><em class=\"note no-margin\">last updated on 12/12/2013</em></div></span></li><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><strong>NORMAL:</strong> <i>Compile hotfix</i> <span class=\"pull-right semi-bold text-muted\">99%</span></p><div class=\"progress progress-xs\"><div class=\"progress-bar progress-bar-success\" style=\"width: 99%\"></div></div><em class=\"note no-margin\">last updated on 12/12/2013</em></div></span></li><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><strong>MINOR:</strong> <i>Bug fix #213</i><span class=\"pull-right semi-bold text-muted\"><i class=\"fa fa-check text-success\"></i> Complete</span></p><div class=\"progress progress-micro\"><div class=\"progress-bar progress-bar-success\" style=\"width: 100%\"></div></div><em class=\"note no-margin\">last updated on 12/12/2013</em></div></span></li><li><span><div class=\"bar-holder no-padding\"><p class=margin-bottom-5><strong>MINOR:</strong> <i>Bug fix #134</i><span class=\"pull-right semi-bold text-muted\"><i class=\"fa fa-check text-success\"></i> Complete</span></p><div class=\"progress progress-micro\"><div class=\"progress-bar progress-bar-success\" style=\"width: 100%\"></div></div><em class=\"note no-margin display-inline\"><a href=javascript:void(0);>see notes</a></em></div></span></li></ul>"
  );


  $templateCache.put('seed/components/customer/neoCustomerSwitcher.html',
    "<div class=\"project-context hidden-xs dropdown\"><span class=label>{{'Profiles'|translate}}:</span><div class=dropdown dropdown><div class=\"project-selector dropdown-toggle\" dropdown-toggle><span ng-bind-html=vm.activeCustomer.customerName></span> <i class=\"fa fa-angle-down\"></i></div><ul class=dropdown-menu><li ng-repeat=\"customer in vm.customerCollection\"><a ng-click=vm.setActiveCustomer(customer)><i ng-show=\"customer.customerId === vm.activeCustomer.customerId\" class=\"fa fa-hand-o-right\"></i> {{customer.customerName}}</a></li></ul></div></div>"
  );


  $templateCache.put('seed/components/language/neoLanguageSwitcher.html',
    "<ul class=\"header-dropdown-list hidden-xs\"><li class=dropdown dropdown><a class=dropdown-toggle dropdown-toggle href-void><img class=\"flag flag-{{vm.activeLanguage.code}}\"> <span>{{vm.activeLanguage.name}}</span> <i class=\"fa fa-angle-down\"></i></a><ul class=\"dropdown-menu pull-right\"><li ng-class=\"{active: language === vm.activeLanguage}\" ng-repeat=\"language in vm.languageCollection\"><a ng-click=vm.setLanguageActive(language)><img class=\"flag flag-{{language.code}}\"> {{language.name}}</a></li></ul></li></ul>"
  );


  $templateCache.put('seed/components/tables/filters/date-filter.html',
    "<div class=\"icon-addon addon-sm\"><input type=date moment-datetime ng-model=params.filter()[name] class=\"form-control input-xs\"><label class=\"fa fa-calendar\"></label></div>"
  );


  $templateCache.put('seed/components/tables/filters/text-filter.html',
    "<div class=\"icon-addon addon-sm\"><input ng-model=params.filter()[name] class=\"form-control input-xs\"><label class=\"fa fa-search\"></label></div>"
  );


  $templateCache.put('seed/components/tables/partials/neo-footer.html',
    "<div class=dt-toolbar-footer><div class=\"col-sm-8 hidden-xs neo-table-info\" style=\"position: absolute; overflow: visible\">{{'Showing'|translate}} <span class=txt-color-darken>{{params.total() ? (params.page() - 1) * params.count() + 1 : 0}}</span> {{'to'|translate}} <span class=txt-color-darken>{{(params.page() * params.count()) &lt; params.total() ? params.page() * params.count() : params.total()}}</span> {{'of'|translate}} <span class=text-primary>{{params.total()}}</span> {{'entries paginated by'|translate}}<div class=\"btn-group btn-group-sm\" dropdown><button type=button class=\"btn btn-default dropdown-toggle\" dropdown-toggle>{{ params.count() }} <span class=caret></span></button><ul class=\"dropdown-menu dropup\" role=menu><li ng-repeat=\"count in params.settings().counts track by $index\"><a ng-click=params.count(count)>{{count}}</a></li></ul></div>{{'items per page'|translate}}</div><div class=\"col-xs-12 col-sm-4 neo-table-paginate\"><ul class=pagination><li ng-class=\"{'disabled': !page.active}\" ng-repeat=\"page in pages\" ng-switch=page.type><a ng-switch-when=prev ng-click=params.page(page.number) href-void>{{'Previous'|translate}}</a> <a ng-switch-when=first ng-click=params.page(page.number) href-void><span ng-bind=page.number></span></a> <a ng-switch-when=page ng-click=params.page(page.number) href-void><span ng-bind=page.number></span></a> <a ng-switch-when=more ng-click=params.page(page.number) href-void>...</a> <a ng-switch-when=last ng-click=params.page(page.number) href-void><span ng-bind=page.number></span></a> <a ng-switch-when=next ng-click=params.page(page.number) href-void>{{'Next'|translate}}</a></li></ul></div></div>"
  );


  $templateCache.put('seed/components/tables/partials/neo-header.html',
    "<tr><th title={{$column.headerTitle(this)}} ng-repeat=\"$column in $columns\" ng-click=\"sortBy($column, $event)\" ng-show=$column.show(this) ng-init=\"template=$column.headerTemplateURL(this)\" class=\"no-selection {{$column.class(this)}}\" ng-class=\"{'sorting': $column.sortable(this),'sorting-asc': params.sorting()[$column.sortable(this)]=='asc','sorting-desc': params.sorting()[$column.sortable(this)]=='desc'}\"><div ng-if=!template ng-show=!template ng-bind=$column.title(this) class=neo-table-header></div><div ng-if=template ng-show=template ng-include=template></div></th></tr><tr ng-show=show_filter><th ng-repeat=\"$column in $columns\" ng-show=$column.show(this) data-title-text=\"{{$column.titleAlt(this) || $column.title(this)}}\" class=\"neo-table-filter hasinput {{$column.class(this)}}\"><div ng-repeat=\"(name, filter) in $column.filter(this)\"><div ng-if=\"filter.indexOf('/') !== -1\" ng-include=filter></div><div ng-if=\"filter.indexOf('/') === -1\" ng-include=\"'ng-table/filters/' + filter + '.html'\"></div></div></th></tr>"
  );


  $templateCache.put('seed/layout/layout.html',
    "<div ng-include=\"'seed/layout/partials/header.html'\"></div><div ng-include=\"'seed/layout/partials/navigation.html'\"></div><div id=main role=main><div id=ribbon><span class=ribbon-button-alignment><span id=refresh class=\"btn btn-ribbon\" reset-widgets tooltip-placement=bottom tooltip-html-unsafe=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"><i class=\"fa fa-refresh\"></i></span></span><state-breadcrumbs></state-breadcrumbs></div><div data-ui-view=content data-autoscroll=false></div></div>"
  );


  $templateCache.put('seed/layout/partials/footer.html',
    "<div class=page-footer><div class=row><div class=\"col-xs-12 col-sm-6\"><span class=txt-color-white>SmartAdmin WebApp © 2013-2014</span></div><div class=\"col-xs-6 col-sm-6 text-right hidden-xs\"><div class=\"txt-color-white inline-block\"><i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i> <strong>52 mins ago &nbsp;</strong></i><div class=\"btn-group dropup\"><button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=dropdown><i class=\"fa fa-link\"></i> <span class=caret></span></button><ul class=\"dropdown-menu pull-right text-left\"><li><div class=padding-5><p class=\"txt-color-darken font-sm no-margin\">Download Progress</p><div class=\"progress progress-micro no-margin\"><div class=\"progress-bar progress-bar-success\" style=\"width: 50%\"></div></div></div></li><li class=divider></li><li><div class=padding-5><p class=\"txt-color-darken font-sm no-margin\">Server Load</p><div class=\"progress progress-micro no-margin\"><div class=\"progress-bar progress-bar-success\" style=\"width: 20%\"></div></div></div></li><li class=divider></li><li><div class=padding-5><p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=text-danger>*critical*</span></p><div class=\"progress progress-micro no-margin\"><div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div></div></div></li><li class=divider></li><li><div class=padding-5><button class=\"btn btn-block btn-default\">refresh</button></div></li></ul></div></div></div></div></div>"
  );


  $templateCache.put('seed/layout/partials/header.html',
    "<header id=header><div id=logo-group><span id=logo><img src=assets/seed/img/container-logo.png alt=SmartAdmin></span></div><neo-customer-switcher></neo-customer-switcher><div class=pull-right><div id=hide-menu class=\"btn-header pull-right\"><span><a toggle-menu title=\"Collapse Menu\"><i class=\"fa fa-bars\"></i></a></span></div><div class=\"btn-header transparent pull-right\"><span><a full-screen title=\"Full Screen\"><i class=\"fa fa-arrows-alt\"></i></a></span></div><div id=speech-btn class=\"btn-header transparent pull-right hidden-sm hidden-xs\"><div><a title=\"Voice Command\" id=voice-command-btn speech-recognition><i class=\"fa fa-microphone\"></i></a><div class=\"popover bottom\"><div class=arrow></div><div class=popover-content><h4 class=vc-title>Voice command activated<br><small>Please speak clearly into the mic</small></h4><h4 class=\"vc-title-error text-center\"><i class=\"fa fa-microphone-slash\"></i> Voice command failed<br><small class=txt-color-red>Must <strong>\"Allow\"</strong> Microphone</small><br><small class=txt-color-red>Must have <strong>Internet Connection</strong></small></h4><a href-void class=\"btn btn-success\" id=speech-help-btn>See Commands</a> <a href-void class=\"btn bg-color-purple txt-color-white\" onclick=\"$('#speech-btn .popover').fadeOut(50)\">Close Popup</a></div></div></div></div><div id=logout class=\"btn-header transparent pull-right\"><span><a ui-sref=auth.logout title=\"{{'Sign Out'|translate}}\"><i class=\"fa fa-sign-out\"></i></a></span></div><neo-language-switcher></neo-language-switcher></div></header>"
  );


  $templateCache.put('seed/layout/partials/navigation.html',
    "<aside id=left-panel><div login-info></div><nav><neo-navigation></neo-navigation></nav></aside>"
  );


  $templateCache.put('seed/layout/partials/voice-commands.html',
    "<div class=modal-body><h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1><hr class=simple><h5>Instruction</h5>Click <span class=text-success>\"Allow\"</span> to access your microphone and activate Voice Command. You will notice a <span class=text-primary><strong>BLUE</strong> Flash</span> on the microphone icon indicating activation. The icon will appear <span class=text-danger><strong>RED</strong></span> <span class=\"label label-danger\"><i class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=text-danger>\"Deny\"</span> access or don't have any microphone installed.<br><br>As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not being used). In which case Voice Command will prompt you again to <span class=text-success>\"Allow\"</span> or <span class=text-danger>\"Deny\"</span> access to your microphone.<br><br>If you host your page over <strong>http<span class=text-success>s</span></strong> (secure socket layer) protocol you can wave this security measure and have an unintrupted Voice Command.<br><br><h5>Commands</h5><ul><li><strong>'show'</strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show inbox\"</strong> or <strong>\"show calendar\"</strong></li><li><strong>'mute'</strong> - mutes all sound effects for the theme.</li><li><strong>'sound on'</strong> - unmutes all sound effects for the theme.</li><li><span class=text-danger><strong>'stop'</strong></span> - deactivates voice command.</li><li><span class=text-primary><strong>'help'</strong></span> - brings up the command list</li><li><span class=text-danger><strong>'got it'</strong></span> - closes help modal</li><li><strong>'hide navigation'</strong> - toggle navigation collapse</li><li><strong>'show navigation'</strong> - toggle navigation to open (can be used again to close)</li><li><strong>'scroll up'</strong> - scrolls to the top of the page</li><li><strong>'scroll down'</strong> - scrollts to the bottom of the page</li><li><strong>'go back'</strong> - goes back in history (history -1 click)</li><li><strong>'logout'</strong> - logs you out</li></ul><br><h5>Adding your own commands</h5>Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored inside <strong>app.config.js</strong> file under the <code>var commands = {...}</code>.<hr class=simple><div class=text-right><button type=button class=\"btn btn-success btn-lg\" data-dismiss=modal>Got it!</button></div></div>"
  );
 });});