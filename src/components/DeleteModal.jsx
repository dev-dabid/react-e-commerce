const DeleteModal = ({ cancelDelete, handleConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-[280px] md:max-w-[350px] rounded-lg bg-white p-6 shadow-lg">
        <p className="mb-4 text-center text-lg font-medium">
          Do you want to delete this product?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={cancelDelete}
            className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="rounded-md bg-gray-500 px-4 py-2 text-sm text-white hover:bg-gray-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
