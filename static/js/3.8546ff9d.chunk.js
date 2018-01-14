webpackJsonp([3],{72:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),s.d(a,"meta",function(){return p});var t=s(0);s.n(t);a.default=function(n){var a=n.factories,s=void 0===a?{}:a,p=s.wrapper,e=void 0===p?Object(t.createFactory)("div"):p,o=s.a,c=void 0===o?Object(t.createFactory)("a"):o,i=s.code,u=void 0===i?Object(t.createFactory)("code"):i,l=s.codeBlock,k=void 0===l?function(n,a){return Object(t.createElement)("pre",n,Object(t.createElement)("code",{dangerouslySetInnerHTML:{__html:a||n.children}}))}:l,r=s.em,d=void 0===r?Object(t.createFactory)("em"):r,m=s.h1,h=void 0===m?Object(t.createFactory)("h1"):m,g=s.h2,y=void 0===g?Object(t.createFactory)("h2"):g,f=s.li,w=void 0===f?Object(t.createFactory)("li"):f,j=s.ol,v=void 0===j?Object(t.createFactory)("ol"):j,b=s.p,T=void 0===b?Object(t.createFactory)("p"):b,A=s.strong,O=void 0===A?Object(t.createFactory)("strong"):A;return e({},h({id:"Static-builds-with-create-react-app"},"Static builds with create-react-app"),T({},"This article will guide you through adding static builds to a fresh create-react-app project."),T({},"Before getting started, make sure you\u2019ve installed the dependencies:"),k({className:"language-bash"},'<span class="token function">npm</span> <span class="token function">install</span> --save junctions react-junctions junctions-static\n'),y({id:"1.-Export-a-Junction-from-App.js"},"1. Export a Junction from ",u({},"App.js")),T({},"To build a static website with ",u({},"junctions-static"),", you\u2019ll first need to define your app\u2019s route templates with ",c({href:"/api-reference/#createJunctionTemplate"},u({},"createJunctionTemplate"))," and ",c({href:"/api-reference/#createPageTemplate"},u({},"createPageTemplate")),"."),T({},"There are a number of approaches you can use to structure your route templates, but I recommend starting out by exporting a root ",u({},"AppJunctionTemplate")," from ",u({},"App.js"),". Here\u2019s an example; for more information on defining templates see the documentation on ",u({},"createJunctionTemplate")," and ",u({},"createPageTemplate"),"."),k({className:"language-jsx"},'<span class="token keyword">import</span> <span class="token punctuation">{</span> createJunctionTemplate<span class="token punctuation">,</span> createPageTemplate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'junctions\'</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">\'./logo.svg\'</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">renderChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The `junction` prop receives information on which of the App junction\'s</span>\n    <span class="token comment">// children corresponds to the current URL.</span>\n    <span class="token keyword">let</span> junction <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>junction\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>junction<span class="token punctuation">.</span>activeChild<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>junction<span class="token punctuation">.</span>activeChild<span class="token punctuation">.</span>component<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">[</span>junction<span class="token punctuation">.</span>activeChild<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">:</span> junction<span class="token punctuation">.</span>activeChild<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token number">404</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App-logo<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Welcome to React<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> AppJunctionTemplate <span class="token operator">=</span> <span class="token function">createJunctionTemplate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  children<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'/\'</span><span class="token punctuation">:</span> <span class="token function">createPageTemplate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'Welcome to React\'</span><span class="token punctuation">,</span>\n      component<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App-intro<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          To <span class="token keyword">get</span> started<span class="token punctuation">,</span> edit <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>src<span class="token operator">/</span>App<span class="token punctuation">.</span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span> and save to reload<span class="token punctuation">.</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  component<span class="token punctuation">:</span> App<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n'),y({id:"2.-Update-index.js"},"2. Update ",u({},"index.js")),T({},"In a stock create-react-app project, ",u({},"index.js")," just imports the App component","and renders it. However, you\u2019ll need to make a few changes to get static builds","working:"),v({},w({},T({},"",O({},"Replace the ",u({},"<App>")," element with a ",c({href:"/api-reference/#JunctionNavigation"},u({},"<JunctionNavigation>"))," element."),""),T({},"The ",u({},"<JunctionNavigation>")," component takes the junction template from",u({},"App.js"),", and uses it to create the ",u({},"junction")," prop that contains your","app\u2019s current navigation state."),T({},"This component also keeps the page title up to date, handles scrolling,","loads split bundles when required, and follows any redirects it encounters."),T({},"For details on how to implement this, see the example below.")),w({},T({},"",O({},"Use ",u({},"ReactDOM.hydrate")," in production."),""),T({},"This method is just like ",u({},"ReactDOM.render"),", but it lets React know that the","content has been statically rendered, and is already available in the DOM.")),w({},T({},"",O({},"Add a ",u({},"main()")," function."),""),T({},"Junctions keeps track of the dependencies of each of your site\u2019s pages, and","only starts the app once those dependencies have been loaded."),T({},"Because of this, you\u2019ll need to move your app\u2019s bootstrap code into a ",u({},"main()"),"function, and only call it directly when in create-react-app\u2019s development","environment.")),w({},T({},"",O({},"Export our root junction, and a ",u({},"main()")," function."),""),T({},"The junctions build tool needs access to your app\u2019s junction template and","its ",u({},"main")," function."))),T({},"Here\u2019s what this looks like in practice:"),k({className:"language-js"},'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppJunctionTemplate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./App\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> JunctionNavigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-junctions\'</span>\n<span class="token keyword">import</span> <span class="token string">\'./index.css\'</span>\n\n<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The `&lt;JunctionNavigation>` component re-renders the app each time</span>\n    <span class="token comment">// the browser\'s location changes.</span>\n    <span class="token comment">//</span>\n    <span class="token comment">// It renders the `component` property of the template defined in App.js,</span>\n    <span class="token comment">// passing in a `junction` prop with the app\'s navigation state.</span>\n    <span class="token keyword">let</span> content <span class="token operator">=</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JunctionNavigation</span>\n            <span class="token attr-name">root</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>AppJunctionTemplate<span class="token punctuation">}</span></span>\n            <span class="token attr-name">waitForInitialContent</span>\n        <span class="token punctuation">/></span></span>\n\n    <span class="token comment">// React requires us to call "hydrate" if the content already exists in</span>\n    <span class="token comment">// the DOM, which is the case for statically rendered pages.</span>\n    <span class="token keyword">let</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ReactDOM<span class="token punctuation">.</span><span class="token function">hydrate</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> node<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> node<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">// When building the static version of the app, we don\'t want to run the</span>\n<span class="token comment">// `main` function, as there is no DOM to render to.</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">!==</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">// Make the `root` template and `main` function available to junctions-static,</span>\n<span class="token comment">// so it knows what to render and how to start the app.</span>\nwindow<span class="token punctuation">.</span>JunctionsStaticApp <span class="token operator">=</span> <span class="token punctuation">{</span>\n    root<span class="token punctuation">:</span> AppJunctionTemplate<span class="token punctuation">,</span>\n    main<span class="token punctuation">:</span> main\n<span class="token punctuation">}</span>\n'),y({id:"3.-Update-the-build-script-in-your-package.json"},"3. Update the ",u({},"build")," script in your ",u({},"package.json")),T({},"To build your app\u2019s HTML files, you\u2019ll need to call the ",u({},"junctions-static"),"tool once ",u({},"react-scripts build")," has completed:"),k({className:"language-js"},'<span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"react-scripts build &amp;&amp; junctions-static build -m build/static/js/main.*.js -r create-react-app"</span><span class="token punctuation">,</span>\n'),T({},"This tool takes the output of create-react-app\u2019s standard","build process, and builds a HTML file for each of the pages under the junction","template at ",u({},"window.JunctionsStaticApp.root"),"."),T({},d({},"Did you see the ",u({},"-r create-react-app")," argument? This tells junctions-static to use a build-in HTML renderer that works with create-react-app. But what if you need more flexibility, you can pass a custom script that renders each URL to a HTML file.")),y({id:"4.-Add-the-PAGE_TITLE-variable-to-index.html"},"4. Add the ",u({},"%PAGE_TITLE%")," variable to ",u({},"index.html")),T({},"To make sure your static pages contain the correct title, replace the ",u({},"<title>"),"tag in ",u({},"index.html")," with this one:"),k({className:"language-html"},'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>%PAGE_TITLE%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n'),y({id:"5.-That's-it!"},"5. That\u2019s it!"),T({},"To build your site, just type ",u({},"npm run build"),", as before!"))};var p={}}});
//# sourceMappingURL=3.8546ff9d.chunk.js.map