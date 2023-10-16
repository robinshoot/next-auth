import toast from "react-hot-toast";

export const ToastSuccess = (text: string) => {
  toast.success(text);
};

export const ToastFailed = (text: string) => {
  toast.error(text);
};
