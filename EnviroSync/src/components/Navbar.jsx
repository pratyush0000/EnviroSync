import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../src/assets/walmartlogmain.png'

const Navbar=()=>{
    return (
        <nav className={styles.nav}>
            <div>
            <img src={logo} alt="" className={styles.logo}/>
            </div>
            <ul>
            <li><Link to="/login" className={styles.removea}>LOGIN</Link></li>
            <li><Link to="/cart" className={styles.removea}>CART</Link></li>
            <li><Link to="/becomeaseller" className={styles.removea}>BECMOE A SELLER</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar