import { toast } from 'react-toastify';

export const customToast = (message, type) => {
  let customType = toast.TYPE.DEFAULT;

  switch (type) {
    case 'error':
      customType = toast.TYPE.ERROR;
      break;
    case 'warning':
      customType = toast.TYPE.WARNING;
      break;
    case 'success':
      customType = toast.TYPE.SUCCESS;
      break;
    default:
      customType = toast.TYPE.DEFAULT;
  }

  toast(message, {
    type: customType,
  });
};
