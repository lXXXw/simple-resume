export const ExpSectionSubtitle = (props) => {
  const { subtitle, location, caption, time_range } = props;
  return (
    <div className="text-xs">
      <div className="flex flex-row">
        <div className="text-base subpixel-antialiased font-bold">
          {subtitle}
        </div>
        <div className="flex-auto my-auto text-right text-accent-color font-medium">
          {location}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="font-medium">{caption}</div>
        <div className="flex-auto text-right italic">{time_range}</div>
      </div>
    </div>
  );
};
