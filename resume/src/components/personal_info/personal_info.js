import {
  EnvelopeIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const ICON_GROUP_CLASS = "flex flex-row border-l-2 border-gray-300 px-1";

export const PersonalInfo = (props) => {
  const { info } = props;
  return (
    <div>
      <div>
        <div className="text-center">
          <div className="flex flex-row items-center justify-center ">
            <div className="text-3xl pr-1 basis-1/4">
              <span className="text-accent-color font-light">
                {info.first_name}{" "}
              </span>
              <span className="font-semibold">{info.last_name}</span>
            </div>
            <div className=" pl-1 text-sm w-72 border-l-2 border-solid border-gray-300 pl-3">
              <p className="text-left font-['Arial']">{info.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-xs justify-center mt-2">
        <div className="flex flex-row px-1">
          <BsLinkedin className=" h-3 w-3 text-blue-700 mr-0.5 my-auto" />
          <a href={info.linkedin}>Linkedin</a>
        </div>
        <div className={ICON_GROUP_CLASS}>
          <BsGithub className=" h-3 w-3 text-black mr-0.5 my-auto" />
          <div className="my-auto">
            <a href={info.github}>Github</a>
          </div>
        </div>
        <div className={ICON_GROUP_CLASS}>
          <EnvelopeIcon className="my-auto h-3 w-3 text-accent-color mr-0.5" />
          <div>{info.email}</div>
        </div>
        <div className={ICON_GROUP_CLASS}>
          <DevicePhoneMobileIcon className="my-auto h-3 w-3 text-accent-color mr-0.5" />
          <div>{info.phone}</div>
        </div>
        <div className={ICON_GROUP_CLASS}>
          <MapPinIcon className="my-auto h-3 w-3 text-accent-color mr-0.5" />
          <div>{info.location}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
