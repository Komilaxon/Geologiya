import Gerb from "../../assets/icons/gerb.svg";
import "./footer.css";
import { footerData, footerData2 } from "../../data/footer/footer.js";
import { Link } from "react-router-dom";
import Contact from "../../assets/icons/contacts.svg";
export const Footer = () => {
  return (
    <div className="footer_block">
      <div className="footer_top_box">
        <a className="footer_logo" href="#">
          <img src={Gerb} alt="gerb-img" />
        </a>
        <h3 className="footer_title">
          O‘ZBEKISTON RESPUBLIKASI TOG‘-KON SANOATI VA GEOLOGIYA VAZIRLIGI
        </h3>
      </div>
      <ul className="footer_list">
        {footerData.map((item, index) => {
          return (
            <>
              <li className="footer_item" key={index}>
                <h5 className="footer_subtitle">{item.title}</h5>
                {item.name.map((el, index) => (
                  <Link
                    style={{ display: "block" }}
                    key={index}
                    to={"/"}
                    className="footer_link"
                  >
                    {el}
                  </Link>
                ))}
              </li>
            </>
          );
        })}
        <li>
          <Link to={"/"} className="contact_img">
            <img src={Contact} alt="contact-img" />
          </Link>
          <Link
            style={{ display: "block", marginBottom: "20px" }}
            to={"/"}
            className="footer_link footer_phone"
          >
            (71) 256-52-90
          </Link>
          <Link
            style={{ display: "block", marginBottom: "36px" }}
            to={"/"}
            className="footer_link"
          >
            info@uzgeolcom.uz
          </Link>
          <button className="footer_btn">Murojaat yuborish</button>
        </li>
        {footerData2.map((item, index) => {
          return (
            <>
              <li className="footer_item" key={index}>
                <h5 className="footer_subtitle">{item.title}</h5>
                {item.name.map((el, index) => (
                  <Link
                    style={{ display: "block" }}
                    key={index}
                    to={"/"}
                    className="footer_link"
                  >
                    {el}
                  </Link>
                ))}
              </li>
            </>
          );
        })}
      </ul>
      <div className="footer_bottom">
        <p className="footer_bottom_text">
          Barcha huquqlar himoyalangan. Saytdan olingan ma'lumotlar chop
          etilganda veb-saytga havola qilish majburiy. Oxirgi yangilangan sana
          02.02.2023
        </p>
        <p className="footer_bottom_text2">
          O‘zbekiston, 100060, Toshkent sh., T. Shevchenko ko‘chasi, 11{" "}
        </p>
      </div>
    </div>
  );
};
