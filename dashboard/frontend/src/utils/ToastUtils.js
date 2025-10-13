import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Toast configuration
const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false
};

// Utility functions
export const showSuccess = (msg) => toast.success(msg, toastConfig);
export const showError = (msg) => toast.error(msg, toastConfig);
export const showInfo = (msg) => toast.info(msg, toastConfig);
export const showWarning = (msg) => toast.warn(msg, toastConfig);

// Export ToastContainer component for use in App.js
export { ToastContainer } from "react-toastify";