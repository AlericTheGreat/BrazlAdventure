define(["require","exports"],function(t,e){"use strict";function n(t){var e=t.kernel,n=t.scopeTriggers,r=t.innerProps,o=r.type,i=r.onMacro,c=r.delimiter,a=t.status.draft.editorState,s=a.getSelection();if(s.isCollapsed()){var y=a.getCurrentContent(),f=s.getAnchorKey(),g=y.getBlockForKey(f),u=s.getAnchorOffset(),l=g.getEntityAt(u)||g.getEntityAt(u-1);if(null!==l&&y.getEntity(l).getType()===o){var p="",d=-1,m=-1;g.findEntityRanges(function(t){return t.getEntity()===l},function(t,e){d=t,m=e,p=g.getText().substring(t,e)});var v=t.status.macro.active;v.entityKey===l&&(!p.length||v&&v.content===p)||n.macro.update(e.compose(i,{delimiter:c,content:p,entityKey:l,blockKey:f,macroStartOffset:d,macroEndOffset:m,type:o}))}else n.macro.update({content:"",type:"",entityKey:""})}}Object.defineProperty(e,"__esModule",{value:!0}),e.activateMacroComposer=n});
//# sourceMappingURL=activate_macro_composer.min.js-vflGiS23r.map