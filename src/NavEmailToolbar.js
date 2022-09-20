import './styles/email-toolbar.css'


import ImageDeleteButton from './ImageDeleteButton'
import ImageArchiveButton from './ImageArchiveButton'
import ImageReplyButton from './ImageReplyButton'


function NavEmailToolbar() {
    return (
        <nav className="email-toolbar">
          <ul>
            <li>
              <ImageReplyButton />
            </li>
            <li>
              <ImageArchiveButton />
            </li>
            <li>
              <ImageDeleteButton />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
            )
}

export default NavEmailToolbar