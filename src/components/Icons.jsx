import { Link } from "react-router-dom";

function Icons() {
  const icons = ["facebook", "instagram", "twitter"];

  return (
    <div className="flex">
      {/** object-none w-[60px] */}
      {icons.map((icon, index) => (
        // eslint-disable-next-line react/jsx-key
        <Link to={"https://www." + icon + ".com/"} target="_blank" key={index}>
          <img
            className="mx-2 object-none md:w-[20px]"
            src={"../assets/images/icon-" + icon + ".svg"}
            alt={icon}
          />
        </Link>
      ))}
    </div>
  );
}

export default Icons;
