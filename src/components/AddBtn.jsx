import { FaCirclePlus } from "react-icons/fa6";

const AddBtn = ({ addTodo }) => {
  return (
    <button onClick={addTodo}>
      <FaCirclePlus className="text-white text-6xl absolute right-6 bottom-6" />
    </button>
  );
};

export default AddBtn;
