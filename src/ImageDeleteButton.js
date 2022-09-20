import './styles/email-toolbar.css'

import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function ImageDeleteButton() {
    return (
        <img className="icon" src={rubbishButton} alt="delete button" />
        )
  }
  
  export default ImageDeleteButton