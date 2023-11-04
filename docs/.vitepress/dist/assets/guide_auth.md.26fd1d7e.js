import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.edbfdbf1.js";const h=JSON.parse('{"title":"Authentification","description":"","frontmatter":{},"headers":[],"relativePath":"guide/auth.md","filePath":"guide/auth.md"}'),o={name:"guide/auth.md"},l=p(`<h1 id="authentification" tabindex="-1">Authentification <a class="header-anchor" href="#authentification" aria-label="Permalink to &quot;Authentification&quot;">​</a></h1><p>This page explains how authentication works with the CommunityPro eCommerce API.</p><h2 id="signup" tabindex="-1">Signup <a class="header-anchor" href="#signup" aria-label="Permalink to &quot;Signup&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">payload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	name: </span><span style="color:#9ECBFF;">&quot;John Doe&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	email: </span><span style="color:#9ECBFF;">&quot;john.doe@example.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	password: </span><span style="color:#9ECBFF;">&quot;rxGJhj12_Q2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	image: File,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/api/v1/auth/signup&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">	method: </span><span style="color:#9ECBFF;">&quot;POST&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(payload),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">payload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	name: </span><span style="color:#032F62;">&quot;John Doe&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	email: </span><span style="color:#032F62;">&quot;john.doe@example.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	password: </span><span style="color:#032F62;">&quot;rxGJhj12_Q2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	image: File,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/api/v1/auth/signup&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">	method: </span><span style="color:#032F62;">&quot;POST&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	headers: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	body: </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(payload),</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="signin" tabindex="-1">Signin <a class="header-anchor" href="#signin" aria-label="Permalink to &quot;Signin&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">payload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	email: </span><span style="color:#9ECBFF;">&quot;john.doe@example.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	password: </span><span style="color:#9ECBFF;">&quot;rxGJhj12_Q2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/api/v1/auth/signin&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">	method: </span><span style="color:#9ECBFF;">&quot;POST&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(payload),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">payload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	email: </span><span style="color:#032F62;">&quot;john.doe@example.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	password: </span><span style="color:#032F62;">&quot;rxGJhj12_Q2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/api/v1/auth/signin&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">	method: </span><span style="color:#032F62;">&quot;POST&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	headers: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	body: </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(payload),</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="api-key" tabindex="-1">API Key <a class="header-anchor" href="#api-key" aria-label="Permalink to &quot;API Key&quot;">​</a></h2>`,7),t=[l];function e(c,r,E,y,i,u){return a(),n("div",null,t)}const F=s(o,[["render",e]]);export{h as __pageData,F as default};