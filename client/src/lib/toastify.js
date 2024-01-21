import { toast } from "react-toastify";

const notifySuccess = (message) => toast.success(<div>{message}</div>);
const notifyError = (message) => toast.error(<div>{message}</div>);

export { notifyError, notifySuccess };
