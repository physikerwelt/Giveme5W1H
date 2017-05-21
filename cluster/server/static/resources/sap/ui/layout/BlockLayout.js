/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','./library'],function(C,l){"use strict";var B=C.extend("sap.ui.layout.BlockLayout",{metadata:{library:"sap.ui.layout",properties:{background:{type:"sap.ui.layout.BlockBackgroundType",group:"Appearance",defaultValue:"Default"}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.layout.BlockLayoutRow",multiple:true}}}});B.CONSTANTS={breakPointM:600,breakPointL:1024,SIZES:{S:600,M:1024,L:1440,XL:null}};B.prototype.onBeforeRendering=function(){this._detachResizeHandler();};B.prototype.onAfterRendering=function(){this._parentResizeHandler=sap.ui.core.ResizeHandler.register(this,this._onParentResize.bind(this));this._onParentResize();};B.prototype.setBackground=function(n){var c=this.getBackground(),o=C.prototype.setProperty.apply(this,["background"].concat(Array.prototype.slice.call(arguments)));if(this.hasStyleClass("sapUiBlockLayoutBackground"+c)){this.removeStyleClass("sapUiBlockLayoutBackground"+c,true);}this.addStyleClass("sapUiBlockLayoutBackground"+n,true);this.invalidate();return o;};B.prototype._onParentResize=function(){var p,d=this.getDomRef(),w=d.clientWidth,s=B.CONSTANTS.SIZES;this._removeBreakpointClasses();for(p in s){if(s.hasOwnProperty(p)&&(s[p]===null||s[p]>w)){this.addStyleClass("sapUiBlockLayoutSize"+p,true);break;}}};B.prototype._removeBreakpointClasses=function(){var s=B.CONSTANTS.SIZES;for(var p in s){if(s.hasOwnProperty(p)){this.removeStyleClass("sapUiBlockLayoutSize"+p,true);}}};B.prototype._detachResizeHandler=function(){if(this._parentResizeHandler){sap.ui.core.ResizeHandler.deregister(this._parentResizeHandler);this._parentResizeHandler=null;}};B.prototype.exit=function(){this._detachResizeHandler();};return B;},true);
