import Input from "./Input";

interface DropInputProps {
  isOpen: boolean;
}

const DropInput = ({ isOpen }: DropInputProps) => {
  const toggleSearch: React.CSSProperties = {
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
