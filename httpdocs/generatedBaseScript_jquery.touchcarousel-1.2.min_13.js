// jquery.touchcarousel v1.2
(function(f){function q(b,c){var a,e;this.carouselRoot=f(b);var d=this;this._b=this._a=!1;this._e=this._d=this._c="";this._f;this._g;this._h;this._i;this._j;this._k=0;this.settings=f.extend({},f.fn.touchCarousel.defaults,c);this._l=this.carouselRoot.find(".touchcarousel-container");this._m=this._l[0].style;this._n=this._l.wrap(f('<div class="touchcarousel-wrapper" />')).parent();var g=this._l.find(".touchcarousel-item");this.items=[];this.numItems=g.length;a=navigator.userAgent.toLowerCase();e=/(chrome)[ \/]([\w.]+)/.exec(a)||
/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];a=e[1]||"";e=e[2]||"0";var r={};a&&(r[a]=!0,r.version=e);r.chrome&&(r.webkit=!0);d._o=r;this._p;this._q=!1;this._t=this._s=this._r=0;this._w=this._v=this._u=!1;"ontouchstart"in window?(this.hasTouch=!0,this._c="touchstart.rs",this._d="touchmove.rs",this._e="touchend.rs",this._x=this.settings.baseTouchFriction):(this.hasTouch=
!1,this._x=this.settings.baseMouseFriction,this.settings.dragUsingMouse?(this._c="mousedown.rs",this._d="mousemove.rs",this._e="mouseup.rs",this._y,this._z,a=d._o,a.msie||a.opera?this._y=this._z="move":a.mozilla&&(this._y="-moz-grab",this._z="-moz-grabbing"),this._a1()):this._n.addClass("auto-cursor"));if((this.hasTouch||this.settings.useWebkit3d)&&"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix)this._l.css({"-webkit-transform-origin":"0 0","-webkit-transform":"translateZ(0)"}),this._w=!0;
this._w?(this._b1="-webkit-transform",this._c1="translate3d(",this._d1="px, 0, 0)"):(this._b1="left",this._c1="",this._d1="px");this.hasTouch&&(this.settings.directionNavAutoHide=!1);this.settings.directionNav||(this._f1=this.settings.loopItems?this._e1=!0:this._e1=!1,this.settings.loopItems=!0);var p,h,n=0;g.eq(this.numItems-1).addClass("last");g.each(function(b){h=f(this);p={};p.item=h;p.index=b;p.posX=n;p.width=h.outerWidth(!0)||d.settings.itemFallbackWidth;n+=p.width;if(this.hasTouch){var a;h.find("a").each(function(){a=
f(this);a.data("tc-href",a.attr("href"));a.data("tc-target",a.attr("target"));a.attr("href","#");a.bind("click",function(a){a.preventDefault();if(d._q)return!1;a=f(this).data("tc-href");var b=f(this).data("tc-target");!b||"_g1"===b.toLowerCase()?window.location.href=a:window.open(a)})})}else h.find("a").bind("click.touchcarousel",function(a){if(d._q)return a.preventDefault(),!1});h.find(".non-draggable").bind(d._c,function(a){d._q=!1;a.stopImmediatePropagation()});d.items.push(p)});this._h1=this._f=
n;this._i1=0<this.settings.itemsPerMove?this.settings.itemsPerMove:1;if(this.settings.pagingNav){if(this._j1=this.settings.snapToItems=!0,this._k1=Math.ceil(this.numItems/this._i1),this._l1=0,this.settings.pagingNavControls){this._m1=f('<div class="tc-paging-container"><div class="tc-paging-centerer"><div class="tc-paging-centerer-inside"></div></div></div>');g=this._m1.find(".tc-paging-centerer-inside");for(e=1;e<=this._k1;e++)a=f('<a class="tc-paging-item" href="#">'+e+"</a>").data("tc-id",e),e===
this._l1+1&&a.addClass("current"),g.append(a);this._n1=g.find(".tc-paging-item").click(function(a){a.preventDefault();d.goTo((f(a.currentTarget).data("tc-id")-1)*d._i1)});this._n.after(this._m1)}}else this._j1=!1;this._l.css({width:n});this.settings.directionNav&&(this._n.after("<a href='#' class='arrow-holder left'><span class='arrow-icon left'></span></a> <a href='#' class='arrow-holder right'><span class='arrow-icon right'></span></a>"),this.arrowLeft=this.carouselRoot.find(".arrow-holder.left"),
this.arrowRight=this.carouselRoot.find(".arrow-holder.right"),1>this.arrowLeft.length||1>this.arrowRight.length?this.settings.directionNav=!1:this.settings.directionNavAutoHide&&(this.arrowLeft.hide(),this.arrowRight.hide(),this.carouselRoot.one("mousemove.arrowshover",function(){d.arrowLeft.fadeIn("fast");d.arrowRight.fadeIn("fast")}),this.carouselRoot.hover(function(){d.arrowLeft.fadeIn("fast");d.arrowRight.fadeIn("fast")},function(){d.arrowLeft.fadeOut("fast");d.arrowRight.fadeOut("fast")})),this._p1(0),
this.settings.directionNav&&(this.arrowRight.click(function(a){a.preventDefault();(d.settings.loopItems&&!d._u||!d._f1)&&d.next()}),this.arrowLeft.click(function(a){a.preventDefault();(d.settings.loopItems&&!d._u||!d._e1)&&d.prev()})));this.carouselWidth;this._q1="onorientationchange"in window?"orientationchange.touchcarousel":"resize.touchcarousel";var l;f(window).bind(this._q1,function(){l&&clearTimeout(l);l=setTimeout(function(){d.updateCarouselSize(!1)},100)});this.settings.scrollbar?(this._r1=
f("<div class='scrollbar-holder'><div class='scrollbar"+("light"===this.settings.scrollbarTheme.toLowerCase()?" light":" dark")+"'></div></div>"),this._r1.appendTo(this.carouselRoot),this.scrollbarJQ=this._r1.find(".scrollbar"),this._s1="",this._t1=this.scrollbarJQ[0].style,this._u1=0,this.settings.scrollbarAutoHide?(this._v1=!1,this.scrollbarJQ.css("opacity",0)):this._v1=!0):this.settings.scrollbarAutoHide=!1;this.updateCarouselSize(!0);this._n.bind(this._c,function(a){d._w1(a)});this.settings.autoplay&&
0<this.settings.autoplayDelay?(this._x1=!1,this.autoplayTimer="",this.wasAutoplayRunning=!0,this.hasTouch||this.carouselRoot.hover(function(){d._x1=!0;d._y1()},function(){d._x1=!1;d._z1()}),this.autoplay=!0,this._a2()):this.autoplay=!1;this.settings.keyboardNav&&f(document).bind("keydown.touchcarousel",function(a){d._u||(37===a.keyCode?d.prev():39===a.keyCode&&d.next())});this.carouselRoot.css("overflow","visible")}q.prototype={goTo:function(b,c){var a=this.items[b];a&&(!c&&(this.autoplay&&this.settings.autoplayStopAtAction)&&
this.stopAutoplay(),this._b2(b),this.endPos=this._c2(),a=-a.posX,0<a?a=0:a<this.carouselWidth-this._h1&&(a=this.carouselWidth-this._h1),this.animateTo(a,this.settings.transitionSpeed,"easeInOutSine"))},next:function(b){var c=this._c2(),a=this._d2(c).index;this._j1?(c=this._l1+1,a=c>this._k1-1?this.settings.loopItems?0:(this._k1-1)*this._i1:c*this._i1):(a+=this._i1,this.settings.loopItems&&c<=this.carouselWidth-this._h1&&(a=0),a>this.numItems-1&&(a=this.numItems-1));this.goTo(a,b)},prev:function(b){var c=
this._c2(),a=this._d2(c).index;this._j1?(c=this._l1-1,a=0>c?this.settings.loopItems?(this._k1-1)*this._i1:0:c*this._i1):(a-=this._i1,0>a&&(a=this.settings.loopItems?0>c?0:this.numItems-1:0));this.goTo(a,b)},getCurrentId:function(){return this._d2(this._c2()).index},setXPos:function(b,c){c?this._t1[this._b1]=this._c1+b+this._d1:this._m[this._b1]=this._c1+b+this._d1},stopAutoplay:function(){this._y1();this.wasAutoplayRunning=this.autoplay=!1},resumeAutoplay:function(){this.autoplay=!0;this.wasAutoplayRunning||
this._z1()},updateCarouselSize:function(b){this.carouselWidth=this.carouselRoot.width();if(this.settings.scrollToLast){var c=0;if(this._j1){var a=this.numItems%this._i1;if(0<a)for(a=this.numItems-a;a<this.numItems;a++)c+=this.items[a].width;else c=this.carouselWidth}else c=this.items[this.numItems-1].width;this._h1=this._f+this.carouselWidth-c}else this._h1=this._f;this.settings.scrollbar&&(c=Math.round(this._r1.width()/(this._h1/this.carouselWidth)),this.scrollbarJQ.css("width",c),this._u1=this._r1.width()-
c);if(!this.settings.scrollToLast){if(this.carouselWidth>=this._f){this._v=!0;this.settings.loopItems||(this._f1=!0,this.arrowRight.addClass("disabled"),this._e1=!0,this.arrowLeft.addClass("disabled"));this.setXPos(0);return}this._v&&(this._e1=this._f1=this._v=!1,this.arrowRight.removeClass("disabled"),this.arrowLeft.removeClass("disabled"))}b||(b=this.endPos=this._c2(),0<b?b=0:b<this.carouselWidth-this._h1&&(b=this.carouselWidth-this._h1),this.animateTo(b,300,"easeInOutSine"))},animateTo:function(b,
c,a,e,d,g,r){function p(){h._b=!1;h._a2();h.settings.scrollbarAutoHide&&h._g2();null!==h.settings.onAnimComplete&&h.settings.onAnimComplete.call(h)}null!==this.settings.onAnimStart&&this.settings.onAnimStart.call(this);this.autoplay&&this.autoplayTimer&&(this.wasAutoplayRunning=!0,this._y1());this._e2();var h=this,n=this.settings.scrollbar,l=h._b1,j=h._c1,m=h._d1,q={containerPos:this.endPos},k={containerPos:b},v={containerPos:d};d=e?d:b;var s=h._m;h._b=!0;if(n){var t=this._t1,u=h._h1-h.carouselWidth;
this.settings.scrollbarAutoHide&&(this._v1||this._f2())}this._p1(d);this._p=f(q).animate(k,{duration:c,easing:a,step:function(){n&&(t[l]=j+Math.round(h._u1*(-this.containerPos/u))+m);s[l]=j+Math.round(this.containerPos)+m},complete:function(){e?h._p=f(k).animate(v,{duration:g,easing:r,step:function(){n&&(t[l]=j+Math.round(h._u1*(-this.containerPos/u))+m);s[l]=j+Math.round(this.containerPos)+m},complete:function(){n&&(t[l]=j+Math.round(h._u1*(-v.containerPos/u))+m);s[l]=j+Math.round(v.containerPos)+
m;p()}}):(n&&(t[l]=j+Math.round(h._u1*(-k.containerPos/u))+m),s[l]=j+Math.round(k.containerPos)+m,p())}})},destroy:function(){this.stopAutoplay();this._n.unbind(this._c);f(document).unbind(this._d).unbind(this._e);f(window).unbind(this._q1);this.settings.keyboardNav&&f(document).unbind("keydown.touchcarousel");this.carouselRoot.remove()},_b2:function(b){this._j1&&(this._l1=b=this._h2(b),this.settings.pagingNavControls&&(this._n1.removeClass("current"),this._n1.eq(b).addClass("current")))},_h2:function(b){for(var c=
this._i1,a=0;a<this._k1;a++)if(b>=a*c&&b<a*c+c)return a;return 0>b?0:b>=this._k1?this._k1-1:!1},_i2:function(){this.settings.loopItems||(this._e1?(this._e1=!1,this.arrowLeft.removeClass("disabled")):this._f1&&(this._f1=!1,this.arrowRight.removeClass("disabled")))},_o1:function(){!this._e1&&!this.settings.loopItems&&(this._e1=!0,this.arrowLeft.addClass("disabled"),this._f1&&(this._f1=!1,this.arrowRight.removeClass("disabled")))},_j2:function(){!this._f1&&!this.settings.loopItems&&(this._f1=!0,this.arrowRight.addClass("disabled"),
this._e1&&(this._e1=!1,this.arrowLeft.removeClass("disabled")))},_d2:function(b){b=-b;for(var c,a=0;a<this.numItems;a++)if(c=this.items[a],b>=c.posX&&b<c.posX+c.width)return c;return-1},_a2:function(){this.autoplay&&this.wasAutoplayRunning&&(this._x1||this._z1(),this.wasAutoplayRunning=!1)},_g2:function(){var b=this;this._v1=!1;this._s1&&clearTimeout(this._s1);this._s1=setTimeout(function(){b.scrollbarJQ.animate({opacity:0},150,"linear")},450)},_f2:function(){this._v1=!0;this._s1&&clearTimeout(this._s1);
this.scrollbarJQ.stop().animate({opacity:1},150,"linear")},_e2:function(){this._p&&this._p.stop()},_z1:function(){if(this.autoplay){var b=this;this.autoplayTimer||(this.autoplayTimer=setInterval(function(){!b._k2&&!b._b&&b.next(!0)},this.settings.autoplayDelay))}},_y1:function(){this.autoplayTimer&&(clearInterval(this.autoplayTimer),this.autoplayTimer="")},_c2:function(b){b=!b?this._l:this.scrollbarJQ;return this._w?(b=b.css("-webkit-transform").replace(/^matrix\(/i,"").split(/, |\)$/g),parseInt(b[4],
10)):Math.round(b.position().left)},_w1:function(b){if(!this._k2){this.autoplay&&this.settings.autoplayStopAtAction&&this.stopAutoplay();this._e2();this.settings.scrollbarAutoHide&&this._f2();var c;if(this.hasTouch)if(this._a=!1,(c=b.originalEvent.touches)&&0<c.length)c=c[0];else return!1;else c=b,b.preventDefault();this._l2();this._k2=!0;var a=this;this._w&&a._l.css({"-webkit-transition-duration":"0","-webkit-transition-property":"none"});f(document).bind(this._d,function(b){a._m2(b)});f(document).bind(this._e,
function(b){a._n2(b)});this._o2=this._c2();this._i=c.clientX;this._q=!1;this._k=b.timeStamp||(new Date).getTime();this._t=0;this._s=this._r=c.clientX;this._p2=c.clientY}},_m2:function(b){var c=b.timeStamp||(new Date).getTime(),a;if(this.hasTouch){if(this._a)return!1;a=b.originalEvent.touches;if(1<a.length)return!1;a=a[0];if(Math.abs(a.clientY-this._p2)>Math.abs(a.clientX-this._r)+3)return this.settings.lockAxis&&(this._a=!0),!1}else a=b;b.preventDefault();this._j=a.clientX;this._q2=this._r2;b=a.clientX-
this._s;this._q2!=b&&(this._r2=b);if(0!=b){var e=this._o2+this._t;0<=e?(b/=4,this._o1()):e<=this.carouselWidth-this._h1?(this._j2(),b/=4):this._i2();this._t+=b;this.setXPos(e);this.settings.scrollbar&&this.setXPos(this._u1*(-e/(this._h1-this.carouselWidth)),!0)}this._s=a.clientX;350<c-this._k&&(this._k=c,this._i=a.clientX);null!==this.settings.onDragStart&&this.settings.onDragStart.call(this);return!1},_n2:function(b){if(this._k2){var c=this;this._k2=!1;this._a1();this.endPos=this._c2();this.isdrag=
!1;f(document).unbind(this._d).unbind(this._e);if(this.endPos==this._o2){this._q=!1;this.settings.scrollbarAutoHide&&this._g2();return}this._q=!0;var a=this._j-this._i;b=Math.max(40,(b.timeStamp||(new Date).getTime())-this._k);var e=0.5;b=Math.abs(a)/b;var d=function(a){0<a?a=0:a<c.carouselWidth-c._h1&&(a=c.carouselWidth-c._h1);return a};if(this.settings.snapToItems){this.autoplay&&this.settings.autoplayStopAtAction&&this.stopAutoplay();var a=Boolean(0<this._r-this._s),e=d(this._c2()),g=this._d2(e).index;
this._j1?(a&&(e=Math.max(e-this.carouselWidth-1,1-c._h1),g=this._d2(e).index,void 0===g&&(g=this.numItems-1)),g=this._h2(g)*this._i1):g+=a?this._i1:-this._i1+1;g=a?Math.min(g,this.numItems-1):Math.max(g,0);e=this.items[g];this._b2(g);e&&(e=d(-e.posX),d=Math.abs(this.endPos-e),b=Math.max(1.08*d/b,150),g=Boolean(180>b),d*=0.08,a&&(d*=-1),this.animateTo(g?e+d:e,Math.min(b,400),"easeOutSine",g,e,300,"easeOutCubic"))}else d=0,2>=b?(e=3.5*this._x,d=0):2<b&&3>=b?(e=4*this._x,d=200):3<b&&(d=300,4<b&&(b=4,
d=400,e=6*this._x),e=5*this._x),a=2*b*b/(2*e)*(0>a?-1:1),e=2*b/e+d,0<this.endPos+a?0<this.endPos?this.animateTo(0,800,"easeOutCubic"):this.animateTo(this.carouselWidth/10*((d+200)/1E3),1.1*Math.abs(this.endPos)/b,"easeOutSine",!0,0,400,"easeOutCubic"):this.endPos+a<this.carouselWidth-this._h1?this.endPos<this.carouselWidth-this._h1?this.animateTo(this.carouselWidth-this._h1,800,"easeOutCubic"):this.animateTo(this.carouselWidth-this._h1-this.carouselWidth/10*((d+200)/1E3),1.1*Math.abs(this.carouselWidth-
this._h1-this.endPos)/b,"easeOutSine",!0,this.carouselWidth-this._h1,400,"easeOutCubic"):this.animateTo(this.endPos+a,e,"easeOutCubic");null!==this.settings.onDragRelease&&this.settings.onDragRelease.call(this)}return!1},_p1:function(b){void 0===b&&(b=this._c2());this.settings.loopItems||(0<=b?this._o1():b<=this.carouselWidth-this._h1?this._j2():this._i2())},_a1:function(){this._y?this._n.css("cursor",this._y):(this._n.removeClass("grabbing-cursor"),this._n.addClass("grab-cursor"))},_l2:function(){this._z?
this._n.css("cursor",this._z):(this._n.removeClass("grab-cursor"),this._n.addClass("grabbing-cursor"))}};f.fn.touchCarousel=function(b){return this.each(function(){var c=new q(f(this),b);f(this).data("touchCarousel",c)})};f.fn.touchCarousel.defaults={itemsPerMove:1,snapToItems:!1,pagingNav:!1,pagingNavControls:!0,autoplay:!1,autoplayDelay:3E3,autoplayStopAtAction:!0,scrollbar:!0,scrollbarAutoHide:!1,scrollbarTheme:"dark",transitionSpeed:600,directionNav:!0,directionNavAutoHide:!1,loopItems:!1,keyboardNav:!1,
dragUsingMouse:!0,scrollToLast:!1,itemFallbackWidth:500,baseMouseFriction:0.0012,baseTouchFriction:8E-4,lockAxis:!0,useWebkit3d:!1,onAnimStart:null,onAnimComplete:null,onDragStart:null,onDragRelease:null};f.fn.touchCarousel.settings={};f.extend(jQuery.easing,{easeInOutSine:function(b,c,a,e,d){return-e/2*(Math.cos(Math.PI*c/d)-1)+a},easeOutSine:function(b,c,a,e,d){return e*Math.sin(c/d*(Math.PI/2))+a},easeOutCubic:function(b,c,a,e,d){return e*((c=c/d-1)*c*c+1)+a}})})(jQuery);