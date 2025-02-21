import './styles/email-body.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'

function EmailBodySection() {
    return (
        <section className="email-body">
            <div className="content">
                <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>)
}

export default EmailBodySection