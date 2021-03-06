define('seed/__misc/_templates/module',['angular'], function(angular) { /*jshint quotmark: false*/ "use strict"; return angular.module("seed.templateCache",[]).run(function ($templateCache, $log) {$log = $log.getInstance('seed.templateCache.module');  

  $templateCache.put('seed/auth/login/forms/login/authLoginForm.html',
    "<form class=neo-form ng-submit=vm.login() novalidate><img ng-src={{vm.user.avatar}}><fieldset><h1 class=text-center>{{'Welcome!'|translate}} <small>{{'Please log in'|translate}}</small></h1></fieldset><fieldset><section class=form-group ng-show=vm.formError><p class=\"alert alert-danger\" ng-model=formError><button type=button class=close data-dismiss=alert>&times;</button> {{'Wrong e-mail or password.'|translate}}</p></section><section class=form-group><div class=input-icon-right><i class=\"icon-append fa fa-user\"></i> <input type=email class=form-control placeholder=\"{{'Email'|translate}}\" ng-model=vm.user.login></div></section><section class=form-group><div class=input-icon-right><i class=\"icon-append fa fa-lock\"></i> <input type=password class=form-control placeholder=\"{{'Password'|translate}}\" ng-model=vm.user.password></div><div class=note><a ui-sref=auth.passwordReset>{{'Forgot password?'|translate}}</a></div></section><section ng-if=vm.appConf.generalSettings.showEuLogotypes style=\"height: 125px\"><neo-eu-logotypes></neo-eu-logotypes></section></fieldset><footer><button type=button class=\"btn btn-default\" ui-sref=auth.register>{{'Register'|translate}}</button><div class=\"btn-group pull-right\"><button type=submit class=\"btn btn-primary\">{{'Log in'|translate}}</button> <button type=button class=\"btn btn-primary dropdown-toggle\" ng-show=vm.predefinedLogins.length data-toggle=dropdown><span class=caret></span></button><ul class=dropdown-menu ng-show=vm.predefinedLogins.length><li ng-repeat=\"user in vm.predefinedLogins\"><a href ng-click=vm.loginAs(user)>{{ user.login }}</a></li></ul></div></footer></form>"
  );


  $templateCache.put('seed/auth/login/forms/profileSelect/authProfileSelectForm.html',
    "<form class=neo-form novalidate><img ng-src={{vm.user.avatar}}><fieldset><h1 class=text-center>{{'Select profile'|translate}} <small>{{'to continue'|translate}}</small></h1></fieldset><fieldset><div class=\"panel panel-default\"><div class=list-group><button type=button ng-repeat=\"customer in vm.user.customers\" ng-class=\"{'list-group-item-info' : vm.isCustomerActive(customer)}\" ng-click=vm.setCustomerActive(customer) class=list-group-item>{{customer.customerName}} <i class=\"pull-right fa\" ng-class=\"{ 'fa-check-square': vm.isCustomerActive(customer), 'fa-square-o': !vm.isCustomerActive(customer) }\"></i></button></div></div></fieldset><footer><button type=submit ng-click=vm.login() class=\"btn btn-primary\">{{'Select'|translate}}</button><div class=btn-group><a class=\"btn btn-default\" ui-sref=auth.login>{{'Back'|translate}}</a></div></footer></form>"
  );


  $templateCache.put('seed/auth/password/forms/passwordReset/authPasswordResetForm.html',
    "<form class=neo-form neo-validate=vm.formValidators><fieldset><h1 class=text-center>{{'Choose new password'|translate}}</h1></fieldset><fieldset><section class=form-group ng-if=vm.formError><div class=\"alert alert-danger\"><button type=button class=close data-dismiss=alert>&times;</button> {{vm.formError}}</div></section><section class=form-group ng-if=vm.formSuccess><div class=\"alert alert-success\"><button type=button class=close data-dismiss=alert>&times;</button> <span>{{'The password has been reset! You will be redirected to'|translate}} <a ui-sref=auth.login>login</a> {{'page in a few sec...'|translate}}</span></div></section><section class=form-group><div class=input-icon-right><i class=\"icon-append fa fa-lock\"></i> <input type=password name=password placeholder=\"{{'New password'|translate}}\" class=form-control ng-model=vm.user.password></div></section><section class=form-group><div class=input-icon-right><i class=\"icon-append fa fa-lock\"></i> <input type=password name=repassword placeholder=\"{{'Repeat password'|translate}}\" class=form-control ng-model=vm.user.repassword></div></section></fieldset><footer><button type=submit class=\"btn btn-primary\" ng-click=vm.reset()>{{'Reset'|translate}}</button></footer></form>"
  );


  $templateCache.put('seed/auth/password/forms/passwordResetInit/authPasswordResetInitForm.html',
    "<form class=neo-form neo-validate><fieldset><h1 class=text-center>{{'Reset password'|translate}}</h1></fieldset><fieldset><section class=form-group ng-if=vm.formError><div class=\"alert alert-danger\"><button type=button class=close data-dismiss=alert>&times;</button> {{vm.formError}}</div></section><section class=form-group ng-if=vm.formSuccess><div class=\"alert alert-success\"><button type=button class=close data-dismiss=alert>&times;</button> {{'The password reset link has been sent to the provided email. Check your inbox and follow the instructions from the email.'|translate}} {{'If there is nothing new in your inbox, please remember to check the spam folder.'|translate}}</div></section><section class=form-group><input type=email name=email data-fv-notempty=true data-fv-emailaddress=true ng-model=vm.user.email class=form-control></section><div class=\"note padding-top-10\">{{'Please provide an email address to which the password reset link will be sent.'|translate}}</div></fieldset><footer><button type=button class=\"btn btn-primary\" ng-click=vm.reset()>{{'Reset'|translate}}</button></footer></form>"
  );


  $templateCache.put('seed/auth/register/forms/register/authRegisterForm.html',
    "<form class=neo-form neo-validate=vm.formValidators><fieldset><h1 class=text-center>{{'Registration'|translate}}</h1></fieldset><fieldset><section class=form-group ng-show=vm.registrationError><p class=\"alert alert-danger\" ng-model=formError><button type=button class=close data-dismiss=alert>&times;</button> {{vm.registrationError}}</p></section><section class=form-group><input type=email name=email data-fv-notempty=true data-fv-emailaddress=true class=form-control placeholder=\"{{'Email'|translate}}\" ng-model=vm.user.email></section><section class=form-group><input type=password class=form-control name=password data-fv-notempty=true placeholder=\"{{'Password'|translate}}\" ng-model=vm.user.password></section><section class=form-group><input type=password class=form-control name=repassword data-fv-notempty=true placeholder=\"{{'Repeat password'|translate}}\" ng-model=vm.user.repassword></section><section class=form-group><input type=checkbox data-fv-notempty=true ng-model=vm.model.acceptTermsOfService name=acceptTermsOfService> {{'I agree to the terms and policy'|translate}}</section></fieldset><footer><button type=submit class=\"btn btn-primary pull-right\" ng-click=vm.register()>{{'Register'|translate}}</button> <button class=\"btn btn-default pull-left\" ui-sref=auth.login>{{'Log in'|translate}}</button></footer></form>"
  );


  $templateCache.put('seed/auth/views/view.html',
    "<div class=row><div class=\"col-xs-12 col-sm-12 col-md-4 col-md-offset-4 lockscreen animated flipInY\"><div class=\"well well-light no-padding\" ui-view=auth></div></div></div>"
  );


  $templateCache.put('seed/components/activities/activities.html',
    "<span id=activity class=activity-dropdown ng-style=\"{'background-image':'url('+ vm.user.avatar +')'}\"><b class=\"badge bounceIn animated\">0</b></span><div class=ajax-dropdown><div class=\"btn-group btn-group-justified\" data-toggle=buttons><label class=\"btn btn-default\" ng-class=\"{active : isActive(type.name)}\" ng-repeat=\"(key, value) in vm.activities\" ng-click=vm.setTab(type.name)><input type=radio name=activity> {{value.label}}</label></div><div class=\"ajax-notifications custom-scroll\"><div class=\"alert alert-transparent text-center\"><h4>Click a button to show messages here</h4>This blank page message helps protect your privacy, or you can show the first message here automatically.</div><i class=\"fa fa-lock fa-4x fa-border\"></i></div><span>Last updated on: {{vm.activities.last_update}} <button type=button ng-click=vm.refresh() data-loading-text=\"<i class='fa fa-refresh fa-spin'></i> Loading...\" class=\"btn btn-xs btn-default pull-right\"><i class=\"fa fa-refresh\"></i></button></span></div>"
  );


  $templateCache.put('seed/components/breadcrumbs/neoStateBreadcrumbs.html',
    "<ol class=breadcrumb><li ng-repeat=\"crumb in vm.crumbs\"><a type=button ui-sref={{crumb.stateName}}>{{crumb.title}}</a></li></ol>"
  );


  $templateCache.put('seed/components/cookieConsent/cookieConsent.html',
    "<div><div class=padding-10>We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we'll assume that you are happy to receive all cookies from this website. If you would like to change your preferences you may do so by following the instructions <a href=\"http://www.aboutcookies.org/Default.aspx?page=1\">here</a>.</div><div class=text-align-right><button type=button ng-click=vm.acceptCookies()>Accept</button></div></div>"
  );


  $templateCache.put('seed/components/customer/neoCustomerSwitcher.html',
    "<div class=\"project-context hidden-xs dropdown\"><span class=label>{{::vm.user.email}}</span><div class=dropdown dropdown><div class=\"project-selector dropdown-toggle\" dropdown-toggle><span ng-bind-html=vm.activeCustomer.customerName></span> <i class=\"fa fa-angle-down\"></i></div><ul class=dropdown-menu><li ng-repeat=\"customer in vm.customerCollection\"><a ng-click=vm.setActiveCustomer(customer)><i ng-show=\"customer.customerId === vm.activeCustomer.customerId\" class=\"fa fa-hand-o-right\"></i> {{customer.customerName}}</a></li></ul></div></div>"
  );


  $templateCache.put('seed/components/euLogotypes/neoEuLogotypes.html',
    "<img src=assets/seed/img/euLogotypes/eu-rozwoj-logo.jpg> <img src=assets/seed/img/euLogotypes/eu-ig-logo.jpg><p>Projekt współfinansowany ze środków Europejskiego Funduszu Rozwoju Reginalnego w ramach Programu Operacyjnego Innowacyjna Gospodarka.</p>"
  );


  $templateCache.put('seed/components/language/neoLanguageSwitcher.html',
    "<ul class=\"header-dropdown-list hidden-xs\"><li class=dropdown dropdown><a class=dropdown-toggle dropdown-toggle><img class=\"flag flag-{{vm.activeLanguage.code}}\"> <span>{{vm.activeLanguage.name}} </span><i class=\"fa fa-angle-down\"></i></a><ul class=\"dropdown-menu pull-right\"><li ng-class=\"{active: language === vm.activeLanguage}\" ng-repeat=\"language in vm.languageCollection\"><a ng-click=vm.setLanguageActive(language)><img class=\"flag flag-{{language.code}}\"> {{language.name}}</a></li></ul></li></ul>"
  );


  $templateCache.put('seed/components/navigation/neoNavigationGroup.html',
    "<li ng-class=\"{'active': vm.isActive()}\"><a ng-click=vm.toggleGroup()><i ng-if=vm.icon class=\"fa fa-lg fa-fw {{vm.icon}}\"></i> <span>{{vm.label}}</span> <b class=collapse-sign><em class=fa ng-class=\"vm.isOpen()?'fa-minus-square-o':'fa-plus-square-o'\"></em></b></a><ul ng-transclude></ul></li>"
  );


  $templateCache.put('seed/components/navigation/neoNavigationItem.html',
    "<li ui-sref-active=active><a ui-sref={{vm.state}} ng-click=vm.toggleItem()><i ng-if=vm.icon class=\"fa fa-lg fa-fw {{vm.icon}}\"></i> <span>{{vm.label}}</span></a></li>"
  );


  $templateCache.put('seed/components/versionTag/neoVersionTag.html',
    "<div>ver: {{vm.conf.generalSettings.version}} <span ng-if=vm.conf.generalSettings.ciBuildNumber>(#{{vm.conf.generalSettings.ciBuildNumber}})</span></div>"
  );


  $templateCache.put('seed/forms/select/partials/match.html',
    "<div class=ui-select-match ng-hide=$select.open ng-disabled=$select.disabled ng-class=\"{'btn-default-focus':$select.focus}\"><span tabindex=-1 class=\"btn btn-default form-control ui-select-toggle\" aria-label=\"{{ $select.baseTitle }} activate\" ng-disabled=$select.disabled ng-click=$select.activate() style=\"outline: 0\"><span ng-show=$select.isEmpty() class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span><p ng-hide=$select.isEmpty() class=\"ui-select-match-text neo-select-match pull-left\" ng-class=\"{'ui-select-allow-clear': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></p><i class=\"caret pull-right\" ng-click=$select.toggle($event)></i> <a ng-show=\"$select.allowClear && !$select.isEmpty()\" aria-label=\"{{ $select.baseTitle }} clear\" ng-click=$select.clear($event) class=\"btn btn-xs btn-link pull-right neo-select-clear\"><i class=\"fa fa-trash-o\" aria-hidden=true></i></a></span></div>"
  );


  $templateCache.put('seed/layout/partials/footer.html',
    "<div class=page-footer><div class=row><div class=\"col-xs-12 col-sm-6\"><span class=txt-color-white>SmartAdmin WebApp © 2013-2014</span></div><div class=\"col-xs-6 col-sm-6 text-right hidden-xs\"><div class=\"txt-color-white inline-block\"><i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i> <strong>52 mins ago &nbsp;</strong></i><div class=\"btn-group dropup\"><button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=dropdown><i class=\"fa fa-link\"></i> <span class=caret></span></button><ul class=\"dropdown-menu pull-right text-left\"><li><div class=padding-5><p class=\"txt-color-darken font-sm no-margin\">Download Progress</p><div class=\"progress progress-micro no-margin\"><div class=\"progress-bar progress-bar-success\" style=\"width: 50%\"></div></div></div></li><li class=divider></li><li><div class=padding-5><p class=\"txt-color-darken font-sm no-margin\">Server Load</p><div class=\"progress progress-micro no-margin\"><div class=\"progress-bar progress-bar-success\" style=\"width: 20%\"></div></div></div></li><li class=divider></li><li><div class=padding-5><p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=text-danger>*critical*</span></p><div class=\"progress progress-micro no-margin\"><div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div></div></div></li><li class=divider></li><li><div class=padding-5><button class=\"btn btn-block btn-default\">refresh</button></div></li></ul></div></div></div></div></div>"
  );


  $templateCache.put('seed/layout/partials/header.html',
    "<header id=header><div class=\"navbar-brand no-selection\"><img ng-src={{::vm.appConf.generalSettings.logo}}> {{::vm.appConf.generalSettings.name}}</div><neo-activities></neo-activities><neo-customer-switcher></neo-customer-switcher><div class=pull-right><div id=hide-menu class=\"btn-header pull-right\"><span><a toggle-menu title=\"Collapse Menu\"><i class=\"fa fa-bars\"></i></a></span></div><div class=\"btn-header transparent pull-right\"><span><a full-screen title=\"Full Screen\"><i class=\"fa fa-arrows-alt\"></i></a></span></div><div id=logout class=\"btn-header transparent pull-right\"><span><a ui-sref=auth.logout title=\"{{'Sign Out'|translate}}\"><i class=\"fa fa-sign-out\"></i></a></span></div><neo-language-switcher></neo-language-switcher></div></header>"
  );


  $templateCache.put('seed/layout/partials/navigation.html',
    "<aside id=left-panel><nav><neo-navigation></neo-navigation><neo-eu-logotypes ng-if=vm.appConf.generalSettings.showEuLogotypes></neo-eu-logotypes><neo-version-tag></neo-version-tag></nav></aside>"
  );


  $templateCache.put('seed/layout/views/view.html',
    "<cookie-consent ng-if=vm.appConf.generalSettings.showCookieConsent></cookie-consent><div ng-include=\"'seed/layout/partials/header.html'\"></div><div ng-include=\"'seed/layout/partials/navigation.html'\"></div><div id=main role=main><div id=ribbon><span class=ribbon-button-alignment><span id=refresh class=\"btn btn-ribbon\" reset-widgets tooltip-placement=bottom tooltip-html-unsafe=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"><i class=\"fa fa-refresh\"></i></span></span><neo-state-breadcrumbs></neo-state-breadcrumbs></div><div data-ui-view=content data-autoscroll=false></div></div>"
  );


  $templateCache.put('seed/tables/_directives/neoTableDateFilter/neoTableDateFilter.html',
    "<div class=\"icon-addon addon-sm\"><input neo-datepicker=\"{allowEmpty: true}\" ng-change=vm.changeDate() ng-model=vm.selectedDate class=\"form-control input-xs\" type=text><label class=\"fa fa-calendar\"></label><i class=\"fa fa-trash-o clear-btn\" aria-hidden=true ng-show=\"vm.selectedDate !== undefined\" ng-click=\"vm.selectedDate = undefined; vm.changeDate()\"></i></div>"
  );


  $templateCache.put('seed/tables/_directives/neoTableDatetimeFilter/neoTableDatetimeFilter.html',
    "<div class=\"icon-addon addon-sm\"><input neo-datepicker=\"{allowEmpty: true}\" ng-model=vm.selectedDate ng-change=vm.changeDate() type=text class=\"form-control input-xs\"><label class=\"fa fa-calendar\"></label><i class=\"fa fa-trash-o clear-btn\" aria-hidden=true ng-show=\"vm.selectedDate !== undefined\" ng-click=\"vm.selectedDate = undefined; vm.changeDate()\"></i></div>"
  );


  $templateCache.put('seed/tables/_directives/neoTableEnumFilter/neoTableEnumFilter.html',
    "<ui-select ng-model=vm.selectedItem on-select=\"vm.selectEnumItem($item, $model)\"><ui-select-match allow-clear=true><span>{{$select.selected[vm.displayProperty]}}</span></ui-select-match><ui-select-choices repeat=\"item[vm.displayProperty] as item in vm.filterableEnum.getEnumAsArray()\">{{item[vm.displayProperty]}}</ui-select-choices></ui-select>"
  );


  $templateCache.put('seed/tables/_directives/neoTableRelatedFilter/neoTableRelatedFilter.html',
    "<ui-select ng-model=vm.selectedItem on-select=\"vm.selectRelatedItem($item, $model)\"><ui-select-match allow-clear=true><span>{{$select.selected[vm.displayProperty]}}</span></ui-select-match><ui-select-choices repeat=\"item[vm.displayProperty] as item in vm.filteredCollection\" refresh=vm.filterCollection($select.search)>{{item[vm.displayProperty]}}</ui-select-choices></ui-select>"
  );


  $templateCache.put('seed/tables/filters/date-filter.html',
    "<neo-table-date-filter ng-model=params.filter()[name]></neo-table-date-filter>"
  );


  $templateCache.put('seed/tables/filters/enum-filter.html',
    "<neo-table-enum-filter enum-name=$column.data.enumName display-property=$column.data.displayProperty ng-model=params.filter()[name]></neo-table-enum-filter>"
  );


  $templateCache.put('seed/tables/filters/related-filter.html',
    "<neo-table-related-filter api-name=$column.data.apiName display-property=$column.data.displayProperty ng-model=params.filter()[name]></neo-table-related-filter>"
  );


  $templateCache.put('seed/tables/filters/text-filter.html',
    "<div class=\"icon-addon addon-sm\"><input type=text ng-model=params.filter()[name] class=\"form-control input-xs\"><label class=\"fa fa-search\"></label></div>"
  );


  $templateCache.put('seed/tables/filters/timestamp-filter.html',
    "<neo-table-datetime-filter ng-model=params.filter()[name]></neo-table-datetime-filter>"
  );


  $templateCache.put('seed/tables/partials/neo-filters.html',
    "<tr ng-show=show_filter><th ng-repeat=\"$column in $columns\" ng-show=$column.show(this) data-title-text=\"{{$column.titleAlt(this) || $column.title(this)}}\" class=\"neo-table-filter hasinput {{$column.class(this)}}\"><div ng-repeat=\"(name, filter) in $column.filter(this)\"><div ng-if=\"filter.indexOf('/') !== -1\" ng-include=filter></div><div ng-if=\"filter.indexOf('/') === -1\" ng-include=\"'ng-table/filters/' + filter + '.html'\"></div></div></th></tr>"
  );


  $templateCache.put('seed/tables/partials/neo-footer.html',
    "<div class=dt-toolbar-footer><div class=\"col-sm-8 hidden-xs neo-table-info\" style=\"position: absolute; overflow: visible\">{{'Showing'|translate}} {{params.total() ? (params.page() - 1) * params.count() + 1 : 0}} {{'to'|translate}} {{(params.page() * params.count()) &lt; params.total() ? params.page() * params.count() : params.total()}} {{'of'|translate}} {{params.total()}} {{'entries paginated by'|translate}}<div class=\"btn-group btn-group-sm\" dropdown><button type=button class=\"btn btn-default dropdown-toggle\" dropdown-toggle>{{ params.count() }} <span class=caret></span></button><ul class=\"dropdown-menu dropup\" role=menu><li ng-repeat=\"count in params.settings().counts track by $index\"><a ng-click=params.count(count)>{{count}}</a></li></ul></div>{{'items per page'|translate}}</div><div class=\"col-xs-12 col-sm-4 neo-table-paginate\"><ul class=pagination><li ng-class=\"{'disabled': !page.active}\" ng-repeat=\"page in pages\" ng-switch=page.type><a ng-switch-when=prev ng-click=params.page(page.number)>{{'Previous'|translate}} </a><a ng-switch-when=first ng-click=params.page(page.number)><span ng-bind=page.number></span> </a><a ng-switch-when=page ng-click=params.page(page.number)><span ng-bind=page.number></span> </a><a ng-switch-when=more ng-click=params.page(page.number)>... </a><a ng-switch-when=last ng-click=params.page(page.number)><span ng-bind=page.number></span> </a><a ng-switch-when=next ng-click=params.page(page.number)>{{'Next'|translate}}</a></li></ul></div></div>"
  );


  $templateCache.put('seed/tables/partials/neo-header.html',
    "<ng-table-sorter-row></ng-table-sorter-row><ng-table-filter-row></ng-table-filter-row>"
  );


  $templateCache.put('seed/tables/partials/neo-sorting.html',
    "<tr><th title={{$column.headerTitle(this)}} ng-repeat=\"$column in $columns\" ng-click=\"sortBy($column, $event)\" ng-if=$column.show(this) ng-init=\"template=$column.headerTemplateURL(this)\" class=\"no-selection {{$column.class(this)}}\" ng-class=\"{'sorting': $column.sortable(this),'sorting-asc': params.sorting()[$column.sortable(this)]=='asc','sorting-desc': params.sorting()[$column.sortable(this)]=='desc'}\"><div ng-if=!template ng-show=!template ng-bind=$column.title(this) class=neo-table-header></div><div ng-if=template ng-include=template></div></th></tr>"
  );
 $log.debug('Initiated module');});});
