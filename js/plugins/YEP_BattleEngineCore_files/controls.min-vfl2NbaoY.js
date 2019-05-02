define(["require","exports","external/react","modules/clean/react/pass/empty_seen_state_facepile","modules/clean/react/file_viewer/mounted_file_actions","modules/clean/react/pass/seen_state_facepile_controller","modules/clean/react/file_viewer/utils","modules/clean/react/file_viewer/shared_file_actions","modules/clean/react/file_viewer/version_history_file_actions","modules/core/browser"],function(e,s,i,n,t,a,r,o,l,c){"use strict";function u(e){var s=e.file,t=e.isSeenStatesEnabled,r=e.isVersionHistoryMode,o=e.isViewingFileSubpath,l=e.isViewMetadataDisabled,c=e.sharedLinkInfo,u=e.sizeClass,d=e.user;return!t||r||null===s.ns_id?i.createElement(n.EmptySeenStateFacepile,null):i.createElement(a.SeenStateFacepileController,{file:s,fromBrowse:!1,isViewMetadataDisabled:l,isViewingFileSubpath:!!o,sharedLinkInfo:c,sizeClass:u,user:d})}function d(e){var s=e.canRestoreRevision,n=e.file,a=e.isSharedFile,u=e.isVersionHistoryMode,d=e.onRestoreRevision,p=e.sharedLinkInfo,_=e.sharePermissions,h=e.shareToken,m=e.shouldDisplayActionButtons,v=e.sizeClass,w=e.user;if(a){var y=!(!n.open_in_app_data||!n.preview_type);return c.is_tablet()&&(y=y&&!r.renderOpenInAppAsBanner()),i.createElement(o.SharedFileActions,{file:n,sharedLinkInfo:p,sharePermissions:_,shareToken:h,shouldDisplayActionButtons:m,showOpenInAppButton:y,sizeClass:v,user:w})}return u?i.createElement(l.VersionHistoryFileActions,{canRestoreRevision:!!s,file:n,onRestoreRevision:d||f,shouldDisplayActionButtons:m,user:w}):i.createElement(t.MountedFileActions,{file:n,sizeClass:v,shouldDisplayActionButtons:m,user:w})}Object.defineProperty(s,"__esModule",{value:!0}),s.SeenStates=u;var f=function(){};s.FileActions=d});
//# sourceMappingURL=controls.min.js-vflt90S9B.map