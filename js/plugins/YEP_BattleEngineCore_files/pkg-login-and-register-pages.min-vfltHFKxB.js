define("modules/clean/form_util/name_parser",["require","exports"],function(e,t){"use strict";return(function(){function e(){}return e.splitFullName=function(e){var t=e.split(" ");return[t[0],t.slice(1).join(" ")]},e})()}),define("modules/clean/legacy_pyxl_controllers/login_or_register",["require","exports","jquery","modules/clean/auth_event_logger","modules/clean/register_form"],function(e,t,r,i,n){"use strict";return(function(){function e(e){var t=this;this.$login_form=e.find(".login-register-login-part"),this.$register_form=e.find(".login-register-register-part"),this.logAppropriateAuthIntent(),e.click(function(e){if(r(e.target).hasClass("login-register-switch-link"))return e.preventDefault(),t._toggle_forms(),t.$login_form.find(".text-input input:visible").first().focus(),t.$register_form.find(".text-input input:visible").first().focus()}),this.$register_form.on(n.USER_EXISTS,function(e){t._toggle_forms();for(var r in e.prefill){var i=e.prefill[r];t.$login_form.find(r).val(i)}return t.$login_form.find(e.focus).focus()})}return e.prototype.logAppropriateAuthIntent=function(){this.$login_form.is(":visible")?i.AuthEventLogger.log_web_login_intent():this.$register_form.is(":visible")&&i.AuthEventLogger.log_web_signup_intent()},e.prototype._toggle_forms=function(){this.$login_form.toggle(),this.$register_form.toggle(),this.logAppropriateAuthIntent()},e})()}),define("modules/clean/mailcheck",["require","exports","modules/core/html","modules/core/i18n","jquery"],function(e,t,r,i){"use strict";var n;return n=(function(){return n=(function(){function e(e,t,r){void 0===r&&(r={}),this.$input=e,this.$suggestion_container=t,this.checkInput();var i=r.livecheck===!0?"keyup blur":"blur";this.$input.on(i,this.checkInput.bind(this))}return e.initClass=function(){this.DOMAINS=["gmail.com","hotmail.com","yahoo.com","aol.com","web.de","gmx.de","googlemail.com","me.com","live.com","msn.com","mail.ru","comcast.net","google.com","mac.com"],this.WHITELIST_REGEXS=[/ymail.com/,/yahoo\.co\./,/yahoo\.com\./,/hotmail\.co\./,/hotmail\.com\./,/gmx\.net/,/gmx\.at/,/gmx\.ch/,/gmx\.com/,/mail\.com/,/web\.com/],this.THRESHOLD=2},e.prototype.checkInput=function(){var e=this.suggest(this.$input.val());e?this.populate(e):this.clear()},e.prototype.populate=function(e){var t=this,n=r.HTML.escape(e.local).toHTML(),s=r.HTML.escape(e.domain).toHTML(),o=n+"@<span class='email_warning_area'>"+s+"</span>";return this.$suggestion_container.html(new r.HTML(i._("Did you mean <a>%(suggested_email)s</a>?").format({suggested_email:o})).toHTML()),this.$suggestion_container.show(),this.$suggestion_container.on("click",function(){return t.$input.val(e.full),t.clear()})},e.prototype.clear=function(){return this.$suggestion_container.empty(),this.$suggestion_container.hide()},e.prototype.suggest=function(e){if(void 0===e&&(e=""),e.length){e=e.toLowerCase();var t=this.splitEmail(e);if(!t)return!1;var r=t.local,i=t.domain;if(this.whitelistedDomain(i))return!1;var n=this.findClosestDomain(i);return!!n&&{local:r,domain:n,full:r+"@"+n}}},e.prototype.whitelistedDomain=function(t){for(var r=0,i=Array.from(e.WHITELIST_REGEXS);r<i.length;r++){if(i[r].test(t))return!0}return!1},e.prototype.splitEmail=function(e){var t=e.split("@");return 2===t.length&&{local:t[0],domain:t[1]}},e.prototype.findClosestDomain=function(t){for(var r=99,i=null,n=0,s=Array.from(e.DOMAINS);n<s.length;n++){var o=s[n],a=this.stringDistance(t,o);a<r&&(r=a,i=o)}return!!(i&&i!==t&&r<=e.THRESHOLD)&&i},e.prototype.stringDistance=function(e,t){if(null==e||0===e.length)return null==t||0===t.length?0:t.length;if(null==t||0===t.length)return e.length;for(var r=0,i=0,n=0,s=0;r+i<e.length&&r+n<t.length;){if(e.charAt(r+i)===t.charAt(r+n))s++;else{i=0,n=0;for(var o=0;o<5;){if(r+o<e.length&&e.charAt(r+o)===t.charAt(r)){i=o;break}if(r+o<t.length&&e.charAt(r)===t.charAt(r+o)){n=o;break}o++}}r++}return(e.length+t.length)/2-s},e})(),n.initClass(),n})()}),define("modules/clean/register_form",["require","exports","jquery","modules/clean/abuse/invisible_recaptcha","modules/clean/captcha","modules/clean/legacy_pyxl_controllers/ajax_form","modules/clean/em_string","modules/clean/form_util/name_parser","modules/clean/mailcheck","modules/clean/profile_services/auth_callback_handler","modules/clean/profile_services/profile_services_constants","modules/clean/profile_services/profile_services_link","modules/constants/login_and_register","modules/core/accessible_announce","modules/core/browser"],function(e,t,r,i,n,s,o,a,l,c,h,_,m,p,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=(function(){function e(e,t,i){var s;if(this.$form=r(t),this.$form.find(".recaptcha_v2_challenge").length>0){var o=r(this.$form.find(".recaptcha_v2_challenge"));this.$captchaComponent=new n(this.$form,o.attr("id"),null,"/ajax_needs_business_signup_captcha","email",e,!0)}else this.$captchaComponent=new n(this.$form,"#react-signup-recaptcha-challenge-div","#react-login-recaptcha-challenge-div","/ajax_needs_business_signup_captcha","email",e);i&&(s={message_text:i}),this.$captchaComponent.captcha_display_handler(s)}return e})();t.RegisterNamesAndCredentialsWithCaptcha=d;var g=(function(){function e(e,t,a,c,p,u,d,g,f,v){void 0===v&&(v=!1);var b=this;this._handle_google_callback=this._handle_google_callback.bind(this),this._before_submit=this._before_submit.bind(this),this._on_register_success=this._on_register_success.bind(this),this._on_register_error=this._on_register_error.bind(this),this._animate_form=this._animate_form.bind(this),this._index_error_handler=this._index_error_handler.bind(this),this._combined_name_handler=this._combined_name_handler.bind(this),this.$registerFormContainer=e,this.canRedirect=a,this.showForm=c,this.clientSideValidation=p,this.customErrorHandler=u,this.combinedName=d,this.lastNameGoesFirst=g,this.signupEndpoint=f,this.$registerForm=this.$registerFormContainer.find(".register-form");var $;if("index"===this.customErrorHandler&&($=this._index_error_handler,this.$registerForm.on("click change","input",this._index_clear_error_handler)),this.registerController=new s(this.$registerForm,this._before_submit,{client_side_validation:this.clientSideValidation,error_handler:$}),this.cont=this.$registerForm.find("input[name='cont']").val(),this.$registerForm.find(".login-button, .auth-google").prop("disabled",!1),this.$registerForm.find(".login-button.disabled-button").prop("disabled",!0),i.loadRecaptchaAndSetupInvisibleRecaptcha(this.registerController,this.$registerForm,"email","REGISTER",v),!m.INVISIBLE_RECAPTCHA){var C=r(this.$registerForm.find(".recaptcha_v2_challenge"));this.$captchaComponent=new n(this.$registerForm,C.attr("id"),null,"/ajax_needs_signup_captcha","email",t,!0)}var F=this.$registerForm.find("label[for='tos_agree']"),y=parseInt(F.css("font-size"),10);if(new o.Emstring(F.text()).length*y>200&&this.$registerForm.find(".checkbox").removeClass("checkbox-inline"),this.$registerForm.on(s.SUCCESS_EVENT,this._on_register_success),this.$registerForm.on(s.ERROR_EVENT,this._on_register_error),this.showForm){if(this.$registerForm.find("input[type='hidden'][name='is_third_party_auth']").val()){var w=function(e,t){return!r(t).val()};this.$registerFormContainer.find("input").filter(":visible").filter(w).first().focus()}this.$registerForm.is(":visible")&&this.$captchaComponent&&this.$captchaComponent.captcha_display_handler()}else this.$registerForm.find(".login-button").on("click",function(e){b.$registerFormContainer.hasClass("form_shown")||(e.preventDefault(),b._animate_form())});this.$registerForm.find(".auth-google").click(function(e){var t=function(e){b._handle_google_callback(e)},r="true"===e.target.getAttribute("data-third-party-no-popup");(new _.ProfileServicesLinkingHandler).auth_service_create_user_if_needed(h.GOOGLE,t,"register_form",!r)}),"small"===t?(this.$registerForm.find(".bubble-dropdown-container .bubble-dropdown").css({visibility:"hidden"}),this.$registerForm.find(".password-input-meter").css({cursor:"default"})):new l(this.$registerForm.find(".input-email"),this.$registerForm.find(".email-suggestion"),{livecheck:!1});var E=this.$registerForm.find("input[type='checkbox'][name='tos_agree']");E.length>0&&E.on("change",function(e){var t=b.$registerForm.find(".agree .error-message");t.length>0&&t[0].remove()})}return e.prototype._handle_google_callback=function(t){var r=this.$registerForm.find("input[type='hidden'][name='cont']").val(),i=this.$registerForm.find("input[type='hidden'][name='cont']").val(),n=this.$registerForm.find("input[type='hidden'][name='signup_tag']").val(),s=this.$registerForm.find("input[type='hidden'][name='k']").val(),o=this.$registerForm.find("input[type='hidden'][name='eh']").val();c.handleRegisterResponse(t,{registerCont:r,loginCont:i,signupTag:n,canRedirect:this.canRedirect,k:s,eh:o,signupEndpoint:this.signupEndpoint},{form:this.$registerForm,newAccount:e.NEW_ACCOUNT_FROM_3RD_PARTY,userExists:e.USER_EXISTS})},e.prototype._before_submit=function(){this.combinedName===!0&&this._combined_name_handler(),this.registerController.add_additional_data({signup_endpoint:this.signupEndpoint})},e.prototype._on_register_success=function(t,r){this.$registerForm.trigger(e.REGISTER_SUCCESS,r),this.canRedirect&&(this.cont?u.redirect(this.cont):r.redirect_url&&u.redirect(r.redirect_url))},e.prototype._on_register_error=function(e,t){this.$captchaComponent&&this.$captchaComponent.captcha_display_handler(null!=t?t.recaptcha_response:void 0)},e.prototype._animate_form=function(){var e=this;this.$registerFormContainer.hasClass("form_shown")||r.when(this.$registerFormContainer.animate({height:this.$registerForm.height()},{easing:"easeInOutCubic",duration:500})).done(function(){e.$registerFormContainer.addClass("form_shown"),e.$registerFormContainer.filter(":input").filter(":visible").first().focus(),e.$captchaComponent&&e.$captchaComponent.captcha_display_handler()})},e.prototype.fill=function(e){var t=this;Object.keys(e).forEach(function(r){return t.$registerForm.find("[name="+r+"]").val(e[r])})},e.prototype._index_error_handler=function(e){this.$registerFormContainer.find(".register-form__errors").remove();var t=r("<ul />").addClass("register-form__errors"),i=[];for(var n in e)if(e.hasOwnProperty(n)){var s=e[n],o=s.message_text||s.message_html;i.push(o),r("<li />").addClass("register-form__error").html(o).appendTo(t),this.$registerForm.find(".input-"+n).addClass("text-input--error"),"tos_agree"===n&&this.$registerForm.find(".checkbox-inline.agree").addClass("checkbox-inline--error"),this.combinedName&&"fname"===n&&(this.$registerForm.find(".input-fullname").addClass("text-input--error"),this.$registerForm.find("input[name='fullname']").addClass("input-error")),this.$registerForm.find("input[name='"+n+"']").addClass("input-error")}return this.$registerFormContainer.append(t),p.AccessibleAnnounce.assertive(i.join(". "))},e.prototype._index_clear_error_handler=function(e){var t=r(e.target);t.removeClass("input-error"),"checkbox"===t.attr("type")?t.parents(".checkbox-inline--error").removeClass("checkbox-inline--error"):t.parents(".text-input--error").removeClass("text-input--error")},e.prototype._combined_name_handler=function(){var e=this.$registerFormContainer.find('input[name="fullname"]'),t=this.$registerFormContainer.find('input[name="fname"]'),r=this.$registerFormContainer.find('input[name="lname"]'),i=a.splitFullName(e.val()),n=i[0],s=i[1];this.lastNameGoesFirst!==!0?(t.val(n),void 0!==s&&s!==n&&r.val(s)):(r.val(n),void 0!==s&&s!==n&&t.val(s))},e.REGISTER_SUCCESS="db:register:success",e.NEW_ACCOUNT_FROM_3RD_PARTY="db:register:new_account_from_3rd_party",e.USER_EXISTS="db:register:user_exists",e})();t.RegisterForm=g}),define("modules/clean/sharing/invitation_signup_page",["require","exports","tslib","external/react","jquery","modules/clean/react_format","modules/clean/react/icon/icon_helper","modules/clean/react/image","modules/clean/react/maestro_nav/shared_code/constants","modules/clean/react/maestro_nav/shared_code/dropbox_logo","modules/clean/react/maestro_nav/shared_code/strings","modules/clean/static_urls","modules/core/i18n"],function(e,t,r,i,n,s,o,a,l,c,h,_,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=m.i18n_default_project("sharing")._,u={page_white:"unknown",page_white_text:"txt",page_white_word:"docx",page_white_acrobat:"pdf",page_white_excel:"xls",page_white_powerpoint:"ppt",page_white_code:"script",page_white_gear:"exe",page_white_sound:"audio",page_white_picture:"image",page_white_film:"video",page_white_compressed:"zip",package:"pkg",page_white_dvd:"unknown",page_white_vector:"ai",page_white_paint:"psd",page_white_flash:"flash",page_white_linkfile:"unknown"},d=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.onSignInClick=function(){var e=n(".login-register-container"),t=e.find(".login-register-login-part"),r=e.find(".login-register-register-part");t.show(),r.hide(),t.find(".text-input input:visible").first().focus()},t.prototype.render=function(){return i.createElement("div",{id:"page-header",className:"page-header-border"},i.createElement("a",{className:"maestro-nav__home-button",href:"https://"+l.WWW_HOST+"/"},i.createElement(c.DropboxLogo,{className:"maestro-nav__logo","aria-label":h.homeAriaLabel()})),i.createElement("a",{className:"invitation-signup-page-sign-in",onClick:this.onSignInClick},p("Sign in")))},t})(i.Component);t.InvitationSignupPageHeader=d;var g=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getFileOrFolderIcon=function(){var e,t;this.props.isFile?(t=o.file_icon(this.props.contentName),e=u[t]||"unknown.png"):e="shared_folder.png";var r="/static/images/sharing/icons/large/"+e+".png",n="/static/images/sharing/icons/large/"+e+"@2x.png";return i.createElement(a.Image,{className:"sf-invite-referral__graphic",src:_.static_url(r),srcHiRes:_.static_url(n)})},t.prototype.render=function(){var e;return e=this.props.isFile?s.reactFormat(p("<sender_name_span>%(sender_name)s</sender_name_span>           wants to share the file           <content_name_span>%(content_name)s</content_name_span> with you."),{sender_name:this.props.senderDisplayName,content_name:this.props.contentName,sender_name_span:i.createElement("span",{className:"sf-invite-referral__sender-name"}),content_name_span:i.createElement("span",{className:"sf-invite-referral__folder-name"})}):s.reactFormat(p("<sender_name_span>%(sender_name)s</sender_name_span> wants to           share the folder <content_name_span>%(content_name)s</content_name_span>           with you."),{sender_name:this.props.senderDisplayName,content_name:this.props.contentName,sender_name_span:i.createElement("span",{className:"sf-invite-referral__sender-name"}),content_name_span:i.createElement("span",{className:"sf-invite-referral__folder-name"})}),i.createElement("div",{className:"sf-invite-referral__header"},this.getFileOrFolderIcon(),i.createElement("h1",{className:"sf-invite-referral__heading"},e))},t})(i.Component);t.SharedFolderHeader=g});
//# sourceMappingURL=pkg-login-and-register-pages.min.js-vflpZk9NF.map