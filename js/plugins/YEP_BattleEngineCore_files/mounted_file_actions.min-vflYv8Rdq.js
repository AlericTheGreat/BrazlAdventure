define(["require","exports","tslib","external/react","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/more_dropdown","modules/clean/react/file_viewer/open_button/open_button","modules/clean/react/file_viewer/share_helpers","modules/clean/react/title_bar/controls_container","modules/clean/react/user_notifications/dropdown","modules/clean/sharing/api/client","modules/clean/sharing/delete_link_modal","modules/clean/react/size_class/constants","modules/core/i18n","modules/core/browser","modules/clean/react/paper/utils","modules/clean/react/paper/open_in_paper_button"],function(e,t,n,a,r,i,o,l,s,c,u,p,h,d,f,m,_,k){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var S=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={linkMetadata:null},t.cancelGetSharedLinkInfo=function(){},t.handleShareClick=function(){s.share(t.props.file,t.props.user,null,"PREVIEW_PAGE"),r.logUserAction(i.UserAction.Share,i.UserActionContext.TitleBarMain)},t.removeShareLink=function(){var e=new p.ShareApiClient({userId:t.props.user.id}),n=t.state.linkMetadata,a=n.name,r=n.url;h.deleteLinkWithConfirm({client:e,contentName:a,onCancel:null,onDeleteLink:function(){return t.setState({linkMetadata:null})},url:r})},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.setupShare(this.props),this.setState({openInPaperButtonVariant:_.getOpenInPaperButtonVariant({file:this.props.file,user:this.props.user}),showEmbedToPaperModal:_.shouldShowEmbedToPaperModal()})},t.prototype.componentWillUnmount=function(){this.cancelGetSharedLinkInfo()},t.prototype.componentWillReceiveProps=function(e){e.file!==this.props.file&&(this.cancelGetSharedLinkInfo(),this.setState({linkMetadata:null}),this.setupShare(e))},t.prototype.setupShare=function(e){return n.__awaiter(this,void 0,void 0,function(){var t,a,r;return n.__generator(this,function(n){switch(n.label){case 0:return t=!1,this.cancelGetSharedLinkInfo=function(){t=!0},a=new p.ShareApiClient({userId:e.user.id}),[4,a.sharedLinkInfo({fileIdOrPath:e.file.fq_path})];case 1:return r=n.sent(),t||this.setState({linkMetadata:r}),this.cancelGetSharedLinkInfo=function(){},[2]}})})},t.prototype.logUserActionInTitleBarFactory=function(e){return function(){return r.logUserAction(e,i.UserActionContext.TitleBarMain)}},t.prototype.render=function(){var e=!!this.state.linkMetadata&&this.state.linkMetadata.link_permissions.can_revoke,t=this.props,r=t.file,s=t.sizeClass,p=t.shouldDisplayActionButtons,h=t.user,S=s===d.SizeClass.Small,C={allowRemoveLink:e,isPrivate:!0,file:r,onClickShareLink:this.handleShareClick,onRemoveShareLink:this.removeShareLink,sizeClass:s,user:h,showOpenInPaper:this.state.openInPaperButtonVariant===_.OpenInPaperButtonVariant.Ellipsis&&!S,showEmbedToPaperModal:this.state.showEmbedToPaperModal};if(s!==d.SizeClass.Large)return a.createElement(c.TitleBarControlsContainer,null,!p||m.is_mobile_or_tablet()||s===d.SizeClass.Small?null:a.createElement(l.OpenButton,{file:r,location:i.FileViewerPane.TitleBar,user:h}),a.createElement(o.MoreDropdown,n.__assign({},C)));var w;return p&&(w=[a.createElement("button",{className:"share-button button-primary control__button",onClick:this.handleShareClick,key:0},f._("Share"))],this.state.openInPaperButtonVariant===_.OpenInPaperButtonVariant.Button&&w.push(a.createElement(k.OpenInPaperButton,{key:"openinpaper",file:r,user:h,hideCallout:!1})),w.push(a.createElement(l.OpenButton,{file:r,location:i.FileViewerPane.TitleBar,user:h,key:2,sizeClass:this.props.sizeClass,hasOpenInPaperSupport:this.state.openInPaperButtonVariant===_.OpenInPaperButtonVariant.Dropdown}))),a.createElement(c.TitleBarControlsContainer,null,w,a.createElement(o.MoreDropdown,n.__assign({},C)),a.createElement("div",{className:"react-title-bar__divider"}),a.createElement(u.UserNotificationsDropdown,{isPagelet:!1,onClick:this.logUserActionInTitleBarFactory(i.UserAction.ClickNotifications)}))},t})(a.Component);t.MountedFileActions=S});
//# sourceMappingURL=mounted_file_actions.min.js-vfl7dLtmt.map