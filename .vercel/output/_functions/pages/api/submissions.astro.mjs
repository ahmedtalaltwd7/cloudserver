import { b as getAllSubmissions } from '../../chunks/database_CUA_OPNn.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ request }) {
  try {
    const submissions = await getAllSubmissions();

    return new Response(JSON.stringify({ 
      success: true, 
      submissions 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Get submissions error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'فشل في تحميل البيانات' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
