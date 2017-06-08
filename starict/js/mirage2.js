/*! Mirage 2.1.0 - Tue Sep 15 2015 09:41:03*/
CloudFlare.define(["cloudflare/iterator","cloudflare/dom","cloudflare/utility","cloudflare/path","cloudflare/loader","cloudflare/promise","cloudflare/config","cloudflare/classes","cloudflare/console"],function(a,b,c,d,e,f,g,h,i){function j(){var a,b,c;return a=new f(function(a,d){b=a,c=d}),{promise:a,resolve:b,reject:c}}function k(a,b,c){var d,e,f,g,h=a.byteLength;if(b=~~b,c=void 0===c?h:~~c,"function"==typeof a.slice)return a.slice(b,c);for(0>b?(b+=h,0>b&&(b=0)):b>h&&(b=h),0>c?(c+=h,0>c&&(c=0)):c>h&&(c=h),b>c&&(c=b),d=c-b,e=new DataView(a,b,d),f=new Uint8Array(d),g=0;d>g;g++)f[g]=e.getUint8(g);return f.buffer}function l(a,b,c){var d,e=a[b];d=Object.getOwnPropertyDescriptor(a,b)||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),b)||{value:e,writable:!0,configurable:!0,enumerable:!0};try{n(d.configurable,"Property must be configurable."),n(!!c,"Property descriptor must be defined.")}catch(a){throw new Error('Invalid attempt to redefine "'+b+'".',a.message)}"undefined"==typeof c.get&&"undefined"==typeof c.set&&(c.writable=!0),c.enumerable=c.enumerable!==!1,c.configurable=c.configurable!==!1;try{Object.defineProperty(a,b,c)}catch(a){i.error('Failed to define property "'+b+'".',a.message)}return function(){try{Object.defineProperty(a,b,d)}catch(a){i.error('Failed to restore user-defined property "'+b+'".',a.message)}}}function m(){var a;return window.location.origin?window.location.origin:(a=d.parseURL(window.location.toString()),a.protocol+"://"+a.host+":"+a.port)}function n(a,b){if(!a)throw new Error(b)}function o(a,b){return function(){return a.apply(b,arguments)}}function p(a,b){var c=null;return function(){var d=arguments,e=this;null!==c&&window.clearTimeout(c),c=window.setTimeout(function(){a.apply(e,d)},b)}}function q(a,b){var c,d,e;b=b||{type:"text/javascript"};try{e=new Blob([a],b)}catch(f){c=this.BlobBuilder||this.WebKitBlobBuilder||this.MozBlobBuilder,d=new c,d.append(a),e=d.getBlob(b&&b.type)}return e}function r(){this.queue_=f.resolve(),this.reset_()}function s(){var a=!1,b="___MIRAGE_STORAGE_TEST___";try{localStorage.setItem(b,b),localStorage.getItem(b),localStorage.removeItem(b),a=!0}catch(a){}this.canAccessStorage_=a,this.connectionResolves_=f.resolve(navigator.connection||navigator.mozConnection||navigator.webkitConnection||this.getFakeConnection_())}function t(a,b){try{var c=new Uint8Array(a,b);c[0]===t.type.SIGNATURE[0]?this.initializeAsSignature_(a,b):this.initializeAsChunk_(a,b)}catch(a){throw new Error("Failed to initialize a PNG chunk. "+a.toString())}}function u(a,b){var c=new t(a,b),d=0;n(c.isSignature(),"First chunk should be PNG signature."),d+=c.byteLength;do c=new t(a,b+d),d+=c.byteLength;while(!c.isEnd());this.offset=b,this.byteLength=d,this.view=new Uint8Array(a,b,d),this.imageSrc_=null}function v(a,b){for(var c,d=new Uint8Array(a,b,4),e=0,f=0;4>f;f++)e<<=8,e|=d[f];try{c=String.fromCharCode.apply(null,new Uint8Array(a,b+4,e)),c=JSON.parse(c)}catch(a){throw new Error("Unable to parse degraded image JSON. "+a.toString())}this.byteLength=e+4,this.data=c,this.loadStatus=this.data.status==v.state.LOAD_OK?this.data.status:this.data.status+":"+this.data.cache_status,this.data.width=this.data.width||this.data.X||0,this.data.height=this.data.height||this.data.Y||0}function w(a,b){this.json=new v(a,b),this.png=new u(a,b+this.json.byteLength),this.src=this.json.data.url,this.width=this.json.data.width||this.json.data.Y,this.height=this.json.data.height||this.json.data.X,this.byteLength=this.json.byteLength+this.png.byteLength}function x(a,b){var c=a.indexOf("}\n",b)+1,d=a.indexOf("\n\n",c);n(-1!==c,"A JSON boundary should exist."),n(-1!==d,"A DataURL boundary should exist.");var e=JSON.parse(a.slice(b,c)),f=a.slice(c+1,d);this.json={data:e,loadStatus:e.status==v.state.LOAD_OK?e.status:e.status+":"+e.cache_status},this.src=this.json.data.url,this.width=this.json.data.width||this.json.data.X,this.height=this.json.data.height||this.json.data.Y,this.stringLength=d+2-b,this.dataUrl_=f}function y(a,b){this.image_=a,this.restored_=!1,this.restoring_=!1,this.stateCallback_=null,this.restoredResult_=j(),this.wrappedPropertyCache_=[],this.boundExpireState_=o(this.expireState_,this),this.parentTree_=y.resolveParentTree(this.image_),this.parentTreeChangesPromise_=null,this.parentTreeCheckInterval_=null,this.forcePreloadOnly_=b&&b.forcePreloadOnly_,this.requireProxy_=b&&b.proxy_,this.storeStyleMutation(),this.makeMeasurable_(),this.wrap_()}function z(a){this.supportsBinaryData_=a?!!a.supportsBinaryData:!1,this.map_={},this.timer_=null,this.supportsBinaryData_=!1,this.supportsBinaryData_&&("undefined"==typeof ArrayBuffer&&(this.supportsBinaryData_=!1),"undefined"==typeof URL&&"undefined"==typeof webkitURL&&"undefined"==typeof mozURL&&(this.supportsBinaryData_=!1),"undefined"==typeof Blob&&"undefined"==typeof BlobBuilder&&"undefined"==typeof WebKitBlobBuilder&&"undefined"==typeof MozBlobBuilder&&(this.supportsBinaryData_=!1)),this.loadStrategy_=this.supportsBinaryData_?this.loadArrayBuffer_:this.loadDataUrls_}function A(){this.manifest_=new r,this.connection_=new s,this.imageCache_=[],this.forcePreload_=/forcepreload/.test(window.location.search),this.forcePreloadOnly_=/forcepreloadonly/.test(window.location.search),this.forceEagerLoad_=/forceeagerload/.test(window.location.search),this.forceDataUrls_=/forcedataurls/.test(window.location.search),this.optimizationTimeout_=null,this.requireProxy_=!1,this.loadStatistics={},this.nativeMethods={},this.forcePreload_&&this.manifest_.clear(),this.forceEagerLoad_&&(B.eagerLoad=!0),this.supportsBinaryData_=!0,"undefined"==typeof window.ArrayBuffer&&(this.supportsBinaryData_=!1),"undefined"==typeof window.Blob&&"undefined"==typeof window.BlobBuilder&&"undefined"==typeof window.WebKitBlobBuilder&&"undefined"==typeof window.MozBlobBuilder&&(this.supportsBinaryData_=!1);var a=document.createElement("canvas");if("undefined"==typeof a.getContext)this.supportsBinaryData_=!1;else try{a.getContext("2d")}catch(a){this.supportsBinaryData_=!1}this.forceDataUrls_&&(this.supportsBinaryData_=!1),this.loader_=new z({supportsBinaryData:this.supportsBinaryData_})}var B=g.mirage2;B.maxjsonsize=B.maxjsonsize||1e5,B.maxdegradedimages=B.maxdegradedimages||50,B.maxexternalimages=B.maxexternalimages||50,B.eagerLoad=B.eagerLoad||!1,B.petoken=g.petok;var C=window.URL||window.webkitURL||window.mozURL,D=m();r.DEFAULT_TTL=1728e5,r.STORAGE_KEY="mirage_cache_manifest",r.DEBOUNCE_THRESHOLD=500,r.MAX_LENGTH=100,r.prototype.record=function(a){return this.whenReady_(function(){this.add_(a),this.persist_()})},r.prototype.has=function(a){return this.whenReady_(function(){return this.has_(a)})},r.prototype.indexOf=function(a){return this.whenReady_(function(){return this.indexOf_(this.map_[a])})},r.prototype.clear=function(){return this.whenReady_(function(){try{window.localStorage.removeItem(r.STORAGE_KEY)}catch(a){}this.reset_()})},r.prototype.whenReady_=function(a){return this.queue_=this.queue_.then(o(a,this)),this.queue_},r.prototype.has_=function(a){var b=this.map_[a],d=c.now();return b&&b+r.DEFAULT_TTL<d?(this.remove_(a),this.persist_(),!1):!!b},r.prototype.reset_=function(){try{this.map_=JSON.parse(window.localStorage.getItem(r.STORAGE_KEY)),this.sizeMap_={},this.sizeQueue_=a.map(this.map_,function(a,b){var c={key:b,value:a};return this.sizeMap_[b]=c,c},this).sort(function(a,b){return a.value>b.value?-1:a.value<b.value?1:0})}catch(a){}this.map_=this.map_||{},this.offset_=0},r.prototype.indexOf_=function(a,b,c){var d,e;return 0===this.sizeQueue_.length||"undefined"==typeof a?-1:(b=b||0,c=c||this.sizeQueue_.length,d=c-b,0===d?-1:(e=d/2+b,e|=e,this.sizeQueue_[e].value<a?this.indexOf_(a,b,e):this.sizeQueue_[e].value>a?this.indexOf_(a,e,c):e))},r.prototype.add_=function(a){var b,d=this.sizeMap_[a];d?(b=this.indexOf_(d.value),this.sizeQueue_.splice(b,1)):(d={key:a},this.sizeMap_[a]=d),this.map_[a]=d.value=c.now()+this.offset_++,this.sizeQueue_.unshift(d),this.sizeQueue_.length>r.MAX_LENGTH&&this.remove_(this.sizeQueue_[this.sizeQueue_.length-1].key)},r.prototype.remove_=function(a){var b=this.sizeMap_[a],c=this.indexOf_(b.value);delete this.map_[a],delete this.sizeMap_[a],-1!==c&&this.sizeQueue_.splice(c,1)},r.prototype.persist_=function(){return this.whenReady_(function(){try{window.localStorage.setItem(r.STORAGE_KEY,JSON.stringify(this.map_))}catch(a){}})},r.prototype.persist_=p(r.prototype.persist_,r.DEBOUNCE_THRESHOLD),s.STORAGE_KEY="mirage_network_connection",s.MEGABYTE_RATIO=1048.576,s.SERVER_TIME_HEADER="X-Mirage-Server-Time",s.TRANSFER_SIZE_HEADER="X-Mirage-Transfer-Size",s.SPEEDTEST_LOCATION_FRAGMENT="/cdn-cgi/mirage_speedtest/",s.DEFAULT_CONNECTION={bandwidth:1/0,metered:null},s.HIGH_LATENCY_THRESHOLD=1.25,s.prototype.assessLatency=function(){return this.connectionResolves_.then(function(a){var b=window.navigator.userAgent||"",c=a.bandwidth<s.HIGH_LATENCY_THRESHOLD,d=/Android|iPhone|iPod|iPad/.test(b);return c&&d})},s.prototype.getFakeConnection_=function(){return new f(o(function(a){var b;this.canAccessStorage_||a(s.DEFAULT_CONNECTION);try{b=JSON.parse(window.localStorage.getItem(s.STORAGE_KEY))}catch(a){}b&&a(b);var c=this.approximateConnection_().then(function(a){try{window.localStorage.setItem(s.STORAGE_KEY,JSON.stringify(a))}catch(a){}return a},function(){return s.DEFAULT_CONNECTION});a(c)},this))},s.prototype.approximateConnection_=function(){return new f(function(a,b){var d=new XMLHttpRequest,e=c.now();i.log("Approximating network connection.."),d.open("get",D+s.SPEEDTEST_LOCATION_FRAGMENT+e),d.onreadystatechange=function(){var f;if(2===d.readyState){try{d.status&&(f=+d.status)}catch(a){}if(1223===f&&(f=204),!f||200!==f)return b(new Error("Unexpected HTTP status: "+f));var g=c.now(),h=window.parseInt(d.getResponseHeader(s.SERVER_TIME_HEADER),10),j=window.parseInt(d.getResponseHeader(s.TRANSFER_SIZE_HEADER),10),k=g-e,l=parseFloat((j/k/s.MEGABYTE_RATIO).toFixed(2));return isNaN(k)||isNaN(l)?a(s.DEFAULT_CONNECTION):(i.log("Upstream:",h-e,"ms"),i.log("Downstream:",g-h,"ms"),i.log("Round-trip:",k,"ms"),i.log("Transferred:",j,"bytes"),i.log("Speed:",l," MB/s"),a({bandwidth:l,metered:null}))}},d.send()})},t.type={SIGNATURE:[137,80,78,71,13,10,26,10],IHDR:[73,72,68,82],IEND:[73,69,78,68]},t.FIELD_BYTE_LENGTH=12,t.prototype.initializeAsSignature_=function(a,b){this.byteLength=8,this.type_=new Uint8Array(a,b,this.byteLength)},t.prototype.initializeAsChunk_=function(a,b){for(var c=new Uint8Array(a,b,4),d=0,e=0;4>e;e++)d<<=8,d|=c[e];this.byteLength=d+t.FIELD_BYTE_LENGTH,this.type_=new Uint8Array(a,b+4,4)},t.prototype.isSignature=function(){return 8===this.byteLength},t.prototype.isHeader=function(){return this.matches(t.type.IHDR)},t.prototype.isEnd=function(){return this.matches(t.type.IEND)},t.prototype.matches=function(a){for(var b=0;b<a.length;++b)if(this.type_[b]!==a[b])return!1;return!0},u.createObjectUrl=function(){var a=f.resolve();return function(b){return a=a.then(function(){var a=b.toBlob_();b.releaseImageSrc();try{var c="createObjectURL";for(c in C)if("createObjectURL"===c)break;return C[c](a)}catch(a){return i.error("Failed to create objectURL for a blob.",a.message),""}})}}(),u.prototype.toBlob_=function(){var a=k(this.view.buffer,this.view.byteOffset,this.view.byteOffset+this.view.byteLength);return q(a,{type:"image/png"})},u.prototype.resolveImageSrc=function(){return u.createObjectUrl(this).then(o(function(a){return this.imageSrc_=a,a},this))},u.prototype.releaseImageSrc=function(){if(this.imageSrc_)try{C.revokeObjectURL(this.imageSrc_),this.imageSrc_=null}catch(a){i.error("Failed to release image src.",a.message)}},v.state={LOAD_OK:"ok",CACHE_MISS:"914:MISS",CACHE_HIT:"914:HIT"},w.prototype.resolveSrc=function(){return this.png.resolveImageSrc()},w.prototype.isValid=function(){return this.json.loadStatus==v.state.LOAD_OK},x.prototype.resolveSrc=function(){return f.resolve(this.dataUrl_)},x.prototype.isValid=function(){return this.json.loadStatus==v.state.LOAD_OK},y.VIEWPORT_BUFFER=300,y.PARENT_TREE_POLL_INTERVAL=500,y.RETRY_TIME=100,y.INVISIBLE_CLASS="cf-invisible",y.HIDDEN_CLASS="cf-hidden",y.resolveParentTree=function(a){for(var b=[],c=a;c;){b.push(c);try{c=c.parentNode}catch(a){break}}return b},y.matchesParentTree=function(a,b){var c=y.resolveParentTree(a);if(c.length!==b.length)return!1;for(var d=0;d<c.length;++d)if(c[d]!==b[d])return!1;return!0},y.prototype.storeStyleMutation=function(){var a=b.getData(this.image_,"cfstyle");"hidden"===this.image_.style.visibility&&(this.image_.style.visibility="",c=b.getAttribute(this.image_,"style")),"none"===this.image_.style.display&&(this.image_.style.display="",c=b.getAttribute(this.image_,"style"));var c=b.getAttribute(this.image_,"style");c&&(a?b.setData(this.image_,"cfstyle",y.mergeInlineStyles(this.image_)):b.setData(this.image_,"cfstyle",c))},y.mergeInlineStyles=function(c){var d=b.getAttribute(c,"style"),e=b.getData(c,"cfstyle"),f={},g=e.split(";").concat(d.split(";"));a.forEach(g,function(a){i=a.split(":"),f[i[0].trim()]=a});var h=[];for(var i in f)i&&h.push(f[i]);return h.join(";")},y.isValidCandidate=function(a){var c=b.getData(a,"cfsrc"),d=b.getAttribute(a,"src");b.getData(a,"cfstyle"),b.getAttribute(a,"style");return c&&"data:"===c.slice(0,5).toLowerCase()?(b.setAttribute(a,"src",c),y.restoreStyle(a),!1):((d&&c!==d||!c)&&y.restoreStyle(a),"IMG"===a.nodeName&&!!c&&(null===d||""===d||d===c))},y.restoreStyle=function(a){var c,d=b.getData(a,"cfstyle");a.style&&(a.style.visibility="",a.style.display=""),c=b.getAttribute(a,"style"),d?c?b.setAttribute(a,"style",y.mergeInlineStyles(a)):b.setAttribute(a,"style",d):b.removeAttribute(a,"style")},y.prototype.getSrc=function(){return d.resolveFullURL(b.getData(this.image_,"cfsrc")||"")},y.prototype.getStyle=function(){return b.getData(this.image_,"cfstyle")||""},y.prototype.getTop=function(){for(var a=0,b=this.image_;b;)try{"undefined"!=typeof b.offsetTop&&b.offsetTop&&(a+=b.offsetTop),b=b.offsetParent}catch(a){break}return a},y.prototype.getLeft=function(){var a=this.image_;return a.getBoundingClientRect().left},y.prototype.setDegradedSrc=function(a){return new f(o(function(c){this.restored_?c():(this.restoring_=!0,this.unwrap_(),this.restoring_=!1,this.whenStateExpires_(c),b.setAttribute(this.image_,"src",a),this.image_.src=a,""===this.getStyle()?b.removeAttribute(this.image_,"style"):b.setAttribute(this.image_,"style",this.getStyle()),h.remove(this.image_,y.HIDDEN_CLASS),this.wrap_())},this))},y.prototype.restoreWithinViewport=function(){return this.forcePreloadOnly_?this.restoredResult_.promise:B.eagerLoad?this.restore():this.entersViewport_().then(o(function(){return this.restore()},this))},y.prototype.restore=function(){return this.forcePreloadOnly_?this.restoredResult_.promise:(this.restoring_=!0,this.unwrap_(),this.restoring_=!1,this.restored_=!0,b.setAttribute(this.image_,"src",this.getSrc()),this.image_.src=this.getSrc(),""===this.getStyle()?b.removeAttribute(this.image_,"style"):b.setAttribute(this.image_,"style",this.getStyle()),h.remove(this.image_,y.HIDDEN_CLASS),this.whenStateExpires_(o(function(){this.restoredResult_.resolve()},this)),this.restoredResult_.promise)},y.prototype.whenRestored=function(a){return this.restoredResult_.promise.then(a)},y.prototype.isWithinViewport=function(){var a,c=b.getViewport(),d=this.image_,e=d.getBoundingClientRect();return a=e.bottom<0?e.bottom:e.top>c.height?e.top-c.height:0,Math.abs(a)<A.DISTANCE_FROM_VIEWPORT},y.prototype.whenStateExpires_=function(a){this.expireState_(),this.stateCallback_=a,b.addEventListener(this.image_,"load",this.boundExpireState_),b.addEventListener(this.image_,"error",this.boundExpireState_)},y.prototype.expireState_=function(){var a;b.removeEventListener(this.image_,"load",this.boundExpireState_),b.removeEventListener(this.image_,"error",this.boundExpireState_),this.stateCallback_&&(a=this.stateCallback_,this.stateCallback_=null,a())},y.prototype.entersViewport_=function(){return new f(o(function(a){if(this.isWithinViewport())return a();var c=o(function(){this.isWithinViewport()&&(null!==this.parentTreeCheckInterval_&&(window.clearInterval(this.parentTreeCheckInterval_),this.parentTreeCheckInterval_=null),this.mutationObserver.disconnect(),this.retryTimer_&&delete this.retryTimer_,b.removeEventListener(window,"resize",c),b.removeEventListener(window,"scroll",c),a())},this);this.retryTimer_=setTimeout(o(function(){c()},this),y.RETRY_TIME),this.parentTreeChanges_().then(c),this.elementAttributeChange_().then(c),b.addEventListener(window,"resize",c),b.addEventListener(window,"scroll",c)},this))},y.prototype.elementAttributeChange_=function(){return new f(o(function(a){var b=function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||function(){this.observe=function(){},this.disconnect=function(){}}}();this.mutationObserver=new b(function(b){a()}),this.image_.origImage_&&this.mutationObserver.observe(this.image_.origImage_,{attributes:!0,attributeOldValue:!0})},this))},y.prototype.parentTreeChanges_=function(){if(this.parentTreeChangesPromise_)return this.parentTreeChangesPromise_;var a=j();return this.parentTreeCheckInterval_=window.setInterval(o(function(){var b=y.matchesParentTree(this.image_,this.parentTree_);b||(this.parentTree_=y.resolveParentTree(this.image_),window.clearInterval(this.parentTreeCheckInterval_),this.parentTreeCheckInterval_=null,this.parentTreeChangesPromise_=null,a.resolve())},this),y.PARENT_TREE_POLL_INTERVAL),this.parentTreeChangesPromise_=a.promise,a.promise},y.prototype.makeMeasurable_=function(){this.restored_||(h.has(this.image_,y.INVISIBLE_CLASS)?h.remove(this.image_,y.INVISIBLE_CLASS):b.setAttribute(this.image_,"style","visibility:hidden"))},y.prototype.wrap_=function(){this.requireProxy_?(this.proxy_||(this.proxy_=this.makeProxy()),this.image_=this.proxy_):this.wrapImage_()},y.prototype.wrapImage_=function(){try{var a=this,c=this.image_.getAttribute,d=this.image_.setAttribute,e=l(this.image_,"src",{get:function(){return a.getSrc()},set:function(c){a.restoring_||b.setData(a.image_,"cfsrc",c)}}),f=l(this.image_,"getAttribute",{value:function(b){return"src"===b?a.getSrc():"style"===b?a.getStyle():c.apply(a.image_,arguments)}}),g=l(this.image_,"setAttribute",{value:function(c,e){"src"===c?b.setData(a.image_,"cfsrc",e):"style"===c?b.setData(a.image_,"cfstyle",e):d.apply(a.image_,arguments)}});this.wrappedPropertyCache_.push(e,f,g)}catch(a){this.proxy_||(this.proxy_=this.makeProxy()),this.image_=this.proxy_}},y.prototype.makeProxy=function(){var c={};c.origImage_=this.image_;var d=(this.origImage_,this);return a.forEach(this.image_,function(a,e){"function"==typeof a?c[e]=function(){return this.origImage_[e].apply(this.origImage_,arguments)}:"SRC"===e.toUpperCase()?Object.defineProperty(c,e,{get:function(){return d.getSrc()},set:function(a){b.setData(this.origImage_,"cfsrc",a)}}):Object.defineProperty(c,e,{get:function(){return this.origImage_[e]},set:function(a){this.origImage_[e]=a}})},null,!0),l(c,"getAttribute",{value:function(a){return"SRC"===a.toUpperCase()?d.getSrc():"STYLE"===a.toUpperCase()?d.getStyle():this.origImage_.getAttribute(a)}}),l(c,"setAttribute",{value:function(a,c){"src"===a?b.setData(this.origImage_,"cfsrc",c):"style"===a?b.setData(this.origImage_,"cfstyle",c):setAttribute.apply(this.origImage_,arguments)}}),c},y.prototype.unwrap_=function(){this.wrappedPropertyCache_.length?a.forEach(this.wrappedPropertyCache_,function(a){a()}):this.image_=this.proxy_.origImage_},z.LOAD_TICK_INTERVAL=200,z.BINARY_LOCATION_FRAGMENT="/cdn-cgi/pe/mirage_bag?format=binary",z.DATAURL_LOCATION_FRAGMENT="/cdn-cgi/pe/mirage_bag?format=base64",z.prototype.load=function(a){var b=this.map_[a]=this.map_[a]||j();return null===this.timer_&&(this.timer_=setTimeout(o(function(){var a=this.map_,b=Object.keys(a);this.map_={},this.timer_=null,this.loadStrategy_(b,o(function(b,c,d,e){a[b].resolve({src:b,width:d,height:e,degradedSrc:c})},this),o(function(b,c){a[b].reject({loadStatus:c,message:b+" was not preloaded"})})).then(function(b){for(var c in a)c in b||a[c].reject(new Error(c+" was not preloaded."))},function(b){for(var c in a)a[c].reject(new Error("Fatal XHR failure."+(b?" "+b.message:"")))})},this),z.LOAD_TICK_INTERVAL)),b.promise},z.prototype.loadDataUrls_=function(a,c,d){function e(a,c,d){var e="&r[]="+encodeURIComponent(c);return"undefined"!=typeof b&&b.internetExplorer<=8&&(g=a.length+e.length>2032),a+(d<B.maxdegradedimages&&!g?e:"")}var f=new XMLHttpRequest,g=!1,h=D;h+=a.reduce(e,z.DATAURL_LOCATION_FRAGMENT);var i={},k=j(),l=0;return f.open("get",h),B.petoken&&f.setRequestHeader("PE-Token",B.petoken),f.onreadystatechange=function(){try{if(f.status>299)return k.reject()}catch(a){}if(f.readyState>2&&"unknown"!=typeof f.responseText){for(var a=f.responseText;a&&l<a.length;)try{!function(){var b=new x(a,l);l+=b.stringLength,i[b.src]=b,b.isValid()?b.resolveSrc().then(function(a){c(b.src,a,b.width,b.height)}):d(b.src,b.json.loadStatus)}()}catch(a){break}4===f.readyState&&k.resolve(i)}},f.send(),k.promise},z.prototype.loadArrayBuffer_=function(a,b,c){var d=new XMLHttpRequest,e=D+a.reduce(function(a,b,c){return a+(c<B.maxdegradedimages?"&r[]="+encodeURIComponent(b):"")},z.BINARY_LOCATION_FRAGMENT),f={},g=j(),h=0;return d.open("get",e,!0),B.petoken&&d.setRequestHeader("PE-Token",B.petoken),d.responseType="arraybuffer",d.onreadystatechange=function(){try{if(d.status>299)return g.reject()}catch(a){}if(d.readyState>2){for(var a=d.response;a&&h<a.byteLength;)try{!function(){var d=new w(a,h);h+=d.byteLength,f[d.src]=d,d.isValid()?d.resolveSrc().then(function(a){b(d.src,a,d.width,d.height)}):c(d.src,d.json.loadStatus)}()}catch(a){break}4===d.readyState&&g.resolve(f)}},d.send(),g.promise},A.OPTIMIZATION_TIMEOUT=3e4,A.DISTANCE_FROM_VIEWPORT=100,A.RESTORE_NON_DEGRADED_IMAGE_TIMEOUT=50,A.prototype.sanitiseDOM=function(){var d=c.toArray(document.getElementsByTagName("img"));return a.map(d,function(a){var c=b.getData(a,"cfsrc");c&&a.nextSibling&&"NOSCRIPT"==a.nextSibling.tagName&&a.parentElement.removeChild(a.nextSibling)})},A.prototype.releaseNativeMethods=function(){a.forEach(this.nativeMethods,function(a,b){document[b]=a})},A.prototype.proxyElementList=function(b){var c=this.nativeMethods[b];return o(function(b){var d=c.call(document,b);return a.map(d,function(a){return this.proxyMirageImage(a)},this)},this)},A.prototype.proxyElement=function(a){var b=this.nativeMethods[a];return o(function(a){return this.proxyMirageImage(b.call(document,a))},this)},A.prototype.proxyMirageImage=function(b){if(b&&b.nodeName&&"IMG"===b.nodeName.toUpperCase()){var c=a.find(this.imageCache_,function(a){return a.image_.origImage_===b});return c?c.image_:b}return b},A.prototype.captureNativeMethods=function(){var b=(this.imageCache_,["getElementsByTagName","getElementById","getElementsByClassName","querySelectorAll","querySelector"]);a.forEach(b,function(a){this.nativeMethods[a]=document[a]},this),document.getElementsByClassName=this.proxyElementList("getElementsByClassName"),document.querySelectorAll=this.proxyElementList("querySelectorAll"),document.getElementById=this.proxyElement("getElementById"),document.querySelector=this.proxyElement("querySelector"),document.getElementsByTagName=o(function(b){var c=this.nativeMethods.getElementsByTagName;if("IMG"===b.toUpperCase()){var d=c.call(document,"img");return a.map(d,function(a){return this.proxyMirageImage(a)},this)}return c.apply(document,arguments)},this)},A.prototype.capture=function(){var b=c.toArray(document.getElementsByTagName("img"));return a.map(b,function(a){var b;return y.isValidCandidate(a)&&(b=new y(a,{forcePreloadOnly_:this.forcePreloadOnly_,proxy_:this.requireProxy_}),b.whenRestored(o(function(){this.manifest_.record(b.getSrc())},this)),this.imageCache_.push(b)),b},this)},A.prototype.logPreload=function(a){a in this.loadStatistics?this.loadStatistics[a]++:this.loadStatistics[a]=1},A.prototype.preload=function(){return this.reducePreloadableImages_().then(o(function(c){if(c.length){var d=a.map(c,function(a){var c=this.loader_.load(a.getSrc()).then(o(function(c){var d;return this.logPreload(v.state.LOAD_OK),d=this.supportsBinaryData_?this.postProcess_(c.degradedSrc,c.width,c.height):f.resolve(c.degradedSrc),d.then(function(c){return a.setDegradedSrc(c).then(function(){return b.onLoad.then(function(){return a.restoreWithinViewport()})})})},this),o(function(c){return i.error("Attempt to preload image failed.",c.message),this.logPreload(c.loadStatus),b.onLoad.then(function(){return a.restore()})},this));return a.isWithinViewport()?c:f.resolve()},this);return this.optimizationTimeout_=window.setTimeout(function(){a.forEach(c,function(a){a.restore()})},A.OPTIMIZATION_TIMEOUT),f.all(d).then(o(function(){this.optimizationTimeout_&&window.clearTimeout(this.optimizationTimeout_)},this))}},this))},A.prototype.backfill=function(){var b=[];return a.forEach(this.imageCache_,function(a){var c=a.restore();a.isWithinViewport()&&b.push(c)},this),f.all(b)},A.prototype.reset=function(){this.imageCache_=[],this.manifest_.clear()},A.prototype.setConfig=function(a){B.maxjsonsize=a.maxjsonsize||1e5,B.maxdegradedimages=a.maxdegradedimages||50,B.maxexternalimages=a.maxexternalimages||50,B.eagerLoad=B.eagerLoad||!1,B.petoken=a.petok},A.prototype.accessorTest=function(a){var b=a.src,c=Object.getOwnPropertyDescriptor(a,"src")||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),"src")||{value:b,writable:!0,configurable:!0,enumerable:!0};return c&&!c.configurable?!0:!1},A.prototype.activate=function(){return b.onReady.then(o(function(){this.sanitiseDOM(),this.requireProxy_=!1;var a=c.toArray(document.getElementsByTagName("img"));return a.length&&a.length>=1&&(this.requireProxy_=this.accessorTest(a[0])),this.capture(),this.requireProxy_&&this.captureNativeMethods(),this.connection_.assessLatency().then(o(function(a){return a||this.forcePreload_?this.preload():this.backfill()},this))},this))},A.prototype.postProcess_=function(a,b,c){return new f(function(d){var e=document.createElement("canvas"),f=document.createElement("img"),g=e.getContext("2d");e.width=b,e.height=c,f.addEventListener("load",o(function(){g.drawImage(f,0,0,b,c),d(e.toDataURL())},this)),f.addEventListener("error",o(function(a){i.error("Error loading image."),d("")},this)),f.src=a})},A.prototype.limitPreloadableImages_=function(b){var c=[],e=[],g=a.filter(b,function(a){return!!a});return a.forEach(g,function(a,b){var f=d.sameOrigin(a);b<B.maxdegradedimages?(f||c.push(b),e.push(a)):f&&c.length>B.maxexternalimages&&(e.splice(c.pop(),1),e.push(a))}),f.resolve(e)},A.prototype.reducePreloadableImages_=function(){var b=this.getUniqueSrcs_(),c=[];return a.forEach(b,function(a,b){c.push(f.resolve().then(o(function(){return this.manifest_.has(a).then(function(b){return b?void 0:a})},this),function(){}))},this),f.all(c).then(o(function(b){return this.limitPreloadableImages_(b).then(o(function(b){var c,d={};a.forEach(b,function(a){d[a]=!0},{});var e=[];return c=a.filter(this.imageCache_,function(a){var b=d[a.getSrc()];return b||this.push(a),b},e),e.length>0&&window.setTimeout(function(){a.forEach(e,function(a){a.restore()})},A.RESTORE_NON_DEGRADED_IMAGE_TIMEOUT),c},this))},this))},A.prototype.getUniqueSrcs_=function(){var b={},c=[],d=[],e=window.innerWidth,f=window.innerHeight;return a.forEach(this.imageCache_,function(a){var g=a.getTop(),h=a.getLeft(),i=a.getSrc();f>g&&e>h&&!b[i]?c.push(i):d.push(i),b[a.getSrc()]=!0}),c.concat(d)},f.resolve().then(function(){var a=new A;a.activate().then(function(){a.requireProxy_&&a.releaseNativeMethods()})})});