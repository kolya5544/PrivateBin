!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e}function t(e){var t={},n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){var x=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A(),S=function(e){return o(e)};if(S.version="1.1.1",S.removed=[],!x||!x.document||9!==x.document.nodeType)return S.isSupported=!1,S;var k=x.document,w=!1,E=!1,O=x.document,L=x.DocumentFragment,M=x.HTMLTemplateElement,N=x.Node,_=x.NodeFilter,D=x.NamedNodeMap,R=void 0===D?x.NamedNodeMap||x.MozNamedAttrMap:D,C=x.Text,F=x.Comment,z=x.DOMParser,H=x.XMLHttpRequest,I=void 0===H?x.XMLHttpRequest:H,j=x.encodeURI,U=void 0===j?x.encodeURI:j;if("function"==typeof M){var W=O.createElement("template");W.content&&W.content.ownerDocument&&(O=W.content.ownerDocument)}var q=O,G=q.implementation,P=q.createNodeIterator,B=q.getElementsByTagName,X=q.createDocumentFragment,V=k.importNode,Y={};S.isSupported=G&&void 0!==G.createHTMLDocument&&9!==O.documentMode;var K=p,$=f,J=h,Q=g,Z=v,ee=b,te=y,ne=null,oe=e({},[].concat(n(r),n(i),n(a),n(l),n(s))),re=null,ie=e({},[].concat(n(c),n(d),n(u),n(m))),ae=null,le=null,se=!0,ce=!0,de=!1,ue=!1,me=!1,pe=!1,fe=!1,he=!1,ge=!1,ye=!1,ve=!1,be=!0,Te=!0,Ae={},xe=e({},["audio","head","math","script","style","template","svg","video"]),Se=e({},["audio","video","img","source","image"]),ke=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),we=null,Ee=O.createElement("form"),Oe=function(o){"object"!==(void 0===o?"undefined":T(o))&&(o={}),ne="ALLOWED_TAGS"in o?e({},o.ALLOWED_TAGS):oe,re="ALLOWED_ATTR"in o?e({},o.ALLOWED_ATTR):ie,ae="FORBID_TAGS"in o?e({},o.FORBID_TAGS):{},le="FORBID_ATTR"in o?e({},o.FORBID_ATTR):{},Ae="USE_PROFILES"in o&&o.USE_PROFILES,se=!1!==o.ALLOW_ARIA_ATTR,ce=!1!==o.ALLOW_DATA_ATTR,de=o.ALLOW_UNKNOWN_PROTOCOLS||!1,ue=o.SAFE_FOR_JQUERY||!1,me=o.SAFE_FOR_TEMPLATES||!1,pe=o.WHOLE_DOCUMENT||!1,ge=o.RETURN_DOM||!1,ye=o.RETURN_DOM_FRAGMENT||!1,ve=o.RETURN_DOM_IMPORT||!1,he=o.FORCE_BODY||!1,be=!1!==o.SANITIZE_DOM,Te=!1!==o.KEEP_CONTENT,te=o.ALLOWED_URI_REGEXP||te,me&&(ce=!1),ye&&(ge=!0),Ae&&(ne=e({},[].concat(n(s))),re=[],!0===Ae.html&&(e(ne,r),e(re,c)),!0===Ae.svg&&(e(ne,i),e(re,d),e(re,m)),!0===Ae.svgFilters&&(e(ne,a),e(re,d),e(re,m)),!0===Ae.mathMl&&(e(ne,l),e(re,u),e(re,m))),o.ADD_TAGS&&(ne===oe&&(ne=t(ne)),e(ne,o.ADD_TAGS)),o.ADD_ATTR&&(re===ie&&(re=t(re)),e(re,o.ADD_ATTR)),o.ADD_URI_SAFE_ATTR&&e(ke,o.ADD_URI_SAFE_ATTR),Te&&(ne["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(o),we=o},Le=function(e){S.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Me=function(e,t){S.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},Ne=function(e){var t=void 0,n=void 0;if(he&&(e="<remove></remove>"+e),E){try{e=U(e)}catch(e){}var o=new I;o.responseType="document",o.open("GET","data:text/html;charset=utf-8,"+e,!1),o.send(null),t=o.response}if(w)try{t=(new z).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((n=(t=G.createHTMLDocument("")).body).parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),B.call(t,pe?"html":"body")[0]};S.isSupported&&function(){var e=Ne('<svg><g onload="this.parentNode.remove()"></g></svg>');e.querySelector("svg")||(E=!0);try{(e=Ne('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">')).querySelector("svg img")&&(w=!0)}catch(e){}}();var _e=function(e){return P.call(e.ownerDocument||e,e,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT,function(){return _.FILTER_ACCEPT},!1)},De=function(e){return!(e instanceof C||e instanceof F)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof R&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Re=function(e){return"object"===(void 0===N?"undefined":T(N))?e instanceof N:e&&"object"===(void 0===e?"undefined":T(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ce=function(e,t,n){Y[e]&&Y[e].forEach(function(e){e.call(S,t,n,we)})},Fe=function(e){var t=void 0;if(Ce("beforeSanitizeElements",e,null),De(e))return Le(e),!0;var n=e.nodeName.toLowerCase();if(Ce("uponSanitizeElement",e,{tagName:n,allowedTags:ne}),!ne[n]||ae[n]){if(Te&&!xe[n]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return Le(e),!0}return!ue||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(S.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),me&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(K," ")).replace($," "),e.textContent!==t&&(S.removed.push({element:e.cloneNode()}),e.textContent=t)),Ce("afterSanitizeElements",e,null),!1},ze=function(e){var t=void 0,n=void 0,o=void 0,r=void 0,i=void 0,a=void 0,l=void 0;if(Ce("beforeSanitizeAttributes",e,null),a=e.attributes){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:re};for(l=a.length;l--;){if(t=a[l],n=t.name,o=t.value.trim(),r=n.toLowerCase(),s.attrName=r,s.attrValue=o,s.keepAttr=!0,Ce("uponSanitizeAttribute",e,s),o=s.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)i=a.id,a=Array.prototype.slice.apply(a),Me("id",e),Me(n,e),a.indexOf(i)>l&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===o&&(re[r]||!le[r]))continue;"id"===n&&e.setAttribute(n,""),Me(n,e)}if(s.keepAttr&&(!be||"id"!==r&&"name"!==r||!(o in O||o in Ee))){if(me&&(o=(o=o.replace(K," ")).replace($," ")),ce&&J.test(r));else if(se&&Q.test(r));else{if(!re[r]||le[r])continue;if(ke[r]);else if(te.test(o.replace(ee,"")));else if("src"!==r&&"xlink:href"!==r||0!==o.indexOf("data:")||!Se[e.nodeName.toLowerCase()]){if(de&&!Z.test(o.replace(ee,"")));else if(o)continue}else;}try{e.setAttribute(n,o),S.removed.pop()}catch(e){}}}Ce("afterSanitizeAttributes",e,null)}},He=function e(t){var n=void 0,o=_e(t);for(Ce("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)Ce("uponSanitizeShadowNode",n,null),Fe(n)||(n.content instanceof L&&e(n.content),ze(n));Ce("afterSanitizeShadowDOM",t,null)};return S.sanitize=function(e,t){var n=void 0,o=void 0,r=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!S.isSupported){if("object"===T(x.toStaticHTML)||"function"==typeof x.toStaticHTML){if("string"==typeof e)return x.toStaticHTML(e);if(Re(e))return x.toStaticHTML(e.outerHTML)}return e}if(fe||Oe(t),S.removed=[],e instanceof N)1===(o=(n=Ne("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName?n=o:n.appendChild(o);else{if(!ge&&!pe&&-1===e.indexOf("<"))return e;if(!(n=Ne(e)))return ge?null:""}he&&Le(n.firstChild);for(var l=_e(n);r=l.nextNode();)3===r.nodeType&&r===i||Fe(r)||(r.content instanceof L&&He(r.content),ze(r),i=r);if(ge){if(ye)for(a=X.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return ve&&(a=V.call(k,a,!0)),a}return pe?n.outerHTML:n.innerHTML},S.setConfig=function(e){Oe(e),fe=!0},S.clearConfig=function(){we=null,fe=!1},S.addHook=function(e,t){"function"==typeof t&&(Y[e]=Y[e]||[],Y[e].push(t))},S.removeHook=function(e){Y[e]&&Y[e].pop()},S.removeHooks=function(e){Y[e]&&(Y[e]=[])},S.removeAllHooks=function(){Y={}},S}var r=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],i=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],a=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"],l=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],s=["#text"],c=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],d=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],u=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],m=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"],p=/\{\{[\s\S]*|[\s\S]*\}\}/gm,f=/<%[\s\S]*|[\s\S]*%>/gm,h=/^data-[\-\w.\u00B7-\uFFFF]/,g=/^aria-[\-\w]+$/,y=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,v=/^(?:\w+script|data):/i,b=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(){return"undefined"==typeof window?null:window};return o()});
