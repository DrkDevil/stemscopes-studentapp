/* eslint-disable jsx-a11y/anchor-is-valid */
import NavLinks from './NavLinks'
import NavActions from './NavActions'
import logo from '../../../assets/images/STEMscopesLogo.svg';

const PrimaryNavbar = () => {
    return (
        <div className='navContainer'>
            <header className='navbar flex-grid-sb'>
                <div className='brand'>
                <img src={logo} className="logo" alt="logo" />
                </div>
                <NavActions />       
            </header>
        </div>
    )
}

export default PrimaryNavbar