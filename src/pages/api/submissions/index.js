import { getAllSubmissions } from '../../../lib/database.js';

export async function GET({ request }) {
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
