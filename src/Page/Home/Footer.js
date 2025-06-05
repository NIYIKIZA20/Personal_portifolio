import React from "react";

function Footer() {
  return (
    <footer>
      <hr className="divider" />
      <div className="footerContentContainer">
        <p className="footerContent">
          Copyright &copy; {new Date().getFullYear()} Jean Baptiste NIYIKIZA. All rights reserved.
        </p>
        <div className="footerSocialIcon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/niyikizajb"
                className="navbarContent"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/facebook.png" alt="Facebook" width="32" height="32" className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nikizajoh/"
                className="navbarContent"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/instagram.png" alt="Instagram" width="32" height="32" className="icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbarContent"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/twitter.png" alt="Twitter" width="32" height="32" className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/niyikiza-jean-baptiste-887b2b35b/"
                className="navbarContent"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/linkedin.png" alt="LinkedIn" width="32" height="32" className="icon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
