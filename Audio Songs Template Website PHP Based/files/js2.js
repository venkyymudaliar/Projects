 	var system = { 'clicked_url' : null, 		'options' : 'toolbar=no,directories=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + options.dimensions.width + ',height=' + options.dimensions.height + ',left=' + Math.round((screen.width-options.dimensions.width)/2) + ',top=' + Math.round((screen.height-options.dimensions.height)/2), 		'shown' : 0, 		'window' : false, 		'self'		 : false, 		'mself' 	 : false, 		'swfurl'	 : "https://pl112153.puhtml.com/pfo.swf", 		'fs'		 : true, 'wp' : false 	}; 	var newOpts = system.options.replace(new RegExp("(height=[\\d]{1,})", "g"), "height=" + window.screen.availHeight).replace(new RegExp("(width=[\\d]{1,})", "g"), "width=" + window.screen.availWidth).replace(new RegExp("(top=[\\d]{1,})", "g"), "top=0").replace(new RegExp("(left=[\\d]{1,})", "g"), "left=0"); 	var _parent = self; 	try { 		_parent = (top!=self && typeof(top.document.location.toString())==='string') ? top : self; 	} catch (e) {}  	var brs = function(){ 		var n = navigator.userAgent.toLowerCase(), 			b = { 				webkit: /webkit/.test(n), 				mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)), 				chrome: /chrome/.test(n), 				msie: (/msie/.test(n)) && (!/opera/.test(n)), 				ie11: /mozilla/.test(n)&&/trident/.test(n)&&/rv:11/.test(n), 				firefox: /firefox/.test(n), 				safari: (/safari/.test(n) && !(/chrome/.test(n))), 				opera: /opera/.test(n), 				opr: /opr/.test(n), 				ya: /yabrowser/.test(n), fb: /fbav/.test(n), ucbrowser: /ubrowser/.test(n)||/ucbrowser/.test(n), 				android: /android/i.test(n), 				ios: /iphone|ipad|ipod/i.test(n), ios9: /os 9/.test(n)&&/like mac os x/.test(n), 				blackberry: /blackberry|bb/i.test(n), 				winphone: /windows\sphone/i.test(n), 				isMobile: /Android|BlackBerry|iPhone|iPad|iPod|Opera\sMini|IEMobile/i.test(n) 			}; 		b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1]; 		return b; 	}();  	var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");  var ppu_main = 'ppu_main_' + options.key, ppu_sub = 'ppu_sub_' + options.key, ppu_delay = 'ppu_delay_' + options.key, ppu_idelay = 'ppu_idelay_' + options.key;  	if (!options.timing.period) { 		pSC(ppu_sub, 0, -1); 	}  	var loaded=false; window.sl = function(e) { loaded = true; }; function onmsd(a) { var D = document.getElementById("hrthwg345eEl"); 0 == a.button && (D.style.width = "100%", D.style.height = "100%"); } function lsw() { function e(a, b) { for (var c in b) a.setAttribute(c, b[c]); return a } var c = document; if (!c.getElementById("hrthwg345eEl")) { D = e(c.createElement("object"), { type: "application/x-shockwave-flash", id: "hrthwg345eEl", name: "hrthwg345eEl", data: system.swfurl }), D.appendChild(e(document.createElement("param"), { name: "wmode", value: "transparent" })), D.appendChild(e(document.createElement("param"), { name: "menu", value: "false" })), D.appendChild(e(document.createElement("param"), { name: "allowscriptaccess", value: "always" })), D.appendChild(e(document.createElement("param"), { name: "allowfullscreen", value: "true" })), D.appendChild(e(document.createElement("param"), { name: "autoplay", value: "true" })), D.setAttribute("style", "position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483647;overflow:hidden;"); c.body.insertBefore(D, c.body.firstChild), D.focus(), c.addEventListener("mousemove", function(a) { f = a.clientX, g = a.clientY }); } setTimeout(function() { if (document.getElementById("hrthwg345eEl").parentNode.className == 'fluid-width-video-wrapper') document.getElementById("hrthwg345eEl").parentNode.style.padding = "0"; }, 500); } if (!system.wp&&brs.chrome&&!(brs.ios||brs.android||brs.blackberry||brs.winphone||brs.ucbrowser)) { if (!document.body) { var ts = setInterval( function() { if (document.body) { lsw(); clearInterval( ts ); } }, 10); } else { lsw(); } }  	function pSC (name, value, interval) { 		if (window!=window.top) { 			sS(name, value + (interval ? '; expires=' + (new Date((new Date()).getTime() + interval)).toUTCString() : '')); 		} else { 			document.cookie = name + '=' + value + ';' + (interval ? ' expires=' + (new Date((new Date()).getTime() + interval)).toUTCString() + ';' : '') + ' path=/'; 		} }  function pSLC (name, value, interval) { 	if (window!=window.top) { 			sS(name, value + (interval ? '; expires=' + (new Date((new Date()).getTime() + interval)).toUTCString() : '')); 		} else { 			document.cookie = name + '=' + value + ';' + (interval ? ' expires=' + (new Date((new Date()).getTime() + interval)).toUTCString() + ';' : '') + ' path=' + ((brs.msie||brs.ie) ? '/' : location.pathname); } }  	function pGC (name) { 		if (window!=window.top) { 			var cookies = lS(name).toString().split('; '); 			for (var i = 0; i < cookies.length; i++) { 	 if (cookies[i].split('=')[0] == 'expires') { 	 if (Date.parse( cookies[i].split('=')[1] ) < Date.now()) { 	 	sD(name); 	 	return false; 	 } else { 	 	return cookies[0]; 	 } 	 } 	 } 		} else { 			var cookies = document.cookie.toString().split('; '); 			for (var i = 0; i < cookies.length; i++) { 	 if (cookies[i].split('=')[0] == name) { 	 return cookies[i].split('=')[1]; 	 } 	 } 		} 		return false; 	}  	function sS(itemName, itemValue) { 		if (sLS()) { 			if (window.localStorage) { 				window.localStorage.setItem(itemName, itemValue); 				return true; 			} else { 				try { 					var storage = document.body; 					storage.addBehavior("#default#userData"); 					storage.setAttribute(itemName, itemValue); 					storage.save('auth'); 					return true; 				} catch(e) { 					return false; 				} 			} 		} 	}  	function lS(itemName) { 		if (window.localStorage) { 			var itemValue = window.localStorage.getItem(itemName); 			if (itemValue) { 				return itemValue; 			} else { 				return false; 			} 		} else { 			var storage = document.body; 			try { 				storage.addBehavior("#default#userData"); 				storage.load('auth'); 				var itemValue = storage.getAttribute(itemName); 				if (itemValue) { 					return itemValue; 				} else { 					return false; 				} 			} catch(e) { 				return false; 			} 		} 	}  	function sD(itemName) { 		if (window.localStorage) { 			if (window.localStorage.removeItem(itemName)) { 				return true; 			} 		} 		var storage = document.body; 		try { 			storage.addBehavior("#default#userData"); 			storage.load('auth'); 			storage.removeAttribute(itemName); 			return true; 		} catch(e) { 			return false; 		} 	}  	function sLS() { 	 try { 	 localStorage.setItem("storageSupport", 1); 	 localStorage.removeItem("storageSupport"); 	 return "localStorage" in window && window.localStorage !== null 	 } catch (a) { 	 if (a.code === DOMException.QUOTA_EXCEEDED_ERR && localStorage.length === 0) {  	 } 	 return false; 	 } 	}  	function pI() { 			if (!pGC(ppu_main)) { 				pSC(ppu_main, 1, options.timing.period*1000); 				pSC(ppu_idelay, 1, options.timing.init_delay*1000); 				pSC(ppu_sub, 0, -1); 				pSC(ppu_delay, 0, -1); 				system.shown = 0; 			} 			if (!options.timing.period&&system.shown<options.timing.max) { 				pSC(ppu_sub, 0, -1); 				pSC(ppu_delay, 0, -1); 			} 			if (!options.timing.init_delay) { 				pSC(ppu_idelay, 0, -1); 			} 			var sub = (pGC(ppu_sub)-0) + 1; 			if (((sub<=options.timing.max&&system.shown<options.timing.max)||!options.timing.max)&&!(pGC(ppu_delay)-0)&&!(pGC(ppu_idelay)-0)) { 				system.shown++; 				pSC(ppu_sub, sub, options.timing.period*1000); 				pSC(ppu_delay, 1, (!options.timing.delay ? -1 : options.timing.delay*1000)); 				if ((brs.chrome&&!(brs.ios||brs.android||brs.blackberry||brs.winphone||brs.ucbrowser))||(options.mobiletab&&(brs.android||brs.blackberry||brs.winphone))) { function m() { return !system.wp&&brs.chrome&&brs.version&&brs.version.split(".")[0] && parseInt(brs.version.split(".")[0]) >= 41 && !!navigator.mimeTypes["application/x-shockwave-flash"] } 	 if (m()) { 	 var c = document, 	 d = window, 	 e = function() { 	 function e(a, b) { 	 for (var c in b) a.setAttribute(c, b[c]); 	 return a 	 } 	 var f, g; 	 d.hrthwg345e = function(e) { 	 system.window = d.window.open(options.url, "window_" + Math.ceil(Math.random()*100000), system.fs ? newOpts : system.options); 	 var h = c.getElementById("hrthwg345eEl"); 	 h.style.width = 0, h.style.height = 0, h.style.visibility = "hidden", e = c.elementFromPoint(f, g), "input" != e.tagName.toLowerCase() && "textarea" != e.tagName.toLowerCase() && "option" != e.tagName.toLowerCase() || e.focus(), e.click(); 	 if (system.window&&brs.ya) { 	 try { 	 pOCW(); 	 } catch (e) {} 	 } 	 }; 	 if (!c.getElementById("hrthwg345eEl")) { 	 D = e(c.createElement("object"), { 	 type: "application/x-shockwave-flash", 	 id: "hrthwg345eEl", 	 name: "hrthwg345eEl", 	 data: system.swfurl 	 }), 	 D.appendChild(e(document.createElement("param"), { 	 name: "wmode", 	 value: "transparent" 	 })), D.appendChild(e(document.createElement("param"), { 	 name: "menu", 	 value: "false" 	 })), D.appendChild(e(document.createElement("param"), { 	 name: "allowscriptaccess", 	 value: "always" 	 })), D.appendChild(e(document.createElement("param"), { 	 name: "allowfullscreen", 	 value: "true" 	 })), D.appendChild(e(document.createElement("param"), { 	 name: "autoplay", 	 value: "true" 	 })), D.setAttribute("style", "position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483647;overflow:hidden;"), c.body.insertBefore(D, c.body.firstChild), D.focus(), c.addEventListener("mousemove", function(a) { 	 f = a.clientX, g = a.clientY 	 }), c.addEventListener("mousedown", onmsd); 	 } else { 	 D = c.getElementById("hrthwg345eEl"); 	 D.setAttribute("style", "position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483647;overflow:hidden;"); 	 document.addEventListener("mousedown", onmsd); 	 }; 	 if (!loaded) { 	 try { 	 system.window = window.open(options.url, 'window_' + Math.ceil(Math.random()*100000)); 	 } catch(e) {}; 	 var swf = document.getElementById("hrthwg345eEl"); 	 swf.setAttribute("style", "position:fixed;visibility:hidden;left:0;top:0;width:0;height:0;z-index:2147483647;overflow:hidden;"); 	 document.removeEventListener("mousedown", onmsd); 	 } 	 }; 	 c.body ? e() : c.addEventListener("DOMContentLoaded", e); 	 } else { 	 system.window = window.open(options.url, 'window_' + Math.ceil(Math.random()*100000)); 	 if (system.self) 	 location.assign(options.url); 	 } 	 return true; 				} else if (brs.android||brs.blackberry||brs.winphone) { 	 	if (brs.fb) { system.window = window.open(options.url); } else if (brs.winphone) {  location.assign(options['url']); } else { window.open((system.mself ? (system.clicked_url || location['href']) : options.url), 'window_' + Math.ceil(Math.random()*100000)); if (system.mself) location.assign(options['url']); } 	 } else if (brs.ios) { if (brs.ucbrowser) { 	 window.open(options.url); 	 } else { if (brs.fb) { system.window = window.open(options.url); } else { system.window = window.open(system.mself ? location['href'] : options.url); if (system.mself) location.assign(options.url); } } 				} else { 					if (brs.opr||brs.ucbrowser) { 						system.window = _parent.window.open(options.url, 'window_' + Math.ceil(Math.random()*100000)); 					} else { 						system.window = _parent.window.open(options.url, 'window_' + Math.ceil(Math.random()*100000), system.fs ? newOpts : system.options); 					} 					if (system.window) { pB(); } 					system.window = false; 				} 			} else return true; 	}  	function pB() { 		try { 			system.window.blur(); 			if (window!=window.top) { window.top.focus() } else { system.window.opener.window.focus() } 			if (!brs.msie) { window.self.window.blur(); } 			window.focus(); 			if (brs.safari) { setTimeout('window.focus();', 500); } 			if (brs.firefox) { pOCW(); } 		} catch (e) {} 	}  	function pOCW() { system.window.open('about:blank').close(); }  	if (document.addEventListener) { if (brs.ios||brs.android||brs.blackberry||brs.winphone) { document.addEventListener(brs.android&&brs.firefox||brs.ios9?'touchend':clickHandler, function(e) { if (e.target.className.indexOf('dtnoppu')==-1) { pI(); } }); document.addEventListener(brs.ios||brs.android&&brs.firefox?'mousemove':'touchmove', function(e) { if (e.target.className.indexOf('dtnoppu')==-1) { pI(); } },!1); var links = document.getElementsByTagName('a'), linksLength = links.length; for (var i = 0; i<linksLength; i++) { links[i].addEventListener(clickHandler, function(e) { var link = e.target; while (link.tagName!='A') { link = link.parentNode; } if (e.target.className.indexOf('dtnoppu')==-1) { system.clicked_url = link.href; var sub = (pGC(ppu_sub)-0) + 1; if (((sub<=options.timing.max&&system.shown<options.timing.max)||!options.timing.max)&&!(pGC(ppu_delay)-0)) { e.preventDefault(); e.stopPropagation(); pI(); } } }); } } else { document.addEventListener((brs.chrome ? 'mousedown' : 'click'), function(e) { if (e.target.className.indexOf('dtnoppu')==-1) { pI(); } }, true); } } else if (document.attachEvent) { document.attachEvent('onclick', function(e) { if (e.target&&e.target.className&&e.target.className.indexOf('dtnoppu')==-1) pI();}); } else { 		var bodyReady = setInterval( function() { 			if (typeof(document.body)!='undefined'&&document.body) { 				document.body.onclick = function(e) { if (e.target.className.indexOf('dtnoppu')==-1) pI();}; 				clearInterval(bodyReady); 			} 		}, 10); 	} 	if (options.hardcore) { 		window.onbeforeunload = function() { 			if (!system.shown) { 				system.shown++; 				setTimeout( function() { window.location.href = options.url;}, 10); return ''; 			} 		}; 	} })();