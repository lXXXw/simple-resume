export const Bullets = (props) => {
  const { bullets } = props;
  return (
    <div className="text-sm">
      <ul className="list-disc list-outside ms-3">
        {bullets.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  );
};
