export const PersonalInfo = (props) => {
  const { config, info } = props;
  return (
    <div>
      <div className="flex flex-row">
        <div className={"basis-1/2 my-auto"}>
          <div className="text-3xl ">
            <span>{info.first_name} </span>
            <span className="font-semibold">{info.last_name}</span>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="text-xs">
            <div className="font-semibold">{info.title}</div>
            <div>Email: {info.email}</div>
            <div>Phone: {info.phone}</div>
            <div>Address: {info.address}</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