define('seed/__misc/_locale/translation',['angular', 'angular-gettext'], function (angular) {
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_GB', {"Apply":"Apply","Are you sure you want to remove item?":"Are you sure you want to remove item?","Back":"Back","Cancel":"Cancel","Choose new password":"Choose new password","Confirmation":"Confirmation","Custom range":"Custom range","Email":"Email","entries paginated by":"entries paginated by","Error":"Error","Forgot password?":"Forgot password?","I agree to the terms and policy":"I agree to the terms and policy","If there is nothing new in your inbox, please remember to check the spam folder.":"If there is nothing new in your inbox, please remember to check the spam folder.","Info":"Info","Internal server error":"Internal server error","items per page":"items per page","Log in":"Log in","New password":"New password","Next":"Next","No":"No","No account found with that email address.":"No account found with that email address.","No active password reset requests are associated with that email address":"No active password reset requests are associated with that email address","of":"of","page in a few sec...":"page in a few sec...","Password":"Password","Passwords must match":"Passwords must match","Please log in":"Please log in","Please provide an email address to which the password reset link will be sent.":"Please provide an email address to which the password reset link will be sent.","Previous":"Previous","Register":"Register","Registration":"Registration","Repeat password":"Repeat password","Reset":"Reset","Reset password":"Reset password","Select":"Select","Select profile":"Select profile","Showing":"Showing","Sign Out":"Sign Out","Success":"Success","The password has been reset! You will be redirected to":"The password has been reset! You will be redirected to","The password reset link has been sent to the provided email. Check your inbox and follow the instructions from the email.":"The password reset link has been sent to the provided email. Check your inbox and follow the instructions from the email.","to":"to","to continue":"to continue","Warning":"Warning","Welcome!":"Welcome!","Wrong e-mail or password.":"Wrong e-mail or password.","Yes":"Yes"});
    gettextCatalog.setStrings('pl_PL', {"Apply":"Zatwierdź","Are you sure you want to remove item?":"Czy na pewno chcesz usunąć ten element?","Back":"Powrót","Cancel":"Anuluj","Choose new password":"Podaj nowe hasło","Confirmation":"Potwierdzenie","Custom range":"Inny zakres","Email":"Email","entries paginated by":"elementów po","Error":"Błąd","Forgot password?":"Zapomniałeś hasła?","I agree to the terms and policy":"Akceptuję terminy i warunki korzystania z serwisu","If there is nothing new in your inbox, please remember to check the spam folder.":"Jeżeli nie masz emaila w skrzynce odbiorczej, sprawdź folder ze spamem.","Info":"Info","Internal server error":"Wewnętrzny błąd serwera","items per page":"na stronie","Log in":"Zaloguj","New password":"Nowe hasło","Next":"Następny","No":"Nie","No account found with that email address.":"Nie znaleziono konta z takim adresem email.","No active password reset requests are associated with that email address":"Nie odnaleziono żądania zresetowania hasła powiązanych z tym adresem email.","of":"z","page in a few sec...":"za kilka sekund…","Password":"Hasło","Passwords must match":"Hasła muszą być identyczne","Please log in":"Zaloguj się","Please provide an email address to which the password reset link will be sent.":"Podaj adres mailowy, na który ma zostać wysłany link resetujący hasło.","Previous":"Poprzedni","Register":"Zarejestruj","Registration":"Rejestracja","Repeat password":"Powtórz hasło","Reset":"Zresetuj","Reset password":"Zresetuj hasło","Select":"Wybierz","Select profile":"Wybierz profil","Showing":"Pokazuje","Sign Out":"Wyloguj","Success":"Sukces","The password has been reset! You will be redirected to":"Hasło zostało zresetowane. Zastaniesz przekierowany do","The password reset link has been sent to the provided email. Check your inbox and follow the instructions from the email.":"Link resetujący hasło został wysłany na podany adres email. Sprawdź skrzynkę odbiorczą i podążaj za instrukcjami z emaila.","to":"do","to continue":"aby kontynuować","Warning":"Ostrzeżenie","Welcome!":"Witaj!","Wrong e-mail or password.":"Błędny e-mail lub hasło","Yes":"Tak"});
/* jshint +W100 */
}]);
});
/**
 * @namespace seed.helpers
 * @memberOf seed
 */

define('seed/helpers/module',['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.helpers', []);

	module.run(function ($log) {
		$log = $log.getInstance('seed.helpers.module');
		$log.debug('Initiated module');
	});

	return module;
});

define('seed/helpers/_interceptors/HttpErrorInterceptor',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Handles globally server error exceptions
	 * @class HttpErrorInterceptor
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @param $q {Object} Angular promise provider
	 * @param $injector {Object} Angular Dependency Injection provider
	 * @return {{responseError: Function}}
	 */
	function HttpErrorInterceptor($log, $q, $injector) {

		$log = $log.getInstance('seed.helpers.HttpErrorInterceptor');
		$log.debug('Initiated factory');

		return {
			// On response failure
			responseError: function (rejection) {
				if (rejection.status === 401) {
					// If user is not authorised redirect to login page
					$injector.get('$state').go('auth.logout');

					$log.debug('Intercepted authorised access');

					return $q.reject(rejection);
				} else {

					$log.debug('Intercepted response error');
					// Return the promise rejection.
					return $q.reject(rejection);
					//}
				}
			}
		};
	}

	module.factory('HttpErrorInterceptor', HttpErrorInterceptor);
});

define('seed/helpers/_decorators/logDecorator',['angular', 'moment', 'seed/helpers/module'], function (ng, moment, module) {
	'use strict';

	/**
	 * Enhance the logger object by adding date and path to calling module
	 * @memberOf seed.helpers
	 *
	 * @param $delegate {Object} Reference to original $log object
	 * @returns {*}
	 */
	function $log($delegate) {
		'ngInject';

		$delegate.getInstance = getInstance;

		function decorate(logFn, className) {
			var enhancedLogFn = function () {
				var args = [].slice.call(arguments),
					now = moment().format('YYYY-MM-DD HH:mm:ss');

				args[0] = [null, now + ' - ' + className, args[0]].join('');

				logFn.apply(null, args);
			};

			enhancedLogFn.prototype = logFn.prototype;
			enhancedLogFn.logs = logFn.logs;

			return enhancedLogFn;
		}

		function getInstance(name) {
			var className = _.isUndefined(name) ? '' : name + ' :: ';
			var logInstance = ng.copy($delegate);


			_.assign(logInstance, {
				log: decorate($delegate.log, className),
				info: decorate($delegate.info, className),
				warn: decorate($delegate.warn, className),
				debug: decorate($delegate.debug, className),
				error: decorate($delegate.error, className)
			});

			return logInstance;
		}

		return $delegate;
	}

	module.decorator('$log', $log);
});

define('seed/helpers/_enums/BaseEnum',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Base interface for augmenting enum functionality in app
	 * @interface
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {Function} Enum object
	 */
	function BaseEnum($log) {

		/**
		 * Enum constructor
		 * @constructor
		 *
		 * @param enumerable
		 */
		var Enum = function (enumerable) {
			_.assign(this, enumerable);

			Object.freeze(this);
		};

		/**
		 * Returns the enum object
		 * @abstract
		 * @method getEnumAsArray
		 */
		Enum.prototype.getEnumAsArray = function () {
			return _.toArray(this);
		};
		/**
		 * Returns enum grouped by provided property
		 * @abstract
		 * @method groupBy
		 * @param prop {String} Grouping property
		 */
		Enum.prototype.groupBy = function (prop) {
			return _.transform(this, function (result, item, name) {
				result[item[prop]] = result[item[prop]] || {};
				result[item[prop]][name] = item;
			});
		};


		/**
		 * Return enum key based on provided object or its properties
		 * @abstract
		 * @method getKeyByValue
		 * @param value
		 */
		Enum.prototype.getKeyByValue = function (value) {
			if (!_.isObject(value)) {
				$log.error('Argument "value" must be Object!');
			}
			return _.findKey(this, value);
		};

		/**
		 * Return enum value based on provided key
		 * @abstract
		 * @method getValueByKey
		 * @param {String} key
		 */
		Enum.prototype.getValueByKey = function (key) {
			if (_.isString(key)) {
				key = key.toUpperCase();
			} else {
				$log.error('Argument "key" must be a String!');
			}

			var value = this[key];
			if (_.isUndefined(value)) {
				$log.error('Could not find object with key: ', key);
			} else {
				return value;
			}
		};

		return Enum;
	}

	module.factory('BaseEnum', BaseEnum);
});

define('seed/helpers/_exceptions/exceptionHandler',['seed/helpers/module'], function (module) {
    'use strict';
    
    module.factory('$exceptionHandler', function($window) {
        return function(exception, cause) {
            if(cause) {
                exception.message += ' (caused by "' + cause + '")';
            }
            exception.requireType = 'angular';
            exception.requireModules = [cause];
            if(typeof $window.handleStackTrace === 'function') {
                $window.handleStackTrace(exception);
            }
        };
    });
});
define('seed/helpers/_services/templateLoader/neoTemplateLoader',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Service Template loader service
	 * @class neoTemplateLoader
	 * @memberOf seed.helpers
	 *
	 * @param $templateCache {Object} Cache provider
	 * @param $http {Object} HTTP interface
	 * @param $log {Object} Logging service
	 * @param $q {Object} Promise factory
	 */
	function neoTemplateLoader($templateCache, $http, $log, $q) {

		$log = $log.getInstance('seed.helpers.neoTemplateLoader');
		$log.debug('Initiated service');

		/**
		 * Helper caching function. Loads template from either cache or through $http
		 * and puts the template under cacheKey
		 *
		 * @param templatePath {String} path to HTML to be cached
		 * @param cacheKey {String} Key under which template will be stored
		 */
		this.load = function (templatePath, cacheKey) {
			var dfd = $q.defer();

			// If custom cache key is not provided store it at default key
			if (_.isUndefined(cacheKey)) {
				cacheKey = templatePath;
			}

			var template = $templateCache.get(templatePath);

			if (template) {
				$templateCache.put(cacheKey, template);
				dfd.resolve(template);

				$log.debug('Loaded ' + templatePath + ' template into cache under key: ' + cacheKey);
			} else {

				$http
					.get(templatePath)
					.then(function (response) {
						$templateCache.put(cacheKey, response.data);

						dfd.resolve(response.data);
						$log.debug('Loaded ' + templatePath + ' template into cache under key: ' + cacheKey);

					})
					.catch(function (err) {
						dfd.reject(err);

						$log.error('Could not load ' + templatePath + ' template');
					});
			}

			return dfd.promise;
		};
	}

	module.service('neoTemplateLoader', neoTemplateLoader);
});

// jshint ignore: start
define('seed/helpers/lodash/jsonStringify',[],function () {

	/**
	 * JSON.stringify, but doesn't throw on circular references
	 * @param obj
	 * @param replacer
	 * @param spaces
	 */
	function stringify(obj, replacer, spaces) {
		return JSON.stringify(obj, serializer(replacer), spaces)
	}

	function serializer(replacer) {
		var stack = [], keys = [];

		var cycleReplacer = function (key, value) {
			if (stack[0] === value) return "[Circular ~]";
			return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
		};

		return function (key, value) {
			if (stack.length > 0) {
				var thisPos = stack.indexOf(this);
				~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
				~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
				if (~stack.indexOf(value)) {
					value = cycleReplacer.call(this, key, value);
				}
			}
			else {
				stack.push(value);
			}

			return replacer == null ? value : replacer.call(this, key, value);
		}
	}

	return {
		stringify: stringify
	};

});


/**
 * Extends default lodash functions
 */
define('seed/helpers/lodash/lodashExtensions',['lodash', './jsonStringify'], function (_, jsonStringify) {
	'use strict';

	// Extend lodash with stringify function
	_.mixin(jsonStringify);

	// Add merging default options with params
	_.mergeDefaults = _.partialRight(_.merge, function recursiveDefaults(/* ... */) {

		// Ensure dates and arrays are not recursively merged
		if (_.isArray(arguments[0]) || _.isDate(arguments[0])) {
			return arguments[0];
		}
		return _.merge(arguments[0], arguments[1], recursiveDefaults);
	});

	// Filter collection based provided set of values
	// http://stackoverflow.com/questions/17251764/lodash-filter-collection-using-array-of-values/28173354#28173354
	_.filterByValues = function (collection, property, values) {
		return _.filter(collection, function (item) {
			return _.contains(values, _.get(item, property));
		});
	};

});

define('seed/helpers/_services/eventAggregator/EventAggregatorFactory',['seed/helpers/module'], function (module) {
	'use strict';
	/**
	 * Returns new instance of event aggregator.
	 * @class EventAggregatorFactory
	 * @memberOf seed.helpers
	 *
	 * @example
	 * define(['apps/example/module'], function (module) {
	 * 	'use strict';
	 *
	 * 	function exampleAppEventAggregator(EventAggregatorFactory) {
	 * 		return new EventAggregatorFactory();
	 * 	}
	 *
	 * 	module.service('exampleAppEventAggregator', exampleAppEventAggregator);
	 * });
	 *
	 * @requires $rootScope
	 *
	 * @return EventAggregator {seed.helpers.EventAggregator}
	 *
	 */
	function EventAggregatorFactory($rootScope) {

		/**
		 * Event aggregator allow to create detached from DOM, virtual $rootScopes that
		 * keeps publishing/subscribing events without chained DOM-based emitting/broadcasting.
		 * @constructor seed.helpers.EventAggregator
		 */
		function EventAggregator() {
			/**
			 * @property $eventBus {Object} Instance of virtual scope
			 */
			this.$eventBus = $rootScope.$new(true);
		}

		/**
		 * @method publish
		 * @memberOf seed.helpers.EventAggregator.prototype
		 *
		 * @param name {String} Event name to broadcast.
		 * @param [args] {...*} Optional one or more arguments which will be passed onto the event listeners.
		 */
		EventAggregator.prototype.publish = function (name, args) {
			this.$eventBus.$broadcast(name, args);
		};

		/**
		 * @method subscribe
		 * @memberOf seed.helpers.EventAggregator.prototype
		 *
		 * @param name {String} Event name to listen on.
		 * @param listener {function} Function to call when the event is emitted.
		 * @param [scope] {Object} Scope object to attach listener that will be destroyed along with scope
		 * @returns {function} Returns a deregistration function for this listener.
		 */
		EventAggregator.prototype.subscribe = function (name, scope, listener) {

			var unbind = this.$eventBus.$on(name, listener);

			if (scope) {
				scope.$on('$destroy', function () {
					unbind();
				});
			}
			return unbind;
		};

		return EventAggregator;
	}

	module.factory('EventAggregatorFactory', EventAggregatorFactory);
});


