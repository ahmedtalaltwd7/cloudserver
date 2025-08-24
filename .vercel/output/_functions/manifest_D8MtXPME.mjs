import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_C6wcTLc2.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CgO3R4RJ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/","cacheDir":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/node_modules/.astro/","outDir":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/dist/","srcDir":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/src/","publicDir":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/public/","buildClientDir":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/dist/client/","buildServerDir":"file:///C:/Users/Ahmed%20Talal/Desktop/hhyy/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.js","pathname":"/api/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submissions/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submissions\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submissions","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/submissions/[id].js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submissions","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/submissions\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submissions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submissions/index.js","pathname":"/api/submissions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-form","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-form\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-form.js","pathname":"/api/submit-form","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/data.p7cKAnAA.css"}],"routeData":{"route":"/data","isIndex":false,"type":"page","pattern":"^\\/data\\/?$","segments":[[{"content":"data","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/data.astro","pathname":"/data","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/data.p7cKAnAA.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/data.p7cKAnAA.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/data.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/login.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/login@_@js":"pages/api/login.astro.mjs","\u0000@astro-page:src/pages/api/submissions/[id]@_@js":"pages/api/submissions/_id_.astro.mjs","\u0000@astro-page:src/pages/api/submissions/index@_@js":"pages/api/submissions.astro.mjs","\u0000@astro-page:src/pages/api/submit-form@_@js":"pages/api/submit-form.astro.mjs","\u0000@astro-page:src/pages/data@_@astro":"pages/data.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D8MtXPME.mjs","C:/Users/Ahmed Talal/Desktop/hhyy/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CHKM9N5X.mjs","C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/data.astro?astro&type=script&index=0&lang.ts":"_astro/data.astro_astro_type_script_index_0_lang.EoyKCIZh.js","C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/login.astro?astro&type=script&index=0&lang.ts":"_astro/login.astro_astro_type_script_index_0_lang.mwyNLOnF.js","C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.vQZvCPrd.js","C:/Users/Ahmed Talal/Desktop/hhyy/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DNsBg45w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/login.astro?astro&type=script&index=0&lang.ts","localStorage.getItem(\"auth-token\")&&(window.location.href=\"/\");document.getElementById(\"login-form\").addEventListener(\"submit\",async t=>{t.preventDefault();const s=new FormData(t.target),e=Object.fromEntries(s.entries());if(!e.username?.trim()||!e.password?.trim()){o(\"الرجاء إدخال اسم المستخدم وكلمة المرور\",\"error\");return}try{const r=await(await fetch(\"/api/login\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(e)})).json();r.success?(localStorage.setItem(\"auth-token\",r.token),localStorage.setItem(\"user-data\",JSON.stringify(r.user)),o(\"تم تسجيل الدخول بنجاح\",\"success\"),setTimeout(()=>{window.location.href=\"/\"},1e3)):o(r.error||\"فشل في تسجيل الدخول\",\"error\")}catch(n){console.error(\"Login error:\",n),o(\"حدث خطأ أثناء تسجيل الدخول\",\"error\")}});function o(t,s){const e=document.getElementById(\"message\");e.textContent=t,e.className=`mt-6 p-4 rounded-lg text-center font-medium ${s===\"success\"?\"bg-green-100 text-green-800 border border-green-200\":\"bg-red-100 text-red-800 border border-red-200\"}`,e.classList.remove(\"hidden\"),setTimeout(()=>{e.classList.add(\"hidden\")},5e3)}"],["C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"data-form\").addEventListener(\"submit\",async t=>{t.preventDefault();const n=new FormData(t.target),e=Object.fromEntries(n.entries());if([\"field1\",\"field2\",\"field3\",\"field4\",\"field5\",\"field6\",\"field7\",\"field8\"].filter(r=>!e[r]?.trim()).length>0){s(\"الرجاء إدخال جميع الحقول\",\"error\");return}try{const i=await(await fetch(\"/api/submit-form\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(e)})).json();i.success?(s(\"تم حفظ البيانات بنجاح\",\"success\"),t.target.reset()):s(i.error||\"فشل في حفظ البيانات\",\"error\")}catch(r){console.error(\"Submit error:\",r),s(\"حدث خطأ أثناء حفظ البيانات\",\"error\")}});function s(t,n){const e=document.getElementById(\"message\");e.textContent=t,e.className=`mt-6 p-4 rounded-lg text-center font-medium ${n===\"success\"?\"bg-green-100 text-green-800 border border-green-200\":\"bg-red-100 text-red-800 border border-red-200\"}`,e.classList.remove(\"hidden\"),setTimeout(()=>{e.classList.add(\"hidden\")},5e3)}"],["C:/Users/Ahmed Talal/Desktop/hhyy/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","function o(){const t=localStorage.getItem(\"auth-token\"),e=localStorage.getItem(\"user-data\");if(t&&e){const n=JSON.parse(e);document.getElementById(\"login-link\").classList.add(\"hidden\"),document.getElementById(\"user-info\").classList.remove(\"hidden\"),document.getElementById(\"username\").textContent=n.username}}document.getElementById(\"logout-btn\")?.addEventListener(\"click\",()=>{localStorage.removeItem(\"auth-token\"),localStorage.removeItem(\"user-data\"),window.location.href=\"/\"});o();"]],"assets":["/_astro/data.p7cKAnAA.css","/_astro/data.astro_astro_type_script_index_0_lang.EoyKCIZh.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"VLNiSgTfan0blrj5tBi+Kv0MCs6ksLb0FTLLjg1WV/M="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
