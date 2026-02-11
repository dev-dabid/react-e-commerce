import { useState } from "react";

const useDeleteConfirm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const askDelete = (id) => {
    setTargetId(id);
    setShowConfirm(true);
  };

  const cancelDelete = () => setShowConfirm(false);

  return { targetId, showConfirm, askDelete, cancelDelete };
};

export default useDeleteConfirm;
