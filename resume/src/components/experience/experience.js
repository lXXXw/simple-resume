import { SectionTitle } from "../section_title/section_title";
import { SectionSubtitle } from "../section_title/section_subtitle";
import { parseLocation, parseTimeRange } from "@/utils";
import { Bullets } from "../bullets/bullets";

export const Experience = (props) => {
  const title = "experience";
  const { experence_list, config } = props;
  return (
    <div>
      <SectionTitle config={config} title={title}></SectionTitle>
      {experence_list.map((experence, index) => {
        return (
          <div key={index}>
            <SectionSubtitle
              config={config}
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
            ></SectionSubtitle>
            <Bullets bullets={experence.bullets}></Bullets>
          </div>
        );
      })}
    </div>
  );
};
