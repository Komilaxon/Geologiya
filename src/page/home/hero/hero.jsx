import "./hero.css";

export const Hero = () => {
  return (
    <>
      <h3 className="hero_title">Davlat xizmatlari</h3>
      <ul className="hero_list">
        <li className="hero_item">
          <div className="hero_box">
            <div className="hero_img"></div>
            <div className="hero_text_box">
              <p className="hero_text">Xizmat nomi 1</p>
              <p className="hero_text2">Xizmatdan foydalanish</p>
            </div>
          </div>
        </li>
        <li className="hero_item item2">
          <div className="hero_box">
            <div className="hero_img2"></div>
            <div className="hero_text_box">
              <p className="hero_text">Xizmat nomi 2</p>
              <p className="hero_text2">Xizmatdan foydalanish</p>
            </div>
          </div>
        </li>
        <li className="hero_item item3">
          <div className="hero_box">
            <div className="hero_img3"></div>
            <div className="hero_text_box">
              <p className="hero_text">Xizmat nomi 3</p>
              <p className="hero_text2">Xizmatdan foydalanish</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
