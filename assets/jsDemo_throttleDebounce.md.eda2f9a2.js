import{_ as s,o as n,c as a,e as l}from"./app.0808817c.js";const C=JSON.parse('{"title":"\u9632\u6296\u4E0E\u8282\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9632\u6296","slug":"\u9632\u6296","link":"#\u9632\u6296","children":[{"level":3,"title":"\u4F7F\u7528\u793A\u4F8B","slug":"\u4F7F\u7528\u793A\u4F8B","link":"#\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0","link":"#\u4EE3\u7801\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u8282\u6D41","slug":"\u8282\u6D41","link":"#\u8282\u6D41","children":[{"level":3,"title":"\u4F7F\u7528\u793A\u4F8B","slug":"\u4F7F\u7528\u793A\u4F8B-1","link":"#\u4F7F\u7528\u793A\u4F8B-1","children":[]},{"level":3,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0-1","link":"#\u4EE3\u7801\u5B9E\u73B0-1","children":[]}]}],"relativePath":"jsDemo/throttleDebounce.md","lastUpdated":1665393285000}'),p={name:"jsDemo/throttleDebounce.md"},o=l(`<h1 id="\u9632\u6296\u4E0E\u8282\u6D41" tabindex="-1">\u9632\u6296\u4E0E\u8282\u6D41 <a class="header-anchor" href="#\u9632\u6296\u4E0E\u8282\u6D41" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u5173\u952E\u8BCD</p><p><code>throttle</code> <code>debounce</code></p></div><p>\u8FD9\u4E24\u8005\u7684\u6982\u5FF5\u5176\u5B9E\u8FD8\u662F\u6BD4\u8F83\u5BB9\u6613\u6DF7\u6DC6\u7684\uFF0C\u5176\u5B9E\u90FD\u662F\u51CF\u5C11\u89E6\u53D1\u7684\u6B21\u6570\uFF0C\u53EA\u4E0D\u8FC7\u573A\u666F\u4E0D\u4E00\u800C\u5DF2</p><p>\u9632\u6296\uFF1A<strong>\u89E6\u53D1\u540E\u7ACB\u5373\u6267\u884C\u903B\u8F91\uFF0C\u4E00\u5B9A\u65F6\u95F4\u5185\u4E0D\u518D\u89E6\u53D1\uFF0C\u8D85\u8FC7\u8BBE\u7F6E\u65F6\u95F4(\u59821s)\u518D\u8FDB\u884C\u4E0B\u6B21\u6267\u884C\u903B\u8F91\uFF1B\u5982\u70B9\u51FB\u53D1\u9001\u8BF7\u6C42\uFF0C\u70B9\u51FB\u540E\u7ACB\u5373\u53D1\u9001\uFF0C\u8BBE\u7F6E\u65F6\u95F4\u5185\u7684\u5176\u4ED6\u70B9\u51FB\u65E0\u6548</strong></p><p>\u8282\u6D41\uFF1A<strong>\u591A\u6B21\u89E6\u53D1\u4E8B\u4EF6\u51FD\u6570\uFF0C\u5728\u4E00\u5B9A\u65F6\u95F4\u540E\u518D\u6267\u884C\u51FD\u6570\u903B\u8F91\uFF1B\u5982\u8F93\u5165\u6846\u8FDE\u7EED\u8F93\u5165\uFF0C\u53EA\u53D6\u6700\u540E\u4E00\u6B21\u7684\u7ED3\u679C\u8FDB\u884C\u8D4B\u503C</strong></p><h2 id="\u9632\u6296" tabindex="-1">\u9632\u6296 <a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1">\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">throttle</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6267\u884C\u903B\u8F91</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/* \u51FD\u6570\u9632\u6296 \u9632\u6B62\u591A\u6B21\u89E6\u53D1 */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1500</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8FD4\u56DE\u65B0\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_nowTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">_nowTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u5C06this\u548C\u4F20\u9012\u7ED9\u539F\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">_lastTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_nowTime</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8282\u6D41" tabindex="-1">\u8282\u6D41 <a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u793A\u4F8B-1" tabindex="-1">\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B-1" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8FD9\u91CC\u6CE8\u610F\u4F20\u53C2\u95EE\u9898</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6267\u884C\u903B\u8F91</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4EE3\u7801\u5B9E\u73B0-1" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-1" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/* \u51FD\u6570\u8282\u6D41  \u591A\u7528\u4E8E\u8F93\u5165\u6846\u8F93\u5165\u65F6*/</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">interval</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">interval</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u95F4\u9694\u65F6\u95F4\uFF0C\u5982\u679Cinterval\u4E0D\u4F20\uFF0C\u5219\u9ED8\u8BA41000ms</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4FDD\u5B58\u6B64\u5904\u7684arguments\uFF0C\u56E0\u4E3AsetTimeout\u662F\u5168\u5C40\u7684\uFF0Carguments\u4E0D\u662F\u9632\u6296\u51FD\u6570\u9700\u8981\u7684\u3002</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gapTime</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
