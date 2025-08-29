const Card = ({
  title,
  description,
  image,
  color,
  grid,
}: {
  title: string;
  description: string;
  image: string;
  color: string;
  grid?: string;
}) => {
  const borderColor = `border-${color}`;
  return (
    <div
      className={`p-8 w-[314px] lg:w-[350px] h-[250px] bg-white rounded-lg border-t-4 ${borderColor} shadow-[0px_15px_30px_-11px_rgba(131,166,210,50)] ${grid}`}
    >
      <h1 className="text-preset-3 text-grey-500">{title}</h1>
      <p className="text-preset-5 text-grey-400">{description}</p>
      <img src={image} alt={title} className=" place-self-end pt-8" />
    </div>
  );
};
export default Card;
