export const SectionSubtitle = (props) => {
  const { subtitle, location, caption, time_range } = props;
  return (
    <div className="text-xs">
      <div className="flex flex-row items-center">
        <div className="text-sbase subpixel-antialiased font-bold basis-2/5">
          {subtitle}
        </div>
        <div className="ml-3 my-auto font-light">{caption}</div>
        <div className="flex-auto text-right font-thin text-gray-500">
          {time_range}
        </div>
      </div>
    </div>
  );
};
