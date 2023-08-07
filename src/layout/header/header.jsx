import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";
import Glass from "../../assets/icons/glasses.svg";
import "./header.css";
export const Header = () => {
  return (
    <div className="site_header_block">
      <div className="site_header_box">
        <a href="#" className="site_header_logo">
          <img src={Logo} alt="logo-img" />
        </a>
        <h2 className="site_header_title">
          O‘ZBEKISTON RESPUBLIKASI TOG‘-KON SANOATI VA GEOLOGIYA VAZIRLIGI
        </h2>
      </div>
      <ul className="site_header_list">
        <li className="site_header_item">
          <a className="site_header_link link1" href="#">(71) 202-44-21</a>
        </li>
        <li className="site_header_item">
          <a className="site_header_link link2" href="#">Pochta</a>
        </li>
        <li className="site_header_item">
          <a className="site_header_link" href="#">
            <img src={Search} alt="img" />
          </a>
        </li>
        <li className="site_header_item">
          <a className="site_header_link" href="#">
            <img src={Glass} alt="img" />
          </a>
        </li>
        <li>
          <select className="site_header_select">
            <option className="site_header_option">RUS</option>
            <option className="site_header_option">UZB</option>
            <option className="site_header_option">ENG</option>
          </select>
        </li>
        <li className="site_header_item">
          <a className="site_header_link" href="#">Kabinet</a>
        </li>
        <button className="site_header_btn"></button>
      </ul>
    </div>
  );
};
