export const SectionTitle = (props) => {
  const { title } = props;
  let first_three = title.slice(0, 3);
  first_three = first_three.charAt(0).toUpperCase() + first_three.slice(1);
  const rest_str = title.slice(3);
  return (
    <div>
      <div className={"flex font-semibold text-xl"}>
        <span className="text-accent-color">{first_three}</span>
        <span>{rest_str}</span>
        <span className="flex-auto border-b-2 border-solid mb-1 ml-1 border-gray-300"></span>
      </div>
    </div>
  );
};
