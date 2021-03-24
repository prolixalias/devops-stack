!function(){var e,n,a={};e=function(s){var a,d=[],r=Object.keys,M={},u={},w=!0,n=/^(no-?highlight|plain|text)$/i,b=/\blang(?:uage)?-([\w-]+)\b/i,i=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,R="</span>",S="Could not find the language '{}', did you forget to load/include a language module?",y={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},l="of and for in not or if then".split(" ");function A(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(e){return e.nodeName.toLowerCase()}function m(e){return n.test(e)}function t(e){var n,a={},i=Array.prototype.slice.call(arguments,1);for(n in e)a[n]=e[n];return i.forEach(function(e){for(n in e)a[n]=e[n]}),a}function f(e){var s=[];return function e(n,a){for(var i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(s.push({event:"start",offset:a,node:i}),a=e(i,a),E(i).match(/br|hr|img|input/)||s.push({event:"stop",offset:a,node:i}));return a}(e,0),s}function _(e,n,a){var i=0,s="",t=[];function r(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){s+="<"+E(e)+d.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+A(e.value).replace(/"/g,"&quot;")+'"'}).join("")+">"}function c(e){s+="</"+E(e)+">"}function o(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){var g=r();if(s+=A(a.substring(i,g[0].offset)),i=g[0].offset,g===e){for(t.reverse().forEach(c);o(g.splice(0,1)[0]),(g=r())===e&&g.length&&g[0].offset===i;);t.reverse().forEach(l)}else"start"===g[0].event?t.push(g[0].node):t.pop(),o(g.splice(0,1)[0])}return s+A(a.substr(i))}function c(n){return n.variants&&!n.cached_variants&&(n.cached_variants=n.variants.map(function(e){return t(n,{variants:null},e)})),n.cached_variants?n.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(n)?[t(n,{starts:n.starts?t(n.starts):null})]:Object.isFrozen(n)?[t(n)]:[n]}function o(e){if(a&&!e.langApiRestored){for(var n in e.langApiRestored=!0,a)e[n]&&(e[a[n]]=e[n]);(e.contains||[]).concat(e.variants||[]).forEach(o)}}function N(n,a){var t={};return"string"==typeof n?i("keyword",n):r(n).forEach(function(e){i(e,n[e])}),t;function i(s,e){a&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n,a,i=e.split("|");t[i[0]]=[s,(n=i[0],(a=i[1])?Number(a):function(e){return-1!=l.indexOf(e.toLowerCase())}(n)?0:1)]})}}function C(i){function g(e){return e&&e.source||e}function d(e,n){return new RegExp(g(e),"m"+(i.case_insensitive?"i":"")+(n?"g":""))}function s(s){var t={},r=[],l={},a=1;function e(e,n){t[a]=e,r.push([e,n]),a+=new RegExp(n.toString()+"|").exec("").length-1+1}for(var n=0;n<s.contains.length;n++){var i,c=(i=s.contains[n]).beginKeywords?"\\.?(?:"+i.begin+")\\.?":i.begin;e(i,c)}s.terminator_end&&e("end",s.terminator_end),s.illegal&&e("illegal",s.illegal);var o=d(function(e,n){for(var a=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,i=0,s="",t=0;t<e.length;t++){var r=i+=1,l=g(e[t]);for(0<t&&(s+=n),s+="(";0<l.length;){var c=a.exec(l);if(null==c){s+=l;break}s+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?s+="\\"+String(Number(c[1])+r):(s+=c[0],"("==c[0]&&i++)}s+=")"}return s}(r.map(function(e){return e[1]}),"|"),!0);return l.lastIndex=0,l.exec=function(e){var n;if(0===r.length)return null;o.lastIndex=l.lastIndex;var a=o.exec(e);if(!a)return null;for(var i=0;i<a.length;i++)if(null!=a[i]&&null!=t[""+i]){n=t[""+i];break}return"string"==typeof n?(a.type=n,a.extra=[s.illegal,s.terminator_end]):(a.type="begin",a.rule=n),a},l}if(i.contains&&-1!=i.contains.indexOf("self")){if(!w)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");i.contains=i.contains.filter(function(e){return"self"!=e})}!function n(a,e){a.compiled||(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords&&(a.keywords=N(a.keywords,i.case_insensitive)),a.lexemesRe=d(a.lexemes||/\w+/,!0),e&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=d(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=d(a.end)),a.terminator_end=g(a.end)||"",a.endsWithParent&&e.terminator_end&&(a.terminator_end+=(a.end?"|":"")+e.terminator_end)),a.illegal&&(a.illegalRe=d(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return c("self"===e?a:e)})),a.contains.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,e),a.terminators=s(a))}(i)}function T(n,e,s,a){var t=e;function l(e,n,a,i){if(!a&&""===n)return"";if(!e)return n;var s='<span class="'+(i?"":y.classPrefix);return(s+=e+'">')+n+(a?"":R)}function i(){var e,n,a,i,s,t,r;if(!E.keywords)return A(N);for(i="",n=0,E.lexemesRe.lastIndex=0,a=E.lexemesRe.exec(N);a;)i+=A(N.substring(n,a.index)),s=E,t=a,r=void 0,r=b.case_insensitive?t[0].toLowerCase():t[0],(e=s.keywords.hasOwnProperty(r)&&s.keywords[r])?(p+=e[1],i+=l(e[0],A(a[0]))):i+=A(a[0]),n=E.lexemesRe.lastIndex,a=E.lexemesRe.exec(N);return i+A(N.substr(n))}function r(){f+=(null!=E.subLanguage?function(){var e="string"==typeof E.subLanguage;if(e&&!M[E.subLanguage])return A(N);var n=e?T(E.subLanguage,N,!0,m[E.subLanguage]):x(N,E.subLanguage.length?E.subLanguage:void 0);return 0<E.relevance&&(p+=n.relevance),e&&(m[E.subLanguage]=n.top),l(n.language,n.value,!1,!0)}:i)(),N=""}function c(e){f+=e.className?l(e.className,"",!0):"",E=Object.create(e,{parent:{value:E}})}function o(e){var n=e[0],a=e.rule;return a&&a.endSameAsBegin&&(a.endRe=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),a.skip?N+=n:(a.excludeBegin&&(N+=n),r(),a.returnBegin||a.excludeBegin||(N=n)),c(a),a.returnBegin?0:n.length}function g(e){var n=e[0],a=t.substr(e.index),i=function e(n,a){if(i=n.endRe,s=a,(t=i&&i.exec(s))&&0===t.index){for(;n.endsParent&&n.parent;)n=n.parent;return n}var i,s,t;if(n.endsWithParent)return e(n.parent,a)}(E,a);if(i){var s=E;for(s.skip?N+=n:(s.returnEnd||s.excludeEnd||(N+=n),r(),s.excludeEnd&&(N=n));E.className&&(f+=R),E.skip||E.subLanguage||(p+=E.relevance),(E=E.parent)!==i.parent;);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),c(i.starts)),s.returnEnd?0:n.length}}var d={};function u(e,n){var a=n&&n[0];if(N+=e,null==a)return r(),0;if("begin"==d.type&&"end"==n.type&&d.index==n.index&&""===a)return N+=t.slice(n.index,n.index+1),1;if("begin"===(d=n).type)return o(n);if("illegal"===n.type&&!s)throw new Error('Illegal lexeme "'+a+'" for mode "'+(E.className||"<unnamed>")+'"');if("end"===n.type){var i=g(n);if(null!=i)return i}return N+=a,a.length}var b=D(n);if(!b)throw console.error(S.replace("{}",n)),new Error('Unknown language: "'+n+'"');C(b);for(var E=a||b,m={},f="",_=E;_!==b;_=_.parent)_.className&&(f=l(_.className,"",!0)+f);var N="",p=0;try{for(var v,h,O=0;E.terminators.lastIndex=O,v=E.terminators.exec(t);)h=u(t.substring(O,v.index),v),O=v.index+h;for(u(t.substr(O)),_=E;_.parent;_=_.parent)_.className&&(f+=R);return{relevance:p,value:f,illegal:!1,language:n,top:E}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:A(t)};if(w)return{relevance:0,value:A(t),language:n,top:E,errorRaised:e};throw e}}function x(a,e){e=e||y.languages||r(M);var i={relevance:0,value:A(a)},s=i;return e.filter(D).filter(O).forEach(function(e){var n=T(e,a,!1);n.language=e,n.relevance>s.relevance&&(s=n),n.relevance>i.relevance&&(s=i,i=n)}),s.language&&(i.second_best=s),i}function p(e){return y.tabReplace||y.useBR?e.replace(i,function(e,n){return y.useBR&&"\n"===e?"<br>":y.tabReplace?n.replace(/\t/g,y.tabReplace):""}):e}function g(e){var n,a,i,s,t,r,l,c,o,g,d=function(e){var n,a,i,s,t=e.className+" ";if(t+=e.parentNode?e.parentNode.className:"",a=b.exec(t)){var r=D(a[1]);return r||(console.warn(S.replace("{}",a[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?a[1]:"no-highlight"}for(n=0,i=(t=t.split(/\s+/)).length;n<i;n++)if(m(s=t[n])||D(s))return s}(e);m(d)||(y.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,t=n.textContent,i=d?T(d,t,!0):x(t),(a=f(n)).length&&((s=document.createElement("div")).innerHTML=i.value,i.value=_(a,f(s),t)),i.value=p(i.value),e.innerHTML=i.value,e.className=(r=e.className,l=d,c=i.language,o=l?u[l]:c,g=[r.trim()],r.match(/\bhljs\b/)||g.push("hljs"),-1===r.indexOf(o)&&g.push(o),g.join(" ").trim()),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function v(){var e;v.called||(v.called=!0,e=document.querySelectorAll("pre code"),d.forEach.call(e,g))}var h={disableAutodetect:!0};function D(e){return e=(e||"").toLowerCase(),M[e]||M[u[e]]}function O(e){var n=D(e);return n&&!n.disableAutodetect}return s.highlight=T,s.highlightAuto=x,s.fixMarkup=p,s.highlightBlock=g,s.configure=function(e){y=t(y,e)},s.initHighlighting=v,s.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",v,!1),window.addEventListener("load",v,!1)},s.registerLanguage=function(n,e){var a;try{a=e(s)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!w)throw e;console.error(e),a=h}o(M[n]=a),a.rawDefinition=e.bind(null,s),a.aliases&&a.aliases.forEach(function(e){u[e]=n})},s.listLanguages=function(){return r(M)},s.getLanguage=D,s.requireLanguage=function(e){var n=D(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},s.autoDetection=O,s.inherit=t,s.debugMode=function(){w=!1},s.IDENT_RE="[a-zA-Z]\\w*",s.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",s.NUMBER_RE="\\b\\d+(\\.\\d+)?",s.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",s.BINARY_NUMBER_RE="\\b(0b[01]+)",s.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",s.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},s.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[s.BACKSLASH_ESCAPE]},s.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[s.BACKSLASH_ESCAPE]},s.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},s.COMMENT=function(e,n,a){var i=s.inherit({className:"comment",begin:e,end:n,contains:[]},a||{});return i.contains.push(s.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},s.C_LINE_COMMENT_MODE=s.COMMENT("//","$"),s.C_BLOCK_COMMENT_MODE=s.COMMENT("/\\*","\\*/"),s.HASH_COMMENT_MODE=s.COMMENT("#","$"),s.NUMBER_MODE={className:"number",begin:s.NUMBER_RE,relevance:0},s.C_NUMBER_MODE={className:"number",begin:s.C_NUMBER_RE,relevance:0},s.BINARY_NUMBER_MODE={className:"number",begin:s.BINARY_NUMBER_RE,relevance:0},s.CSS_NUMBER_MODE={className:"number",begin:s.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},s.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[s.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[s.BACKSLASH_ESCAPE]}]},s.TITLE_MODE={className:"title",begin:s.IDENT_RE,relevance:0},s.UNDERSCORE_TITLE_MODE={className:"title",begin:s.UNDERSCORE_IDENT_RE,relevance:0},s.METHOD_GUARD={begin:"\\.\\s*"+s.UNDERSCORE_IDENT_RE,relevance:0},[s.BACKSLASH_ESCAPE,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,s.PHRASAL_WORDS_MODE,s.COMMENT,s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE,s.HASH_COMMENT_MODE,s.NUMBER_MODE,s.C_NUMBER_MODE,s.BINARY_NUMBER_MODE,s.CSS_NUMBER_MODE,s.REGEXP_MODE,s.TITLE_MODE,s.UNDERSCORE_TITLE_MODE,s.METHOD_GUARD].forEach(function(e){!function n(a){Object.freeze(a);var i="function"==typeof a;Object.getOwnPropertyNames(a).forEach(function(e){!a.hasOwnProperty(e)||null===a[e]||"object"!=typeof a[e]&&"function"!=typeof a[e]||i&&("caller"===e||"callee"===e||"arguments"===e)||Object.isFrozen(a[e])||n(a[e])});return a}(e)}),s},n="object"==typeof window&&window||"object"==typeof self&&self,void 0===a||a.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(a);function i(e){return{aliases:["adoc"],contains:[e.COMMENT("^/{4,}\\n","\\n/{4,}$",{relevance:10}),e.COMMENT("^//","$",{relevance:0}),{className:"title",begin:"^\\.\\w.*$"},{begin:"^[=\\*]{4,}\\n",end:"\\n^[=\\*]{4,}$",relevance:10},{className:"section",relevance:10,variants:[{begin:"^(={1,5}) .+?( \\1)?$"},{begin:"^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]},{className:"meta",begin:"^:.+?:",end:"\\s",excludeEnd:!0,relevance:10},{className:"meta",begin:"^\\[.+?\\]$",relevance:0},{className:"quote",begin:"^_{4,}\\n",end:"\\n_{4,}$",relevance:10},{className:"code",begin:"^[\\-\\.]{4,}\\n",end:"\\n[\\-\\.]{4,}$",relevance:10},{begin:"^\\+{4,}\\n",end:"\\n\\+{4,}$",contains:[{begin:"<",end:">",subLanguage:"xml",relevance:0}],relevance:10},{className:"bullet",begin:"^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"},{className:"symbol",begin:"^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",relevance:10},{className:"strong",begin:"\\B\\*(?![\\*\\s])",end:"(\\n{2}|\\*)",contains:[{begin:"\\\\*\\w",relevance:0}]},{className:"emphasis",begin:"\\B'(?!['\\s])",end:"(\\n{2}|')",contains:[{begin:"\\\\'\\w",relevance:0}],relevance:0},{className:"emphasis",begin:"_(?![_\\s])",end:"(\\n{2}|_)",relevance:0},{className:"string",variants:[{begin:"``.+?''"},{begin:"`.+?'"}]},{className:"code",begin:"(`.+?`|\\+.+?\\+)",relevance:0},{className:"code",begin:"^[ \\t]",end:"$",relevance:0},{begin:"^'{3,}[ \\t]*$",relevance:10},{begin:"(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",returnBegin:!0,contains:[{begin:"(link|image:?):",relevance:0},{className:"link",begin:"\\w",end:"[^\\[]+",relevance:0},{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0,relevance:0}],relevance:10}]}}function s(e){var n={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,a,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}function t(e){return{aliases:["patch"],contains:[{className:"meta",relevance:10,variants:[{begin:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{begin:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{className:"comment",variants:[{begin:/Index: /,end:/$/},{begin:/={3,}/,end:/$/},{begin:/^\-{3}/,end:/$/},{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{begin:/^\*{15}$/}]},{className:"addition",begin:"^\\+",end:"$"},{className:"deletion",begin:"^\\-",end:"$"},{className:"addition",begin:"^\\!",end:"$"}]}}function r(e){return{aliases:["docker"],case_insensitive:!0,keywords:"from maintainer expose env arg user onbuild stopsignal",contains:[e.HASH_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"}}function l(e){var n={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],keywords:n,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}function c(e){var n="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",a={className:"number",begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",relevance:0};return{aliases:["jsp"],keywords:n,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface",end:/[{;=]/,excludeEnd:!0,keywords:"class interface",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"function",begin:"([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},a,{className:"meta",begin:"@[A-Za-z]+"}]}}function o(e){var n="<>",a="</>",i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},s="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},l={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},c={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"xml"}},o={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"css"}},g={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,l]};l.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,c,o,g,r,e.REGEXP_MODE];var d=l.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,c,o,g,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:s+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:s,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+s+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:d}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:n,end:a},{begin:i.begin,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:s}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:d}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}function g(e){var n={literal:"true false null"},a=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],i=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],s={end:",",endsWithParent:!0,excludeEnd:!0,contains:i,keywords:n},t={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(s,{begin:/:/})].concat(a),illegal:"\\S"},r={begin:"\\[",end:"\\]",contains:[e.inherit(s)],illegal:"\\S"};return i.push(t,r),a.forEach(function(e){i.push(e)}),{contains:i,keywords:n,illegal:"\\S"}}function d(e){var n={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},i={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[n]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},t={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{aliases:["mk","mak"],keywords:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",lexemes:/[\w-]+/,contains:[e.HASH_COMMENT_MODE,n,a,i,s,{className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{"meta-keyword":".PHONY"},lexemes:/[\.\w]+/},t]}}function u(e){return{aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$"},{begin:"^.+?\\n[=-]{2,}$"}]},{begin:"<",end:">",subLanguage:"xml",relevance:0},{className:"bullet",begin:"^\\s*([*+-]|(\\d+\\.))\\s+"},{className:"strong",begin:"[*_]{2}.+?[*_]{2}"},{className:"emphasis",variants:[{begin:"\\*.+?\\*"},{begin:"_.+?_",relevance:0}]},{className:"quote",begin:"^>\\s+",end:"$"},{className:"code",variants:[{begin:"^```\\w*\\s*$",end:"^```[ ]*$"},{begin:"`.+?`"},{begin:"^( {4}|\\t)",end:"$",relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},{begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}function b(e){var n={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"},a={className:"meta",begin:/^(>>>|\.\.\.) /},i={className:"subst",begin:/\{/,end:/\}/,keywords:n,illegal:/#/},s={begin:/\{\{/,relevance:0},t={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/(fr|rf|f)'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a,s,i]},{begin:/(fr|rf|f)"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,s,i]},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},{begin:/(fr|rf|f)'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,s,i]},{begin:/(fr|rf|f)"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,i]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},r={className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},l={className:"params",begin:/\(/,end:/\)/,contains:["self",a,r,t,e.HASH_COMMENT_MODE]};return i.contains=[t,r,a],{aliases:["py","gyp","ipython"],keywords:n,illegal:/(<\/|->|\?)|=>/,contains:[a,r,{beginKeywords:"if",relevance:0},t,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,l,{begin:/->/,endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{begin:/\b(print|exec)\(/}]}}function E(e){var n="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",a={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},i={className:"doctag",begin:"@[A-Za-z]+"},s={begin:"#<",end:">"},t=[e.COMMENT("#","$",{contains:[i]}),e.COMMENT("^\\=begin","^\\=end",{contains:[i],relevance:10}),e.COMMENT("^__END__","\\n$")],r={className:"subst",begin:"#\\{",end:"}",keywords:a},l={className:"string",contains:[e.BACKSLASH_ESCAPE,r],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:"%[qQwWx]?\\(",end:"\\)"},{begin:"%[qQwWx]?\\[",end:"\\]"},{begin:"%[qQwWx]?{",end:"}"},{begin:"%[qQwWx]?<",end:">"},{begin:"%[qQwWx]?/",end:"/"},{begin:"%[qQwWx]?%",end:"%"},{begin:"%[qQwWx]?-",end:"-"},{begin:"%[qQwWx]?\\|",end:"\\|"},{begin:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{begin:/<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,returnBegin:!0,contains:[{begin:/<<[-~]?'?/},{begin:/\w+/,endSameAsBegin:!0,contains:[e.BACKSLASH_ESCAPE,r]}]}]},c={className:"params",begin:"\\(",end:"\\)",endsParent:!0,keywords:a},o=[l,s,{className:"class",beginKeywords:"class module",end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{begin:"<\\s*",contains:[{begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE}]}].concat(t)},{className:"function",beginKeywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:n}),c].concat(t)},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[l,{begin:n}],relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{className:"params",begin:/\|/,end:/\|/,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[s,{className:"regexp",contains:[e.BACKSLASH_ESCAPE,r],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r{",end:"}[a-z]*"},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(t),relevance:0}].concat(t);r.contains=o;var g=[{begin:/^\s*=>/,starts:{end:"$",contains:c.contains=o}},{className:"meta",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",starts:{end:"$",contains:o}}];return{aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,contains:t.concat(g).concat(o)}}function m(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}function f(e){var n={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},i=e.inherit(a,{begin:"\\(",end:"\\)"}),s=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),t=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),r={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[a,t,s,i,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[a,i,t,s]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[r],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[r],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},r]}]}}function _(e){var n="true false yes no null",a={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+e.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+e.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"\\-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{className:"number",begin:e.C_NUMBER_RE+"\\b"},a]}}!function(){"use strict";a.registerLanguage("asciidoc",i),a.registerLanguage("bash",s),a.registerLanguage("diff",t),a.registerLanguage("dockerfile",r),a.registerLanguage("go",l),a.registerLanguage("java",c),a.registerLanguage("javascript",o),a.registerLanguage("json",g),a.registerLanguage("makefile",d),a.registerLanguage("markdown",u),a.registerLanguage("python",b),a.registerLanguage("ruby",E),a.registerLanguage("shell",m),a.registerLanguage("xml",f),a.registerLanguage("yaml",_),a.registerLanguage("terraform",window.hljsDefineTerraform),[].slice.call(document.querySelectorAll("pre code.hljs")).forEach(function(e){a.highlightBlock(e)})}()}();