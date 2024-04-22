import Button from "./Button";

const ButtonList = () => {
  const options = [
    "All",
    "Gaming",
    "Live",
    "Cricket",
    "Football",
    "AI",
    "World Politics",
    "News",
    "Gadgets",
    "Lessons",
    "Mixes",
    "History",
  ];

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <Button key={option} name={option} />
      ))}
    </div>
  );
};

export default ButtonList;