define('seed/helpers/moment/momentDatetimeDayrange',['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class momentDatetimeDayrange
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" moment-datetime-dayrange></div>
	 *
	 * @param $log {Object} Logging service
	 * @todo Add to seed
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function momentDatetimeDayrange($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {

				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return {
							lte: value.lte.format('YYYY-MM-DD'),
							gte: value.gte.format('YYYY-MM-DD')
						};
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'YYYY-MM-DD');

						if (momentDate.isValid()) {
							return {
								gte: momentDate.toISOString(),
								lte: momentDate.add(1, 'days').toISOString()
							};
						} else {
							return undefined;
						}
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('momentDatetimeDayrange', momentDatetimeDayrange);
});

define('seed/helpers/moment/neoMomentDate',['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class neoMomentDate
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" neo-moment-date></input>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoMomentDate($log) {

		$log = $log.getInstance('seed.components.neoMomentDate');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {
				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return value.format('L');
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'L');
						if (momentDate.isValid()) {
							return momentDate;
						} else {
							return undefined;
						}
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoMomentDate', neoMomentDate);
});

define('seed/helpers/moment/neoMomentDatetime',['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on datetime based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class neoMomentDatetime
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" moment-datetime></input>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoMomentDatetime($log) {

		$log = $log.getInstance('seed.components.neoMomentDatetime');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {
				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return value.format(moment.ISO_8601);
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value);

						if (momentDate.isValid()) {
							return momentDate.toISOString();
						} else {
							return undefined;
						}
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoMomentDatetime', neoMomentDatetime);
});

define('seed/helpers/moment/neoMomentTime',['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Applies moment filtering on date based elements
	 * Can be used along with DateEncode and DateDecode serializers from restmod
	 * @class neoMomentTime
	 * @memberOf seed.components
	 *
	 * @example
	 * <input type="date" neo-moment-date></input>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, require: string, link: Function}}
	 */
	function neoMomentTime($log) {

		$log = $log.getInstance('seed.components.neoMomentTime');

		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			require: '?ngModel',
			link: function (scope, element, attrs, ngModel) {
				ngModel.$formatters.push(function (value) {
					if (!_.isUndefined(value)) {
						return value.format('LT');
					}
				});

				ngModel.$parsers.push(function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'LT');
						if (momentDate.isValid()) {
							return momentDate;
						} else {
							return undefined;
						}
					}
				});

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoMomentTime', neoMomentTime);
});

define('seed/helpers/restmod/serializers/datetime/DatetimeSerializerService',['seed/helpers/module', 'moment', 'lodash'], function (module, moment, _) {
	'use strict';

	/**
	 * @constructor DatetimeSerializerService
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DatetimeSerializerService($log) {
		$log = $log.getInstance('seed.helpers.DatetimeSerializerService');

		this.decode = function (val) {
			var decodedDate = moment(val, moment.ISO_8601);

			if (decodedDate.isValid()) {
				return decodedDate;
			} else {
				// @todo: Handle on backend returning null values for unset fields
				if (!_.isNull(val)) {
					throw new Error('Could not serialize from timestamp value to moment object: ' + val);
				}
			}
		};

		this.encode = function (val) {
			if (_.isEmpty(val)) {
				return;
			}

			if (_.isFunction(val.isValid) && val.isValid()) {
				return val.clone().utc().toISOString();
			} else {
				throw new Error('Could not serialize from moment object to timestamp value: ' + val);
			}
		};

		$log.debug('Initialized service');
	}

	module.service('DatetimeSerializerService', DatetimeSerializerService);
});
define('seed/helpers/restmod/serializers/datetime/DatetimeDecodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DatetimeDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'DatetimeDecode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param DatetimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DatetimeDecodeFilter($log, DatetimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DatetimeSerializer');

		return function (val) {
			return DatetimeSerializerService.decode(val);
		};
	}

	module.factory('DatetimeDecodeFilter', DatetimeDecodeFilter);
});

define('seed/helpers/restmod/serializers/datetime/DatetimeEncodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor dateDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		encode: 'DatetimeEncode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param DatetimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DatetimeEncodeFilter($log, DatetimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DatetimeSerializer');

		return function (val) {
			return DatetimeSerializerService.encode(val);
		};
	}

	module.factory('DatetimeEncodeFilter', DatetimeEncodeFilter);
});

define('seed/helpers/restmod/serializers/datetime/DatetimeSerializer',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DatetimeSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		serialize: 'Datetime'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @param DatetimeSerializerService {Object} Serialization service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DatetimeSerializer($log, DatetimeSerializerService) {
		$log = $log.getInstance('seed.helpers.DatetimeSerializer');

		function decode(val) {
			return DatetimeSerializerService.decode(val);
		}

		function encode(val) {
			return DatetimeSerializerService.encode(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};
	}

	module.factory('DatetimeSerializer', DatetimeSerializer);
});

define('seed/helpers/restmod/serializers/date/DateSerializerService',['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * @constructor DateSerializerService
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DateSerializerService($log) {
		$log = $log.getInstance('seed.helpers.DateSerializerService');

		this.decode = function (val) {

			var decodedDate = moment(val, 'YYYY-MM-DD');
			if (decodedDate.isValid()) {
				return decodedDate;
			} else {
				// @todo: Handle on backend returning null values for unset fields
				if (!_.isNull(val)) {
					$log.error('Could not serialize from date value to moment object: ' + val);
				}
				return undefined;
			}
		};

		this.encode = function (val) {
			if (_.isEmpty(val)) {
				return;
			}

			if (_.isFunction(val.isValid) && val.isValid()) {
				return val.format('YYYY-MM-DD');
			} else {
				throw new Error('Could not serialize from moment object to date value: ' + val);
			}
		};

		$log.debug('Initialized service');
	}

	module.service('DateSerializerService', DateSerializerService);
});

define('seed/helpers/restmod/serializers/date/DateDecodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DateDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *  		decode: 'DateDecode'
	 *  	}
	 *  });
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param DateSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DateDecodeFilter($log, DateSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DateSerializer');

		return function (val) {
			return DateSerializerService.decode(val);
		};
	}

	module.factory('DateDecodeFilter', DateDecodeFilter);
});

define('seed/helpers/restmod/serializers/date/DateEncodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DateEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 * 		createdAt: {
	 * 			encode: 'DateEncode'
	 * 		}
	 * 	});
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param DateSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function DateEncodeFilter($log, DateSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in DateSerializer');

		return function (val) {
			return DateSerializerService.encode(val);
		};
	}

	module.factory('DateEncodeFilter', DateEncodeFilter);
});

define('seed/helpers/restmod/serializers/date/DateSerializer',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor DateSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	dueDate: {
	 *  		serialize: 'Date'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @param DateSerializerService {Object} Serialization service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DateSerializer($log, DateSerializerService) {
		$log = $log.getInstance('seed.helpers.DateSerializer');

		function decode(val) {
			return DateSerializerService.decode(val);
		}

		function encode(val) {
			return DateSerializerService.encode(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};

	}

	module.factory('DateSerializer', DateSerializer);
});

define('seed/helpers/restmod/serializers/time/TimeSerializerService',['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * @constructor TimeSerializerService
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function TimeSerializerService($log) {
		$log = $log.getInstance('seed.helpers.TimeSerializerService');

		this.decode = function (val) {

			var decodedDate = moment(val, 'HH:mm');
			if (decodedDate.isValid()) {
				return decodedDate;
			} else {
				// @todo: Handle on backend returning null values for unset fields
				if (!_.isNull(val)) {
					$log.error('Could not serialize to moment object from time value: ' + val);
				}
				return undefined;
			}
		};

		this.encode = function (val) {
			if (_.isEmpty(val)) {
				return;
			}

			if (_.isFunction(val.isValid) && val.isValid()) {
				return val.format('HH:mm');
			} else {
				throw new Error('Could not serialize from moment object to timestamp value: ' + val);
			}
		};

		$log.debug('Initialized service');
	}

	module.service('TimeSerializerService', TimeSerializerService);
});

define('seed/helpers/restmod/serializers/time/TimeDecodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor TimeDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	decode: 'TimeDecode'
	 *    }
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param TimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function TimeDecodeFilter($log, TimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in TimeSerializer');

		return function (val) {
			return TimeSerializerService.decode(val);
		};
	}

	module.factory('TimeDecodeFilter', TimeDecodeFilter);
});

define('seed/helpers/restmod/serializers/time/TimeEncodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor TimeEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	encode: 'TimeEncode'
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param TimeSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function TimeEncodeFilter($log, TimeSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in TimeSerializer');

		return function (val) {
			return TimeSerializerService.encode(val);
		};
	}

	module.factory('TimeEncodeFilter', TimeEncodeFilter);
});

define('seed/helpers/restmod/serializers/time/TimeSerializer',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor TimeSerializer
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	startHour: {
	 *  		serialize: 'Enum'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @param TimeSerializerService {Object} Serialization service
	 * @return {{decode: decode, encode: encode}}
	 */
	function TimeSerializer($log, TimeSerializerService) {
		$log = $log.getInstance('seed.helpers.TimeSerializer');

		function decode(val) {
			return TimeSerializerService.decode(val);
		}

		function encode(val) {
			return TimeSerializerService.encode(val);
		}

		$log.debug('Initialized factory');

		return {
			decode: decode,
			encode: encode
		};

	}

	module.factory('TimeSerializer', TimeSerializer);
});

define('seed/helpers/restmod/serializers/enum/EnumSerializerService',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor EnumSerializerService
	 * @memberOf seed.helpers
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	enumField: {
	 *  		serialize: 'Enum'
	 *  	}
	 *  });
	 *
	 * @see https://github.com/platanus/angular-restmod/blob/master/dist/angular-restmod.js#L2064
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function EnumSerializerService($log) {
		$log = $log.getInstance('seed.helpers.EnumSerializerService');

		this.decode = function (key, Enum) {
			return Enum.getValueByKey(key);
		};

		this.encode = function (val, Enum) {
			return Enum.getKeyByValue(val);
		};

		$log.debug('Initialized service');

	}

	module.service('EnumSerializerService', EnumSerializerService);
});

define('seed/helpers/restmod/serializers/enum/EnumDecodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor EnumDecodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	enumField: {
	 *    	decode: 'EnumDecode'
	 * 		}
	 *	});
	 * @see https://github.com/platanus/angular-restmod#decode
	 *
	 * @param $log {Object} Logging service
	 * @param EnumSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function EnumDecodeFilter($log, EnumSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in EnumSerializer');

		return function (key, Enum) {
			return EnumSerializerService.decode(key, Enum);
		};
	}

	module.factory('EnumDecodeFilter', EnumDecodeFilter);
});

define('seed/helpers/restmod/serializers/enum/EnumEncodeFilter',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * @constructor EnumEncodeFilter
	 * @deprecated
	 *
	 * @example
	 *  angular.restmod('resource').mix({
	 *  	createdAt: {
	 *    	encode: 'EnumEncode'
	 *     	param: Enum
	 *    }
	 *  });
	 * @see https://github.com/platanus/angular-restmod#encode
	 *
	 * @param $log {Object} Logging service
	 * @param EnumSerializerService {Object} Serialization service
	 * @return {Function}
	 */
	function EnumEncodeFilter($log, EnumSerializerService) {
		$log.warn('Decoders and encoders will be deprecated in favor of serializers. See example usage in EnumSerializer');

		return function (val, Enum) {
			return EnumSerializerService.encode(val, Enum);
		};
	}

	module.factory('EnumEncodeFilter', EnumEncodeFilter);
});

