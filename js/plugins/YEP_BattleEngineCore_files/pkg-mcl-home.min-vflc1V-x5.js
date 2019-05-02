define("spectrum/exports/exenv",function(){return(function(e){function t(h){if(l[h])return l[h].exports;var i=l[h]={i:h,l:!1,exports:{}};return e[h].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var l={};return t.m=e,t.c=l,t.d=function(e,l,h){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:h})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)})([function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,l){"use strict";var h,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(){var n=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen};"object"===i(l(0))&&l(0)?(h=function(){return a}.call(t,l,t,e),void 0!==h&&(e.exports=h)):void 0!==e&&e.exports?e.exports=a:window.ExecutionEnvironment=a})()}])}),define("spectrum/icon_action/index",["require","exports","tslib","react","spectrum/icon_templates/actionable/index","spectrum/icon_bundles/action"],function(e,t,l,h,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ICONS=n.ICONS,t.IconAction=function(e){var t=e.name,a=n.ICONS[t],r=a.attrs,o=a.innerHtml,v=h.createElement("svg",l.__assign({},r,{dangerouslySetInnerHTML:{__html:o}}));return h.createElement(i.Component,l.__assign({icon:v},e,{key:t}))},t.IconAction.displayName="IconAction"}),define("spectrum/icon_bundles/action",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ICONS={"add-comment":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M10 23.234L13.723 21h7.77a.5.5 0 0 0 .507-.491V10.49a.492.492 0 0 0-.498-.491H10.498a.505.505 0 0 0-.498.505v12.729z" stroke="#0070E0" stroke-width="2"></path><path d="M13 14h6v1h-6v-1zm0 2h3v1h-3v-1z" fill="#99C6F3"></path></g>'},"add-to-collection":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M8 22.498C8 23.328 8.671 24 9.502 24H15v-2h7V10H10v7H8v5.498zM8 9.505A1.5 1.5 0 0 1 9.505 8h12.99A1.5 1.5 0 0 1 24 9.505v12.99A1.5 1.5 0 0 1 22.495 24H9.505A1.5 1.5 0 0 1 8 22.495V9.505z" fill="#0070E0" fill-rule="nonzero"></path><path fill="#99C6F3" d="M12 12h8v3h-8z"></path><path stroke="#0070E0" stroke-width="2" d="M9 19h4v4H9z"></path><path fill="#99C6F3" d="M17 17h3v3h-3z"></path></g>'},archive:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M8 12h16v10.504C24 23.33 23.333 24 22.495 24H9.505C8.674 24 8 23.32 8 22.504V12zm2 2v8h12v-8H10zm-2-4c0-.552.445-1 1-1h14c.552 0 1 .444 1 1v1H8v-1z" fill="#0070E0"></path><path fill="#A2CBF4" d="M13 16h6v2h-6z"></path></g>'},brainstorm:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<path fill="#0070E0" d="M20.93 14.06l-9.668 9.654 3.816-7.635H11L14.875 8H21l-4.442 6.06z" fill-rule="evenodd"></path>'},calculate:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z" fill-opacity="0"></path><path fill="#99C6F3" d="M13 15h1v1h-1zM13 17h1v1h-1zM13 19h1v1h-1zM15.5 15h1v1h-1zM15.5 17h1v1h-1zM15.5 19h1v1h-1zM18 15h1v1h-1zM18 17h1v1h-1zM18 19h1v1h-1zM13 11.5h6v2h-6z"></path><path d="M23 9.505v12.99c0 .838-.67 1.505-1.498 1.505H10.498A1.505 1.505 0 0 1 9 22.495V9.505C9 8.667 9.67 8 10.498 8h11.004C22.325 8 23 8.674 23 9.505zM21 10H11v12h10V10z" fill="#0070E0" fill-rule="nonzero"></path></g>'},copy:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M14.999 23H9.496A1.507 1.507 0 0 1 8 21.495V8.505C8 7.667 8.67 7 9.496 7h5.256H11v2h-1v12h1v2h3.999zM8 12v6h2v-6H8z" fill="#A2CBF4" fill-rule="nonzero"></path><path d="M24 8.505v12.99c0 .838-.67 1.505-1.496 1.505h-9.008A1.507 1.507 0 0 1 12 21.495V8.505C12 7.667 12.67 7 13.496 7h9.008C23.32 7 24 7.674 24 8.505zM14 9v12h8V9h-8zm-2 1v10h2V10h-2z" fill="#0070E0" fill-rule="nonzero"></path><path d="M12 14H9v2h3v3h2v-3h3v-2h-3v-3h-2v3z" fill="#0070E0"></path></g>'},delete:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M12 13h-2l.455 10.004c.025.551.494.996 1.047.996h9.996a1.06 1.06 0 0 0 1.047-.996L23 13h-2v8.004c0 .55-.446.996-.998.996h-7.004a.996.996 0 0 1-.998-.996V13zM9 9h15v1.495a.502.502 0 0 1-.5.505h-14a.494.494 0 0 1-.5-.505V9zm5-1c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v1h-5V8z" fill="#0070E0"></path><path d="M14 13h1v7h-1v-7zm2 0h1v7h-1v-7zm2 0h1v7h-1v-7z" fill="#A2CBF4"></path></g>'},download:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path fill="#99C6F3" d="M10 22h12v2H10z"></path><path d="M14 14h-2.49c-.282 0-.373.178-.205.397l4.082 5.306c.344.448.887.44 1.226 0l4.082-5.306c.171-.223.077-.397-.205-.397H18V8.503c0-.27-.22-.503-.49-.503h-3.02a.494.494 0 0 0-.49.503V14z" fill="#0070E0"></path></g>'},events:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M8 10.493C8 9.668 8.667 9 9.505 9h12.99C23.326 9 24 9.664 24 10.493v12.014c0 .825-.667 1.493-1.505 1.493H9.505A1.496 1.496 0 0 1 8 22.507V10.493zM10 13v9h12v-9H10z" fill="#0070E0"></path><path fill="none" d="M0 0h32v32H0z"></path><path d="M12 15h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" fill="#A2CBF4"></path></g>'},"flag-for-copyright":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="#0070E0" d="M10 8h2v16h-2z"></path><path d="M11 8.996v8.002a434.509 434.509 0 0 1 1.007.002c3.06.022 3.568.16 4.7 1.293.464.464 1.429.666 4.293.701v-7.996c-2.926-.011-3.321-.102-4.105-.73a6.769 6.769 0 0 1-.602-.56c-.536-.537-1.008-.653-4.31-.708A55.344 55.344 0 0 0 11 8.996z" stroke="#0070E0" stroke-width="2"></path></g>'},hide:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g><path fill="none" d="M0 0h32v32H0z"></path><circle fill="#99C6F3" cx="15.5" cy="16" r="2"></circle><path d="M16.782 21.904l1.413-2.448C20.763 18.362 22.014 16 22.014 16s-.322-.65-1-1.425l1.018-1.764c1.262 1.211 1.912 2.355 1.912 2.355.318.459.31 1.202.007 1.656 0 0-2.497 4.375-7.17 5.082zM21.97 8.917l-8.942 15.49a.518.518 0 0 1-.233-.07l-.858-.496a.505.505 0 0 1-.187-.686l.94-1.628c-3.683-1.276-5.632-4.693-5.632-4.693-.32-.459-.313-1.202-.01-1.656 0 0 2.943-5.178 8.452-5.178 1.286 0 2.432.282 3.433.713l1.317-2.28a.495.495 0 0 1 .687-.18l.858.495a.502.502 0 0 1 .175.17zm-8.26 10.844l4.236-7.337A7.015 7.015 0 0 0 15.514 12c-4.52 0-6.5 4-6.5 4s1.535 2.9 4.696 3.761z" fill="#0070E0"></path></g></g>'},link:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g fill="#637282"><path d="M6 16c0-2.21 1.794-4 4.007-4h4.986A4.006 4.006 0 0 1 19 16v4h-8.993A4.006 4.006 0 0 1 6 16zm2 0c0 1.112.898 2 2.005 2H13v2h6v-3h-2v-.999c0-1.1-.894-2.001-1.997-2.001H9.997A2 2 0 0 0 8 16z"></path><path d="M26 16c0 2.21-1.794 4-4.007 4h-4.986A4.006 4.006 0 0 1 13 16v-4h8.993A4.006 4.006 0 0 1 26 16zm-2 0c0-1.112-.898-2-2.005-2H19v-2h-6v3h2v.999c0 1.1.894 2.001 1.997 2.001h5.006A2 2 0 0 0 24 16z"></path></g></g>'},move:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M14.999 24H9.496A1.507 1.507 0 0 1 8 22.495V9.505C8 8.667 8.67 8 9.496 8h5.256H11v16h3.999zM11 10h-1v12h1V10zm-3 3v7h2v-7H8z" fill="#A2CBF4" fill-rule="nonzero"></path><path d="M24 9.505v12.99c0 .838-.67 1.505-1.496 1.505h-9.008A1.507 1.507 0 0 1 12 22.495V9.505C12 8.667 12.67 8 13.496 8h9.008C23.32 8 24 8.674 24 9.505zM14 10v12h8V10h-8zm-2 3v7h2v-7h-2z" fill="#0070E0" fill-rule="nonzero"></path><path d="M20.5 16.5l-3.788-3.797c-.388-.388-.702-.26-.702.296V15H10v3h6.01v2.001c0 .552.323.675.702.296L20.5 16.5z" fill="#0070E0"></path></g>'},"new-collection":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M10 22h12V10H10v12zM8 9.505A1.5 1.5 0 0 1 9.505 8h12.99A1.5 1.5 0 0 1 24 9.505v12.99A1.5 1.5 0 0 1 22.495 24H9.505A1.5 1.5 0 0 1 8 22.495V9.505z" fill="#0070E0" fill-rule="nonzero"></path><path fill="#99C6F3" d="M12 12h8v3h-8zM12 17h3v3h-3zM17 17h3v3h-3z"></path></g>'},"new-file-request":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M9 11.505C9 10.674 9.675 10 10.498 10h11.004c.827 0 1.498.668 1.498 1.505V21.5c0 .828-.675 1.5-1.498 1.5H10.498A1.5 1.5 0 0 1 9 21.5V11.505zM11 12v6h3v2h4v-2h3v-6H11z" fill="#0070E0"></path></g>'},"new-folder":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.014C8 22.332 8.667 23 9.505 23h12.99c.831 0 1.505-.663 1.505-1.491V11.49zM22 21H10v-9h12v9z" fill-rule="nonzero" fill="#0070E0"></path></g>'},"new-image":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g><path d="M10 22h12V10H10v12zM8 9.505A1.5 1.5 0 0 1 9.505 8h12.99A1.5 1.5 0 0 1 24 9.505v12.99A1.5 1.5 0 0 1 22.495 24H9.505A1.5 1.5 0 0 1 8 22.495V9.505z" fill="#0070E0" fill-rule="nonzero"></path><path fill="#99C6F3" d="M14.75 15L17 18.5l1.1-1.5 1.9 3h-8z"></path><circle fill="#99C6F3" cx="18.5" cy="13.5" r="1.5"></circle></g></g>'},"new-meeting-note":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M8 10.493C8 9.668 8.667 9 9.505 9h12.99C23.326 9 24 9.664 24 10.493v12.014c0 .825-.667 1.493-1.505 1.493H9.505A1.496 1.496 0 0 1 8 22.507V10.493zM10 13v9h12v-9H10z" fill="#0070E0"></path></g>'},"new-paper-doc":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M13 13h6v1h-6v-1zm0 2h6v1h-6v-1zm0 2h3v1h-3v-1z" fill="#99C6F3"></path><path d="M23 9.505v12.99c0 .838-.67 1.505-1.498 1.505H10.498A1.505 1.505 0 0 1 9 22.495V9.505C9 8.667 9.67 8 10.498 8h11.004C22.325 8 23 8.674 23 9.505zM21 10H11v12h10V10z" fill="#0070E0" fill-rule="nonzero"></path></g>'},"new-project":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M11.364 12.7c-.162.099-.364.469-.364.673v5.254c0 .216.193.568.364.673l4.28 2.627c.159.097.552.098.712 0l4.28-2.627c.162-.099.364-.469.364-.673v-5.254c0-.216-.193-.568-.364-.673l-4.28-2.627c-.159-.097-.552-.098-.712 0l-4.28 2.627zm3.633-4.454c.554-.33 1.462-.325 2.006 0l4.994 2.98c.554.33 1.003 1.12 1.003 1.794v5.96c0 .66-.46 1.47-1.003 1.795l-4.994 2.98c-.554.33-1.462.324-2.006 0l-4.994-2.98C9.449 20.445 9 19.654 9 18.98v-5.96c0-.66.46-1.47 1.003-1.795l4.994-2.98z" fill-rule="nonzero" fill="#0070E0"></path></g>'},"new-shared-folder":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.5C8 22.549 8.445 23 9 23h14a1 1 0 0 0 1-.999v-10.51zM22 21H10v-9h12v9zm-11 0h10v2H11v-2z" fill="#0070E0" fill-rule="nonzero"></path><path d="M16 23h-3.309c-.545 0-.809-.41-.575-.916l.334-.724c.347-.753 1.301-1.36 2.133-1.36h2.834c.832 0 1.786.607 2.133 1.36l.334.724c.234.506-.03.916-.575.916H16zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#0070E0"></path></g>'},"new-team-folder":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="#0070E0" fill-rule="evenodd"><path d="M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.5C8 22.549 8.445 23 9 23h14a1 1 0 0 0 1-.999v-10.51zM22 21H10v-9h12v9zm-10.5 0h9v2h-9v-2z" fill-rule="nonzero"></path><path d="M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.5C8 22.549 8.445 23 9 23h14a1 1 0 0 0 1-.999v-10.51zM22 21H10v-9h12v9zm-10.5 0h9v2h-9v-2z" fill-rule="nonzero"></path><path d="M13 14h6v9h-6v-9zm2 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2z"></path></g>'},"open-in-app":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M19.082 11.082l-1.37-1.37C17.319 9.319 17.45 9 17.99 9H23v4.88-.13 7.752c0 .823-.67 1.498-1.498 1.498H10.498C9.675 23 9 22.33 9 21.502V10.498C9 9.675 9.67 9 10.498 9h7.753H15v2h-4v10h10v-4h2v-3.12.13c0 .546-.323.667-.712.278l-1.592-1.592-4.828 4.829-1.615-1.615 4.829-4.828z" fill-rule="nonzero" fill="#0070E0"></path></g>'},"permanently-delete":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M8 17.505c0-.279.226-.505.496-.505h15.008c.274 0 .496.214.496.505v.99a.503.503 0 0 1-.496.505H8.496A.493.493 0 0 1 8 18.495v-.99z" fill="#0070E0"></path><path d="M11 20h1v5h-1v-5zm3 0h1v5h-1v-5zm3 0h1v5h-1v-5zm3 0h1v5h-1v-5zM14 12h4v1h-4v-1zm0 2h4v1h-4v-1z" fill="#99C6F3"></path><path d="M22 18.747V9.505C22 8.674 21.32 8 20.504 8h-9.008C10.67 8 10 8.667 10 9.505v9.242V15h2v-5h8v5h2v3.747z" fill="#0070E0" fill-rule="nonzero"></path></g>'},permissions:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g><path fill="none" d="M0 0h32v32H0z"></path><path d="M12 12v-2c0-2.21 1.795-4 4-4 2.21 0 4 1.795 4 4v2h1.502c.827 0 1.498.68 1.498 1.496v9.008A1.5 1.5 0 0 1 21.502 24H10.498C9.671 24 9 23.32 9 22.504v-9.008A1.5 1.5 0 0 1 10.498 12H12zm-1 2v8h10v-8H11zm3-4v2h4v-2c0-1.112-.895-2-2-2-1.112 0-2 .895-2 2z" fill="#0070E0"></path><circle fill="#99C6F3" cx="16" cy="18" r="2"></circle></g></g>'},rename:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M20 23h-2.509A1.489 1.489 0 0 1 16 21.507V9.493C16 8.663 16.668 8 17.491 8H20v1c-2.999 0-3 1-3 1v11s0 .998 3 .998V23zm-8 0v-.996c2.97 0 3-1.004 3-1.004V10s0-1-3-1V8h2.509C15.337 8 16 8.668 16 9.493v12.014A1.49 1.49 0 0 1 14.509 23H12zm1-8h2v1h-2v-1zm4 0h2v1h-2v-1z" fill="#0070E0" fill-rule="nonzero"></path></g>'},restore:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<defs><path d="M0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm4 0c0 2.205 1.79 4 4 4 2.205 0 4-1.79 4-4 0-2.205-1.79-4-4-4-2.205 0-4 1.79-4 4z" id="mc-action-restore-a"></path><path d="M0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm4 0c0 2.205 1.79 4 4 4 2.205 0 4-1.79 4-4 0-2.205-1.79-4-4-4-2.205 0-4 1.79-4 4z" id="mc-action-restore-c"></path></defs><g transform="translate(8 8)" fill="none" fill-rule="evenodd"><path d="M0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm4 0c0 2.205 1.79 4 4 4 2.205 0 4-1.79 4-4 0-2.205-1.79-4-4-4-2.205 0-4 1.79-4 4z" stroke="#0070E0" stroke-width="1.5"></path><mask id="mc-action-restore-b" fill="#fff"><use xlink:href="#mc-action-restore-a"></use></mask><path fill="#0070E0" fill-rule="nonzero" mask="url(#mc-action-restore-b)" d="M0-1h8v9H0z"></path><mask id="mc-action-restore-d" fill="#fff"><use xlink:href="#mc-action-restore-c"></use></mask><path fill="#0070E0" fill-rule="nonzero" mask="url(#mc-action-restore-d)" d="M8 8h8v9H8z"></path></g>'},"save-to-device":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z"></path><path d="M12 23h8V9h-8v14zM10 8.693C10 7.758 10.5 7 11.129 7h9.742C21.495 7 22 7.75 22 8.693v14.614c0 .935-.5 1.693-1.129 1.693H11.13C10.505 25 10 24.25 10 23.307V8.693z" fill="#0070E0" fill-rule="nonzero"></path><path fill="#99C6F3" d="M12 11h8v1h-8zM12 20h8v1h-8z"></path><path d="M15 13h2v3h-2v-3zm-1.5 3h5L16 19l-2.5-3z" fill="#0070E0"></path></g>'},select:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M10 22h12V10H10v12zM8 9.505A1.5 1.5 0 0 1 9.505 8h12.99A1.5 1.5 0 0 1 24 9.505v12.99A1.5 1.5 0 0 1 22.495 24H9.505A1.5 1.5 0 0 1 8 22.495V9.505z" fill="#0070E0" fill-rule="nonzero"></path><path d="M15.086 16.621L12.964 14.5l-1.414 1.414 2.829 2.829.707.707 6.364-6.364-1.414-1.414-4.95 4.95z" fill="#99C6F3"></path></g>'},"settings-gear":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M12.185 19.882a5.385 5.385 0 0 1-.607-.776l-2.028-.308a6.956 6.956 0 0 1-.55-2.13l1.759-1.22c.043-.333.116-.657.216-.968l-1.097-1.932a7.03 7.03 0 0 1 1.308-1.66l2.084.66c.277-.171.57-.316.877-.433l.782-2.038a7.056 7.056 0 0 1 2.118.006l.78 2.032c.307.117.6.262.877.432l2.056-.65c.52.489.966 1.056 1.318 1.683l-1.08 1.9c.1.311.174.635.217.969l1.724 1.195a6.957 6.957 0 0 1-.555 2.16l-1.988.302a5.385 5.385 0 0 1-.607.776l.142 1.89a6.968 6.968 0 0 1-2.14.988l-1.318-1.25a5.238 5.238 0 0 1-.973 0l-1.325 1.258a6.967 6.967 0 0 1-2.134-.973l.144-1.913zM15.987 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#0070E0"></path></g>'},"share-as-collection":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M16 24h-3.31c-.545 0-.808-.41-.575-.916l.334-.724c.348-.753 1.302-1.36 2.133-1.36h2.835c.831 0 1.785.607 2.132 1.36l.335.724c.233.506-.03.916-.576.916H16zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#0070E0"></path><path d="M10 22h12V10H10v12zM8 9.505A1.5 1.5 0 0 1 9.505 8h12.99A1.5 1.5 0 0 1 24 9.505v12.99A1.5 1.5 0 0 1 22.495 24H9.505A1.5 1.5 0 0 1 8 22.495V9.505zM11 22v2h10v-2H11z" fill="#0070E0" fill-rule="nonzero"></path><path fill="#99C6F3" d="M12 12h8v3h-8z"></path></g>'},"show-deleted-files":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g><path fill="none" d="M0 0h32v32H0z"></path><circle fill="#99C6F3" cx="15.5" cy="16" r="2"></circle><path d="M15.5 22c-4.875 0-8.235-5.19-8.235-5.19-.335-.444-.332-1.167-.01-1.607 0 0 3.37-5.203 8.245-5.203 4.875 0 8.235 5.19 8.235 5.19.335.444.332 1.167.01 1.607 0 0-3.37 5.203-8.245 5.203zm.014-2c3.59 0 6.5-4 6.5-4s-2.91-4-6.5-4-6.5 4-6.5 4 2.91 4 6.5 4z" fill="#0070E0"></path></g></g>'},"show-in-finder":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M24 9.493v12.014c0 .83-.674 1.493-1.505 1.493H9.505A1.495 1.495 0 0 1 8 21.507V9.493C8 8.663 8.674 8 9.505 8h12.99C23.333 8 24 8.668 24 9.493zM22 10H10v11h12V10z" fill="#0070E0" fill-rule="nonzero"></path><path fill="#99C6F3" opacity=".2" d="M9 23h14v1H9z"></path><path d="M10 12h12v1H10v-1zm3 1h1v8h-1v-8z" fill="#99C6F3"></path></g>'},sort:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g fill="#0070E0"><path d="M12 15.505c0-.279.229-.505.5-.505h11c.276 0 .5.214.5.505v.99a.506.506 0 0 1-.5.505h-11a.495.495 0 0 1-.5-.505v-.99zM16 19.505c0-.279.23-.505.5-.505h7c.276 0 .5.214.5.505v.99c0 .279-.23.505-.5.505h-7a.495.495 0 0 1-.5-.505v-.99zM8 11.505c0-.279.226-.505.496-.505h15.008c.274 0 .496.214.496.505v.99a.503.503 0 0 1-.496.505H8.496A.493.493 0 0 1 8 12.495v-.99z"></path></g></g>'},star:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<path d="M20.944 23.717L16 20.949l-4.944 2.768 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558zM17.66 17.45l1.799-1.663-2.433-.289L16 13.275l-1.026 2.224-2.433.289 1.799 1.663-.478 2.403L16 18.657l2.138 1.197-.478-2.403z" fill-rule="nonzero" fill="#0070E0"></path>'},"sync-settings":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><g fill="#0070E0"><path d="M24.007 15.995V16A8 8 0 0 1 10 21.283h.003l1.412-1.416.004-.002a6 6 0 0 0 10.59-3.87H20.01c-.556 0-.683-.315-.293-.704l3.294-3.286 3.294 3.286c.392.39.259.704-.293.704h-2.006zM8.024 16.005V16a8 8 0 0 1 14.008-5.284l-1.412 1.417-.005.003a6 6 0 0 0-10.59 3.87l1.995-.001c.557 0 .683.315.293.704L9.02 19.995l-3.294-3.286c-.392-.39-.258-.704.293-.704h2.006z"></path></g></g>'},unstar:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<path d="M16 20.95l-4.944 2.767 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558z" fill-rule="nonzero" fill="#0070E0"></path>'},"upload-file":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M13 23v-2h8V9H11v3H9V8.505C9 7.667 9.67 7 10.498 7h11.004C22.325 7 23 7.674 23 8.505v12.99c0 .838-.67 1.505-1.498 1.505H13z" fill="#0070E0" fill-rule="nonzero"></path><path d="M13 12h6v1h-6v-1zm0 2h6v1h-6v-1zm3 2h3v1h-3v-1z" fill="#99C6F3"></path><path d="M11 19v5H8v-5H6l3.5-5.029L13 19h-2z" fill="#0070E0"></path></g>'},"upload-folder":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M13 23v-2h10v-9H9V9.493C9 8.663 9.67 8 10.499 8H15l2 2h6.495c.837 0 1.505.668 1.505 1.491V21.51c0 .828-.674 1.491-1.505 1.491H13z" fill="#0070E0" fill-rule="nonzero"></path><path d="M11 19v5H8v-5H6l3.5-5.029L13 19h-2z" fill="#0070E0"></path></g>'},upload:{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M14 14h-2.49c-.282 0-.373-.178-.205-.397l4.082-5.306c.344-.448.887-.44 1.226 0l4.082 5.306c.171.223.077.397-.205.397H18v5.5a.5.5 0 0 1-.49.5h-3.02a.493.493 0 0 1-.49-.5V14z" fill="#0070E0"></path><path fill="#99C6F3" d="M10 22h12v2H10z"></path></g>'},"view-version-history":{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"},innerHtml:'<g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h32v32H0z"></path><path d="M8 16.005V16a8 8 0 1 1 7 7.938v-2.021a6 6 0 1 0-5-5.912h1.996c.556 0 .683.315.293.704l-3.294 3.286-3.294-3.286c-.392-.39-.259-.704.293-.704H8z" fill="#0070E0"></path><path d="M16 16v-4h-1v5h5v-1h-4z" fill="#99C6F3"></path></g>'}}}),define("spectrum/icon_templates/actionable/index",["require","exports","tslib","react","classnames"],function(e,t,l,h,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=function(e){var t=(e.name,e.icon),n=e.disabled,a=void 0!==n&&n,r=e.className,o=l.__rest(e,["name","icon","disabled","className"]),v=i("mc-icon-template-actionable",{"mc-icon-template-actionable-disabled":a},r);return h.cloneElement(t,l.__assign({className:v},o))},t.Component.displayName="IconTemplateActionable"}),define("spectrum/icon_templates/stateless/index",["require","exports","tslib","react","classnames"],function(e,t,l,h,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=function(e){var t=(e.name,e.icon),n=e.className,a=l.__rest(e,["name","icon","className"]),r=i("mc-icon-template-stateless",n);return h.cloneElement(t,l.__assign({className:r},a))},t.Component.displayName="IconTemplateStateless"}),define("spectrum/tertiary_link/index",["require","exports","tslib","spectrum/tertiary_link/tertiary_link","spectrum/tertiary_link/tertiary_list"],function(e,t,l,h,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l.__exportStar(h,t),l.__exportStar(i,t)}),define("spectrum/tertiary_link/tertiary_link",["require","exports","tslib","classnames","react","spectrum/icon_action/index"],function(e,t,l,h,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TertiaryLink=function(e){var t=e.children,a=e.className,r=(e.href,e.icon),o=l.__rest(e,["children","className","href","icon"]),v=h("mc-tertiary-link-button",a);return i.createElement("button",l.__assign({className:v},o),i.createElement("span",{className:"mc-tertiary-link-button-content"},r&&i.createElement("span",{className:"mc-tertiary-icon-wrapper"},i.createElement(n.IconAction,{name:r})),i.createElement("span",{className:"mc-tertiary-icon-text"},t)))},t.TertiaryLink.displayName="TertiaryLink"}),define("spectrum/tertiary_link/tertiary_list",["require","exports","tslib","classnames","react"],function(e,t,l,h,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TertiaryList=function(e){var t=e.children,n=e.className,a=l.__rest(e,["children","className"]),r=h("mc-tertiary-list",n);return i.createElement("ul",l.__assign({className:r},a),t&&i.Children.map(t,function(e){return i.createElement("li",{className:"mc-tertiary-list-element",key:e.key||void 0},i.cloneElement(e))}))},t.TertiaryList.displayName="TertiaryList"});
//# sourceMappingURL=pkg-mcl-home.min.js-vflHdVssW.map