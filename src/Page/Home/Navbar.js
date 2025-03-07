import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleDark = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openFile = () => {
    const fileUrl = 'https://drive.google.com/file/d/13QtNITpx-66fdZ5unZp0OFrv1YKC22TE/view?usp=drive_link';
    window.open(fileUrl, '_blank');
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="myNavbar">
        <img src="./img/logo.png" alt="Logo" />
      </div>
      <div onClick={toggleDark}>
        <img src='./img/light.png' alt="light mode icon" style={{ display: darkMode ? 'none' : 'block' }} />
        <img src='./img/dark.png' alt="dark mode icon" className={darkMode ? 'dark' : ''} style={{ display: darkMode ? 'block' : 'none' }} />
      </div>
      <a 
        className={`navHumburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="navHumburgerLine"></span>
        <span className="navHumburgerLine"></span>
        <span className="navHumburgerLine"></span>
      </a>
      <div className={`navbarItems ${navActive ? "active moreActive" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbarContent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbarContent"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbarContent"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbarContent"
            >
              Experiences
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbarActiveContent"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="navbarContent "
      >
        Contact Me
      </Link>
      <div>
        <button className="btn btn-success" onClick={openFile}>Download CV</button>
      </div>
      <div className="myName">
        <img src='./img/profile.jpg' alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;