const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-1 rounded-lg bg-gray-200 hover:bg-gray-800 hover:text-white">{name}</button>
    </div>
  );
};

export default Button;
