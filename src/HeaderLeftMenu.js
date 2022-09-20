import './styles/header.css'
import './styles/menu-icon.css'


import ImageGmailLogo from './ImageGmailLogo'


function HeaderLeftMenu() {
    return (
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <ImageGmailLogo />
        </div>
            )
}

export default HeaderLeftMenu