define('seed/helpers/restmod/models/BaseAPI',['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Base interface for REST communication with server
	 * @interface
	 * @memberOf seed.helpers
	 *
	 * @param $q {Object} AngularJS promise object
	 * @param $log {Object} Logging provider
	 * @param gettextCatalog {Object} Translation service
	 * @param appMessages {Object} Browser notifications wrapper
	 * @return {API} REST interface for Restmod models
	 */
	function BaseAPI($q, $log, gettextCatalog, appMessages) {
		$log = $log.getInstance('seed.BaseAPI');

		/**
		 * API constructor takes model as a parameter
		 * @constructs API
		 *
		 * @param model {restmod.model} Restmod model schema to wrap
		 */
		function API(model) {
			if (_.isUndefined(model)) {
				throw new Error('Argument "model" must be defined');
			}

			this.model = model;

			$log.debug('Model "' + this.model.name + '" constructed BaseAPI instance');
		}

		/**
		 * Creates new model collection
		 * @abstract
		 *
		 * @return {*}
		 * @param params {Object} Additional query params
		 * @param scope {Object} Scope override
		 */
		API.prototype.collection = function (params, scope) {
			return this.model.$collection(params, scope);
		};

		/**
		 * Create new model locally based on init values
		 * @abstract
		 *
		 * @param initValues {Object} Properties to build model with
		 * @param isDataRaw {Boolean} Whether data should treated as non encoded and chain encoding
		 *   automatically based on defined relations or not. Disabled by default
		 * @return {*}
		 */
		API.prototype.build = function (initValues, isDataRaw) {
			if (!_.isUndefined(initValues) && !_.isObject(initValues)) {
				$log.error('Parameter "initValues" must be Object');
				return;
			}

			$log.debug('Model "' + this.model.name + '" called BaseAPI "build" method with params: ' +
				_.stringify(initValues));

			if (isDataRaw) {
				return this.model.$buildRaw(initValues);
			} else {
				return this.model.$build(initValues);
			}
		};


		/**
		 * Fetches single/set of models from server
		 * @abstract
		 *
		 * @param ids {String|Array} Set of ids to fetch
		 * @param params {Object} Query parameters
		 * @return {*}
		 */
		API.prototype.get = function (ids, params) {
			if (!_.isString(ids) && !_.isArray(ids)) {
				$log.error('Parameter "id" must be String or Array');
				return $q.reject();
			}

			$log.debug('Model "' + this.model.name + '" called BaseAPI "get" method with ID: ' +
				_.stringify(ids) + ' and params: ' + _.stringify(params));

			return this.model
				.$find(ids, params)
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Gets the list of models from the server
		 * @abstract
		 *
		 * @return {*|IPromise<TResult>}
		 */
		API.prototype.fetch = function () {

			$log.debug('Model "' + this.model.name + '" called BaseAPI "fetch" method');

			return this.model
				.$collection()
				.$fetch()
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Filters models on server side based on provided prams
		 * @abstract
		 *
		 * @param query {Object} Filtering parameters
		 * @return {any|*}
		 */
		API.prototype.filter = function (query) {

			$log.debug('Model "' + this.model.name + '" called BaseAPI "filter" method with params: ' +
				_.stringify(query));

			return this.model
				.$collection()
				.$search(query)
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Deletes the model form the server
		 * @abstract
		 *
		 * @param model {restmod.model} Restmod model instance
		 * @return {*}
		 */
		API.prototype.remove = function (model) {
			var def = $q.defer();

			if (_.isUndefined(model)) {
				$log.error('Parameter "model" must be defined');
				return def.reject();
			}

			// Display confirmation dialog
			//noinspection JSUnresolvedFunction
			$.SmartMessageBox({
				title: '<i class="fa fa-warning text-warning"></i> ' +
				gettextCatalog.getString('Confirmation'),
				content: gettextCatalog.getString('Are you sure you want to remove item?'),
				buttons: '[' + gettextCatalog.getString('No') + '][' + gettextCatalog.getString('Yes') + ']'
			}, function (choice) {
				if (choice === gettextCatalog.getString('Yes')) {
					return model
						.$destroy()
						.$asPromise()
						.then(function () {
							appMessages.success('Removed ' + model.type);
							def.resolve();
						})
						.catch(function (response) {
							def.reject(handleError(response));
						});
				} else {
					def.reject();
				}
			});

			$log.debug('Model "' + this.model.name +
				'" called BaseAPI "remove" method to remove model with ID: ' + model.id);

			return def.promise;
		};

		/**
		 * Persists the model on the server
		 * @abstract
		 *
		 * @param model {restmod.model} Restmod model instance
		 * @return {*}
		 */

		API.prototype.save = function (model) {
			if (_.isUndefined(model)) {
				$log.error('Parameter "model" must be defined');
				return $q.reject();
			}

			var isNew = !model.$pk;

			if (isNew) {
				model = this.model.$build(model);

				$log.debug('Model "' +
					this.model.name +
					'" called BaseAPI "save" method to create new model');
			} else {
				$log.debug('Model "' +
					this.model.name +
					'" called BaseAPI "save" method to update model');
			}

			return model
				.$save()
				.$asPromise()
				.then(function (model) {
					if (isNew) {
						appMessages.success('Created new ' + model.type);
					} else {
						appMessages.success('Updated ' + model.type);
					}
					return model;
				})
				.catch(handleError);
		};

		//noinspection JSUnusedGlobalSymbols
		/**
		 * Persists model nested as property collection
		 * @abstract
		 *
		 * @param model {Object} Model to be created
		 * @param parentProperty {string} Reference parent property
		 * @return {*}
		 */
		API.prototype.saveNested = function (model, parentProperty) {
			if (_.isUndefined(model)) {
				$log.error('Parameter "model" must be defined');
				return $q.reject();
			}

			if (_.isUndefined(parentProperty)) {
				$log.error('Parameter "parentProperty" must be defined');
				return $q.reject();
			}

			$log.debug('Model "' + this.model.name + '" called BaseAPI "save" method to create model: ' +
				_.stringify(model) + ' for parent property: ' +
				_.stringify(parentProperty));

			return parentProperty
				.$create(model)
				.$asPromise()
				.then(function () {
					appMessages.success('Saved ' + model.type);

				})
				.catch(handleError);
		};

		//noinspection JSValidateJSDoc
		/**
		 * Shows in browser error messages when error occurs
		 *
		 * @param response {Object} Server response payload
		 * @return {*}
		 */
		function handleError(response) {
			var responseObj = response.$response.data || response.$response;
			appMessages.error({
				message: responseObj.message,
				boxType: appMessages.boxEnums.BIG,
				timeout: 10000
			});

			$log.error('Server error: ' + _.stringify(responseObj));

			return $q.reject(responseObj);
		}

		return API;
	}

	module.factory('BaseAPI', BaseAPI);
});

define('seed/helpers/restmod/models/BaseModel',['seed/helpers/module'], function (app) {
	'use strict';

	/**
	 * Restmod base model for all instances
	 * @class BaseModel
	 * @interface
	 * @implements {seed.helpers.BaseAPI}
	 * @memberOf seed.helpers
	 *
	 * @param restmod
	 * @return {Object}
	 */
	function BaseModel(restmod) {
		return restmod.mixin({
			createdAt: {
				serialize: 'Datetime',
				mask: 'CU'
			},

			updatedAt: {
				serialize: 'Datetime',
				mask: 'CU'
			},

			$extend: {
				Model: {
					encodeUrlName: function (_name) {
						return _name;
					}
				}
			}
		});
	}

	app.factory('BaseModel', BaseModel);
});

define('seed/helpers/restmod/styles/NeoStyleAPI',[
	'seed/helpers/module',
	'angular-restmod/preload',
	'angular-restmod/find-many'
], function (app) {
	'use strict';

	/**
	 * JSON:API standard data interpreter settings
	 * @interface
	 * @memberOf seed.helpers
	 *
	 * @param restmod {Object} Restmod service provider
	 * @param appConf {Object} Application configuration
	 * @return {void|*|{$isAbstract, $$chain}|Function|Object}
	 */
	function NeoStyleAPI(restmod, appConf) {
		return restmod.mixin(
			'DefaultPacker',
			'restmod.FindMany',
			'restmod.Preload',
			'BaseModel', {
				$config: {
					style: 'NeoStyleAPI',
					urlPrefix: appConf.environmentSettings.apiUrl,
					primaryKey: 'id',
					jsonRoot: 'data',
					jsonMeta: 'meta'
				}
			});
	}

	app.factory('NeoStyleAPI', NeoStyleAPI);
});

define('seed/helpers/restmod/styles/SassMgrStyleAPI',[
    'lodash',
    'seed/helpers/module'
], function (_ , app) {
    'use strict';
    
    function getUrlPrefix(appConf) {
        var url = appConf.environmentSettings.apiUrl, prefix, ver;
        prefix = _.get(appConf, 'generalSettings.seed.apiPrefix');
        if(!_.isEmpty(prefix)) {
            url += '/' + prefix;
        }
        ver = _.get(appConf, 'generalSettings.seed.apiVer');
        if(_.isNumber(ver)) {
            url += '/v' + ver;
        }
        return url;
    }

    /**
     * JSON:API standard data interpreter settings
     * @interface
     * @memberOf seed.helpers
     *
     * @param restmod {Object} Restmod service provider
     * @param appConf {Object} Application configuration
     * @param $httpParamSerializerJQLike {$httpParamSerializerJQLike}
     * @return {void|*|{$isAbstract, $$chain}|Function|Object}
     */
    function SassMgrStyleAPI(restmod, appConf, $httpParamSerializerJQLike) {
        return restmod.mixin({
            $hooks: {
                'before-request': function (request) {
                    request.paramSerializer = $httpParamSerializerJQLike;
                }
            },
            $config: {
                style: 'SassMgrStyleAPI',
                urlPrefix: getUrlPrefix(appConf)
            }
        });
    }

    app.factory('SassMgrStyleAPI', SassMgrStyleAPI);
});
define('seed/helpers/restmod/packers/PackerUtils',[], function () {
	'use strict';

	/**
	 * Helper methods for serializers
	 * @type {{include: Function, exclude: Function, processFeature: Function}}
	 */
	var PackerUtils = {
		include: function (_source, _list, _do) {
			for (var i = 0, l = _list.length; i < l; i++) {
				_do(_list[i], _source[_list[i]]);
			}
		},

		exclude: function (_source, _skip, _do) {
			for (var key in _source) {
				if (_source.hasOwnProperty(key) && _skip.indexOf(key) === -1) {
					_do(key, _source[key]);
				}
			}
		},

		processFeature: function (_raw, _name, _feature, _other, _do) {
			if (_feature === '.' || _feature === true) {
				var skip = _.isUndefined(name) ? [] : [_name];

				if (_other) {
					skip.push.apply(skip, angular.isArray(_other) ? _other : [_other]);
				}
				PackerUtils.exclude(_raw, skip, _do);
			} else if (typeof _feature === 'string') {
				PackerUtils.exclude(_raw[_feature], [], _do);
			} else { // links is an array
				PackerUtils.include(_raw, _feature, _do);
			}
		}
	};

	return PackerUtils;
});

define('seed/helpers/_includes',[
	'./_interceptors/HttpErrorInterceptor',

	'./_decorators/logDecorator',

	'./_enums/BaseEnum',

	'./_exceptions/exceptionHandler',

	'./_services/templateLoader/neoTemplateLoader',

	'./lodash/lodashExtensions',
	'./_services/eventAggregator/EventAggregatorFactory',

	'./moment/momentDatetimeDayrange',
	'./moment/neoMomentDate',
	'./moment/neoMomentDatetime',
	'./moment/neoMomentTime',

	'./restmod/serializers/datetime/DatetimeSerializerService',
	'./restmod/serializers/datetime/DatetimeDecodeFilter',
	'./restmod/serializers/datetime/DatetimeEncodeFilter',
	'./restmod/serializers/datetime/DatetimeSerializer',

	'./restmod/serializers/date/DateSerializerService',
	'./restmod/serializers/date/DateDecodeFilter',
	'./restmod/serializers/date/DateEncodeFilter',
	'./restmod/serializers/date/DateSerializer',

	'./restmod/serializers/time/TimeSerializerService',
	'./restmod/serializers/time/TimeDecodeFilter',
	'./restmod/serializers/time/TimeEncodeFilter',
	'./restmod/serializers/time/TimeSerializer',

	'./restmod/serializers/enum/EnumSerializerService',
	'./restmod/serializers/enum/EnumDecodeFilter',
	'./restmod/serializers/enum/EnumEncodeFilter',

	'./restmod/models/BaseAPI',
	'./restmod/models/BaseModel',
	'./restmod/styles/NeoStyleAPI',
	'./restmod/styles/SassMgrStyleAPI',
	'./restmod/packers/PackerUtils'
], function () {
	'use strict';
});

/**
 * @namespace seed.components
 * @memberof seed
 */

define('seed/components/module',['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.components', ['seed.helpers', 'seed.auth']);

	module.run(function ($log) {
		$log = $log.getInstance('seed.components.module');

		$log.debug('Initiated module');
	});

	return module;
});

define('seed/components/activities/neoActivities',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * This directive is complete fake. SSE are required to make it work.
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoActivities($document) {
		return {
			restrict: 'EA',
			templateUrl: 'seed/components/activities/activities.html',
			controllerAs: 'vm',
			scope: true,
			controller: function ($scope, $element) {
				var vm = this;
				var ajax_dropdown = $element.find('.ajax-dropdown');
				var badge = $element.find('.badge');

				vm.user = $scope.$root.user;
				vm.setTab = setTab;
				vm.activities = {
					MESSAGE: {
						label: 'Message'
					},
					TASK: {
						label: 'Task'
					}
				};

				function setTab() {
					return false;
				}

				function openAjaxDropdown(timeout) {
					timeout = timeout || 150;

					ajax_dropdown.fadeIn(timeout);
					$element.addClass('active');
				}

				function closeAjaxDropdown(timeout) {
					timeout = timeout || 150;

					ajax_dropdown.fadeOut(timeout);
					$element.removeClass('active');
				}

				$element.on('click', function () {
					if (badge.hasClass('bg-color-red')) {
						badge.removeClass('bg-color-red').text(0);
					}

					if (ajax_dropdown.css('display') !== 'block') {
						openAjaxDropdown(150);
					} else {
						closeAjaxDropdown(150);
					}
				});

				$document.on('mouseup', function (e) {
					if (ajax_dropdown && !$(e.target).closest(ajax_dropdown).length) {
						closeAjaxDropdown(150);
					}
				});
			}
		};
	}

	return module.directive('neoActivities', neoActivities);
});

define('seed/components/customer/neoCustomerSwitcher',['seed/components/module'], function (app) {
	'use strict';

	/**
	 * Renders user profile switcher
	 * @class neoCustomerSwitcher
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-customer-switcher></neo-customer-switcher>
	 *
	 * @param $log {Object} Logging service
	 * @param neoCookie {seed.auth.neoCookie} Cookie service
	 * @param $window {Object} Window object helper
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoCustomerSwitcher($log, neoCookie, $window) {
		$log = $log.getInstance('seed.components.neoCustomerSwitcher');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/components/customer/neoCustomerSwitcher.html',
			controllerAs: 'vm',
			scope: true,
			controller: function ($scope) {
				var vm = this;

				// Variables
				vm.customerCollection = $scope.$root.user.customers;
				vm.user = $scope.$root.user;
				vm.activeCustomer = $scope.$root.customer;

				// Functions
				vm.setActiveCustomer = setActiveCustomer;

				function setActiveCustomer(customer) {
					$scope.$root.customer = customer;
					neoCookie.setCustomer(customer.customerId);

					$window.location.reload();
					$log.debug('Changed user customer to: ' + customer.customerName);
				}


				$log.debug('Initiated controller');
			}
		};
	}

	app.directive('neoCustomerSwitcher', neoCustomerSwitcher);
});

define('seed/components/language/neoLanguageSwitcher',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Renders application language switcher
	 * @class neoLanguageSwitcher
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-language-switcher></neo-language-switcher>
	 *
	 * @param $log {Object} Logging service
	 * @param neoLanguage {seed.auth.neoLanguage}
	 * @param availableLanguages {seed.auth.availableLanguages}
	 * @param activeLanguage {seed.auth.activeLanguage}
	 */
	function neoLanguageSwitcher($log, neoLanguage, availableLanguages, activeLanguage) {
		$log = $log.getInstance('seed.components.neoLanguageSwitcher');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/components/language/neoLanguageSwitcher.html',
			controllerAs: 'vm',
			scope: true,

			controller: function () {
				var vm = this;

				// variables
				vm.languageCollection = availableLanguages;
				vm.activeLanguage = activeLanguage;

				// methods
				vm.setLanguageActive = setLanguageActive;

				/**
				 * Change application language
				 * @param language {seed.auth.Language} Language model
				 */
				function setLanguageActive(language) {
					neoLanguage.setActiveLanguage(language);

					$log.debug('Switched application language');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoLanguageSwitcher', neoLanguageSwitcher);
});

define('seed/components/messages/appMessages',['seed/components/module', 'notification'], function (module) {
	'use strict';

	module.service('appMessages', function (gettext, gettextCatalog, $log) {

		$log = $log.getInstance('seed.components.appMessages');
		$log.debug('Initiated service');

		var appMessages = {
			data: {},
			type: {
				success: {
					key: gettext('Success'),
					icon: 'fa fa-check fadeIn animated',
					color: '#739E73'
				},
				warning: {
					key: gettext('Warning'),
					icon: 'fa fa-bell swing animated',
					color: '#C79121'
				},
				error: {
					key: gettext('Error'),
					icon: 'fa fa-warning shake animated',
					color: '#C46A69'
				},
				info: {
					key: gettext('Info'),
					icon: 'fa fa-bell swing animated',
					color: '#3276B1'
				}
			},

			boxEnums: {
				BIG: 'bigBox',
				SMALL: 'smallBox'
			},

			hideTime: 2500, //ms

			success: function (message) {
				appMessages.set(appMessages.type.success.key, message);
				appMessages.apply();
			},

			warning: function (message) {
				appMessages.set(appMessages.type.warning.key, message);
				appMessages.apply();
			},

			error: function (message) {
				appMessages.set(appMessages.type.error.key, message);
				appMessages.apply();
			},

			set: function (type, message) {
				if (angular.isUndefined(appMessages.data[type])) {
					appMessages.data[type] = [];
				}

				if (_.isString(message)) {
					message = {
						message: message,
						boxType: appMessages.boxEnums.SMALL
					};
				}

				appMessages.data[type].push(message);
			},

			get: function (type) {
				var ret = false;
				if (!angular.isUndefined(appMessages.data[type]) && appMessages.data[type].length > 0) {
					ret = appMessages.data[type].shift();
				}
				return ret;
			},

			getAll: function (type) {
				var ret = false;
				if (!angular.isUndefined(appMessages.data[type]) && appMessages.data[type].length > 0) {
					ret = appMessages.data[type];
					appMessages.data[type] = [];
				}

				return ret;
			},

			apply: function () {
				_.each(appMessages.type, function (type) {
					var msgArray = appMessages.getAll(type.key);
					_.each(msgArray, function (msgObj) {
						var fn = $[msgObj.boxType];
						fn.call(undefined, {
							title: msgObj.title || gettextCatalog.getString(type.key),
							content: msgObj.message || gettextCatalog.getString('Internal server error'),
							color: msgObj.color || type.color,
							timeout: msgObj.timeout || appMessages.hideTime,
							sound: msgObj.sound || false,
							icon: msgObj.icon || type.icon
						});
					});
				});
			}

		};

		return appMessages;
	});
});

define('seed/components/euLogotypes/neoEuLogotypes',['seed/components/module'], function (module) {
	'use strict';

	function neoEuLogotypes($log) {
		$log = $log.getInstance('seed.components.neoEuLogotypes');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'seed/components/euLogotypes/neoEuLogotypes.html'
		};
	}

	module.directive('neoEuLogotypes', neoEuLogotypes);
});

define('seed/components/breadcrumbs/neoStateBreadcrumbs',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Creates a Breadcrumbs line based on state data.title attribute
	 * @class neoStateBreadcrumbs
	 * @memberOf seed.components
	 *
	 * @return {{restrict: string, replace: boolean, templateUrl: string, scope: {}, link: Function}}
	 * @param $rootScope
	 * @param $state
	 * @param $log {Object} Logging service
	 *
	 * @example
	 *  <neo-state-breadcrumbs></neo-state-breadcrumbs>
	 *
	 *  State definition object:
	 *
	 *  .state('app.tasks.tracker.entries', {
   *		url: '...',
   *				views: {...}
   *				data: {
   *					title: 'Entries'
   *				}
   *			})
	 */

	function neoStateBreadcrumbs($rootScope, $state, $log) {
		$log = $log.getInstance('seed.components.neoStateBreadcrumbs');

		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'seed/components/breadcrumbs/neoStateBreadcrumbs.html',
			scope: {},
			controllerAs: 'vm',
			controller: function () {

				var vm = this || {};

				/**
				 * Recreate on state change
				 * */
				$rootScope.$on('$stateChangeStart', function (event, state) {
					processState(state);
				});

				processState($state.current);

				function processState(state) {
					var breadcrumbs;
					if (state.data && state.data.breadcrumbs) {
						breadcrumbs = state.data.breadcrumbs;
					} else {
						breadcrumbs = fetchBreadcrumbs(state.name, []);
					}
					vm.crumbs = breadcrumbs;
				}

				function fetchBreadcrumbs(stateName, breadcrumbs) {
					var state = $state.get(stateName);

					if (state && state.data && state.data.title && breadcrumbs.indexOf(state.data.title) === -1) {
						breadcrumbs.unshift({title: state.data.title, stateName: state.name});
					}

					var parentName = stateName.replace(/.?\w+$/, '');
					if (parentName) {
						return fetchBreadcrumbs(parentName, breadcrumbs);
					} else {
						return breadcrumbs;
					}
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoStateBreadcrumbs', neoStateBreadcrumbs);

});

define('seed/components/breadcrumbs/bigBreadcrumbs',['seed/components/module'], function (module) {
	'use strict';

	function bigBreadcrumbs($log) {
		$log = $log.getInstance('seed.components.bigBreadcrumbs');

		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			replace: true,
			template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
			scope: {
				items: '=',
				icon: '@'
			},

			link: function (scope, element) {
				var first = _.first(scope.items);
				var icon = scope.icon || 'home';

				element
					.find('h1')
					.append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);

				_.rest(scope.items)
					.forEach(function (item) {
						element
							.find('h1')
							.append(' <span>> ' + item + '</span>');
					});

				$log.debug('Linked directive');
			}
		};
	}

	module.directive('bigBreadcrumbs', bigBreadcrumbs);
});

define('seed/components/navigation/neoNavigation',['seed/components/module'], function (module) {
	'use strict';

	function neoNavigation($log, $state, $q, $compile, $timeout, neoTemplateLoader, appConf) {

		$log = $log.getInstance('seed.components.neoNavigation');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			template: '<ul></ul>',
			scope: {},
			controllerAs: 'vm',

			/**
			 * Composes container navigation using templates placed in `src/app{appName}/__misc/_navigation/navigation.html` from `src/config/apps.json`.
			 * Navigation elements are added using [neoNavigationItem]{@link seed.components.neoNavigationItem} and [neoNavigationGroup]{@link seed.components.neoNavigationGroup} directives.
			 * @class neoNavigation
			 * @memberOf seed.components
			 *
			 * @example
			 * <neo-navigation></neo-navigation>
			 *
			 * @requires $log - Logging service
			 * @requires $state - State helper
			 * @requires $q - Angular implementation of promises
			 * @requires $compile - Compiles an HTML string or DOM into a template
			 * @requires $timeout - Timeout service
			 * @requires neoTemplateLoader - Caching utility
			 * @requires appConf - Application configuration
			 *
			 * @param $scope {Object} Angular scope provider
			 * @param $element {Object} Angular HTML element provider
			 */
			controller: function ($scope, $element) {
				/** @lends seed.components.neoNavigation.prototype */
				var vm = this;

				// variables
				/**
				 * @property templatePromises {Array} Set of promises loading navigation template HTML
				 */
				vm.templatePromises = [];

				// methods
				/**
				 * @method
				 * @description initializes directive
				 */
				vm.init = init;

				vm.init();


				function init(){
					vm.templatePromises = _
						.chain(appConf.appsSettings)
						.filter(function(app){
							return !_.isUndefined(app.order);
						})
						.sortBy('order')
						.pluck('directory')
						.map(function (directory) {
							return neoTemplateLoader.load('apps/' + directory + '/__misc/_navigation/navigation.html');
						})
						.value();

					$q
						.all(vm.templatePromises)
						.then(function (templates) {
							var html = templates.join();
							$element.contents().append($compile(html)($scope));

							// Async apply is not working here (ಠ╭╮ಠ)
							$timeout(function () {
								$element
									.find('a[ui-sref]')
									.filter(function () {
										return $state.includes($(this).attr('ui-sref'));
									})
									.parents('li:not(:first)')
									.each(function () {
										$(this)
											.addClass('open')
											.find('ul:first')
											.slideDown(0);
									});
							});
						})
						.catch(function () {
							$log.error('Error loading navigation templates');
						});

					$log.debug('Initialized controller');
				}
			}
		};
	}

	module.directive('neoNavigation', neoNavigation);
});

define('seed/components/navigation/neoNavigationGroup',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Show collapsible group inside of neoNavigation directive.
	 * @class neoNavigationGroup
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-navigation-group
	 *  icon="fa-file-o"
	 *  label="{{'Documents'|translate}}"
	 *  state="app.docs.documents"
	 *  neo-permission-only="ND_DOCUMENT">
	 *
	 *    <neo-navigation-item
	 *      icon="fa-file-o"
	 *      label="{{'Owned'|translate}}"
	 *      state="app.docs.documents.owned">
	 *    </neo-navigation-item>
	 *
	 *  </neo-navigation-group>
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} State helper
	 * @return {{
	 * 	restrict: string,
	 * 	scope: boolean,
	 * 	replace: boolean,
	 * 	transclude: boolean,
	 * 	controllerAs: string,
	 * 	templateUrl: string,
	 * 	bindToController: {icon: string, label: string},
	 * 	controller: Function
	 * }}
	 */
	function neoNavigationGroup($log, $state) {

		$log = $log.getInstance('seed.components.neoNavigationGroup');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			scope: true,
			replace: true,
			transclude: true,
			controllerAs: 'vm',
			require: '^neoNavigation',
			templateUrl: 'seed/components/navigation/neoNavigationGroup.html',
			bindToController: {
				icon: '@',
				label: '@',
				state: '@'
			},

			controller: function ($scope, $element) {
				var vm = this || {};

				// variables
				// functions
				vm.toggleGroup = toggleGroup;
				vm.isActive = isActive;
				vm.isOpen = isOpen;

				function toggleGroup() {
					$element
						.siblings('.open')
						.each(function () {
							$(this)
								.removeClass('open')
								.find('ul:first')
								.slideUp(200)
								.end()
								.find('.open')
								.each(function () {
									$(this)
										.removeClass('open')
										.find('ul:first')
										.slideUp(200);
								});
						});

					$element
						.toggleClass('open')
						.find('ul:first')
						.slideToggle(200);


					$log.debug('Toggled navigation group:' + vm.state);
				}

				function isActive() {
					return $state.includes(vm.state);
				}

				function isOpen() {
					return $element.hasClass('open');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoNavigationGroup', neoNavigationGroup);
});

define('seed/components/navigation/neoNavigationItem',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Renders single navigation item inside neoNavigation directive.
	 * @class neoNavigationItem
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-navigation-item
	 *  icon="fa-file-o"
	 *  label="{{'Owned'|translate}}"
	 *  state="app.docs.documents.owned">
	 * </neo-navigation-item>
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} State helper service
	 * @return {{
	 * 	restrict: string,
	 * 	scope: boolean,
	 * 	replace: boolean,
	 * 	controllerAs: string,
	 * 	templateUrl: string,
	 * 	bindToController: {icon: string, state: string, label: string},
	 * 	controller: Function
	 * }}
	 */
	function neoNavigationItem($log, $state) {

		$log = $log.getInstance('seed.components.neoNavigationItem');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			scope: true,
			replace: true,
			controllerAs: 'vm',
			require: '^neoNavigation',
			templateUrl: 'seed/components/navigation/neoNavigationItem.html',
			bindToController: {
				icon: '@',
				state: '@',
				label: '@'
			},
			controller: function ($element) {
				var vm = this || {};

				// variables
				// functions
				vm.toggleItem = toggleItem;
				vm.isActive = isActive;

				function toggleItem() {
					$element
						.siblings('.open')
						.each(function () {
							$(this)
								.removeClass('open')
								.find('ul:first')
								.slideUp(200);
						});

					$log.debug('Toggled navigation item:' + vm.state);
				}

				function isActive() {
					return $state.includes(vm.state);
				}
			}
		};
	}

	module.directive('neoNavigationItem', neoNavigationItem);
});

