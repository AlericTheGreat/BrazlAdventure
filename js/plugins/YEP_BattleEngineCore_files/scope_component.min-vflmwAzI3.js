define(["require","exports","tslib","react","react"],function(t,e,n,o,i){"use strict";function r(t,e){return o.createElement(s,n.__assign({},e),t.children)}Object.defineProperty(e,"__esModule",{value:!0});var s=(function(t){function e(e){var n=t.call(this,e)||this;return n.subscriptionHandle={unsubscribe:function(){}},n.handleContainerStatus=function(t){console.log("setting state. content plain text is "+t.draft.editorState.getCurrentContent().getPlainText()),n.setState({status:t})},n.subscribeToContainer(e.container),n}return n.__extends(e,t),e.prototype.componentWillReceiveProps=function(t){t.container!==this.props.container&&this.subscribeToContainer(t.container)},e.prototype.subscribeToContainer=function(t){this.subscriptionHandle.unsubscribe(),this.subscriptionHandle=t.subscribe(this.handleContainerStatus)},e.prototype.componentWillUnmount=function(){this.subscriptionHandle&&this.subscriptionHandle.unsubscribe()},e.prototype.getChildContext=function(){return{container:this.props.container,scope:this.props.scope}},e.prototype.render=function(){return o.createElement("div",null,this.props.children)},e.childContextTypes={container:o.PropTypes.object,scope:o.PropTypes.object},e})(i.Component);e.BaseScopeComponent=s,e.InnerScopeComponent=r,r.contextTypes={container:o.PropTypes.object,scope:o.PropTypes.object}});
//# sourceMappingURL=scope_component.min.js-vflcLMxvT.map