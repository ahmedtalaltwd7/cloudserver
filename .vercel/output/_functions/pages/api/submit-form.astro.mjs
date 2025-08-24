import { i as initializeDefaultUsers, c as insertFormData } from '../../chunks/database_CUA_OPNn.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    // Initialize default users if needed
    await initializeDefaultUsers();
    
    const data = await request.json();

    // Validate that all 8 fields are present
    const requiredFields = ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8'];
    const missingFields = requiredFields.filter(field => !data[field] || !data[field].trim());

    if (missingFields.length > 0) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'الرجاء إدخال جميع الحقول' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert data into database
    const result = await insertFormData(data);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'تم إضافة البيانات بنجاح',
      id: result.id 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'فشل حفظ البيانات' 
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
