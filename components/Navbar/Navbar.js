import styles from '../../styles/Navbar.module.css'
import Navigation from './Navigation'
import Socials from './Socials'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Navigation/>
            <Socials/>
        </div>
    )
}