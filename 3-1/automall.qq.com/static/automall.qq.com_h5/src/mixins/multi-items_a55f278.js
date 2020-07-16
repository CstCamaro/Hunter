define("automall.qq.com_h5:src/mixins/multi-items",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.childMixin=t.parentMixin=void 0;var n=e("automall.qq.com_h5:src/libs/router"),i={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].currentIndex=t,e[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(e,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),e>-1&&(this.$children[e].currentSelected=!0),this.$emit("input",e)},index:function(e){this.currentIndex=e},value:function(e){this.index=e}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},r={props:{selected:{type:Boolean,"default":!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(e){var t=this;("undefined"==typeof this.disabled||this.disabled===!1)&&(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click")})),e===!0&&n.go(this.link,this.$router)}},watch:{currentSelected:function(e){e&&(this.$parent.index=this.currentIndex)},selected:function(e){this.currentSelected=e}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}};t.parentMixin=i,t.childMixin=r});