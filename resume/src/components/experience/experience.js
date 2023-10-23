import { SectionTitle } from "../section_title/section_title";
import { parseLocation, parseTimeRange } from "@/utils";
import { Bullets } from "../bullets/bullets";
import { ExpSectionSubtitle } from "./experience_subtitle";

export const Experience = (props) => {
  const title = "experience";
  const { experence_list } = props;

  const renderProject = (projects) => {
    console.log(projects);
  };

  return (
    <div>
      <SectionTitle title={title}></SectionTitle>
      {experence_list.map((experence, index) => {
        return (
          <div className="mb-1" key={index}>
            <ExpSectionSubtitle
              subtitle={experence.company}
              location={parseLocation(
                experence.location.city,
                experence.location.country
              )}
              caption={experence.title}
              time_range={parseTimeRange(
                experence.start_time,
                experence.end_time
              )}
            ></ExpSectionSubtitle>
            <div className="">
              {experence.achievements
                .filter((achievement) => achievement.is_active)
                .map((achievement, i) => (
                  <div className="mt-1 ml-2" key={i}>
                    <div className="text-sm font-semibold">
                      {achievement.name}
                    </div>
                    <Bullets bullets={achievement.bullets}></Bullets>
                  </div>
                ))}

              {experence.summary == "" ? (
                <div></div>
              ) : (
                <div>
                  <Bullets bullets={experence.summary}></Bullets>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
