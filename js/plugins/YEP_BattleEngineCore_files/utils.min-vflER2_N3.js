define(["require","exports","tslib","spectrum_comments/comment_editor/core/composed_scope"],function(e,r,t,o){"use strict";function n(e,r,o,n,c){return e.reduce(function(e,s){return t.__assign({},e,(u={},u[s]=function(e){return o(c.compose(r[s],{evt:e,value:n}))},u));var u},{})}function c(e,r,t){return new o.ComposedScopeImpl(e,r,t)}function s(e,r,o,c,s){var u={};for(var i in r.reducers)u=t.__assign({},u,(p={},p[i]=n(e[i].evts,r.reducers[i].evts,c[i],o[i],s),p));return u;var p}Object.defineProperty(r,"__esModule",{value:!0}),r.evtReducersToTriggers=n,r.completeScope=c,r.createScopeTriggers=s});
//# sourceMappingURL=utils.min.js-vfla5vRtA.map