define('seed/components/pageTitle/neoPageTitle',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Displays customized page title based on state of application.
	 * @class neoPageTitle
	 * @memberOf seed.components
	 *
	 * @example
	 * <title neo-page-title></title>
	 *
	 * Along with module definition:
	 *
	 * module.config(function ($stateProvider) {
	 * 	$stateProvider
	 * 	.state('app.dashboard', {
	 * 		[...]
	 * 		data: {
	 * 		title: 'Dashboard'
	 * 		}
	 * 		});
	 * });
	 *
	 * @param $log {Object} Logging service
	 * @param appConf {Object} Application configuration
	 * @returns {{restrict: string, controller: Function}}
	 */
	function neoPageTitle($log, appConf) {
		return {
			restrict: 'A',
			controller: function ($scope, $element, gettextCatalog) {

				$log = $log.getInstance('seed.components.neoPageTitle');
				$log.debug('Initiated directive');

				$scope.$root.$on('$stateChangeStart', function (event, toState) {

					var title = appConf.generalSettings.name;
					if (_.has(toState.data, 'title')) {
						title += (' | ' + gettextCatalog.getString(toState.data.title));
					}
					$element.text(title);

					$log.debug('Updated page title attribute');
				});

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoPageTitle', neoPageTitle);
});

define('seed/components/versionTag/neoVersionTag',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Displays the version and build number at the bottom of side navigation panel
	 * @class neoVersionTag
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @param appConf {Object} Container configuration
	 * @return {{restrict: string, templateUrl: string, scope: boolean, link: Function}}
	 */
	function neoVersionTag($log, appConf) {

		$log = $log.getInstance('seed.components.neoVersionTag');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'seed/components/versionTag/neoVersionTag.html',
			scope: true,
			link: function (scope) {
				var vm = scope.vm || (scope.vm = {});
				vm.conf = appConf;
				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoVersionTag', neoVersionTag);
});




define('seed/components/cookieConsent/cookieConsent',['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Creates a Breadcrumbs line based on state data.title attribute
	 * @class cookieConsent
	 * @memberOf seed.components
	 *
	 * @example
	 *  <cookie-consent></cookie-consent>
	 *
	 * @param $log {Object} Logging service
	 * @param neoCookie {seed.auth.neoCookie}
	 */

	function cookieConsent($log, neoCookie) {
		$log = $log.getInstance('seed.components.cookieConsent');

		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'seed/components/cookieConsent/cookieConsent.html',
			scope: {},
			controllerAs: 'vm',
			controller: function ($element) {
				var vm = this || {};

				vm.init = init;
				vm.acceptCookies = acceptCookies;

				vm.init();

				function init() {
					var isCookieConsentAccepted = neoCookie.getCookieConsent();
					if (isCookieConsentAccepted) {
						$element.hide();
					}
				}

				function acceptCookies() {
					neoCookie.setCookieConsent(true);
					$element.hide();
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('cookieConsent', cookieConsent);

});

define('seed/components/favicon/neoFavicon',['seed/components/module'], function (module) {
	'use strict';

	function neoFavicon($log, appConf) {
		return {
			restrict: 'A',
			compile: function (tElement) {

				$log = $log.getInstance('seed.components.neoFavicon');
				$log.debug('Initiated directive');

				if(!appConf.generalSettings.favicon || !appConf.generalSettings.favicon.uri) {
					tElement.remove();

					return;
				}

				if(appConf.generalSettings.favicon.sizes) {
					tElement.attr('sizes', appConf.generalSettings.favicon.sizes);
				}

				tElement.attr('href', appConf.generalSettings.favicon.uri);
			}
		};
	}

	module.directive('neoFavicon', neoFavicon);
});

define('seed/components/_includes',[
	'./activities/neoActivities',
	'./customer/neoCustomerSwitcher',
	'./language/neoLanguageSwitcher',
	'./messages/appMessages',
	'./euLogotypes/neoEuLogotypes',

	'./breadcrumbs/neoStateBreadcrumbs',
	'./breadcrumbs/bigBreadcrumbs',

	'./navigation/neoNavigation',
	'./navigation/neoNavigationGroup',
	'./navigation/neoNavigationItem',
	'./pageTitle/neoPageTitle',
	'./versionTag/neoVersionTag',

	'./cookieConsent/cookieConsent',
	'./favicon/neoFavicon'
], function () {
	'use strict';
});

define('seed/layout/module',['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.layout', ['app.conf']);

	module.config(function ($stateProvider, $urlRouterProvider, appConf) {

		$stateProvider.state('app', {
			abstract: true,
			views: {
				root: {
					controllerAs: 'vm',
					templateUrl: 'seed/layout/views/view.html',
					controller: function (appConf) {
						var vm = this;
						vm.appConf = appConf;
					}
				}
			},
			data: {
				permissions: {
					only: ['AUTHORIZED'],
					redirectTo: 'auth.login'
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go(appConf.generalSettings.defaultRedirectState);
		});
	});

	module.run(function (PermissionStore, neoSession, $rootScope, authConf) {

		$rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams) {
			$rootScope.requestedState = undefined;
			if (toState.name !== 'auth.logout') {
				$rootScope.requestedState = {
					toState: toState.name,
					toParams: toParams
				};
			}
		});

		$rootScope.$on(authConf.neoPermission.events.clear, function () {
			PermissionStore.definePermission('AUTHORIZED', function () {
				return neoSession.checkSession();
			});
		});

		PermissionStore.definePermission('AUTHORIZED', function () {
			return neoSession.checkSession();
		});
	});

	return module;
});

define('seed/layout/actions/toggleMenu',['seed/layout/module'], function (module) {
	'use strict';

	module.directive('toggleMenu', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {
				var $body = $('body');

				/**
				 * Description
				 * @method toggleMenu
				 */
				var toggleMenu = function () {
					if (!$body.hasClass('menu-on-top')) {
						$('html').toggleClass('hidden-menu-mobile-lock');
						$body.toggleClass('hidden-menu');
						$body.removeClass('minified');
					} else if ($body.hasClass('menu-on-top') && $body.hasClass('mobile-view-activated')) {
						$('html').toggleClass('hidden-menu-mobile-lock');
						$body.toggleClass('hidden-menu');
						$body.removeClass('minified');
					}
				};

				element.on('click', toggleMenu);

				scope.$on('requestToggleMenu', function () {
					toggleMenu();
				});
			}
		};
	});
});

define('seed/layout/actions/fullScreen',['seed/layout/module'], function (module) {
	'use strict';

	module.directive('fullScreen', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {
				var $body = $('body');
				/**
				 * Description
				 * @method toggleFullSceen
				 */
				var toggleFullSceen = function () {
					if (!$body.hasClass('full-screen')) {
						$body.addClass('full-screen');
						if (document.documentElement.requestFullscreen) {
							document.documentElement.requestFullscreen();
						} else if (document.documentElement.mozRequestFullScreen) {
							document.documentElement.mozRequestFullScreen();
						} else if (document.documentElement.webkitRequestFullscreen) {
							document.documentElement.webkitRequestFullscreen();
						} else if (document.documentElement.msRequestFullscreen) {
							document.documentElement.msRequestFullscreen();
						}
					} else {
						$body.removeClass('full-screen');
						if (document.exitFullscreen) {
							document.exitFullscreen();
						} else if (document.mozCancelFullScreen) {
							document.mozCancelFullScreen();
						} else if (document.webkitExitFullscreen) {
							document.webkitExitFullscreen();
						}
					}
				};

				element.on('click', toggleFullSceen);
			}
		};
	});
});

define('seed/layout/_includes',[
	'./actions/toggleMenu',
	'./actions/fullScreen'
], function () {
	'use strict';
});

/**
 * @namespace seed.auth
 * @memberOf seed
 */

define('seed/auth/module',[
	'angular',
	'moment',
	'moment-timezone',
	'angular-moment',
	'angular-cookies',
	'angular-gettext',
	'angular-ui-router',
	'angular-restmod',
	'angular-permission'
], function (ng) {
	'use strict';

	var module = ng.module('seed.auth', [
		// libs
		'angularMoment',
		'ngCookies',
		'ui.router',
		'permission',
		'gettext',
		'restmod',
		// seed modules
		'seed.templateCache',
		'seed.helpers',
		'seed.components',
		'seed.forms',
		// sub-modules
		'seed.auth.login',
		'seed.auth.register',
		'seed.auth.password'
	]);

	module.config(function ($stateProvider) {

		$stateProvider
			.state('auth', {
				abstract: true,
				views: {
					root: {
						templateUrl: 'seed/auth/views/view.html'
					}
				}
			})

			.state('auth.logout', {
				onEnter: function ($rootScope, $state, UserAPI, neoSession) {
					UserAPI
						.logout($rootScope.user)
						.finally(function () {
							return neoSession.clearSession();
						})
						.finally(function () {
							$state.go('auth.login');
						});
				}

			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth');
		$log.debug('Initiated module');
	});

	return module;
});

define('seed/auth/_services/neoCookie',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Service for manipulating cookies data
	 *
	 * @class neoCookie
	 * @memberOf seed.auth
	 */
	function neoCookie($log, $cookies) {

		$log = $log.getInstance('seed.auth.neoCookie');
		$log.debug('Initiated service');

		var self = this;

		this.getCustomer = getCustomer;
		this.setCustomer = setCustomer;
		this.removeCustomer = removeCustomer;

		this.getToken = getToken;
		this.setToken = setToken;
		this.removeToken = removeToken;

		this.getLanguage = getLanguage;
		this.setLanguage = setLanguage;
		this.removeLanguage = removeLanguage;

		this.getCookieConsent = getCookieConsent;
		this.setCookieConsent = setCookieConsent;
		this.removeCookieConsent = removeCookieConsent;

		this.clearCookie = clearCookie;

		/**
		 * @method
		 *
		 * @returns {String} Active customer ID
		 */
		function getCustomer() {
			$log.debug('Fetched "activeCustomer" value from cookie');

			removeCookieValueIfObject('activeCustomer');
			return $cookies.get('activeCustomer');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param customerId {String} Active customer ID
		 */
		function setCustomer(customerId) {
			if (!_.isString(customerId)) {
				throw new TypeError('Parameter "customerId" must be String');
			}

			$cookies.put('activeCustomer', customerId);

			$log.debug('Updated "activeCustomer" value in cookie to ' + customerId);
		}

		/**
		 * @method
		 */
		function removeCustomer() {
			$cookies.remove('activeCustomer');

			$log.debug('Removed "activeCustomer" from cookie');
		}

		/**
		 * @method
		 *
		 * @returns {String} Session token
		 */
		function getToken() {
			$log.debug('Fetched "token" value from cookie');

			removeCookieValueIfObject('token');
			return $cookies.get('token');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param token {String} Session token
		 */
		function setToken(token) {
			if (!_.isString(token)) {
				throw new TypeError('Parameter "token" must be String');
			}

			$cookies.put('token', token);

			$log.debug('Updated "token" value in cookie to ' + token);
		}

		/**
		 * @method
		 */
		function removeToken() {
			$cookies.remove('token');

			$log.debug('Removed "token" from cookie');
		}

		/**
		 * @method
		 *
		 * @returns {String} locale code
		 */
		function getLanguage() {
			removeCookieValueIfObject('lang');
			return $cookies.get('lang');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param locale {String} locale code
		 */
		function setLanguage(locale) {
			if (!_.isString(locale)) {
				throw new TypeError('Parameter "locale" must be String');
			}

			$cookies.put('lang', locale);

			$log.debug('Updated "lang" value in cookie');
		}

		/**
		 * @method
		 */
		function removeLanguage() {
			$cookies.remove('lang');

			$log.debug('Removed "lang" from cookie');
		}

		/**
		 * @method
		 *
		 * @returns {Boolean} locale code
		 */
		function getCookieConsent() {
			$log.debug('Fetched "cookieConsent" value from cookie');

			return $cookies.getObject('cookieConsent');
		}

		/**
		 * @method
		 * @throws {TypeError}
		 *
		 * @param cookieConsent {Boolean} Is cookie consent accepted
		 */
		function setCookieConsent(cookieConsent) {
			if (!_.isBoolean(cookieConsent)) {
				throw new TypeError('Parameter "cookieConsent" must be Boolean');
			}

			$cookies.putObject('cookieConsent', cookieConsent);

			$log.debug('Updated "cookieConsent" value in cookie');
		}

		/**
		 * @method
		 */
		function removeCookieConsent() {
			$cookies.remove('cookieConsent');

			$log.debug('Removed "cookieConsent" from cookie');
		}

		/**
		 * @method
		 */
		function clearCookie() {
			self.removeCookieConsent();
			self.removeCustomer();
			self.removeLanguage();
			self.removeToken();

			$log.debug('Cleared cookie');
		}

		/**
		 * @method
		 * @private
		 *
		 * This method should be deprecated as soon as possible
		 *
		 * @param key {String} Cookie key to test
		 */
		function removeCookieValueIfObject(key) {
			var cookieValue = $cookies.get(key);

			// Duck-typing based detection if string is serialized JSON object or object-like string
			if (cookieValue && (cookieValue.indexOf('{') >= 0 || cookieValue.indexOf('"') >= 0)) {
				$cookies.remove(key);

				$log.debug('Removed object-like "' + key + '" value from cookie');
			}
		}

	}

	module.service('neoCookie', neoCookie);
});


define('seed/auth/_services/neoSession',['seed/auth/module', 'angular', 'moment'], function (module, angular, moment) {
	'use strict';

	/**
	 * Session management service
	 * @class neoSession
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param $q {Object} Angular promise provider
	 * @param $rootScope {Object} Angular global scope helper
	 * @param neoCookie {seed.auth.neoCookie}
	 * @param neoPermission {seed.auth.neoPermission}
	 * @param neoRequestHeaders {seed.auth.neoRequestHeaders}
	 * @param UserAPI {seed.auth.UserAPI}
	 * @param authConf {seed.auth.authConf}
	 * @param appConf {seed.appConf}
	 */
	function neoSession($log, $q, $rootScope, neoCookie, 
						neoPermission, neoRequestHeaders, 
						UserAPI, authConf, appConf) {

		$log = $log.getInstance('seed.auth.neoSession');
		$log.debug('Initiated service');

		var self = this;

		this.setSession = setSession;
		this.clearSession = clearSession;
		this.checkSession = checkSession;

		/**
		 * @method
		 * @throws {ReferenceError}
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 * @returns {promise}
		 */
		function setSession(user, customer) {
			if (!angular.isDefined(user)) {
				throw new ReferenceError('Parameter "user" must be defined');
			}

			if (!angular.isDefined(customer)) {
				throw new ReferenceError('Parameter "customer" must be defined');
			}

			try {
				setAccessRights(customer);
				setCookieObjects(user, customer);
				setTimezone(user);
				setGlobalObjects(user, customer);
				setRequestHeaders(user, customer);

				$rootScope.$broadcast(authConf.neoSession.events.setSession);

				$log.debug('Set up new user session');
				return $q.resolve();

			} catch (err) {
				$log.error('Error setting up user session', err);
				return $q.reject(err);
			}
		}

		/**
		 * @method
		 *
		 * @returns {promise}
		 */
		function clearSession() {
			clearCookieObject();
			clearAccessRights();
			clearGlobalObject();
			clearRequestHeaders();

			$rootScope.$broadcast(authConf.neoSession.events.clearSession);

			$log.debug('Cleared user session');
			return $q.resolve();
		}

		function hasSetTokenAndCustomerInGlobals() {
			return !!($rootScope.user && $rootScope.customer);
		}

		/**
		 * @method
		 *
		 * @returns {promise}
		 */
		function checkSession() {

			var token = neoCookie.getToken(),
				customerId = neoCookie.getCustomer();
			
			neoRequestHeaders.setAppCode(appConf.environmentSettings.appCode);

			if (!(hasSetTokenAndCustomerInCookies(token, customerId))) {
				$log.debug('Not found stored in cookie "token" and "activeCustomer"');

				return $q.reject();
			}


			if (!hasSetTokenAndCustomerInGlobals()) {
				$log.debug('Not found globally defined "token" and "activeCustomer"');

				neoRequestHeaders.setAuthToken(token);

				return UserAPI
					.authInfo()
					.then(function (user) {
						$log.debug('Successfully checked if user user session is still valid');

						var customer = _.findWhere(user.customers, {customerId: customerId});
						return self.setSession(user, customer);
					})
					.catch(function (e) {
						$log.error('Error while checking user session', e);

						return self
							.clearSession()
							.finally(function () {
								return $q.reject(e);
							});
					});
			}

			return $q.resolve();
		}

		/**
		 * @method
		 * @private
		 *
		 * @param token {String}
		 * @param customerId {String}
		 *
		 * @returns {Boolean}
		 */
		function hasSetTokenAndCustomerInCookies(token, customerId) {
			return !!(token && customerId);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param customer {seed.auth.Customer}
		 */
		function setAccessRights(customer) {
			var permissionNames = customer.featureKeys;
			var rolesNames = _.map(customer.roles, function (role) {
				return role.roleName;
			});

			neoPermission.setPermissions(permissionNames);
			neoPermission.setRoles(rolesNames);

			$log.debug('Set access rights');
		}

		/**
		 * @method
		 * @private
		 */
		function clearAccessRights() {
			neoPermission.clear();

			$log.debug('Cleared access rights');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setCookieObjects(user, customer) {
			var customerId = customer.customerId;
			var token = user.$metadata.token;

			neoCookie.setCustomer(customerId);
			neoCookie.setToken(token);

			$log.debug('Set cookie properties');
		}

		/**
		 * @method
		 * @private
		 */
		function clearCookieObject() {
			neoCookie.removeToken();
			neoCookie.removeCustomer();

			$log.debug('Removed cookie token and active customer');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 */
		function setTimezone(user) {
			if (user.timezone) {
				moment.tz.setDefault(user.timezone);

				$log.debug('Set timezone');
			}
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setGlobalObjects(user, customer) {
			$rootScope.user = user;
			$rootScope.customer = customer;

			$log.debug('Set customer and user objects available globally');
		}

		/**
		 * @method
		 * @private
		 */
		function clearGlobalObject() {
			$rootScope.user = undefined;
			$rootScope.customer = undefined;

			$log.debug('Removed global objects');
		}

		/**
		 * @method
		 * @private
		 *
		 * @param user {seed.auth.User}
		 * @param customer {seed.auth.Customer}
		 */
		function setRequestHeaders(user, customer) {
			var customerId = customer.customerId;
			var token = user.$metadata.token;

			neoRequestHeaders.setCustomerId(customerId);
			neoRequestHeaders.setAuthToken(token);

			$log.debug('Set request headers');
		}

		/**
		 * @method
		 * @private
		 */
		function clearRequestHeaders() {
			neoRequestHeaders.clearHeaders();

			$log.debug('Cleared request headers');
		}
	}

	module.service('neoSession', neoSession);
});

define('seed/auth/_services/neoLanguage',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Service for manipulating language changes
	 *
	 * @class neoLanguage
	 * @memberOf seed.auth
	 *
	 * @param $log
	 * @param $rootScope
	 * @param $window
	 * @param availableLanguages
	 * @param activeLanguage
	 * @param defaultLanguage
	 * @param gettextCatalog
	 * @param amMoment
	 * @param authConf {seed.auth.authConf}
	 * @param neoCookie {seed.auth.neoCookie}
	 * @param LanguageAPI
	 * @param appConf
	 * @param neoRequestHeaders {seed.auth.neoRequestHeaders}
	 */
	function neoLanguage($log, $rootScope, $window,
											 availableLanguages, activeLanguage, defaultLanguage,
											 gettextCatalog, amMoment, authConf,
											 neoCookie, neoRequestHeaders, LanguageAPI, appConf) {

		$log = $log.getInstance('seed.auth.neoLanguage');
		$log.debug('Initiated service');

		this.init = init;
		this.getLanguageByLocale = getLanguageByLocale;
		this.isLanguageAvailable = isLanguageAvailable;
		this.setActiveLanguage = setActiveLanguage;

		/**
		 * Initiates available language collection and select initial language
		 * @method
		 */
		function init() {

			initAvailableLanguagesCollection();
			initDefaultLanguage();

			var cookieLang = neoCookie.getLanguage();

			if (isLanguageAvailable(cookieLang)) {
				setActiveLanguageFromCookie(cookieLang);
				return;
			}

			var browserLang = detectBrowserLanguage();

			if (isLanguageAvailable(browserLang)) {
				setActiveLanguageFromBrowser(browserLang);
				return;
			}

			setActiveLanguage(defaultLanguage);
			$log.debug('Set up container with language from default settings');
		}

		/**
		 * Initialize availableLanguages collection based on provided config
		 * @method
		 * @private
		 *
		 * @throws {ReferenceError}
		 */
		function initAvailableLanguagesCollection() {
			try {
				_.assign(availableLanguages, LanguageAPI
					.collection()
					.$decode(appConf.languageSettings.languageCollection));
				$log.debug('Initiated available languages collection');
			} catch (err) {
				throw new ReferenceError('Malformed "availableLanguages" collection');
			}
		}


		/**
		 * Builds defaultLanguage object based on provided config
		 * @method
		 * @private
		 */
		function initDefaultLanguage() {
			defaultLanguage = LanguageAPI.build(appConf.languageSettings.defaultLanguage);
			$log.debug('Initiated default language');
		}

		/**
		 * Set activeLanguage based on cookie stored locale
		 * @method
		 * @private
		 *
		 * @param cookieLang {String} Cookie locale string
		 */
		function setActiveLanguageFromCookie(cookieLang) {
			var cookieLanguageObject = getLanguageByLocale(cookieLang);
			setActiveLanguage(cookieLanguageObject);

			$log.debug('Set up container with language from cookies');
		}

		/**
		 * Retrieve language from brwser preferences
		 * @method
		 * @private
		 *
		 * @returns {string} Browser locale string
		 */
		function detectBrowserLanguage() {
			return $window.navigator.language ||
				$window.navigator.userLanguage ||
				$window.navigator.systemLanguage;
		}


		/**
		 * Set activeLanguage based on browser locale
		 * @method
		 * @private
		 *
		 * @param browserLang {String} Browser locale string
		 */
		function setActiveLanguageFromBrowser(browserLang) {
			var browserLanguageObject = getLanguageByLocale(browserLang);
			setActiveLanguage(browserLanguageObject);

			$log.debug('Set up container with language from browser preferences');
		}

		/**
		 * Finds if language is defined in language collection by locale
		 * @method
		 *
		 * @param locale {String}
		 *
		 * @returns {boolean}
		 */
		function isLanguageAvailable(locale) {
			return _.some(availableLanguages, function (language) {
				return language.locale === locale ||
					language.localePOSIX === locale ||
					language.code === locale;
			});
		}

		/**
		 * Set application interface language
		 * @method
		 *
		 * @throws {ReferenceError}
		 *
		 * @param language {seed.auth.Language}
		 */
		function setActiveLanguage(language) {
			if (_.isUndefined(language.locale) && !isLanguageAvailable(language.locale)) {
				throw new ReferenceError('Trying to set language to not available one');
			}

			_.assign(activeLanguage, language);

			// Write locale to cookie
			neoCookie.setLanguage(activeLanguage.locale);
			neoRequestHeaders.setAcceptLanguage(language.locale);

			// Update libraries locale settings
			gettextCatalog.setCurrentLanguage(language.localePOSIX);
			amMoment.changeLocale(language.locale);

			$rootScope.$broadcast(authConf.neoLanguage.events.setActiveLanguage, language);

			$log.debug('Set application language to: ' + language.localePOSIX);
		}

		/**
		 * Find language by it's locale name
		 * @method
		 *
		 * @param locale {String} locale string
		 * @returns {seed.auth.Language}
		 */
		function getLanguageByLocale(locale) {
			return _.find(availableLanguages, function (language) {
				if (language.locale === locale ||
					language.localePOSIX === locale ||
					language.code === locale) {
					return language;
				}
			});
		}
	}

	module.service('neoLanguage', neoLanguage);
});


define('seed/auth/_services/neoPermission',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Manges application access control
	 * @class neoPermission
	 * @memberOf seed.auth
	 *
	 * @param $log {Object}
	 * @param $rootScope {Object}
	 * @param authConf {seed.auth.authConf}
	 * @param PermissionStore {permission.PermissionStore}
	 * @param RoleStore {permission.RoleStore}
	 */
	function neoPermission($log, $rootScope,
												 authConf, PermissionStore, RoleStore) {

		$log = $log.getInstance('seed.auth.neoPermission');
		$log.debug('Initiated service');

		var permissions = [];
		var roles = [];

		this.setPermissions = setPermissions;
		this.setRoles = setRoles;
		this.clear = clear;

		/**
		 * @method
		 *
		 * @param permissionsArray {Array}
		 */
		function setPermissions(permissionsArray) {
			permissions = permissionsArray;

			_.each(permissions, function (permissionName) {
				PermissionStore.definePermission(permissionName, validatePermission);
			});

			$rootScope.$broadcast(authConf.neoPermission.events.setPermissions);
		}

		/**
		 * @method
		 *
		 * @param rolesArray {Array}
		 */
		function setRoles(rolesArray) {
			roles = rolesArray;

			_.each(roles, function (roleName) {
				RoleStore.defineRole(roleName, [], validateRole);
			});

			$rootScope.$broadcast(authConf.neoPermission.events.setRoles);
		}

		/**
		 * @method
		 */
		function clear() {
			PermissionStore.clearStore();
			RoleStore.clearStore();

			$rootScope.$broadcast(authConf.neoPermission.events.clear);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param permissionName
		 * @returns {boolean}
		 */
		function validatePermission(permissionName) {
			return _.includes(permissions, permissionName);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param roleName
		 * @returns {boolean}
		 */
		function validateRole(roleName) {
			return _.includes(roles, roleName);
		}
	}

	module.service('neoPermission', neoPermission);
});


define('seed/auth/_services/neoRequestHeaders',['lodash', 'seed/auth/module'], function (_, module) {
	'use strict';

	/**
	 * Expands every HTTP request by additional headers
	 * @class neoRequestHeaders
	 * @memberOf seed.auth
	 *
	 * @param $http {Object} Facilitates communication with the remote HTTP servers
	 * @param $log {Object} Logging service
	 */
	function neoRequestHeaders($log, $http) {
		$log = $log.getInstance('seed.auth.neoRequestHeaders');
		$log.debug('Initiated service');

		this.setAuthToken = setAuthToken;
		this.setCustomerId = setCustomerId;
		this.setAcceptLanguage = setAcceptLanguage;
		this.setAppCode = setAppCode; // this is stupidity to write code like this, my manifest by cojack
		this.clearHeaders = clearHeaders;

		/**
		 * @method
		 * @throws {ReferenceError}
		 *
		 * @param token {String}
		 */
		function setAuthToken(token) {
			if (_.isEmpty(token)) {
				throw new ReferenceError('Token in Authorization header must not be empty');
			}

			$http.defaults.headers.common['Authorization'] = 'token ' + token;

			$log.debug('Set Authorization header ', token);
		}

		/**
		 * @method
		 * @throws {ReferenceError}
		 *
		 * @param customerId {String}
		 */
		function setCustomerId(customerId) {
			if (_.isEmpty(customerId)) {
				throw new ReferenceError('CustomerId in X-Customer header must not be empty');
			}

			$http.defaults.headers.common['X-Customer-Id'] = customerId;

			$log.debug('Set X-Customer-Id header');
		}

		/**
		 * @method
		 *
		 * @param locale {String}
		 *
		 * Accept-Language value is set based on:
		 * @see https://en.wikipedia.org/wiki/Content_negotiation
		 * @see https://en.wikipedia.org/wiki/IETF_language_tag
		 * @see http://tools.ietf.org/html/rfc7231#section-5.3
		 */
		function setAcceptLanguage(locale) {
			if (_.isEmpty(locale)) {
				throw new Error('Language in AcceptLanguage header must not be empty');
			}

			$http.defaults.headers.common['Accept-Language'] = locale;

			$log.debug('Set Accept-Language header');
		}

		/**
		 *
		 */
		function clearHeaders() {
			delete $http.defaults.headers.common['Authorization'];
			delete $http.defaults.headers.common['X-Customer-Id'];
			delete $http.defaults.headers.common['Accept-Language'];
			delete $http.defaults.headers.common['X-App-Code'];

			$log.debug('Cleared headers');
		}

		/**
		 *
		 * @param appCode {string}
		 */
		function setAppCode(appCode) {
			appCode = appCode || false;

			if (!appCode || _.startsWith('__', appCode)) {
				return $log.warn('AppCode header is empty');
			}

			$http.defaults.headers.common['X-App-Code'] = appCode;

			$log.debug('Set X-App-Code header', appCode);
		}
	}

	module.service('neoRequestHeaders', neoRequestHeaders);
});


define('seed/auth/_constants/authConf',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @const authConf
	 * @memberOf seed.auth
	 */
	var authConf = {
		neoLanguage: {
			events: {
				setActiveLanguage: 'seed.auth.neoLanguage::setActiveLanguage'
			}
		},
		neoSession: {
			events: {
				setSession: 'seed.auth.neoSession::setSession',
				clearSession: 'seed.auth.neoSession::clearSession'
			}
		},
		neoPermission: {
			events: {
				setPermissions: 'seed.auth.neoPermission::setPermissions',
				setRoles: 'seed.auth.neoPermission::setRoles',
				clear: 'seed.auth.neoPermission::clear'
			}
		}
	};

	module.constant('authConf', authConf);
});
define('seed/auth/_values/availableLanguages',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Stores container wide set of available languages [READ ONLY].
	 *
	 * This object is used for wasier access to value.
	 * To manipulate language selection use neoLanguage service.
	 *
	 * @name availableLanguages
	 * @memberOf seed.auth
	 *
	 * @param LanguageAPI {seed.auth.LanguageAPI}
	 * @param appConf {app.appConf} Application configuration
	 * @returns {seed.auth.Language}
	 */
	module.value('availableLanguages', []);
});
define('seed/auth/_values/activeLanguage',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Stores currently used language in application [READ ONLY].
	 *
	 * This object is used for easier access to value.
	 * To manipulate language selection use neoLanguage service.
	 *
	 * @name activeLanguage
	 * @memberOf seed.auth
	 *
	 * @param LanguageAPI {seed.auth.LanguageAPI}
	 * @param appConf {app.appConf} Application configuration
	 * @returns {seed.auth.Language}
	 */
	module.value('activeLanguage', {});
});
define('seed/auth/_values/defaultLanguage',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Stores default language in application [READ ONLY].
	 *
	 * This object is used for easier access to value.
	 * To manipulate language selection use neoLanguage service.
	 *
	 * @name activeLanguage
	 * @memberOf seed.auth
	 *
	 * @param LanguageAPI {seed.auth.LanguageAPI}
	 * @param appConf {app.appConf} Application configuration
	 * @returns {seed.auth.Language}
	 */
	module.value('defaultLanguage', {});
});
define('seed/auth/_models/User/User',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param neoLanguage {seed.auth.neoLanguage} Language service
	 * @param activeLanguage {seed.auth.activeLanguage}
	 * @return {*|Model} Model instance
	 */
	var User = function (restmod, neoLanguage, activeLanguage) {
		//noinspection JSUnusedGlobalSymbols
		return restmod
			.model('/users')
			.mix('UserPacker', 'SassMgrStyleAPI', {
				type: {
					init: 'User'
				},
				email: {
					init: undefined
				},
				customers: {
					hasMany: 'Customer'
				},
				language: {
					encode: function (lang) {
						return lang.localePOSIX;
					},
					decode: function (locale) {
						return neoLanguage.getLanguageByLocale(locale);
					},
					init: function () {
						return activeLanguage.localePOSIX;
					}
				},
				timezone: {
					init: undefined
				},
				password: {
					volatile: true
				},
				repassword: {
					mask: true
				},
				token: {
					volatile: true
				},
				requireConfirmation: {
					init: false
				},
				acceptTermsOfService: {
					init: false
				},
				avatar: {
					init: 'assets/seed/img/avatar-default.png'
				},

				$config: {
					jsonMeta: '.'
				},

				$extend: {
					Resource: {
						$login: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/login',
								data: {
									login: this.login,
									password: this.password
								}
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						},

						$logout: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/logout'
							});
						},

						$authInfo: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'GET',
								url: this.$scope.$url() + '/authInfo',
								cache: true
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						},

						$register: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.getProperty('urlPrefix') + '/registration',
								data: this
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						},

						$passwordResetInit: function () {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/password/reset/init',
								data: {
									email: this.email
								}
							});
						},

						$passwordReset: function () {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/password/reset/finish',
								data: {
									token: this.token,
									newPassword: this.password
								}
							});
						}
					},

					Record: {
						/**
						 * Return user's concatenated name and surname
						 * @method getFullName
						 * @return {string}
						 */
						getFullName: function () {
							if (this.firstName && this.lastName) {
								return this.firstName + ' ' + this.lastName;
							}
						}
					}
				}
			});
	};

	module.factory('User', User);
});
define('seed/auth/_models/User/UserAPI',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @implements {seed.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $q {Object} Angular promise implementation
	 * @param $log {Object} Logging service
	 * @param $rootScope {Object} Global scope provider
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param User {Object} Model factory
	 * @return {Function} Instantiated service
	 */
	var UserAPI = function ($log, $rootScope, BaseAPI, User, $q) {

		$log = $log.getInstance('seed.auth.UserAPI');
		$log.debug('Initiated service');

		var api = new BaseAPI(User);

		api.login = function (loginData) {
			return User
				.$build(loginData)
				.$login()
				.$asPromise()
				.then(function (user) {
					$log.debug('Successfully logged user in');
					return user;
				})
				.catch(function (reason) {
					$log.error('Could not login the user');
					return $q.reject(reason);
				});
		};

		api.register = function (user) {
			return user
				.$register()
				.$asPromise()
				.then(function (user) {
					$log.debug('Successfully registered new user');
					return user;
				})
				.catch(function (reason) {
					$log.error('Error registering new user');
					return $q.reject(reason);
				});
		};

		api.authInfo = function authInfo() {
			return User
				.$build()
				.$authInfo()
				.$asPromise()
				.then(function (user) {
					$log.debug('Successfully verified user session');
					return user;
				})
				.catch(function (reason) {
					$log.error('Use session experienced');
					return $q.reject(reason);
				});
		};

		api.logout = function (user) {
			return user
				.$logout()
				.$asPromise()
				.then(function () {
					$log.debug('Logged out user');
				})
				.catch(function (response) {
					$log.error('Could not logout the user', response);
					return $q.reject(response);
				});
		};

		api.resetPasswordInit = function (user) {
			return user
				.$passwordResetInit()
				.$asPromise()
				.then(function () {
					$log.debug('Sent email with password');
				})
				.catch(function (response) {
					$log.error('Error sending email with password reset', response);
					return $q.reject(response);
				});
		};

		api.resetPasswordFinish = function (user) {
			return user
				.$passwordReset()
				.$asPromise()
				.then(function () {
					$log.debug('Changed user password');
				})
				.catch(function (response) {
					$log.error('Error changing user password', response);
					return $q.reject(response);
				});
		};

		return api;
	};

	module.service('UserAPI', UserAPI);
});



