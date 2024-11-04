import {toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const notify = (message) => toast.info(message,{
    position:"bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
})
