import { RiStarFill } from "react-icons/ri";

function Heading({ color, heading }) {
  return (
    <div className="heading" style={{ "--color": color }}>
      <h1>{heading}</h1>
      <span>
        <RiStarFill />
      </span>
    </div>
  );
}

export default Heading;
