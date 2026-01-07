import Input from "./Input";

const DropInput = ({ isOpen }) => {
  const toggleSearch = {
    transform: isOpen ? "translateY(50px)" : "translateY(-100%)",
    position: "absolute",
    top: "0",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={toggleSearch}>
      <Input />
    </div>
  );
};

export default DropInput;
