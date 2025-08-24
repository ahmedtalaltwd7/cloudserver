import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B--IKw37.mjs';
import { manifest } from './manifest_D8MtXPME.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.astro.mjs');
const _page2 = () => import('./pages/api/submissions/_id_.astro.mjs');
const _page3 = () => import('./pages/api/submissions.astro.mjs');
const _page4 = () => import('./pages/api/submit-form.astro.mjs');
const _page5 = () => import('./pages/data.astro.mjs');
const _page6 = () => import('./pages/login.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.js", _page1],
    ["src/pages/api/submissions/[id].js", _page2],
    ["src/pages/api/submissions/index.js", _page3],
    ["src/pages/api/submit-form.js", _page4],
    ["src/pages/data.astro", _page5],
    ["src/pages/login.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f70fe388-9902-4727-9cb2-bf9f0e2ba0e3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
