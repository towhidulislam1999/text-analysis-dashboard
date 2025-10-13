import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { showSuccess, showError } from './ToastUtils';

export const testLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      'diemdungvien584@gmail.com',
      'analytics2025'
    );
    showSuccess(`Logged in successfully: ${userCredential.user.email}`);
    return userCredential.user;
  } catch (error) {
    showError(`Login failed: ${error.message}`);
    console.error('Login error:', error);
  }
};