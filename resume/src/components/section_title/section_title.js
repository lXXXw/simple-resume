export const SectionTitle = (props) => {
  const { title } = props;
  const upperTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div>
      <div className={"flex font-semibold text-xl"}>
        <span>{upperTitle}</span>
        <span className="flex-auto border-b-2 border-solid mb-1 ml-1 border-gray-400"></span>
      </div>
    </div>
  );
};
