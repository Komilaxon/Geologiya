import { Link } from "react-router-dom";
import "./section.css";
import Img from "../../assets/img/system1.png";
import Img2 from "../../assets/img/system2.png";
import Img3 from "../../assets/img/system3.png";
import Img4 from "../../assets/img/system4.png";
import Img5 from "../../assets/img/system5.png";
import Img6 from "../../assets/img/system6.png";

export const Sections = () => {
  return (
    <>
      <h3 className="section_title">Foydali bo‘limlar</h3>
      <ul className="section_list">
        <li className="section_item">
          <Link to={"/"}>
            <img src={Img} alt="system1" />
          </Link>
        </li>
        <li className="section_item">
          <Link to={"/"}>
            <img src={Img2} alt="system1" />
          </Link>
        </li>
        <li className="section_item">
          <Link to={"/"}>
            <img src={Img3} alt="system1" />
          </Link>
        </li>
        <li className="section_item">
          <Link to={"/"}>
            <img src={Img4} alt="system1" />
          </Link>
        </li>
        <li className="section_item">
          <Link to={"/"}>
            <img src={Img5} alt="system1" />
          </Link>
        </li>
        <li className="section_item">
          <Link to={"/"}>
            <img src={Img6} alt="system1" />
          </Link>
        </li>
      </ul>
    </>
  );
};
