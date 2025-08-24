import { e as createComponent, f as createAstro, n as renderHead, o as renderSlot, l as renderScript, r as renderTemplate } from './astro/server_C6wcTLc2.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ar" dir="rtl"> <head><meta charset="UTF-8"><meta name="description" content="تطبيق إدخال ومعاينة البيانات"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen"> <nav class="bg-white/10 backdrop-blur-md border-b border-white/20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center space-x-4 space-x-reverse"> <a href="/" class="text-white font-bold text-xl">نموذج البيانات</a> <a href="/data" class="text-white/80 hover:text-white transition-colors">عرض البيانات</a> </div> <div class="flex items-center"> <div id="auth-section" class="flex items-center space-x-2 space-x-reverse"> <a href="/login" id="login-link" class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
تسجيل الدخول
</a> <div id="user-info" class="hidden text-white"> <span id="username"></span> <button id="logout-btn" class="mr-2 bg-red-500/20 hover:bg-red-500/30 px-3 py-1 rounded transition-colors">
خروج
</button> </div> </div> </div> </div> </div> </nav> <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "C:/Users/Ahmed Talal/Desktop/hhyy/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Ahmed Talal/Desktop/hhyy/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
