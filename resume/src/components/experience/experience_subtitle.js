export const ExpSectionSubtitle = (props) => {
  const { subtitle, location, caption, time_range } = props;
  return (
    <div className="text-xs">
      <div className="flex flex-row items-center">
        <div className="text-base subpixel-antialiased font-bold text-accent-color basis-1/3">
          {caption}
        </div>
        <div className="font-bold text-sm basis-1/4 mr-2">{subtitle}</div>
        <div className="font-medium text-sm italic">{location}</div>
        <div className="flex-auto text-right font-thin text-gray-500">
          {time_range}
        </div>
      </div>
    </div>
  );
};
