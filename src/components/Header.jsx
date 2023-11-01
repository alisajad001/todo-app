import AddBtn from "./AddBtn";

const Header = () => {
  return (
    <div className="bg-blue-400 h-72 rounded-bl-[10rem] p-3 px-7 relative">
      <h1 className="text-3xl text-slate-200 mx-1 my-6 ">Good Morning</h1>
      <input
        className="outline-none p-4 w-full rounded-full"
        placeholder="Workout..."
      />

      <AddBtn />
    </div>
  );
};

export default Header;
