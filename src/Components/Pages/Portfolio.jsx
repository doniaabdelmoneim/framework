import Heading from "../ui/Heading";
import Img1 from "../../assets/poert1.png";
import Img2 from "../../assets/port2.png";
import Img3 from "../../assets/port3.png";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Viewer from "../ui/Viewer";

function Portfolio() {
  const [img, setImg] = useState("");
  const [open, setOpen] = useState(false);

  function handleOpen(img) {
    setImg(img);
    setOpen(true);
  }

  return (
    <main id="portfolio" className="container">
      <Heading heading="PORTFOLIO COMPONENT" color="#2c3e50" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        <div className="col">
          <div onClick={() => handleOpen(Img1)}>
            <img src={Img1} alt="Hombozo" />
            <div className="add">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="col">
          <div onClick={() => handleOpen(Img2)}>
            <img src={Img2} alt="Hombozo" />
            <div className="add">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="col">
          <div onClick={() => handleOpen(Img3)}>
            <img src={Img3} alt="Hombozo" />
            <div className="add">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="col">
          <div onClick={() => handleOpen(Img1)}>
            <img src={Img1} alt="Hombozo" />
            <div className="add">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="col">
          <div onClick={() => handleOpen(Img2)}>
            <img src={Img2} alt="Hombozo" />
            <div className="add">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="col">
          <div onClick={() => handleOpen(Img3)}>
            <img src={Img3} alt="Hombozo" />
            <div className="add">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
      {open && <Viewer imgUrl={img} setOpen={setOpen} />}
    </main>
  );
}

export default Portfolio;
