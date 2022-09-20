import './styles/header.css'


import HeaderLeftMenu from './HeaderLeftMenu'
import DivSearch from './DivSearch'


function Header() {
    return (
        <header className="header">
        {/* da espandere */}
        <HeaderLeftMenu />
        <DivSearch />
      </header>
            )
}

export default Header