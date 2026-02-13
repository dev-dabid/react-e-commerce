import { useState } from "react";

const useDeleteConfirm = () => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<number | null>(null);

  const askDelete = (id: number) => {
    setTargetId(id);
    setShowConfirm(true);
  };

  const cancelDelete = () => setShowConfirm(false);

  return { targetId, showConfirm, askDelete, cancelDelete };
};

export default useDeleteConfirm;
