import './styles/email-content-header.css'

import EmailInfo from './EmailInfo'
import EmailActionIcons from './EmailActionIcons'


function NavEmailToolbar() {
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            <EmailInfo />
            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
            {/* da espandere */}
            <EmailActionIcons/>
          </header>
            )
}

export default NavEmailToolbar