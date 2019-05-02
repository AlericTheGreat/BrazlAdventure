define(["require","exports","tslib","external/react","modules/core/i18n","modules/clean/react/css","modules/clean/react/file_sidebar/file_sidebar_base","modules/clean/file_activity/clients/file_activity_data_source","modules/clean/react/file_sidebar/store/sidebar/helpers","modules/clean/react/file_sidebar/store/sidebar/actions","modules/clean/react/file_sidebar/store/sidebar/selectors","modules/clean/react/file_sidebar/store/file_activity/actions","modules/clean/react/file_sidebar/store/file_activity/selectors","modules/clean/react/file_sidebar/file_sidebar_connect","modules/clean/react/file_sidebar/comments_wrapper_component","modules/clean/react/file_activity_stream/file_activity_stream","modules/clean/react/file_sidebar/file_sidebar_logger","modules/clean/video_annotations_prototype/video_annotation_wrapper_component","modules/clean/video_annotations_prototype/video_annotation_prototype_helper","modules/clean/react/comments2/components/comments_wrapper_component","modules/clean/react/comments2/helper","modules/clean/comments/events"],function(e,t,n,i,o,s,r,a,l,c,m,p,u,d,b,f,_,h,y,v,C,F){"use strict";function S(e){return{activityContext:e.activityContext,commentsDisabledOnFile:e.commentsDisabledOnFile,shouldInitiallyFocusInput:e.shouldInitiallyFocusInput,currentFile:e.currentFile,sharedLinkInfo:e.sharedLinkInfo,user:e.user}}function T(e){return n.__assign({},m.getSidebarState(e),{fileActivityCount:u.getVisibleActivityCount(e),tabs:m.getTabsState(e),isComments2PermissionDenied:m.getIsComments2PermissionDenied(e),isComments2PermissionFetchComplete:m.getIsComments2PermissionFetchComplete(e)})}Object.defineProperty(t,"__esModule",{value:!0});var g=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.notifyStore=function(e){t.props.dispatch(c.openFile({file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user})),e.user&&t.props.dispatch(p.getActivityStream(e.user.id,e.currentFile))},t.onSelectTab=function(e){var n=t.props,i=n.dispatch,o=n.fileActivityCount,s=n.tabs.comments,r=n.user;i(c.selectTab(e)),_.logSidebarTabSelected({selected_tab:e,num_comments:s.extra.commentCount,num_events:o,viewing_user_id:r?r.id:null})},t}return n.__extends(t,e),t.prototype.componentWillMount=function(){a.initInstance()},t.prototype.componentDidMount=function(){this.notifyStore(this.props)},t.prototype.componentWillReceiveProps=function(e){var t={file:this.props.currentFile,isVersionHistoryMode:this.props.isVersionHistoryMode,user:this.props.user},n={file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user};l.isContextChanged(t,n)&&this.notifyStore(e),e.shouldInitiallyFocusInput&&F.CommentsEvents.emit("reveal-comment-in-pane")},t.prototype.componentWillUnmount=function(){this.props.dispatch(p.reset()),this.props.dispatch(c.reset())},t.prototype.renderCommentsTab=function(){var e=this.props,t=e.isComments2PermissionDenied,s=e.isComments2PermissionFetchComplete,a=e.currentFile,l=e.sharedLinkInfo,c=e.user;if(C.Comments2Helper.shouldAttemptComments2Fetch(a)){if(!t&&c)return i.createElement(r.FileSidebarBase.Tab,{key:"comments",name:o._("Comments"),count:0,contentClassName:"comments2-sidebar-tab-content"},i.createElement(v.CommentsWrapperComponent,{currentFile:a,sharedLinkInfo:l,user:c,shouldShowComments:s}))}else if(y.VideoAnnotationPrototypeHelper.shouldTryToShowVideoPrototype(a)&&!t)return i.createElement(r.FileSidebarBase.Tab,{key:"comments",name:o._("Comments"),count:0},i.createElement(h.VideoAnnotationWrapperComponent,{currentFile:a,sharedLinkInfo:l,user:c,shouldShowComments:s}));return i.createElement(r.FileSidebarBase.Tab,{key:"comments",name:o._("Comments"),count:this.props.tabs.comments.count},i.createElement(b.CommentsWrapperComponent,n.__assign({},S(this.props))))},t.prototype.renderFileActivityTab=function(){var e=this.props,t=e.currentFile,n=e.user;return i.createElement(r.FileSidebarBase.Tab,{key:"activity",name:o._("Activity")},i.createElement(f.FileActivityStream,{file:t,user:n}))},t.prototype.render=function(){var e=this.props,t=e.activeTab,n=e.open,o=e.ready,s=e.tabs,a=s.comments,l=s.activity,c=[a.show?this.renderCommentsTab():null,l.show?this.renderFileActivityTab():null].filter(function(e){return e});return 0===c.length?i.createElement("div",{className:"file-sidebar"}):i.createElement(r.FileSidebarBase,{activeTabKey:t,isOpen:o&&n,onSelectTab:this.onSelectTab,headerComponent:this.props.headerComponent},c)},t})(i.Component);t.FileSidebarComponent=g,t.FileSidebar=s(d.fileSidebarConnect(T)(g),["/static/css/file-sidebar-vfl4YNUyB.css"])});
//# sourceMappingURL=file_sidebar_component.min.js-vfl9lfXXm.map