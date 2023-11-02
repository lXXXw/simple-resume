import { SectionTitle } from "../section_title/section_title";

export const Skills = (props) => {
  const { skills } = props;
  console.log(skills.lines);
  return (
    <div>
      <SectionTitle title={"skills"}></SectionTitle>
      {skills.lines.map((line, i) => (
        <div key={i} className="text-sm text-left">
          {line.map((item, j) => (
            <span
              key={j}
              className={
                "px-1 " + (j == 0 ? "" : "border-solid border-l border-black")
              }
            >
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
