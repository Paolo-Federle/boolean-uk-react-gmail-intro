import './styles/email-content-header.css'
import './styles/title.css'

import EmailBodySection from './EmailBodySection'
import EmailActions from './EmailActions'
import EmailContentHeader from './EmailContentHeader'


function MainArticleEmailContent() {
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <EmailContentHeader />
          
          {/* da espandere */}
          <EmailBodySection />
          {/* da espandere */}
          <EmailActions />
        </article>
            )
}

export default MainArticleEmailContent