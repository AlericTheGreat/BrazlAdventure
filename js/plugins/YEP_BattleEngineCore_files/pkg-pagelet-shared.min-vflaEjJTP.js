define("modules/clean/components/loading_indicator",["require","exports","tslib","external/classnames","external/react","external/react-dom-factories","external/prop-types","external/lodash","modules/core/accessible_announce","modules/core/i18n"],function(e,t,n,i,o,r,a,s,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingIndicatorStyle={DOTS:"dots",SPINNER:"spinner",BLUE_SPINNER:"blue_spinner"};var d=(function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(o,e),o.prototype.componentDidMount=function(){this.props.shouldAnnounceMessage&&l.AccessibleAnnounce.polite(this.props.startMessage)},o.prototype.componentWillUnmount=function(){this.props.finishMessage&&this.props.shouldAnnounceMessage&&l.AccessibleAnnounce.polite(this.props.finishMessage)},o.prototype.render=function(){var e={};if(this.props.className){var o=this.props.className.split(" ");e=s.zipObject(o,o.map(function(e){return!0}))}return e=n.__assign({},e,{"c-loader":!0,"c-loader--spinner":this.props.style===t.LoadingIndicatorStyle.SPINNER,"c-loader--spinner--blue":this.props.style===t.LoadingIndicatorStyle.BLUE_SPINNER}),r.div({className:i(e)},this.props.startMessage)},o.displayName="LoadingIndicator",o.LoadingIndicatorStyle=t.LoadingIndicatorStyle,o.propTypes={style:a.oneOf(s.values(t.LoadingIndicatorStyle)),className:a.string,startMessage:a.string,finishMessage:a.string,shouldAnnounceMessage:a.bool},o.defaultProps={style:t.LoadingIndicatorStyle.DOTS,className:"",startMessage:u._("Loading…"),finishMessage:null,shouldAnnounceMessage:!0},o})(o.Component);t.LoadingIndicator=d}),define("modules/clean/flux/action_type",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n={},i={},o=0,r=Object.keys(t||{});o<r.length;o++){var a=r[o],s=t[a];if(n[a]=e+"__"+s,null!=i[s])throw new Error("Duplicate action value '"+s+"'!");i[s]=!0}return n};t.withActionNamespace=n}),define("modules/clean/photos/thumbnail_url_util",["require","exports","external/lodash","modules/constants/python","modules/core/exception","modules/core/uri"],function(e,t,n,i,o,r){"use strict";function a(e,i,a,s){o.assert(null!=i==(null!=a),"Width and height must both be specified or neither");var u={};if(null==i)o.assert(s===t.ThumbnailSizeMode.ORIGINAL||null===s,"You must supply width and height");else{var d=i+"x"+a;o.assert(l.indexOf(d)>-1,"Invalid thumbnail size ("+d+")"),u.size=d}return null!=s&&(o.assert(n.values(t.ThumbnailSizeMode).indexOf(s)>-1,"Invalid thumbnail size mode ("+s+")"),u.size_mode=s.toString()),r.URI.parse(e).updateQuery(u).toString()}function s(e){return r.URI.parse(e).updateQuery({size_mode:t.ThumbnailSizeMode.ORIGINAL.toString()}).toString()}Object.defineProperty(t,"__esModule",{value:!0}),t.ThumbnailSizeMode=i.THUMBNAIL_SIZE_MODE;var l=i.THUMBNAIL_SIZES;t.thumbnailUrlForSize=a,t.fullSizeUrl=s}),define("modules/clean/previews/constants",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});(function(e){e.Browse="BROWSE",e.SharedLinkFile="SHARED_LINK_FILE",e.SharedLinkFolder="SHARED_LINK_FOLDER",e.SharedLinkCollection="SHARED_LINK_COLLECTION",e.VersionHistory="VERSION_HISTORY"})(t.PathContext||(t.PathContext={}));(function(e){e.Archive="archive",e.Audio="audio",e.CloudDoc="cloud_doc",e.Doc="doc",e.Excel="excel",e.HTML="html",e.Linkfile="linkfile",e.Photo="photo",e.Text="text",e.Video="video"})(t.PreviewType||(t.PreviewType={})),t.MAX_ARCHIVE_FILE_SIZE_B=1073741824,t.MAX_PPT_FILE_SIZE_B=301989888,t.MAX_WORD_DOC_FILE_SIZE_B=167772160}),define("modules/clean/react/file_path_breadcrumb",["require","exports","tslib","external/classnames","external/react","external/lodash","modules/clean/react/title_bubble","modules/clean/em_string"],function(e,t,n,i,o,r,a,s){"use strict";function l(e){var t=new s.Emstring(e.name).length;return{name:e.name,href:e.url,width:t,workingWidth:u(t)}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return Math.floor(1e3*e)},d=function(e){return e/1e3},h=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handlePathClick=function(e){t.props.handlePathClick(e)},t}return n.__extends(t,e),t.prototype.getTotalPathWidth=function(e){for(var t=0,n=u(this.props.pathDividerWidth),i=0;i<e.length;i++){t+=e[i].workingWidth,i<e.length-1&&(t+=n)}return t},t.prototype.getPathsAvailable=function(){var e=this.props.paths;return e.length>1?e.slice(1):e},t.prototype.getPathsToShow=function(){function e(){var e=r.last(a);return e.width=d(i),e.workingWidth=i,[e]}for(var t=u(this.props.minPathWidth),n=u(this.props.pathDividerWidth),i=u(this.props.maxWidth),o=this.getPathsAvailable(),a=o.map(l),s=1,h=0;this.getTotalPathWidth(a)>i;){if(h++>100)return e();if(s+1<a.length){var c=a[0],p=l({name:this.props.morePathsString}),m=[c,p],f=a.slice(s+1,a.length);a=m.concat(f),s++}else{if(1===a.length)return e();for(var _=i,g=0;g<a.length-1;g++){_-=a[g].workingWidth+n}if(_<t)return e();var S=r.last(a);S.width=d(_),S.workingWidth=_}}return a},t.prototype.render=function(){var e=this,t=this.props.pathClassname,n=this.props,r=n.morePathsString,l=n.useLinks,u=!1,d=this.getPathsToShow().map(function(n){var a=n.name,d=n.width,h=n.href;u=u||a===r;var c=s.Emstring.em_snippet(a,d),p=[t];return h&&l?(p.push(t+"--level"),o.createElement("a",{href:h,className:i(p),onClick:e.handlePathClick},c)):(p.push(t+"--more"),o.createElement("span",{className:i(p)},c))}),h=o.createElement("span",null,d);return u&&this.props.showTooltipOnTruncated?o.createElement(a.TitleBubble,{content:this.getPathsAvailable().map(function(e){return e.name}).join(" > "),position:a.TitleBubble.POSITIONS.TOP,isTargetPositionFixed:!0},h):h},t.defaultProps={pathClassname:"file-path-breadcrumb-component",maxWidth:46,minPathWidth:3,morePathsString:"…",pathDividerWidth:1.077,handlePathClick:r.noop,useLinks:!0,showTooltipOnTruncated:!1},t})(o.Component);t.FilePathBreadcrumb=h}),define("modules/clean/sharing/async_share_modal_util",["require","exports"],function(e,t){"use strict";function n(t){e(["modules/clean/sharing/share_modal_util"],t)}function i(t,n,i,o,r,a,s,l,u,d){void 0===n&&(n=null),void 0===i&&(i=null),void 0===o&&(o=null),void 0===r&&(r=!1),void 0===a&&(a=!1),void 0===s&&(s=null),e(["modules/clean/sharing/share_modal_util"],function(e){return e.showNewFolderShareModal(t,n,i,o,r,a,s,l,u,d)})}function o(e,t){n(function(n){n.showSharedContentLinkSyncModal(e,t)})}function r(t,n,i,o,r,a){return void 0===i&&(i={}),new Promise(function(s){e(["modules/clean/sharing/share_modal_util"],function(e){s(e.showShareModal(t,n,i,o,r,a))})})}function a(t){var n=t.user,i=t.sharePrefillEmail,o=t.content,r=t.setPath,a=t.setUrl,s=t.contentManagerValidateFolderPath;e(["modules/clean/sharing/share_modal_util"],function(e){e.showPrefilledShareModal({user:n,sharePrefillEmail:i,content:o,setPath:r,setUrl:a,contentManagerValidateFolderPath:s})})}Object.defineProperty(t,"__esModule",{value:!0}),t.asyncShowNewFolderShareModal=i,t.asyncShowSharedContentLinkSyncModal=o,t.asyncShowShareModal=r,t.asyncShowPrefilledShareModal=a});
//# sourceMappingURL=pkg-pagelet-shared.min.js-vfl3BTXwo.map