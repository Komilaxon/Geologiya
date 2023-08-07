import { Sections } from "../../components/sections";
import { MainLayout } from "../../layout/main.layout";
import { Hero } from "./hero";

import { HeroSlider } from "../../components/slider/hero-slider";
import { Navbar } from "../../components/navbar";
import { News } from "./news";
import { Stat } from "./statistika";
export const HomePage = () => {
  return (
    <MainLayout>
      <main>
        <section className="navbar">
          <div className="container">
            <nav className="navigation">
              <Navbar />
            </nav>
          </div>
        </section>
        <section className="hero_slider">
          <div className="container">
            <HeroSlider />
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <Hero />
          </div>
        </section>
        <section className="sections">
          <div className="container">
            <Sections />
          </div>
        </section>
        <section className="news">
          <div className="container">
           <News/>
          </div>
        </section>
        <section className="site_stat">
          <div className="container">
            <Stat/>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
