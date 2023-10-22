export const ProjectSectionSubtitle = (props) => {
  const { subtitle, url, caption, time_range } = props;
  return (
    <div className="text-xs">
      <div className="flex flex-row">
        <div className="text-base subpixel-antialiased font-bold">
          {subtitle}
        </div>
        <div className="flex-auto my-auto text-right text-red-600 font-medium">
          <a href={url}>{url.includes("github.com") ? "Github" : "Live"}</a>
        </div>
      </div>
    </div>
  );
};
