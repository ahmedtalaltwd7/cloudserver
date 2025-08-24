import { g as getSubmissionById, u as updateSubmission, d as deleteSubmission } from '../../../chunks/database_CUA_OPNn.mjs';
import { g as getUserFromRequest } from '../../../chunks/auth_D_VlVyfr.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ params }) {
  try {
    const { id } = params;
    const submission = await getSubmissionById(id);

    if (!submission) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'السجل غير موجود' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      submission 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Get submission error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'فشل في تحميل السجل' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function PUT({ params, request }) {
  try {
    const user = getUserFromRequest(request);
    // Allow both admin and twd roles to edit
    if (!user || (user.role !== 'admin' && user.role !== 'twd')) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'غير مصرح لك بهذا الإجراء' 
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { id } = params;
    const data = await request.json();

    // Validate required fields
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

    const result = await updateSubmission(id, data);

    if (result.changes === 0) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'السجل غير موجود' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'تم تحديث السجل بنجاح' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    if (error.message === 'Authentication required' || error.message === 'Admin access required') {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'غير مصرح لك بهذا الإجراء' 
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.error('Update submission error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'فشل في تحديث السجل' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function DELETE({ params, request }) {
  try {
    const user = getUserFromRequest(request);
    // Allow both admin and twd roles to delete
    if (!user || (user.role !== 'admin' && user.role !== 'twd')) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'غير مصرح لك بهذا الإجراء' 
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { id } = params;
    const result = await deleteSubmission(id);

    if (result.changes === 0) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'السجل غير موجود' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'تم حذف السجل بنجاح' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    if (error.message === 'Authentication required' || error.message === 'Admin access required') {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'غير مصرح لك بهذا الإجراء' 
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.error('Delete submission error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'فشل في حذف السجل' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
