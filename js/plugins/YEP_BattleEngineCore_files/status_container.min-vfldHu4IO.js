define(["require","exports","tslib"],function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=(function(){function t(t){this.listeners=[],this.status=t}return t.prototype.setStatus=function(t,s){var n=this;void 0===s&&(s=!1),this.status=e.__assign({},this.status,t),s||this.listeners.forEach(function(t){return t(n.getStatus())})},t.prototype.getStatus=function(){return this.status},t.prototype.subscribe=function(t){var s=this;return this.listeners.push(t),{unsubscribe:function(){return s.listeners=s.listeners.filter(function(s){return s!==t})}}},t})();s.StatusContainerImpl=n});
//# sourceMappingURL=status_container.min.js-vfl-849XA.map