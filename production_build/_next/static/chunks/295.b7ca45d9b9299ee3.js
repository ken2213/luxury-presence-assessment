(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{2238:function(){},295:function(e,n,t){"use strict";t.r(n),t.d(n,{LensflarePlugin:function(){return u.o},ReactPhotoSphereViewer:function(){return h}});var o,r=function(){return(r=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},i=t(2265),a=t(3979);!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* add css styles here (optional) */\n.view-container {\n    position: relative;\n    overflow: hidden;\n}\n\n.showNavbarButton {\n    display: flex;\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    z-index: 1000;\n\n    background: rgba(0, 0, 0, 0.09);\n    bottom: 10px;\n    height: 30px;\n    width: 30px;\n    right: 10px;\n\n    transition: background 0.2s ease, color 0.2s ease;\n    \n    &:hover {\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n}\n\n.hideNavbarButton svg {\n    width: 100%;\n    transform: scale(1);\n    transition: transform .2s ease;\n    vertical-align: initial;\n    margin-top: -2;\n\n    &:hover {\n        transform: scale(1.2);\n    }\n}"),t(2238);var u=t(4175),l={exports:{}};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var n=Object.prototype.hasOwnProperty,t="~";function o(){}function r(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function i(e,n,o,i,a){if("function"!=typeof o)throw TypeError("The listener must be a function");var u=new r(o,i||e,a),l=t?t+n:n;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],u]:e._events[l].push(u):(e._events[l]=u,e._eventsCount++),e}function a(e,n){0==--e._eventsCount?e._events=new o:delete e._events[n]}function u(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(t=!1)),u.prototype.eventNames=function(){var e,o,r=[];if(0===this._eventsCount)return r;for(o in e=this._events)n.call(e,o)&&r.push(t?o.slice(1):o);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},u.prototype.listeners=function(e){var n=t?t+e:e,o=this._events[n];if(!o)return[];if(o.fn)return[o.fn];for(var r=0,i=o.length,a=Array(i);r<i;r++)a[r]=o[r].fn;return a},u.prototype.listenerCount=function(e){var n=t?t+e:e,o=this._events[n];return o?o.fn?1:o.length:0},u.prototype.emit=function(e,n,o,r,i,a){var u=t?t+e:e;if(!this._events[u])return!1;var l,s,c=this._events[u],v=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),v){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,n),!0;case 3:return c.fn.call(c.context,n,o),!0;case 4:return c.fn.call(c.context,n,o,r),!0;case 5:return c.fn.call(c.context,n,o,r,i),!0;case 6:return c.fn.call(c.context,n,o,r,i,a),!0}for(s=1,l=Array(v-1);s<v;s++)l[s-1]=arguments[s];c.fn.apply(c.context,l)}else{var d,f=c.length;for(s=0;s<f;s++)switch(c[s].once&&this.removeListener(e,c[s].fn,void 0,!0),v){case 1:c[s].fn.call(c[s].context);break;case 2:c[s].fn.call(c[s].context,n);break;case 3:c[s].fn.call(c[s].context,n,o);break;case 4:c[s].fn.call(c[s].context,n,o,r);break;default:if(!l)for(d=1,l=Array(v-1);d<v;d++)l[d-1]=arguments[d];c[s].fn.apply(c[s].context,l)}}return!0},u.prototype.on=function(e,n,t){return i(this,e,n,t,!1)},u.prototype.once=function(e,n,t){return i(this,e,n,t,!0)},u.prototype.removeListener=function(e,n,o,r){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return a(this,i),this;var u=this._events[i];if(u.fn)u.fn!==n||r&&!u.once||o&&u.context!==o||a(this,i);else{for(var l=0,s=[],c=u.length;l<c;l++)(u[l].fn!==n||r&&!u[l].once||o&&u[l].context!==o)&&s.push(u[l]);s.length?this._events[i]=1===s.length?s[0]:s:a(this,i)}return this},u.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&a(this,n)):(this._events=new o,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=t,u.EventEmitter=u,e.exports=u}(l);var c=new((o=l.exports)&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o),v={on:function(e,n){return c.on(e,n)},once:function(e,n){return c.once(e,n)},off:function(e,n){return c.off(e,n)},emit:function(e,n){return c.emit(e,n)}};Object.freeze(v);var d=["src","height","width","hideNavbarButton","containerClass","littlePlanet","onPositionChange","onZoomChange","onClick","onDblclick","onReady"],f=["zoom","fullscreen"];function p(e){return null==e?f:Array.isArray(e)?e:"string"==typeof e?""!==e&&[e]:!!e&&f}var h=(0,i.forwardRef)(function(e,n){var t,o,u,l,c=(o=(t=(0,i.useState)())[0],u=t[1],l=(0,i.useCallback)(function(e){e&&e!==o&&u(e)},[o]),[o,l]),h=c[0],m=c[1],C=(0,i.useMemo)(function(){return e},[e.src,e.navbar,e.height,e.width,e.containerClass,e.hideNavbarButton||!0,e.littlePlanet,e.fishEye,e.lang,e.onPositionChange,e.onZoomChange,e.onClick,e.onDblclick,e.onReady,e.moveSpeed,e.zoomSpeed,e.moveInertia,e.mousewheel,e.mousemove,e.mousewheelCtrlKey,e.touchmoveTwoFingers,e.panoData,e.requestHeaders,e.withCredentials,e.keyboard,e.plugins,e.sphereCorrection,e.minFov,e.maxFov,e.defaultZoomLvl,e.defaultYaw,e.defaultPitch]),b=(0,i.useRef)(null),g=130,y=(0,i.useState)(-90)[0],w=(0,i.useState)(2)[0],x=(0,i.useState)(0)[0],_=(0,i.useState)(f),P=_[0],O=_[1];return(0,i.useEffect)(function(){function e(){g=Math.floor(-((window.innerWidth/window.innerHeight-.5)*25)/1.3+140)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),(0,i.useEffect)(function(){var n,t,o,i,u,l,c,f,m,_,P=!0;if(h&&!b.current){var k=new a.AE(r(r({},function(e){var n=r({},e);for(var t in n)d.includes(t)&&delete n[t];return n}(C)),{container:h,panorama:C.src,size:{height:C.height,width:C.width||"100px"},fisheye:C.littlePlanet?w:C.fisheye||!1,minFov:null!==(n=C.minFov)&&void 0!==n?n:30,maxFov:C.littlePlanet?g:null!==(t=C.maxFov)&&void 0!==t?t:90,defaultZoomLvl:C.littlePlanet?x:null!==(o=C.defaultZoomLvl)&&void 0!==o?o:50,defaultYaw:null!==(i=C.defaultYaw)&&void 0!==i?i:0,defaultPitch:C.littlePlanet?y:null!==(u=C.defaultPitch)&&void 0!==u?u:0,sphereCorrection:C.sphereCorrection||{pan:0,tilt:0,roll:0},moveSpeed:C.moveSpeed||1,zoomSpeed:C.zoomSpeed||1,moveInertia:null===(l=C.moveInertia)||void 0===l||l,mousewheel:!C.littlePlanet&&(null===(c=C.mousewheel)||void 0===c||c),mousemove:null===(f=C.mousemove)||void 0===f||f,mousewheelCtrlKey:C.mousewheelCtrlKey||!1,touchmoveTwoFingers:C.touchmoveTwoFingers||!1,panoData:C.panoData||{},requestHeaders:C.requestHeaders||{},withCredentials:C.withCredentials||!1,navbar:p(C.navbar),lang:C.lang||{},keyboard:C.keyboard||"fullscreen",plugins:function(e,n,t){if(t||2==arguments.length)for(var o,r=0,i=n.length;r<i;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}([],C.plugins?C.plugins:[],!0)}));k.addEventListener("ready",function(){C.onReady&&C.onReady(k)},{once:!0}),k.addEventListener("click",function(e){C.onClick&&C.onClick(e,k),C.littlePlanet&&P&&(P=!1,k.animate({yaw:0,pitch:y,zoom:75,speed:"3rpm"}).then(function(){k.animate({yaw:0,pitch:0,zoom:90,speed:"10rpm"}).then(function(){var e;k.setOption("maxFov",C.maxFov||70),k.setOption("mousewheel",null===(e=C.mousewheel)||void 0===e||e)})}))}),k.addEventListener("dblclick",function(e){C.onDblclick&&C.onDblclick(e,k)}),k.addEventListener("zoom-updated",function(e){C.onZoomChange&&C.onZoomChange(e,k)}),k.addEventListener("position-updated",function(e){C.onPositionChange&&C.onPositionChange(e.position.pitch,e.position.yaw,k)});var z=p(C.navbar);if(C.littlePlanet){var L={id:"resetLittlePlanetButton",content:(null===(m=e.lang)||void 0===m?void 0:m.littlePlanetIcon)||'<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 11.8805 19.9974 11.7615 19.9922 11.6433C20.2479 11.4141 20.4882 11.1864 20.7118 10.9611C21.0037 10.6672 21.002 10.1923 20.708 9.90049C20.4336 9.628 20.0014 9.61143 19.7077 9.84972C19.4023 8.75248 18.8688 7.75024 18.1616 6.89725C18.4607 6.84611 18.7436 6.8084 19.0087 6.784C19.4212 6.74604 19.7247 6.38089 19.6868 5.96842C19.6488 5.55595 19.2837 5.25235 18.8712 5.29032C18.4474 5.32932 17.9972 5.39638 17.5262 5.48921C17.3267 5.52851 17.1614 5.64353 17.0543 5.79852C15.6765 4.67424 13.917 4 12 4C7.58172 4 4 7.58172 4 12C4 12.2776 4.01414 12.552 4.04175 12.8223C3.78987 12.7532 3.50899 12.8177 3.31137 13.0159C2.97651 13.3517 2.67596 13.6846 2.415 14.0113C2.15647 14.3349 2.20924 14.8069 2.53287 15.0654C2.8565 15.3239 3.32843 15.2711 3.58696 14.9475C3.78866 14.695 4.02466 14.4302 4.2938 14.1557C4.60754 15.2796 5.16056 16.3037 5.8945 17.1697C5.66824 17.3368 5.54578 17.6248 5.60398 17.919C5.68437 18.3253 6.07894 18.5896 6.48528 18.5092C6.7024 18.4662 6.92455 18.4177 7.15125 18.3637C8.49656 19.3903 10.1771 20 12 20ZM7.15125 18.3637C6.69042 18.012 6.26891 17.6114 5.8945 17.1697C5.98073 17.106 6.08204 17.0599 6.19417 17.0377C7.19089 16.8405 8.33112 16.5084 9.55581 16.0486C9.94359 15.903 10.376 16.0994 10.5216 16.4872C10.6671 16.8749 10.4708 17.3073 10.083 17.4529C9.05325 17.8395 8.0653 18.1459 7.15125 18.3637ZM19.7077 9.84972C19.6869 9.86663 19.6667 9.88483 19.6474 9.90431C18.9609 10.5957 18.0797 11.3337 17.0388 12.0753C16.7014 12.3157 16.6228 12.784 16.8631 13.1213C17.1035 13.4587 17.5718 13.5373 17.9091 13.297C18.6809 12.7471 19.3806 12.1912 19.9922 11.6433C19.965 11.0246 19.8676 10.4241 19.7077 9.84972ZM20.9366 5.37924C20.5336 5.28378 20.1294 5.53313 20.034 5.93619C19.9385 6.33925 20.1879 6.74339 20.5909 6.83886C20.985 6.93219 21.1368 7.07125 21.1932 7.16142C21.2565 7.26269 21.3262 7.52732 21.0363 8.10938C20.8516 8.48014 21.0025 8.93042 21.3732 9.1151C21.744 9.29979 22.1943 9.14894 22.379 8.77818C22.7566 8.02003 22.9422 7.12886 22.4648 6.36582C22.1206 5.81574 21.5416 5.52252 20.9366 5.37924ZM2.81481 16.2501C2.94057 15.8555 2.72259 15.4336 2.32793 15.3078C1.93327 15.1821 1.51138 15.4 1.38562 15.7947C1.19392 16.3963 1.17354 17.0573 1.53488 17.6349C1.98775 18.3587 2.84153 18.6413 3.68907 18.7224C4.1014 18.7619 4.46765 18.4596 4.50712 18.0473C4.54658 17.635 4.24432 17.2687 3.83199 17.2293C3.13763 17.1628 2.88355 16.9624 2.80651 16.8393C2.75679 16.7598 2.70479 16.5954 2.81481 16.2501ZM15.7504 14.704C16.106 14.4915 16.2218 14.0309 16.0093 13.6754C15.7967 13.3199 15.3362 13.204 14.9807 13.4166C14.4991 13.7045 13.9974 13.9881 13.4781 14.2648C12.9445 14.5491 12.4132 14.8149 11.8883 15.0615C11.5134 15.2376 11.3522 15.6843 11.5283 16.0592C11.7044 16.4341 12.1511 16.5953 12.526 16.4192C13.0739 16.1618 13.6277 15.8847 14.1834 15.5887C14.7242 15.3005 15.2474 15.0048 15.7504 14.704Z" fill="rgba(255,255,255,.7)"/>\n                </svg>',title:(null===(_=e.lang)||void 0===_?void 0:_.littlePlanetButton)||"Reset Little Planet",className:"resetLittlePlanetButton",onClick:function(){P=!0,k.setOption("maxFov",g),k.setOption("mousewheel",!1),k.animate({yaw:0,pitch:y,zoom:x,speed:"10rpm"})}};!1===z||z.find(function(e){return"object"===s(e)&&(null==e?void 0:e.id)==="resetLittlePlanetButton"})||z.splice(1,0,L)}C.hideNavbarButton&&!1!==z&&!z.find(function(e){return"object"===s(e)&&(null==e?void 0:e.id)==="hideNavbarButton"})&&z.push({id:"hideNavbarButton",content:'<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">\n                            <g clip-path="url(#clip0_429_11083)">\n                            <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n                            </g>\n                            <defs>\n                            <clipPath id="clip0_429_11083">\n                            <rect width="24" height="24" fill="white"/>\n                            </clipPath>\n                            </defs>\n                            </svg>',title:"Hide Navbar",className:"hideNavbarButton",onClick:function(){k.navbar.hide();var e=document.createElement("a");e.className="showNavbarButton",e.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" class="icon icon-back-to-top">\n                                        <g>\n                                        <path d="M13.8,1.3L21.6,9c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.3,0.4\n                                            c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.3L14.2,5l0,19.1\n                                            c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1\n                                            c-0.1-0.1-0.3-0.1-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5l0-19.1l-5.7,5.7C6,10.8,5.8,10.9,5.7,11\n                                            c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.4C4.1,10.2,4,10.1,4.1,9.9\n                                            c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l7.7-7.8c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2-0.1\n                                            c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1C13.7,1.2,13.8,1.2,13.8,1.3z"></path>\n                                        </g>\n                                        </svg>',e.title="Show Navbar",e.onclick=function(n){n.preventDefault(),k.navbar.show(),e.remove()},document.body.appendChild(e)}}),!1!==z?(k.setOption("navbar",z),O(z)):k.navbar.hide(),v.on("animate",function(e){k.animate(e)}).on("stop-animation",function(){k.stopAnimation()}).on("destroy",function(){k.destroy()}).on("rotate",function(e){k.rotate(e)}).on("setOption",function(e){var n=e.option,t=e.value;k.setOption(n,t)}).on("zoom",function(e){k.zoom(e)}).on("zoomIn",function(e){k.zoomIn(e)}).on("zoomOut",function(e){k.zoomOut(e)}).on("needsContinuousUpdate",function(e){k.needsContinuousUpdate(e)}).on("observeObjects",function(e){k.observeObjects(e)}).on("unobserveObjects",function(e){k.unobserveObjects(e)}).on("setCursor",function(e){k.setCursor(e)}),b.current=k}},[h,C]),(0,i.useEffect)(function(){b.current&&b.current.setPanorama(C.src,C)},[C.src]),(0,i.useImperativeHandle)(n,function(){return{animate:function(e){v.emit("animate",e)},destroy:function(){v.emit("destroy",{})},createTooltip:function(e){var n;return null===(n=b.current)||void 0===n?void 0:n.createTooltip(e)},needsContinuousUpdate:function(e){v.emit("needsContinuousUpdate",e)},observeObjects:function(e){v.emit("observeObjects",e)},unobserveObjects:function(e){v.emit("unobserveObjects",e)},setCursor:function(e){v.emit("setCursor",e)},stopAnimation:function(){v.emit("stop-animation",{})},rotate:function(e){v.emit("rotate",e)},setOption:function(e,n){v.emit("setOption",{option:e,value:n})},setOptions:function(e){var n;return null===(n=b.current)||void 0===n?void 0:n.setOptions(e)},getCurrentNavbar:function(){return P},zoom:function(e){v.emit("zoom",e)},zoomIn:function(e){v.emit("zoomIn",{step:e})},zoomOut:function(e){v.emit("zoomOut",{step:e})},resize:function(e){var n;return null===(n=b.current)||void 0===n?void 0:n.resize(e)},enterFullscreen:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.enterFullscreen()},exitFullscreen:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.exitFullscreen()},toggleFullscreen:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.toggleFullscreen()},isFullscreenEnabled:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.isFullscreenEnabled()},getPlugin:function(e){var n;return null===(n=b.current)||void 0===n?void 0:n.getPlugin(e)},getPosition:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.getPosition()},getZoomLevel:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.getZoomLevel()},getSize:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.getSize()},needsUpdate:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.needsUpdate()},autoSize:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.autoSize()},setPanorama:function(e,n){var t;return null===(t=b.current)||void 0===t?void 0:t.setPanorama(e,n)},showError:function(e){var n;return null===(n=b.current)||void 0===n?void 0:n.showError(e)},hideError:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.hideError()},startKeyboardControl:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.startKeyboardControl()},stopKeyboardControl:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.stopKeyboardControl()}}},[b.current,h,C,n]),i.createElement("div",{className:C.containerClass||"view-container",ref:m})})}}]);