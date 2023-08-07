import { Header } from "./header";
import { Footer } from "./footer";
export const MainLayout = ({ children }) => {
  return (
    <>
      <header className="site_header">
        <div className="container">
          <Header />
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};
