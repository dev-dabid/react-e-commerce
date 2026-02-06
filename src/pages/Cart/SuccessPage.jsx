import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <button>Continue Shopping</button>
    </div>
  );
};

export default SuccessPage;
