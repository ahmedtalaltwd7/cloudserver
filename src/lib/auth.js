import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getUserByUsername } from './database.js';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

export async function authenticateUser(username, password) {
  try {
    const user = await getUserByUsername(username);
    if (!user) {
      return { success: false, error: 'اسم المستخدم أو كلمة المرور غير صحيحة' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return { success: false, error: 'اسم المستخدم أو كلمة المرور غير صحيحة' };
    }

    const token = jwt.sign(
      { 
        userId: user._id, 
        username: user.username, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return {
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        canEdit: user.role === 'admin' || user.role === 'twd'
      }
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, error: 'حدث خطأ أثناء تسجيل الدخول' };
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { success: true, user: decoded };
  } catch (error) {
    return { success: false, error: 'Invalid token' };
  }
}

export function getUserFromRequest(request) {
  const authHeader = request.headers.get('authorization');
  const token = request.headers.get('cookie')?.match(/auth-token=([^;]+)/)?.[1];
  
  const authToken = authHeader?.replace('Bearer ', '') || token;
  
  if (!authToken) {
    return null;
  }

  const verification = verifyToken(authToken);
  return verification.success ? verification.user : null;
}

export function requireAuth(user) {
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

export function requireAdmin(user) {
  requireAuth(user);
  if (user.role !== 'admin') {
    throw new Error('Admin access required');
  }
  return user;
}
