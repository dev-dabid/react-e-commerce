import { useState } from "react";

const useDeleteConfirm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const confirmDelete = (bool) => setShowConfirm(bool);
  const setIdToDelete = (id) => setTargetId(id);

  return { targetId, showConfirm, confirmDelete, setIdToDelete };
};

export default useDeleteConfirm;
