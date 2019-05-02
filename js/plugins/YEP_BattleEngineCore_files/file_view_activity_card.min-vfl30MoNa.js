define(["require","exports","tslib","external/react","external/lodash","modules/core/i18n","modules/clean/react_format","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/react/file_activity_stream/utils","modules/clean/react/file_activity_stream/display_name","modules/clean/react/file_activity_stream/updating_time_ago_with_details","modules/clean/react/file_sidebar/file_sidebar_logger"],function(e,t,r,i,n,s,a,o,l,u,c,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var g=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.logCardExpandAfterClick=function(){var e=t.props.activity.isGroup&&t.props.activity.groupActivities?t.props.activity.groupActivities.length:1;m.logFileViewActivityCardExpanded({num_view_events:e,viewing_user_id:t.props.viewingUser?t.props.viewingUser.id:null})},t}return r.__extends(t,e),Object.defineProperty(t.prototype,"message",{get:function(){var e=this.props.activity,t=this.getOtherCount(e);return l.isViewingUser(this.props)?0===t?a.reactFormat(s._("<strong>You</strong> viewed"),{strong:i.createElement("strong",null)}):a.reactFormat(s.ungettext("<strong>You</strong> and <strong>%(count)s other</strong> viewed","<strong>You</strong> and <strong>%(count)s others</strong> viewed",t),{strong:i.createElement("strong",null),count:t}):0===t?a.reactFormat(s._("<strong>%(name)s</strong> viewed"),{strong:i.createElement("strong",null),name:e.user.display_name}):a.reactFormat(s.ungettext("<strong>%(name)s</strong> and <strong>%(count)s other</strong> viewed","<strong>%(name)s</strong> and <strong>%(count)s others</strong> viewed",t),{strong:i.createElement("strong",null),count:t,name:e.user.display_name})},enumerable:!0,configurable:!0}),t.prototype.getOtherCount=function(e){return e.isGroup?n.uniqBy(e.groupActivities,function(e){return e.user.id}).length-1:0},t.prototype.renderDetails=function(e){return e.groupActivities.map(function(e){var t=e.platform_type,r=e.timestamp,n=e.user,s=n.id+"|"+r;return i.createElement(o.FileActivityStreamCard.Detail,{key:s,user:n},i.createElement(o.FileActivityStreamCard.Detail.Entity,{title:i.createElement(u.DisplayName,{user:n,isGuest:l.isGuestUser(n)}),detail:i.createElement(c.UpdatingTimeAgoWithDetails,{platformType:t,timestamp:r})}))})},t.prototype.render=function(){var e=this.props.activity;return i.createElement(o.FileActivityStreamCard,{user:e.user,timestamp:e.timestamp,onExpand:this.logCardExpandAfterClick,message:this.message},e.isGroup?this.renderDetails(e):null)},t})(i.Component);t.FileViewActivityCard=g});
//# sourceMappingURL=file_view_activity_card.min.js-vflae6s1e.map