import { useState } from "react";

const useModal = (initialValue) => {
  const [open, setOpen] = useState(initialValue);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return {
    open,
    handleOpen,
    handleClose
  };
};

export default useModal;
