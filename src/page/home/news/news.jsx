import "./news.css";

export const News = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="yangiliklar_content">
        <h3 className="yangiliklar">Yangiliklar</h3>
        <button className="yangiliklar_btn">Barchasi</button>
      </div>

      <div className="news_block">
        <div {...settings} className="news_box">
          <h4 className="news_subtitle">
            “GIDROINGEO instituti” DM xodimlari Zarmitan va Surxon DGQE
            uchastkalarida tadqiqot ishlari olib borishmoqda
          </h4>
          <span className="news_span">18.06.2023</span>
          <span className="news_span2">Yangiliklar</span>
        </div>
        <ul className="news_middle_box">
          <li className="news_box2">
            <div className="loyihalar_box">
              <p className="loyihalar">Loyihalar</p>
              <h4 className="loyihalar_title">
                “Regionalgeologiya” DUK “Qoraqalpoq” geologiya tasvirlash dala
                ekspeditsiyasi Sultonuvays tog‘larida maxsus geologik ishlar
                olib bormoqda
              </h4>
              <span className="lospan">19.08.2023</span>
              <span className="lospan2">341</span>
            </div>
          </li>
          <li className="news_box3">
            <div className="loyihalar_box">
              <p className="qidiruv">Qidiruv</p>
              <h4 className="loyihalar_title2">
                Aristantau uchastkasida gravirazvedka qidiruv va magnitorazvedka
                ishlari amalga oshirilmoqda
              </h4>
              <span className="lospan">19.08.2023</span>
              <span className="lospan2">341</span>
            </div>
          </li>
          <li className="news_box4">
            <div className="loyihalar_box">
              <p className="yangilik">Yangilik</p>
              <h4 className="loyihalar_title2">
                O‘zbekiston - Chexiya biznes forumi doirasida anglashuv
                memorandumi imzolandi
              </h4>
              <span className="lospan">19.08.2023</span>
              <span className="lospan2">341</span>
            </div>
          </li>
        </ul>
        <div className="news_box5">
          <div className="news_blue_block">
            <div className="right_title_box">
              <h5 className="right_title">E’lonlar</h5>
              <button className="right_btn">Barchasi</button>
            </div>
            <hr />
            <p className="right_subtitle">
              21 iyun kuni O'zbekiston konchilik va metallurgiya sanoatini
              rivojlantirish konferensiyasi
            </p>
            <div className="last_box">
              <span className="lospan">19.08.2023</span>
              <button className="right_vektor"></button>
            </div>
           <hr />
            <p className="right_subtitle">
              Ramazon hayitini nishonlash to‘g‘risida
            </p>
            <div className="last_box">
              <span className="lospan">19.08.2023</span>
              <button className="right_vektor"></button>
            </div>
            <hr />
            <p className="right_subtitle">
              O'zbekiston Milliy matbuot markazida joriy yilning 21 fevral kuni
              matbuot anjumani bo'lib o'tadi.
            </p>
            <div className="last_box">
              <span className="lospan">19.08.2023</span>
              <button className="right_vektor"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
