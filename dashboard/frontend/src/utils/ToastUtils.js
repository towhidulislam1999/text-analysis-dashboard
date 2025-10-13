import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log("Toast Utils loaded"); // Debug log

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false
};

// Add debug wrapper
const withDebug = (fn, type) => (msg) => {
  console.log(`Showing ${type} toast:`, msg);
  return fn(msg, toastConfig);
};

export const showSuccess = withDebug(toast.success, 'success');
export const showError = withDebug(toast.error, 'error');
export const showInfo = withDebug(toast.info, 'info');
export const showWarning = withDebug(toast.warn, 'warning');

export { ToastContainer } from "react-toastify";