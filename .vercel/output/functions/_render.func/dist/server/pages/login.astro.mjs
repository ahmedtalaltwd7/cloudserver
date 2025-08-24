/* empty css                                */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6wcTLc2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DCsuwLaE.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md mx-auto"> <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">تسجيل الدخول</h1> <form id="login-form" class="space-y-6"> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-2">اسم المستخدم</label> <input type="text" id="username" name="username" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-2">كلمة المرور</label> <input type="password" id="password" name="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors transform hover:scale-105">
دخول
</button> </form> <div id="message" class="hidden mt-6 p-4 rounded-lg text-center font-medium"></div> <div class="mt-8 p-4 bg-gray-50 rounded-lg"> <h3 class="font-semibold text-gray-700 mb-2">حسابات تجريبية:</h3> <div class="text-sm text-gray-600 space-y-1"> <div><strong>Admin:</strong> admin / admin123</div> <div><strong>TWD:</strong> twd / twd2024</div> <div><strong>User:</strong> user / user123</div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/login.astro", void 0);

const $$file = "C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
