if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const o=e=>i(e,d),f={module:{uri:d},exports:r,require:o};s[d]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-fded2e6d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.a580e829.js",revision:"087d7350dd7645d8d05b983140711091"},{url:"assets/index.c7a648b5.css",revision:"9712522fe980e09bf1d10f2564e50812"},{url:"assets/vendor.3695de6f.js",revision:"aaca954ff164618216c12a1fa3810e8f"},{url:"index.html",revision:"6afe3f673de6970ae887435de08a617a"},{url:"manifest.webmanifest",revision:"d3dd1da0aa7614180924343e65244285"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