define('seed/auth/_models/User/UserPacker',[
	'angular',
	'seed/auth/module',
	'seed/helpers/restmod/packers/PackerUtils'
], function (ng, module, PackerUtils) {
	'use strict';

	/**
	 * Custom serializer for user request for SassManager compatibility
	 * @constructor
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Data model layer interface
	 * @param RMPackerCache {Object} Restmod cache service
	 * @return {Function|Object|*|{$isAbstract, $$chain}}
	 */
	function UserPacker($log, restmod, RMPackerCache) {

		$log = $log.getInstance('seed.auth.UserPacker');
		$log.debug('Initiated factory');

		return restmod.mixin(function () {
			this.define('Model.unpack', function (_resource, _raw) {

				var name,
					links = this.getProperty('jsonLinks', 'included'),
					meta = this.getProperty('jsonMeta', 'token');

				if (_resource.$isCollection) {
					//noinspection JSValidateTypes
					name = this.getProperty('jsonRootMany') ||
						this.getProperty('jsonRoot') ||
						this.getProperty('plural');
				} else {
					if (_resource.$response.config.url.match(/authInfo$/) ||
						_resource.$response.config.url.match(/login$/)) {
						name = 'user';

						if (_raw.data) {
							_raw = _raw.data;
						}
					}
				}

				if (meta) {
					_resource.$metadata = {};
					PackerUtils.processFeature(_raw, name, meta, links, function (_key, _value) {
						_resource.$metadata[_key] = _value;
					});
				}

				if (links) {
					PackerUtils.processFeature(_raw, name, links, meta, function (_key, _value) {
						RMPackerCache.feed(_key, _value);
					});
				}

				return _.isUndefined(name) ? _raw : _raw[name];
			});
		});
	}

	module.factory('UserPacker', UserPacker);
});

