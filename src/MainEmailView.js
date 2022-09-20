// import './styles/email-content-header.css'

import NavEmailToolbar from './NavEmailToolbar'
import MainArticleEmailContent from './MainArticleEmailContent'


function MainEmailView() {
    return (
        <main className="email-view">
        <NavEmailToolbar />
        <MainArticleEmailContent />
      </main>
            )
}

export default MainEmailView