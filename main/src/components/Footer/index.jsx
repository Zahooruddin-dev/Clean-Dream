import React from "react"
import Animations from "./Animations"
import mz from "../../images/avatarme2.svg"
import palmTree from "../../images/palm-tree.svg"
import "./footer.css"
import palmTreeMobile from "../../images/palm-tree-mobile.svg"

const Footer = () => {
  return (
    <footer>
      {/* Set up Islands with palm trees */}
      <div id="island-group">
        <img src={palmTree} id="left-tree" className="palm-tree" />
        <img src={palmTree} className="palm-tree" />
        <img src={palmTreeMobile} id="left-tree" className="palm-tree-mobile" />
        <img src={palmTreeMobile} className="palm-tree-mobile" />
      </div>

      <Animations />
      <section>
        <div className="container ">
          <div className="row">
            {/* Column1 */}

            {/* fix footer alignment */}
            <div id="footer-top" className="col-md">
              {/* <img id="img" src={logo} alt="Dream Maids Logo" /> */}
              <h4>Fresh Sweap</h4>
              <ul className="list-unstyled">
                <li>Providing customized high-quality</li>
                <li>cleaning and maintenance services</li>
                <li>to meet client's needs.</li>
              </ul>
            </div>
            {/* Column2 */}
            <div id="second" className="col">
              <div>
                <h5>Phone:</h5>
                <ui className="list-unstyled">
                  <li>
                    <a id="links" target="_blank" href="tel:+1 (561) 287-0358">
                      (011) 123-1234
                    </a>
                  </li>
                </ui>
                <h5>Location:</h5>
                <ui className="list-unstyled">
                  <li> Vancover Canada</li>
                </ui>
              </div>
            </div>
            {/* Column3 */}
            <div id="third" className="col">
              <div>
                <h4>Hours:</h4>
                <ui className="list-unstyled">
                  <li>Monday - Friday,</li>
                  <li>8:00 am - 5:00 pm</li>
                  <li>Weekends by request</li>
                </ui>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} by Fresh Sweap LLC | All rights
              reserved | Powered by
              <a
                href="https://github.com/Zahooruddin-dev/Clean-Dream"
                target="_blank"
              >
                <img
                  src={mz}
                  alt="link to The github repo for the Fresh Sweap site"
                  id="theg"
                />
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
