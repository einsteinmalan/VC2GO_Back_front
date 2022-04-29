import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    /*<footer className={styles.footer}>
      <p className="footer-links">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <span> / </span>
        <a href="#">
          Instagram
        </a>
        <span> / </span>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
      <p>
        &copy; 2022 <strong>Tropo</strong> - Farm  |   Made with &hearts; by <strong>Nosmay</strong>
      </p>

    </footer>*/
      <footer className="footer px-4 px-6 py-6 mt-16">
          <div className="footer-content">
              <div className="px-3 mr-120 w-full h-130-px bg-orange-300 " ></div>
              <p className="text-sm text-gray-600 text-center">© 2022 Tropo - Farm | Made with ♥ by <span
                  className="text-lightBlue-600"><a href="https://www.nosmay.com">Nosmay</a></span>. All rights
                  reserved. </p>



          </div>
      </footer>
  );
};

export default Footer;
