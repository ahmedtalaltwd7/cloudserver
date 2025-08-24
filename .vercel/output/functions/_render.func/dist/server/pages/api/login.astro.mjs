import { a as authenticateUser } from '../../chunks/auth_D_VlVyfr.mjs';
import { i as initializeDefaultUsers } from '../../chunks/database_CUA_OPNn.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    // Initialize default users if needed
    await initializeDefaultUsers();
    
    const { username, password } = await request.json();

    if (!username?.trim() || !password?.trim()) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'الرجاء إدخال اسم المستخدم وكلمة المرور' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await authenticateUser(username, password);

    if (result.success) {
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Set-Cookie': `auth-token=${result.token}; HttpOnly; Path=/; Max-Age=86400`
        }
      });
    } else {
      return new Response(JSON.stringify(result), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'حدث خطأ أثناء تسجيل الدخول' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
