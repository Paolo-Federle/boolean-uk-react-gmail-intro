import './styles/email-actions.css'

import ImageReplyButton from './ImageReplyButton'
import ImageStarButton from './ImageStarButton'
import ImageDeleteButton from './ImageDeleteButton'

function EmailActionIcons() {
    return (
        <div className="email-action-icons">
              <ul>
                <li>
                  <ImageReplyButton />
                </li>
                <li>
                  <ImageStarButton />
                </li>
                <li>
                  <ImageDeleteButton />
                </li>
              </ul>
            </div>)
}

export default EmailActionIcons