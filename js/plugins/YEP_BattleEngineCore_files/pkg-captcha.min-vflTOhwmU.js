define("modules/clean/abuse/recaptcha_helper",["require","exports","modules/constants/login_and_register","modules/clean/global_constants","modules/clean/web_timing_logger","modules/core/exception"],function(e,t,a,c,n,r){"use strict";function i(){return null!=t.captchaPromise}function o(){t.captchaPromise=null}function s(e){return t.captchaPromise||(t.captchaPromise=e?new Promise(function(e,t){n.waitForTTI().then(e),setTimeout(e,2500)}).then(h):h()),t.captchaPromise}function h(){return new Promise(function(e,a){if(window.recaptchaOnloadCallback=function(){e(window.grecaptcha)},t.isTest())e(_);else{var n=document.createElement("script");if(n.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=recaptchaOnloadCallback&render=explicit"),!c.GlobalConstants.CSP_SCRIPT_NONCE)return r.reportException({err:new Error("CSP nonce not set"),severity:r.SEVERITY.CRITICAL,tags:["product-safety-infra","recaptcha"]}),void a();n.setAttribute("nonce",c.GlobalConstants.CSP_SCRIPT_NONCE),document.body.appendChild(n)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.HasCaptchaLoaded=i,t.ClearCaptchaPromise=o,t.LoadRecaptcha=s,t.isTest=function(){return a.IS_SELENIUM_TEST};var p={},l={},u=0;t.DUMMY_RESPONSE="DUMMY-RESPONSE";var d=function(e){e.setAttribute("class","g-recaptcha-response"),e.setAttribute("name","g-recaptcha-response"),e.value=""},_={reset:function(e){return d(l[e].querySelector(".g-recaptcha-response")),!0},render:function(e,a,c){var n=u;u+=1,r.assert(null==e.querySelector(".g-recaptcha-response"),"can't render multiple recaptcha elements in same div");var i=document.createElement("textarea");return i.id="g-recaptcha-response-"+n,d(i),e.appendChild(i),l[n]=e,p[n]=function(){var e=t.DUMMY_RESPONSE;return i.value=e,a.callback&&a.callback(e),e},n},execute:function(e){return Promise.resolve(p[e]())}}}),define("modules/clean/captcha",["require","exports","external/react","external/react-dom","jquery","modules/clean/abuse/recaptcha_helper","modules/clean/ajax","modules/clean/react/recaptcha_challenge","modules/core/i18n","modules/core/notify"],function(e,t,a,c,n,r,i,o,s,h){"use strict";function p(e,t){return void 0!==e&&null!==e?t(e):void 0}var l=a.createElement;return(function(){function e(e,t,a,c,n,r,i){this._show_captcha=this._show_captcha.bind(this),this._show_captcha_v2=this._show_captcha_v2.bind(this),this._hide_captcha=this._hide_captcha.bind(this),this._hide_captcha_v2=this._hide_captcha_v2.bind(this),this._hide_other_captcha=this._hide_other_captcha.bind(this),this.captcha_display_handler=this.captcha_display_handler.bind(this),this.parent_form=e,this.captcha_div=t,this.other_recaptcha_div=a,this.endpoint=c,this.email_name=n,this.variant=r,this.is_v2=i,this.$recaptcha_container=p(this.parent_form.find(this.captcha_div),function(e){return e[0]}),this.$recaptcha_react_component=null}return e.prototype._show_captcha=function(e,t){if(null==(null!=this.$recaptcha_container?this.$recaptcha_container.children:void 0)&&(this.$recaptcha_react_component=null),null==this.$recaptcha_react_component){var a=l(o,{public_key:e,variant:this.variant,error:t});return this.$recaptcha_react_component=c.render(a,this.$recaptcha_container)}return this.$recaptcha_react_component.reload(t)},e.prototype._show_captcha_v2=function(e,t){var a=this;n("#"+this.captcha_div).parent().show(),r.LoadRecaptcha().then(function(t){n("#"+a.captcha_div).children().length?t.reset():t.render(a.captcha_div,{sitekey:e})})},e.prototype._hide_captcha=function(){if(null==(null!=this.$recaptcha_container?this.$recaptcha_container.children:void 0)&&(this.$recaptcha_react_component=null),null!=this.$recaptcha_react_component)return c.unmountComponentAtNode(this.$recaptcha_container),this.$recaptcha_react_component=null},e.prototype._hide_captcha_v2=function(){return n("#"+this.captcha_div).parent().hide()},e.prototype._hide_other_captcha=function(){var e=n(this.other_recaptcha_div)[0];if(null!=(null!=e?e.children:void 0))return c.unmountComponentAtNode(e)},e.prototype.captcha_display_handler=function(e){var t=this;return i.WebRequest({url:this.endpoint,data:{email:this.parent_form.find("input[name='"+this.email_name+"']").val()},success:function(a){try{var c=JSON.parse(a);return c.needs_captcha?(t._hide_other_captcha(),t.is_v2?t._show_captcha_v2(c.recaptcha_v2_public_key,e):t._show_captcha(c.recaptcha_public_key,e)):t.is_v2?t._hide_captcha_v2():t._hide_captcha()}catch(e){return h.Notify.error(s._("There was a problem completing this request."))}}})},e})()}),define("modules/clean/global_constants",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalConstants=window.GlobalConstants}),define("modules/clean/react/payments/common/adapters/captcha",["require","exports","modules/clean/ajax_as_promised","modules/core/i18n","modules/core/notify"],function(e,t,a,c,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(function(){function e(){}return e.getRecaptchaChallenge=function(){var e=document.getElementById("recaptcha_challenge_field");return e&&e.value},e.requestCaptcha=function(e){return a.WebRequest({url:"/ajax_needs_business_signup_captcha",data:{email:e}}).then(function(e){try{var t=JSON.parse(e);return{needsCaptcha:t.needs_captcha,recaptchaPublicKey:t.recaptcha_public_key}}catch(e){throw n.Notify.error(c._("There was a problem completing this request.")),e}},function(e){var t=e.jqXHR;return Promise.reject(t.statusText)})},e})();t.Captcha=r}),define("modules/clean/react/recaptcha_challenge",["require","exports","external/create-react-class","external/react","external/react-dom-factories","jquery","modules/clean/react/form_error_mixin","modules/clean/react/input","modules/clean/static_urls","modules/core/i18n"],function(e,t,a,c,n,r,i,o,s,h){"use strict";var p=o.text,l=c.createElement;return a({displayName:"RecaptchaChallenge",mixins:[i],getDefaultProps:function(){return{public_key:"",errorWrapperClassName:"text-input-error-wrapper",variant:"standard",onInputChange:null}},componentDidMount:function(){var e=this.props.public_key;return r.getScript("https://www.google.com/recaptcha/api/js/recaptcha_ajax.js",function(){return Recaptcha.create(e,"recaptcha_widget",{theme:"custom"})})},handleReloadLinkClick:function(){return Recaptcha.reload()},handleSwitchTypeToAudioLinkClick:function(){return Recaptcha.switch_type("audio")},handleSwitchTypeToImageLinkClick:function(){return Recaptcha.switch_type("image")},handleHelpLinkClick:function(){return Recaptcha.showhelp()},_renderButtons:function(){return n.div({className:this.props.variant+" recaptcha-buttons"},n.a({className:"recaptcha-button recaptcha-reload",onClick:this.handleReloadLinkClick},n.img({src:s.static_url("/static/images/icons/captcha-reload-vflqH90Ce.png")})),n.a({className:"recaptcha-button recaptcha_only_if_image",onClick:this.handleSwitchTypeToAudioLinkClick},n.img({src:s.static_url("/static/images/icons/captcha-audio-vfl_VBPgQ.png")})),n.a({className:"recaptcha-button recaptcha_only_if_audio",onClick:this.handleSwitchTypeToImageLinkClick},n.img({src:s.static_url("/static/images/icons/captcha-words-vfl-bt9Xw.png")})),n.a({className:"recaptcha-button recaptcha-show-help",onClick:this.handleHelpLinkClick},n.img({src:s.static_url("/static/images/icons/captcha-help-vfleUYtSD.png")})))},_renderRecaptchaResponseInput:function(){return l(p,{id:"recaptcha_response",name:"recaptcha_response",className:"login-text-input","disable-errors":!0,placeholder:h._("Type the text"),onChange:this.props.onInputChange})},_renderDummyInput:function(){return n.input({type:"hidden",id:"recaptcha_response_field"})},_renderStandard:function(){var e=this.renderErrorIfEnabled();return n.div({id:"recaptcha_widget",className:"standard recaptcha-container"},e,n.div({id:"recaptcha_image",className:"standard login-recaptcha-challenge-container"}),this._renderRecaptchaResponseInput(),this._renderButtons(),this._renderDummyInput())},_renderSmall:function(){var e=this.renderErrorIfEnabled();return n.div({id:"recaptcha_widget",className:"small recaptcha-container"},e,n.div({id:"recaptcha_image",className:"small login-recaptcha-challenge-container"}),this._renderButtons(),this._renderRecaptchaResponseInput(),this._renderDummyInput())},render:function(){return"standard"===this.props.variant?this._renderStandard():"small"===this.props.variant?this._renderSmall():void 0},reload:function(){return Recaptcha.reload()}})});
//# sourceMappingURL=pkg-captcha.min.js-vflF1xDys.map