/* empty css                                */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6wcTLc2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DCsuwLaE.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0646\u0645\u0648\u0630\u062C \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"> <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">نموذج إدخال البيانات</h1> <form id="data-form" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="field1" class="block text-sm font-medium text-gray-700 mb-2">الحقل الأول</label> <input type="text" id="field1" name="field1" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field2" class="block text-sm font-medium text-gray-700 mb-2">الحقل الثاني</label> <input type="text" id="field2" name="field2" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field3" class="block text-sm font-medium text-gray-700 mb-2">الحقل الثالث</label> <input type="text" id="field3" name="field3" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field4" class="block text-sm font-medium text-gray-700 mb-2">الحقل الرابع</label> <input type="text" id="field4" name="field4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field5" class="block text-sm font-medium text-gray-700 mb-2">الحقل الخامس</label> <input type="text" id="field5" name="field5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field6" class="block text-sm font-medium text-gray-700 mb-2">الحقل السادس</label> <input type="text" id="field6" name="field6" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field7" class="block text-sm font-medium text-gray-700 mb-2">الحقل السابع</label> <input type="text" id="field7" name="field7" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> <div> <label for="field8" class="block text-sm font-medium text-gray-700 mb-2">الحقل الثامن</label> <input type="text" id="field8" name="field8" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> </div> </div> <div class="text-center"> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105">
حفظ البيانات
</button> </div> </form> <div id="message" class="hidden mt-6 p-4 rounded-lg text-center font-medium"></div> </div> ` })} ${renderScript($$result, "C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ahmed Talal/Desktop/hhyy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
