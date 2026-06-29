import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="grid-bg" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
