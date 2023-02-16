/*! For license information please see System_settings.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4806],{30574:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var r=s(20629),a=s(74865),o=s.n(a);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(){i=function(){return t};var t={},e=Object.prototype,s=e.hasOwnProperty,r=Object.defineProperty||function(t,e,s){t[e]=s.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,s){return Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,s){return t[e]=s}}function d(t,e,s,a){var o=e&&e.prototype instanceof _?e:_,n=Object.create(o.prototype),i=new O(a||[]);return r(n,"_invoke",{value:k(t,s,i)}),n}function m(t,e,s){try{return{type:"normal",arg:t.call(e,s)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var p={};function _(){}function f(){}function h(){}var v={};u(v,o,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==e&&s.call(g,o)&&(v=g);var y=h.prototype=_.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function a(r,o,i,l){var c=m(t[r],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==n(d)&&s.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,l)}),(function(t){a("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,l)}))}l(c.arg)}var o;r(this,"_invoke",{value:function(t,s){function r(){return new e((function(e,r){a(t,s,e,r)}))}return o=o?o.then(r,r):r()}})}function k(t,e,s){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return I()}for(s.method=a,s.arg=o;;){var n=s.delegate;if(n){var i=S(n,s);if(i){if(i===p)continue;return i}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===r)throw r="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);r="executing";var l=m(t,e,s);if("normal"===l.type){if(r=s.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:s.done}}"throw"===l.type&&(r="completed",s.method="throw",s.arg=l.arg)}}}function S(t,e){var s=e.method,r=t.iterator[s];if(void 0===r)return e.delegate=null,"throw"===s&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==s&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+s+"' method")),p;var a=m(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(s.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return f.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w($.prototype),u($.prototype,l,(function(){return this})),t.AsyncIterator=$,t.async=function(e,s,r,a,o){void 0===o&&(o=Promise);var n=new $(d(e,s,r,a),o);return t.isGeneratorFunction(s)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},w(y),u(y,c,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),s=[];for(var r in e)s.push(r);return s.reverse(),function t(){for(;s.length;){var r=s.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(s,r){return n.type="throw",n.arg=t,e.next=s,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],n=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),l=s.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&s.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.finallyLoc===t)return this.complete(s.completion,s.afterLoc),T(s),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc===t){var r=s.completion;if("throw"===r.type){var a=r.arg;T(s)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,s){return this.delegate={iterator:P(t),resultName:e,nextLoc:s},"next"===this.method&&(this.arg=void 0),p}},t}function l(t,e,s,r,a,o,n){try{var i=t[o](n),l=i.value}catch(t){return void s(t)}i.done?e(l):Promise.resolve(l).then(r,a)}function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){d(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function d(t,e,s){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var r=s.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const m={metaInfo:{title:"System Settings"},data:function(){return{isLoading:!0,data:new FormData,settings:[],currencies:[],clients:[],warehouses:[],setting:{client_id:"",warehouse_id:"",currency_id:"",email:"",logo:"",CompanyName:"",CompanyPhone:"",CompanyAdress:"",footer:"",developed_by:"",default_language:""},pos_settings:{note_customer:"",show_note:"",show_barcode:"",show_discount:"",show_phone:"",show_email:"",show_address:"",show_customer:""},gateway:{stripe_key:"",stripe_secret:"",deleted:!1},sms:{gateway:"Twilio",TWILIO_SID:"",TWILIO_TOKEN:"",TWILIO_FROM:""},server:{host:"",port:"",username:"",password:"",encryption:""}}},methods:u(u({},(0,r.nv)(["refreshUserPermissions"])),{},{SetLocal:function(t){this.$i18n.locale=t,this.$store.dispatch("language/setLanguage",t),Fire.$emit("ChangeLanguage")},Submit_Setting:function(){var t=this;this.$refs.form_setting.validate().then((function(e){e?t.Update_Settings():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_Pos_Settings:function(){var t=this;this.$refs.Submit_Pos_Settings.validate().then((function(e){e?t.Update_Pos_Settings():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_SMTP:function(){var t=this;this.$refs.form_smtp.validate().then((function(e){e?t.Update_Smtp():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_Payment:function(){var t=this;this.$refs.form_payment.validate().then((function(e){e?t.Update_Payment():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_sms:function(){var t=this;this.$refs.form_sms.validate().then((function(e){e?t.Update_SMS():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,s=t.validated,r=t.valid;return e||s?void 0===r?null:r:null},onFileSelected:function(t){var e,s=this;return(e=i().mark((function e(){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.$refs.Logo.validate(t);case 2:r=e.sent,a=r.valid,s.setting.logo=a?t.target.files[0]:"";case 5:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(r,a){var o=e.apply(t,s);function n(t){l(o,r,a,n,i,"next",t)}function i(t){l(o,r,a,n,i,"throw",t)}n(void 0)}))})()},Update_Settings:function(){var t=this;o().start(),o().set(.1);var e=this;e.data.append("client",e.setting.client_id),e.data.append("warehouse",e.setting.warehouse_id),e.data.append("currency",e.setting.currency_id),e.data.append("email",e.setting.email),e.data.append("logo",e.setting.logo),e.data.append("CompanyName",e.setting.CompanyName),e.data.append("CompanyPhone",e.setting.CompanyPhone),e.data.append("CompanyAdress",e.setting.CompanyAdress),e.data.append("footer",e.setting.footer),e.data.append("developed_by",e.setting.developed_by),e.data.append("default_language",e.setting.default_language),e.data.append("_method","put"),axios.post("settings/"+e.setting.id,e.data).then((function(s){Fire.$emit("Event_Setting"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),t.refreshUserPermissions(),o().done(),t.SetLocal(e.setting.default_language)})).catch((function(e){t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),o().done()}))},Update_Pos_Settings:function(){var t=this;o().start(),o().set(.1),axios.put("pos_settings/"+this.pos_settings.id,{note_customer:this.pos_settings.note_customer,show_note:this.pos_settings.show_note,show_barcode:this.pos_settings.show_barcode,show_discount:this.pos_settings.show_discount,show_phone:this.pos_settings.show_phone,show_email:this.pos_settings.show_email,show_address:this.pos_settings.show_address,show_customer:this.pos_settings.show_customer}).then((function(e){Fire.$emit("Event_Pos_Settings"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),o().done()})).catch((function(e){o().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_Smtp:function(){var t=this;o().start(),o().set(.1),axios.put("SMTP/"+this.server.id,{host:this.server.host,port:this.server.port,username:this.server.username,password:this.server.password,encryption:this.server.encryption}).then((function(e){Fire.$emit("Event_Smtp"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),o().done()})).catch((function(e){o().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_Payment:function(){var t=this;o().start(),o().set(.1),axios.post("payment_gateway",{stripe_key:this.gateway.stripe_key,stripe_secret:this.gateway.stripe_secret,deleted:this.gateway.deleted}).then((function(e){Fire.$emit("Event_payment"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),o().done()})).catch((function(e){o().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_SMS:function(){var t=this;o().start(),o().set(.1),axios.post("sms_config",{TWILIO_SID:this.sms.TWILIO_SID,TWILIO_TOKEN:this.sms.TWILIO_TOKEN,TWILIO_FROM:this.sms.TWILIO_FROM}).then((function(e){Fire.$emit("Event_sms"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),o().done()})).catch((function(e){o().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},get_sms_config:function(){var t=this;axios.get("get_sms_config").then((function(e){t.sms=e.data.sms})).catch((function(t){}))},Clear_Cache:function(){var t=this;o().start(),o().set(.1),axios.get("Clear_Cache").then((function(e){t.makeToast("success",t.$t("Cache_cleared_successfully"),t.$t("Success")),o().done()})).catch((function(e){o().done(),t.makeToast("danger",t.$t("Failed_to_clear_cache"),t.$t("Failed"))}))},Get_Payment_Gateway:function(){var t=this;axios.get("Get_payment_gateway").then((function(e){t.gateway=e.data.gateway})).catch((function(t){}))},Get_Settings:function(){var t=this;axios.get("getSettings").then((function(e){t.setting=e.data.settings,t.currencies=e.data.currencies,t.clients=e.data.clients,t.warehouses=e.data.warehouses,t.Get_SMTP(),t.get_pos_Settings(),t.Get_Payment_Gateway(),t.get_sms_config(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))},Get_SMTP:function(){var t=this;axios.get("getSMTP").then((function(e){t.server=e.data.server})).catch((function(t){}))},get_pos_Settings:function(){var t=this;axios.get("get_pos_Settings").then((function(e){t.pos_settings=e.data.pos_settings})).catch((function(t){}))}}),created:function(){var t=this;this.Get_Settings(),Fire.$on("Event_Smtp",(function(){t.Get_SMTP()})),Fire.$on("Event_payment",(function(){t.Get_Payment_Gateway()})),Fire.$on("Event_Setting",(function(){t.Get_Settings()})),Fire.$on("Event_Pos_Settings",(function(){t.get_pos_Settings()})),Fire.$on("Event_sms",(function(){t.get_sms_config()}))}};const p=(0,s(51900).Z)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("SystemSettings"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"form_setting"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Setting.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("SystemSettings")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("DefaultCurrency")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Currency"),options:t.currencies.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.setting.currency_id,callback:function(e){t.$set(t.setting,"currency_id",e)},expression:"setting.currency_id"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Email",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("DefaultEmail")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Email-feedback",label:"Email",placeholder:t.$t("DefaultEmail")},model:{value:t.setting.email,callback:function(e){t.$set(t.setting,"email",e)},expression:"setting.email"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,4279491894)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{ref:"Logo",attrs:{name:"Logo",rules:"mimes:image/*|size:200"},scopedSlots:t._u([{key:"default",fn:function(s){s.validate;var r=s.valid,a=s.errors;return e("b-form-group",{attrs:{label:t.$t("ChangeLogo")}},[e("input",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!r||null),label:"Choose Logo",type:"file"},on:{change:t.onFileSelected}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Logo-feedback"}},[t._v(t._s(a[0]))])],1)}}],null,!1,3189141354)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Company Name",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("CompanyName")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Company-feedback",label:"Company Name",placeholder:t.$t("CompanyName")},model:{value:t.setting.CompanyName,callback:function(e){t.$set(t.setting,"CompanyName",e)},expression:"setting.CompanyName"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Company-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,1317089302)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Company Phone",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("CompanyPhone")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Phone-feedback",label:"Company Phone",placeholder:t.$t("CompanyPhone")},model:{value:t.setting.CompanyPhone,callback:function(e){t.$set(t.setting,"CompanyPhone",e)},expression:"setting.CompanyPhone"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,1395357846)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"developed by",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("developed_by")+" *"}},[e("b-form-input",{staticClass:"form-control",attrs:{state:t.getValidationState(s),"aria-describedby":"developed_by-feedback"},model:{value:t.setting.developed_by,callback:function(e){t.$set(t.setting,"developed_by",e)},expression:"setting.developed_by"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"developed_by-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,4204870398)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"footer",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("footer")+" *"}},[e("b-form-input",{staticClass:"form-control",attrs:{state:t.getValidationState(s),"aria-describedby":"footer-feedback"},model:{value:t.setting.footer,callback:function(e){t.$set(t.setting,"footer",e)},expression:"setting.footer"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"footer-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,3264557662)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"DefaultLanguage",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.valid,a=s.errors;return e("b-form-group",{attrs:{label:t.$t("DefaultLanguage")+" *"}},[e("v-select",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!r||null),reduce:function(t){return t.value},placeholder:t.$t("DefaultLanguage"),options:[{label:"English",value:"en"},{label:"French",value:"fr"},{label:"Arabic",value:"ar"},{label:"Turkish",value:"tur"},{label:"Simplified Chinese",value:"sm_ch"},{label:"Thaï",value:"thai"},{label:"Hindi",value:"hn"},{label:"German",value:"de"},{label:"Spanish",value:"es"},{label:"Italien",value:"it"},{label:"Indonesian",value:"Ind"},{label:"Traditional Chinese",value:"tr_ch"},{label:"Russian",value:"ru"},{label:"Vietnamese",value:"vn"},{label:"Korean",value:"kr"}]},model:{value:t.setting.default_language,callback:function(e){t.$set(t.setting,"default_language",e)},expression:"setting.default_language"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(a[0]))])],1)}}],null,!1,2880158493)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("DefaultCustomer")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Customer"),options:t.clients.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.setting.client_id,callback:function(e){t.$set(t.setting,"client_id",e)},expression:"setting.client_id"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("DefaultWarehouse")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.setting.warehouse_id,callback:function(e){t.$set(t.setting,"warehouse_id",e)},expression:"setting.warehouse_id"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("validation-provider",{attrs:{name:"Adress",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("Adress")+" *"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.setting.CompanyAdress,expression:"setting.CompanyAdress"}],staticClass:"form-control",attrs:{state:t.getValidationState(s),"aria-describedby":"Adress-feedback",placeholder:t.$t("Afewwords")},domProps:{value:t.setting.CompanyAdress},on:{input:function(e){e.target.composing||t.$set(t.setting,"CompanyAdress",e.target.value)}}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Adress-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,758978009)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"Submit_Pos_Settings"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Pos_Settings.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("Pos_Settings")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("validation-provider",{attrs:{name:"note",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("Note_to_customer")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"note-feedback",label:"Note to customer",placeholder:t.$t("Note_to_customer")},model:{value:t.pos_settings.note_customer,callback:function(e){t.$set(t.pos_settings,"note_customer",e)},expression:"pos_settings.note_customer"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"note-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,1637698482)})],1),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_Phone"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_phone,expression:"pos_settings.show_phone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_phone)?t._i(t.pos_settings.show_phone,null)>-1:t.pos_settings.show_phone},on:{change:function(e){var s=t.pos_settings.show_phone,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_phone",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_phone",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_phone",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_Address"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_address,expression:"pos_settings.show_address"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_address)?t._i(t.pos_settings.show_address,null)>-1:t.pos_settings.show_address},on:{change:function(e){var s=t.pos_settings.show_address,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_address",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_address",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_address",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_Email"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_email,expression:"pos_settings.show_email"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_email)?t._i(t.pos_settings.show_email,null)>-1:t.pos_settings.show_email},on:{change:function(e){var s=t.pos_settings.show_email,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_email",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_email",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_email",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_Customer"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_customer,expression:"pos_settings.show_customer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_customer)?t._i(t.pos_settings.show_customer,null)>-1:t.pos_settings.show_customer},on:{change:function(e){var s=t.pos_settings.show_customer,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_customer",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_customer",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_customer",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_Tax_and_Discount"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_discount,expression:"pos_settings.show_discount"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_discount)?t._i(t.pos_settings.show_discount,null)>-1:t.pos_settings.show_discount},on:{change:function(e){var s=t.pos_settings.show_discount,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_discount",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_discount",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_discount",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_barcode"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_barcode,expression:"pos_settings.show_barcode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_barcode)?t._i(t.pos_settings.show_barcode,null)>-1:t.pos_settings.show_barcode},on:{change:function(e){var s=t.pos_settings.show_barcode,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_barcode",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_barcode",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_barcode",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Show_Note_to_customer"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pos_settings.show_note,expression:"pos_settings.show_note"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.pos_settings.show_note)?t._i(t.pos_settings.show_note,null)>-1:t.pos_settings.show_note},on:{change:function(e){var s=t.pos_settings.show_note,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.pos_settings,"show_note",s.concat([null])):o>-1&&t.$set(t.pos_settings,"show_note",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.pos_settings,"show_note",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"form_payment"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Payment.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("Payment_Gateway")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"STRIPE_KEY"}},[e("b-form-input",{attrs:{type:"password",placeholder:t.$t("LeaveBlank")},model:{value:t.gateway.stripe_key,callback:function(e){t.$set(t.gateway,"stripe_key",e)},expression:"gateway.stripe_key"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"STRIPE_SECRET"}},[e("b-form-input",{attrs:{type:"password",placeholder:t.$t("LeaveBlank")},model:{value:t.gateway.stripe_secret,callback:function(e){t.$set(t.gateway,"stripe_secret",e)},expression:"gateway.stripe_secret"}})],1)],1),t._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[e("label",{staticClass:"switch switch-primary mr-3"},[t._v("\n                       "+t._s(t.$t("Remove_Stripe_Key_Secret"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gateway.deleted,expression:"gateway.deleted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.gateway.deleted)?t._i(t.gateway.deleted,null)>-1:t.gateway.deleted},on:{change:function(e){var s=t.gateway.deleted,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t._i(s,null);r.checked?o<0&&t.$set(t.gateway,"deleted",s.concat([null])):o>-1&&t.$set(t.gateway,"deleted",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.gateway,"deleted",a)}}}),t._v(" "),e("span",{staticClass:"slider"})])]),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"form_sms"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_sms.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("SMS_Configuration")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"Gateway"}},[e("b-form-group",{attrs:{label:t.$t("Gateway")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Gateway"),options:[{label:"Twilio",value:"Twilio"}]},model:{value:t.sms.gateway,callback:function(e){t.$set(t.sms,"gateway",e)},expression:"sms.gateway"}})],1)],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"TWILIO_SID",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:"TWILIO_SID"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"TWILIO_SID-feedback",label:"TWILIO_SID"},model:{value:t.sms.TWILIO_SID,callback:function(e){t.$set(t.sms,"TWILIO_SID",e)},expression:"sms.TWILIO_SID"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"TWILIO_SID-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,3763386067)})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"TWILIO_TOKEN"}},[e("b-form-input",{attrs:{label:"TWILIO_TOKEN",placeholder:t.$t("LeaveBlank")},model:{value:t.sms.TWILIO_TOKEN,callback:function(e){t.$set(t.sms,"TWILIO_TOKEN",e)},expression:"sms.TWILIO_TOKEN"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"TWILIO_FROM",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:"TWILIO_FROM"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"TWILIO_FROM-feedback",label:"TWILIO_FROM"},model:{value:t.sms.TWILIO_FROM,callback:function(e){t.$set(t.sms,"TWILIO_FROM",e)},expression:"sms.TWILIO_FROM"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"TWILIO_FROM-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,3199732955)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"form_smtp"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_SMTP.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("SMTPConfiguration")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"HOST",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("HOST")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"HOST-feedback",label:"HOST",placeholder:t.$t("HOST")},model:{value:t.server.host,callback:function(e){t.$set(t.server,"host",e)},expression:"server.host"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"HOST-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,1931176933)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"PORT",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("PORT")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"PORT-feedback",label:"PORT",placeholder:t.$t("PORT")},model:{value:t.server.port,callback:function(e){t.$set(t.server,"port",e)},expression:"server.port"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"PORT-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,2177655621)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Username",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("username")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Username-feedback",label:"Username",placeholder:t.$t("username")},model:{value:t.server.username,callback:function(e){t.$set(t.server,"username",e)},expression:"server.username"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Username-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,2499207045)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Password",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("password")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Password-feedback",label:"Password",placeholder:t.$t("password")},model:{value:t.server.password,callback:function(e){t.$set(t.server,"password",e)},expression:"server.password"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Password-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,3858009893)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"encryption",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("encryption")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"encryption-feedback",label:"encryption",placeholder:t.$t("encryption")},model:{value:t.server.encryption,callback:function(e){t.$set(t.server,"encryption",e)},expression:"server.encryption"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"encryption-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,2876509381)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Clear_Cache.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("Clear_Cache")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.Clear_Cache()}}},[t._v(t._s(t.$t("Clear_Cache")))])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);