define('seed/auth/_models/Customer/Customer',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model} Model instance
	 */
	var Customer = function (restmod) {
		return restmod
			.model('/customers')
			.mix('SassMgrStyleAPI', {
				customerId: {},
				customerName: {},
				featureKeys: {},
				roles: {},
				timezone: {},

				$extend: {
					Record: {
						$setSelected: function (customer) {
							this.$selected = customer;
						}
					}
				}
			});
	};

	module.factory('Customer', Customer);
});

define('seed/auth/_models/Customer/CustomerAPI',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @implements {seed.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param Customer {Object} Model factory
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @return {Function} Instantiated service
	 */
	var CustomerAPI = function ($log, Customer, BaseAPI) {

		$log = $log.getInstance('seed.auth.CustomerAPI');

		$log.debug('Initiated service');

		var api = new BaseAPI(Customer);

		/**
		 * Selects customer for a user session
		 * @param customer {seed.auth.Customer}
		 */
		api.setSelected = function (customer) {
			Customer.$setSelected(customer);

			$log.debug('Selected active customer: ' + customer.customerId);
		};

		return api;
	};

	module.service('CustomerAPI', CustomerAPI);
});



define('seed/auth/_models/Language/LanguageAPI',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @extends {seed.helpers.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param Language {Object} Model factory
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @return {Function} Instantiated service
	 */
	var LanguageAPI = function ($log, Language, BaseAPI) {

		$log = $log.getInstance('seed.auth.LanguageAPI');
		$log.debug('Initiated service');

		return new BaseAPI(Language);
	};

	module.service('LanguageAPI', LanguageAPI);
});



define('seed/auth/_models/Language/Language',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param defaultLanguage {seed.auth.Language} Default application language
	 *
	 * @class Language
	 * @type {RecordApi}
	 * @property {string} code - The language code
	 * @property {string} locale - The language locale
	 * @property {string} localePOSIX - The posix locale code
	 *
	 * @returns {Language} Model instance
	 */
	function Language(restmod, defaultLanguage) {
		return restmod
			.model('/language')
			.mix({
				code: {
					init: defaultLanguage.code
				},
				locale: {
					init: defaultLanguage.locale
				},
				localePOSIX: {
					init: defaultLanguage.localePOSIX
				}
			});
	}

	module.factory('Language', Language);
});

define('seed/auth/login/forms/login/authLoginForm',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class authLoginForm
	 * @memberOf seed.auth.login
	 *
	 * @param $log {Object} Logging service
	 * @param $rootScope {Function} Angular top-level namespace
	 * @param $state {Object} State helper service
	 * @param neoSession {Object} Session service
	 * @param appConf {Object} Application configuration
	 * @param UserAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function authLoginForm($log, $state, appConf, UserAPI, neoSession, $rootScope) {

		$log = $log.getInstance('seed.auth.login.authLoginForm');
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/auth/login/forms/login/authLoginForm.html',
			controllerAs: 'vm',

			controller: function ($scope) {
				var vm = this || {};

				// variables
				vm.formError = false;
				vm.user = UserAPI.build();
				vm.predefinedLogins = appConf.environmentSettings.predefinedLogins;
				vm.appConf = appConf;

				// methods
				vm.login = login;
				vm.loginAs = loginAs;

				/**
				 * Sets user login and password to one of predefined
				 * @param loginData {Object}
				 */
				function loginAs(loginData) {
					vm.user.$extend(loginData);

					$log.debug('Chosen predefined login: ' + loginData.login);
				}

				/**
				 * Authenticate user on the server
				 * @method login
				 */
				function login() {
					if (_.isEmpty(vm.user.login) || _.isEmpty(vm.user.password)) {
						return;
					}

					UserAPI
						.login(vm.user)
						.then(function (user) {
							vm.user = user;
							$log.debug('Set user object available globally');
							$scope.$root.user = user;

							$log.debug('Logged in user with ID: ' + user.id);

							if (vm.user.customers.length > 1) {
								$state.go('auth.profileSelect', {}, {notify: true, reload: false});
							} else {
								neoSession
									.setSession(vm.user, _.first(vm.user.customers))
									.then(function () {
										$state.reload();
										if ($rootScope.requestedState) {
											$state.go($rootScope.requestedState.toState, $rootScope.requestedState.toParams);
										} else {
											$state.go(appConf.generalSettings.defaultRedirectStateAfterLogin);
										}
									});
							}
						})
						.catch(function () {
							vm.formError = true;
						});

					$log.debug('Started logging in user');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('authLoginForm', authLoginForm);
});

define('seed/auth/login/forms/profileSelect/authProfileSelectForm',['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class authProfileSelectForm
	 * @memberOf seed.auth.login
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} State helper service
	 * @param $rootScope {Function} Angular top-level namespace
	 * @param neoSession {Object} Session service
	 * @param appConf {Object} Application configuration
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope:
	 *   {redirectToState: string}, controller: Function}}
	 */
	function authProfileSelectForm($log, $state, neoSession, appConf) {
		$log = $log.getInstance('seed.auth.login.authProfileSelectForm');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/auth/login/forms/profileSelect/authProfileSelectForm.html',
			controllerAs: 'vm',
			scope: {
				redirectToState: '&'
			},

			controller: function ($scope) {
				var vm = this;

				// variables
				vm.user = $scope.$root.user;
				vm.activeCustomer = undefined;

				//methods
				vm.setCustomerActive = setCustomerActive;
				vm.isCustomerActive = isCustomerActive;
				vm.login = login;
				vm.init = init;

				init();

				function init() {
					if (_.isUndefined(vm.user) || _.isEmpty(vm.user.customers)) {
						$state.go('auth.login');
					} else {
						vm.activeCustomer = _.first(vm.user.customers);
					}

					$log.debug('Initiated controller');
				}

				function setCustomerActive(customer) {
					vm.activeCustomer = customer;

					$log.debug('Changed active customer to: ' + customer.customerName);
				}

				function isCustomerActive(customer) {
					//noinspection JSUnresolvedVariable
					return vm.activeCustomer === customer;
				}

				function login() {
					neoSession
						.setSession(vm.user, vm.activeCustomer)
						.then(function () {
							if ($scope.$root.requestedState) {
								$state.go($scope.$root.requestedState.toState, $scope.$root.requestedState.toParams);
							} else {
								$state.go(appConf.generalSettings.defaultRedirectStateAfterLogin);
							}
						});

					$log.debug('Logged into profile: ' + vm.activeCustomer.customerName);
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('authProfileSelectForm', authProfileSelectForm);
});

define('seed/auth/login/_includes',[
	'./forms/login/authLoginForm',
	'./forms/profileSelect/authProfileSelectForm'
], function () {
	'use strict';
});

define('seed/auth/login/module',['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.login', []);

	module.config(function ($stateProvider, appConf) {

		$stateProvider
			.state('auth.login', {
				url: '/login',
				views: {
					auth: {
						template: '<auth-login-form></auth-login-form>'
					}
				},
				data: {
					permissions: {
						except: ['AUTHORIZED'],
						redirectTo: appConf.generalSettings.defaultRedirectStateAfterLogin
					}
				}
			})

			.state('auth.profileSelect', {
				url: '/login/profile',
				views: {
					auth: {
						template: '<auth-profile-select-form></auth-profile-select-form>'
					}
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.login.module');
		$log.debug('Initiated module');
	});

	return module;
});

/**
 * @namespace seed.auth.registration
 * @memberOf seed.auth
 */

define('seed/auth/register/module',[
	'angular'
], function (ng) {
	'use strict';

	/**
	 * Enables use registration
	 * @class module
	 * @memberOf seed.auth.registration
	 */
	var module = ng.module('seed.auth.register', []);

	module.config(function ($stateProvider, gettext) {
		$stateProvider
			.state('auth.register', {
				url: '/register',
				views: {
					auth: {
						template: '<auth-register-form></auth-register-form>'
					}
				},
				data: {
					title: gettext('Register')
				}
			});
	});


	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.register.module');
		$log.debug('Initiated module');
	});

	return module;
});

define('seed/auth/register/forms/register/authRegisterForm',['seed/auth/register/module'], function (module) {
	'use strict';

	function authRegisterForm($log, $state, gettextCatalog, UserAPI, neoSession, appConf) {

		$log = $log.getInstance('apps.seed.auth.register.authRegisterForm');
		$log.debug('Initiated directive');

		/**
		 * Renders default styled registration form template, allowing to add new users to applications.
		 * @class authRegisterForm
		 * @memberOf seed.auth.registration
		 *
		 * @requires $log
		 * @requires $state
		 * @requires UserAPI
		 * @requires appConf
		 * @requires neoSession
		 * @requires gettextCatalog
		 */
		return {
			restrict: 'E',
			templateUrl: 'seed/auth/register/forms/register/authRegisterForm.html',
			scope: {},
			controllerAs: 'vm',
			controller: function ($element) {
				/** @lends seed.auth.registration.authRegisterForm.prototype */
				var vm = this;

				/**
				 * @property user {User} User instance to be registered
				 */
				vm.user = UserAPI.build();

				/**
				 * @property registrationForm {Object} Reference to Angular form object
				 */
				vm.registrationForm = undefined;

				/**
				 * @property registrationError {Object|Array} Server response error holder
				 */
				vm.registrationError = undefined;

				vm.register = register;

				/**
				 * @property registrationError {Object} Validator properties
				 */
				vm.formValidators = {
					fields: {
						repassword: {
							validators: {
								callback: {
									message: gettextCatalog.getString('Passwords must match'),
									callback: function () {
										return vm.user.password === vm.user.repassword;
									}
								}
							}
						}
					}
				};

				/**
				 * @method
				 * @memberOf seed.auth.registration.authRegisterForm.prototype
				 * @description Triggers user registration
				 */
				function register() {
					vm.registrationError = undefined;

					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						UserAPI
							.register(vm.user)
							.then(function (user) {
								neoSession
									.setSession(user, _.first(user.customers))
									.then(function () {
										$state.go(appConf.generalSettings.defaultRedirectStateAfterLogin);
									});
							})
							.catch(function (error) {
								vm.registrationError = error.$response.data.message;
							});
					}


					$log.debug('Submitted registration form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('authRegisterForm', authRegisterForm);
});



define('seed/auth/register/_includes',[
	// Forms
	'./forms/register/authRegisterForm'
], function () {
	'use strict';
});

define('seed/auth/password/module',['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.auth.password', []);

	module.config(function ($stateProvider, gettext) {
		$stateProvider
			.state('auth.passwordReset', {
				url: '/password/reset',
				views: {
					auth: {
						template: '<auth-password-reset-init-form></auth-password-reset-init-form>'
					}
				},
				data: {
					title: gettext('Reset password')
				}
			})

			.state('auth.passwordResetFinish', {
				url: '/password/reset/:token',
				views: {
					auth: {
						template: '<auth-password-reset-form></auth-password-reset-form>'
					}
				},
				data: {
					title: gettext('New password')
				}
			});
	});

	module.run(function ($log) {
		$log = $log.getInstance('seed.auth.password.module');
		$log.debug('Initiated module');
	});

	return module;
});

define('seed/auth/password/forms/passwordReset/authPasswordResetForm',['seed/auth/password/module'], function (module) {
	'use strict';

	function authPasswordResetForm() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			templateUrl: 'seed/auth/password/forms/passwordReset/authPasswordResetForm.html',
			controller: function ($state, $element, $timeout, $stateParams, gettext, UserAPI, gettextCatalog) {
				var vm = this;

				// variables
				vm.user = UserAPI.build();
				vm.formError = undefined;
				vm.formSuccess = false;
				vm.formValidators = {
					fields: {
						repassword: {
							validators: {
								callback: {
									message: gettextCatalog.getString('Passwords must match'),
									callback: function () {
										return vm.user.password === vm.user.repassword;
									}
								}
							}
						}
					}
				};

				// methods
				vm.init = init;

				vm.init();

				function init() {
					vm.user.token = $stateParams.token;
				}


				vm.reset = function () {
					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						UserAPI.resetPasswordFinish(vm.user)
							.then(function () {
								vm.formSuccess = true;

								$timeout(function () {
									$state.go('auth.login');
								}, 4000);

							})
							.catch(function (response) {
								vm.formError = _.first(response.$response.data);

								if (response.$response.status === 404) {
									vm.formError = gettextCatalog.getString('No active password reset requests are associated with that email address');
								}
							});
					}
				};
			}
		};
	}

	module.directive('authPasswordResetForm', authPasswordResetForm);
});

define('seed/auth/password/forms/passwordResetInit/authPasswordResetInitForm',['seed/auth/password/module'], function (module) {
	'use strict';

	function authPasswordResetInitForm() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			templateUrl: 'seed/auth/password/forms/passwordResetInit/authPasswordResetInitForm.html',
			controller: function ($element, $state, UserAPI, gettextCatalog) {
				var vm = this;

				// variables
				vm.user = UserAPI.build();
				vm.formError = undefined;
				vm.formSuccess = false;

				// methods
				vm.reset = reset;

				function reset() {
					vm.formError = undefined;

					var formValidation = $element.find('form').data('formValidation');

					formValidation.validate();

					if (formValidation.isValid()) {
						UserAPI
							.resetPasswordInit(vm.user)
							.then(function () {
								vm.formSuccess = true;
							})
							.catch(function (response) {
								if (response.$response.status === 404) {
									vm.formError = gettextCatalog.getString('No account found with that email address.');
								}
							});
					}
				}
			}
		};
	}

	module.directive('authPasswordResetInitForm', authPasswordResetInitForm);
});

define('seed/auth/password/_includes',[
	'./forms/passwordReset/authPasswordResetForm',
	'./forms/passwordResetInit/authPasswordResetInitForm'
], function () {
	'use strict';
});

define('seed/auth/_includes',[
	'./_services/neoCookie',
	'./_services/neoSession',
	'./_services/neoLanguage',
	'./_services/neoPermission',
	'./_services/neoRequestHeaders',

	'./_constants/authConf',

	'./_values/availableLanguages',
	'./_values/activeLanguage',
	'./_values/defaultLanguage',

	'./_models/User/User',
	'./_models/User/UserAPI',
	'./_models/User/UserPacker',

	'./_models/Customer/Customer',
	'./_models/Customer/CustomerAPI',

	'./_models/Language/LanguageAPI',
	'./_models/Language/Language',

	'../helpers/restmod/models/BaseAPI',

	'./login/_includes',
	'./login/module',

	'./register/_includes',
	'./register/module',

	'./password/_includes',
	'./password/module'
], function () {
	'use strict';
});

define('seed/forms/module',['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.forms', ['seed.helpers']);

	module.run(function ($log, neoSelect) {
		$log = $log.getInstance('seed.forms');

		neoSelect.init();

		$log.debug('Initiated module');
	});

	return module;
});

define('seed/forms/validate/neoValidate',[
	'seed/forms/module',
	'form-validation/form-validation',
	'form-validation/framework/bootstrap',
	'form-validation/language/en_US',
	'form-validation/language/pl_PL'
], function (module) {
	'use strict';

	function neoValidate($log, activeLanguage) {

		$log = $log.getInstance('seed.forms.neoValidate');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			priority: 400,
			scope: {
				neoValidate: '='
			},
			link: function (scope, form) {

				var defaults = {
					framework: 'bootstrap',
					locale: activeLanguage.locale,
					addOns: {
						i18n: {}
					},
					err: {
						container: 'tooltip'
					},
					icon: {
						valid: 'fa fa-check',
						invalid: 'fa fa-times',
						validating: 'fa fa-refresh'
					}
				};

				var options = {};

				scope.$on('seed.auth.neoLanguage::setActiveLanguage', function (e, language) {

					options.locale = language.locale;

					scope.$applyAsync(function () {
						options = _.merge(defaults, scope.neoValidate);
						form
							.formValidation('destroy')
							.on('init.form.fv', function () {
								// Remove these irritating automatically added hidden submit buttons
								form.find('.fv-hidden-submit').remove();
							})
							.formValidation(options)
							.formValidation('validateContainer', form);
					});

				});

				scope.$applyAsync(function () {

					options = _.merge(defaults, scope.neoValidate);
					form
						.on('init.form.fv', function () {
							// Remove these irritating automatically added hidden submit buttons
							form.find('.fv-hidden-submit').remove();
						})
						.formValidation(options);

				});

				$log.debug('Called linking function');
			}
		};
	}

	return module.directive('neoValidate', neoValidate);
});


define('seed/forms/select/services/neoSelect',[
	'seed/forms/module',
	'angular-ui-select'
], function (module) {
	'use strict';

	function neoSelect($log, neoTemplateLoader) {
		$log = $log.getInstance('seed.components.neoSelect');

		var neoSelectService = {};

		neoSelectService.init = function () {
			neoTemplateLoader.load('seed/forms/select/partials/match.html', 'bootstrap/match.tpl.html');
			$log.debug('Initiated service');
		};

		return neoSelectService;
	}

	module.service('neoSelect', neoSelect);
});

