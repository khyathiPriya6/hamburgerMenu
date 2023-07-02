import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="app-container">
    <ul className="header-container">
      <li className="container-element">
        <Link to="/">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          />
        </Link>
      </li>
      <li>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button
                type="button"
                data-testid=" hamburgerIconButton"
                className="trigger-button"
              >
                <GiHamburgerMenu />
              </button>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <>
                <button
                  type="button"
                  className="trigger-button close-btn"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
                <div className="pop-up-container">
                  <div className="pop-up-element">
                    <Link to="/">
                      <AiFillHome className="destination-icon" />
                      <p className="destination-para">Home</p>
                    </Link>
                  </div>
                  <div className="pop-up-element">
                    <Link to="/about">
                      <BsInfoCircleFill className="destination-icon" />
                      <p className="destination-para">About</p>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Popup>
        </div>
      </li>
    </ul>
    <hr className="divider" />
  </div>
)
export default Header