define('seed/forms/input/neoDatepicker',[
	'seed/forms/module',
	'moment',
	'daterangepicker'
], function (module, moment) {
	'use strict';

	/**
	 * Converts input[type=daterange] into datepicker with moment.js wrapped date parameter
	 * @class neoDatepicker
	 * @memberOf seed.forms
	 *
	 * @example
	 *  <input neo-datepicker="vm.vm.settings"
	 *         ng-model="vm.dates"
	 *         type="text"
	 *         class="form-control">
	 *
	 * @param $log {Object} Logging service
	 * @param gettextCatalog {Object} Translation catalog provider
	 * @return {{
	 *  restrict: string,
	 *  scope: {ngModel: string, neoDatepicker: string}, require: string, link: Function
	 * }}
	 */
	function neoDatepicker($log, gettextCatalog) {

		$log = $log.getInstance('seed.forms.datepicker');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			scope: {
				ngModel: '=',
				neoDatepicker: '='
			},
			require: 'ngModel',
			link: function link(scope, element, attrs, ngModelCtrl) {
				var vm = scope.vm = scope.vm || {};

				var unregisterFn;

				// variables
				vm.defaultOptions = {
					separator: ' - ',
					singleDatePicker: true,
					locale: {
						format: 'L',
						applyLabel: gettextCatalog.getString('Apply'),
						cancelLabel: gettextCatalog.getString('Cancel'),
						customRangeLabel: gettextCatalog.getString('Custom range')
					}
				};
				vm.settings = undefined;

				// functions
				vm.init = init;
				vm.cleanUp = cleanUp;

				init();

				/**
				 * Initialize controller and call daterangepicker
				 *
				 */
				function init() {
					//scope
					vm.settings = _.merge({}, vm.defaultOptions, scope.neoDatepicker);
					// Call the plugin
					scope.$applyAsync(function () {
						vm.settings = _.merge({}, vm.defaultOptions, scope.neoDatepicker);
						// Set up controller
						setUpModelCtrl();
						element.daterangepicker(_.merge({}, vm.settings, getModel()));

					});

					unregisterFn = scope.$root.$on('seed.languageAPI.setLanguage', function () {
						var model = getModel();
						if (model.startDate && moment.isMoment(model.startDate)) {
							model.startDate.locale(moment().locale());
						}
						if (model.endDate && moment.isMoment(model.endDate)) {
							model.endDate.locale(moment().locale());
						}
						if (element.data('daterangepicker') !== undefined) {
							element.data('daterangepicker').remove();
						}
						element.daterangepicker(_.merge({}, vm.settings, model));
					});

					scope.$on('$destroy', function () {
						cleanUp();
					});

					$log.debug('Called linking function');
				}

				/**
				 * Configure parser, formatter and render
				 */
				function setUpModelCtrl() {
					ngModelCtrl.$parsers.push(parser);
					ngModelCtrl.$formatters.push(formatter);
					ngModelCtrl.$render = render;
				}

				/**
				 * Clean up
				 */
				function cleanUp() {
					unregisterFn();
					element.data('daterangepicker').remove();
				}

				/**
				 * Checks in which mode datepicker was set up
				 * @return {boolean}
				 */
				function isSingleDatePicker() {
					return vm.settings.singleDatePicker;
				}

				/**
				 * Returns datepicker model based on set up mode
				 * @return {*}
				 */
				function getModel() {
					if (isSingleDatePicker()) {
						return {
							startDate: scope.ngModel
						};
					} else {
						return {
							startDate: scope.ngModel.startDate,
							endDate: scope.ngModel.endDate
						};
					}
				}

				/**
				 * Converts string into moment dates
				 * @param modelValue {string} Date string i.e. 01/01/2015 - 01/09/2015
				 *
				 * @return {*} Return object hash with startDate and endDate keys.
				 *
				 */
				function parser(modelValue) {
					if (isSingleDatePicker()) {
						var momentDate = moment(modelValue, vm.settings.locale.format);

						if (momentDate.isValid()) {
							return momentDate;
						}
					}

					var dates = modelValue.split(vm.settings.separator);

					var startDate = moment(dates[0], vm.settings.locale.format);
					var endDate = moment(dates[1], vm.settings.locale.format);

					if (startDate.isValid() && endDate.isValid()) {
						return {
							startDate: startDate,
							endDate: endDate
						};
					}
				}

				/**
				 * Converts moment dates into strings
				 * @param model {Object} Moment dates
				 *
				 * @return {*} Converted dates
				 */
				function formatter(model) {
					var textVal;

					if (!model) {
						return;
					}

					if (isSingleDatePicker()) {
						return model.format('L');
					} else {
						textVal = model.startDate.format('L');
						if (model.endDate) {
							textVal = textVal + vm.settings.separator + model.endDate.format('L');
						}
					}

					return textVal;
				}

				/**
				 * Rendering function
				 */
				function render() {
					var picker = element.data('daterangepicker');

					element.val(ngModelCtrl.$viewValue);

					if (picker) {
						if (_.isEmpty(ngModelCtrl.$viewValue)) {
							picker.clear();
							return;
						}
						if (isSingleDatePicker()) {
							picker.setStartDate(ngModelCtrl.$modelValue, false);
						} else {
							picker.setStartDate(ngModelCtrl.$modelValue.startDate, false);
							picker.setEndDate(ngModelCtrl.$modelValue.endDate, false);
						}
					}
				}
			}
		};
	}

	module.directive('neoDatepicker', neoDatepicker);
});



define('seed/forms/_includes',[
	// Validate
	'./validate/neoValidate',

	// Select
	'./select/services/neoSelect',

	// Input
	'./input/neoDatepicker'
], function () {
	'use strict';
});

/**
 * @namespace seed.tables
 * @memberof seed
 */

define('seed/tables/module',[
	'angular',
	'angular-table'
], function (ng) {
	'use strict';

	var module = ng.module('seed.tables', ['ngTable']);

	module.run(function ($log, neoTable) {
		$log = $log.getInstance('seed.tables.module');

		neoTable.init();

		$log.debug('Initiated module');
	});

	return module;
});

define('seed/tables/_services/neoTable',['seed/tables/module', 'angular-table'], function (module) {
	'use strict';

	/**
	 * Manages overwriting custom templates of angular tables
	 * @class neoTable
	 * @memberOf seed.tables
	 *
	 * @param $log {Object} Logging service
	 * @param neoTemplateLoader
	 */
	function neoTable($log, neoTemplateLoader) {
		$log = $log.getInstance('seed.tables.neoTable');

		this.init = function init() {
			neoTemplateLoader.load('seed/tables/partials/neo-header.html', 'ng-table/header.html');
			neoTemplateLoader.load('seed/tables/partials/neo-footer.html', 'ng-table/pager.html');
			neoTemplateLoader.load('seed/tables/partials/neo-sorting.html', 'ng-table/sorterRow.html');
			neoTemplateLoader.load('seed/tables/partials/neo-filters.html', 'ng-table/filterRow.html');
			neoTemplateLoader.load('seed/tables/filters/text-filter.html', 'ng-table/filters/text.html');
			neoTemplateLoader.load('seed/tables/filters/date-filter.html', 'ng-table/filters/date.html');
			neoTemplateLoader.load('seed/tables/filters/timestamp-filter.html', 'ng-table/filters/timestamp.html');
			neoTemplateLoader.load('seed/tables/filters/enum-filter.html', 'ng-table/filters/enum.html');
			neoTemplateLoader.load('seed/tables/filters/related-filter.html', 'ng-table/filters/related.html');

			$log.debug('Initiated service');
		};
	}

	module.service('neoTable', neoTable);
});

define('seed/tables/_factories/neoTableParams',['seed/tables/module'], function (module) {
	'use strict';

	/**
	 * Configuration interface that utilize the amount of code
	 * required to configure data-binding with ngTable library
	 * @class neoTableParams
	 * @memberOf seed.components
	 *
	 * @link https://github.com/esvit/ng-table/wiki/Configuring-your-table-with-ngTableParams
	 * @example
	 *  // Simplest configuration:
	 *  neoTableParams(Invoice);
	 *
	 * @example
	 *  // Full set of options:
	 *  neoTableParams(Invoice, {
	 *		params: {
	 *			page: 1,
	 *			count: 10,
	 *			sorting: {
	 *				'_id': 'desc'
	 *			}
	 *		},
	 *		onBeforeResolve: function(models){
	 *			models = _.first(models);
	 *		},
	 *		onAfterResolve: function(models){
	 *			$log.debug('Fetched invoices from server', models)
	 *		}
	 *	});
	 * @param ngTableParams {Function} ngTable params interface
	 * @param $log {Object} Logging service
	 * @returns {Function} ngTable configuration factory
	 */
	function neoTableParams(ngTableParams, $log) {
		$log = $log.getInstance('seed.tables.neoTableParams');

		/**
		 * ngTable configuration factory
		 *
		 * @memberOf seed.components.neoTableParams
		 * @param CollectionAPI {Object} Table reference CollectionAPI
		 * @param parameters {Object} Factory options
		 * @return {Object} ngTable library configuration instance
		 */
		var ngTableFactory = function (CollectionAPI, parameters) {

			if (_.isUndefined(CollectionAPI)) {
				throw new Error('option "CollectionAPI" must be defined');
			}

			// Make sure that parameters are defined object
			parameters = parameters || {};

			var defaults = {
				params: {
					page: 1,
					count: 10,
					sorting: {
						'_id': 'desc'
					}
				},
				getData: undefined,
				groupBy: undefined,
				onBeforeResolve: undefined,
				onAfterResolve: undefined
			};

			var options = _.mergeDefaults(parameters, defaults);
			return new ngTableParams(options.params, {
				total: 0,
				groupBy: options.groupBy,
				getData: function ($defer, params) {
					if (_.isFunction(options.getData)) {
						options.getData($defer, params);

					} else {
						var queryParams = {
							first: (params.url().page - 1) * params.url().count,
							pageSize: params.url().count,
							sort: params.sorting(),
							filter: params.filter()
						};
						CollectionAPI
							.filter(queryParams)
							.then(function (models) {
								if (_.isFunction(options.onBeforeResolve)) {
									options.onBeforeResolve(models);
								}
								return models;
							})
							.then(function (models) {
								params.total(models.$metadata.total);
								$defer.resolve(models);
								return models;
							})
							.then(function (models) {
								if (_.isFunction(options.onAfterResolve)) {
									options.onAfterResolve(models);
								}
							});
					}
				}
			});
		};

		$log.debug('Constructed new instance of ngTableFactory');

		return ngTableFactory;
	}

	module.factory('neoTableParams', neoTableParams);
});

define('seed/tables/_directives/neoTableEnumFilter/neoTableEnumFilter',['seed/tables/module'], function (module) {
	'use strict';

	/**
	 * Handles enum selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableEnumFilter
	 * @memberOf seed.components
	 * @example
	 * <td filter="{'type': 'enum'}"
	 *     filter-data="{enumName:'TypeEnum', displayProperty: 'label'}">
	 *     {{task.type.label}}
	 * </td>
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Angular Dependency Injection provider
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {enumName: string, displayProperty: string, ngModel: string}, controller:
	 *   Function}}
	 */
	function neoTableEnumFilter($log, $injector) {

		$log = $log.getInstance('seed.tables.neoTableEnumFilter');
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableEnumFilter/neoTableEnumFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				enumName: '=',
				displayProperty: '=',
				ngModel: '='
			},

			controller: function () {
				var vm = this || {};

				// variables
				vm.filterableEnum = undefined;
				vm.selectedItem = undefined;

				// methods
				vm.init = init;
				vm.selectEnumItem = selectEnumItem;

				init();

				/**
				 * Initialize controller
				 */
				function init() {
					if ($injector.has(vm.enumName)) {
						vm.filterableEnum = $injector.get(vm.enumName);
					} else {
						$log.error('Can not inject enum ' + vm.enumName);
					}

					$log.debug('Initiated controller');
				}

				/**
				 * Passes back selected enum key into filters
				 * @param $item {Object} Selected item
				 */
				function selectEnumItem($item) {
					if ($item) {
						vm.ngModel = vm.filterableEnum.getKeyByValue($item);
						$log.debug('Selected new enum item to filer ' + $item[vm.displayProperty]);
					} else {
						vm.ngModel = undefined;
						$log.debug('Cleared enum model filter');
					}

				}
			}
		};
	}

	module.directive('neoTableEnumFilter', neoTableEnumFilter);
});

define('seed/tables/_directives/neoTableRelatedFilter/neoTableRelatedFilter',['seed/tables/module'], function (module) {
	'use strict';

	/**
	 * Handles related item selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableRelatedFilter
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Angular Dependency Injection provider
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {apiName: string, displayProperty: string, ngModel: string}, controller:
	 *   Function}}
	 */
	function neoTableRelatedFilter($log, $injector) {
		$log = $log.getInstance('seed.tables.neoTableRelatedFilter');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableRelatedFilter/neoTableRelatedFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				apiName: '=',
				displayProperty: '=',
				ngModel: '='
			},

			controller: function () {
				var vm = this;

				// variables
				vm.filterableAPI = undefined;
				vm.filteredCollection = undefined;
				vm.selectedItem = undefined;

				// methods
				vm.init = init;
				vm.selectRelatedItem = selectRelatedItem;
				vm.filterCollection = filterCollection;

				init();

				/**
				 * Initialize controller
				 */
				function init() {
					if ($injector.has(vm.apiName)) {
						vm.filterableAPI = $injector.get(vm.apiName);
					} else {
						$log.error('Can not inject API ' + vm.apiName);
					}

					$log.debug('Initiated controller');
				}


				/**
				 * Executes search query on resource API
				 * @param searchParam {String}
				 */
				function filterCollection(searchParam) {
					var query = {
						filter: {},
						pageSize: 5
					};
					query.filter[vm.displayProperty] = searchParam;

					vm.filterableAPI
						.filter(query)
						.then(function (collection) {
							vm.filteredCollection = collection;
						});
				}

				/**
				 * Passes back selected model into filters
				 * @param $item {Object} Selected item
				 */
				function selectRelatedItem($item) {
					if ($item) {
						vm.ngModel = $item.id;

						$log.debug('Selected new related model to filer ' + $item[vm.displayProperty]);
					} else {
						vm.ngModel = undefined;
						$log.debug('Cleared related model filter');
					}
				}
			}
		};
	}

	module.directive('neoTableRelatedFilter', neoTableRelatedFilter);
});

define('seed/tables/_directives/neoTableDateFilter/neoTableDateFilter',['seed/tables/module'], function (module) {
	'use strict';

	/**
	 * Handles date selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableDateFilter
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {ngModel: string}, controller: Function}}
	 */
	function neoTableDateFilter($log) {
		$log = $log.getInstance('seed.tables.neoTableDateFilter');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableDateFilter/neoTableDateFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				ngModel: '='
			},

			controller: function () {
				var vm = this || {};

				// variables
				vm.selectedDate = undefined;

				vm.changeDate = function () {
					if (vm.selectedDate) {
						vm.ngModel = vm.selectedDate.format('YYYY-MM-DD');
					} else {
						vm.ngModel = undefined;
					}
				};

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoTableDateFilter', neoTableDateFilter);
});

define('seed/tables/_directives/neoTableDatetimeFilter/neoTableDatetimeFilter',['seed/tables/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * Handles datetime selection inside neoTable filtering.
	 * Should not be used of it's own.
	 * @class neoTableDatetimeFilter
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: boolean,
	 *   bindToController: {ngModel: string}, controller: Function}}
	 */

	function neoTableDatetimeFilter($log) {
		$log = $log.getInstance('seed.tables.neoTableDatetimeFilter');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/tables/_directives/neoTableDatetimeFilter/neoTableDatetimeFilter.html',
			controllerAs: 'vm',
			scope: true,
			bindToController: {
				ngModel: '='
			},

			controller: function () {
				var vm = this || {};

				// variables
				vm.selectedDate = undefined;

				vm.changeDate = function () {
					vm.ngModel = vm.parse(vm.selectedDate);
				};

				vm.parse = function (value) {
					if (!_.isUndefined(value)) {
						var momentDate = moment(value, 'YYYY-MM-DD');

						if (momentDate.isValid()) {
							return {
								gte: momentDate.toISOString(),
								lte: momentDate.add(1, 'days').toISOString()
							};
						} else {
							return undefined;
						}
					}
				};

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoTableDatetimeFilter', neoTableDatetimeFilter);
});

define('seed/tables/_includes',[
	// services
	'./_services/neoTable',

	// factories
	'./_factories/neoTableParams',

	// directives
	'./_directives/neoTableEnumFilter/neoTableEnumFilter',
	'./_directives/neoTableRelatedFilter/neoTableRelatedFilter',
	'./_directives/neoTableDateFilter/neoTableDateFilter',
	'./_directives/neoTableDatetimeFilter/neoTableDatetimeFilter'
], function () {
	'use strict';
});

define('seed/_includes',[
	// Templates
	'./__misc/_templates/module',
	// Translation
	'./__misc/_locale/translation',

	// Core app generics
	'./helpers/_includes',
	'./helpers/module',

	// Core apps components
	'./components/_includes',
	'./components/module',

	// Layout
	'./layout/_includes',
	'./layout/module',

	// Authentication
	'./auth/_includes',
	'./auth/module',

	// Forms
	'./forms/_includes',
	'./forms/module',

	// Tables
	'./tables/_includes',
	'./tables/module'
], function () {
	'use strict';
});

/**
 * @namespace seed
 */

define('seed/module',[
	'angular',
	'angular-animate',
	'angular-sanitize',
	'angular-ui-router',
	'angular-ui-bootstrap',
	'angular-ui-bootstrap-tpls',
	'angular-ui-select',
	'angular-gettext',
	'angular-permission',
	'angular-loading-bar',
	'angular-moment',
	'angular-restmod',
	'./_includes'
], function (ng) {
	'use strict';

	var seed = ng.module('seed', [
		'ngAnimate',
		'ngSanitize',

		'gettext',
		'angularMoment',
		'restmod',
		'angular-loading-bar',

		'ui.bootstrap',
		'ui.select',
		'ui.router',

		'permission',

		'app.conf',

		// Seed modules
		'seed.templateCache',
		'seed.components',
		'seed.helpers',
		'seed.auth',
		'seed.layout',
		'seed.forms',
		'seed.tables'
	]);

	seed.config(function ($provide, $httpProvider, $locationProvider, $compileProvider, cfpLoadingBarProvider,
						  $logProvider, restmodProvider, uiSelectConfig, appConf) {

		restmodProvider.rebase('NeoStyleAPI');

		uiSelectConfig.theme = 'bootstrap';

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 500;

		$locationProvider.html5Mode(appConf.generalSettings.html5ModeEnabled);
		$logProvider.debugEnabled(appConf.environmentSettings.debugEnabled);

		/**
		 * Production improvements
		 * @see https://code.angularjs.org/1.4.9/docs/guide/production
 		 */
		$compileProvider.debugInfoEnabled(appConf.environmentSettings.debugEnabled);

		// $http improvements
		$httpProvider.useApplyAsync(true);
		$httpProvider.useLegacyPromiseExtensions(true);

		// set default serializer for http request
		$httpProvider.defaults.paramSerializer = '$httpParamSerializer';

		// Add the interceptors to the $httpProvider.
		$httpProvider.interceptors.push('HttpErrorInterceptor');
	});

	seed.run(function (gettextCatalog, neoLanguage, $log, appConf) {
		$log = $log.getInstance('seed.module');

		neoLanguage.init();
		gettextCatalog.debug = appConf.environmentSettings.debugEnabled;

		$log.debug('Set up seed configuration');
	});

	return seed;
});

