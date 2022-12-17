import Navbar from './Navbar/Navbar'
import styles from '../styles/Layout.module.css'  

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <div></div>
      <div>
        <Navbar />
      </div>
      <div></div>
      <div></div>
      <div>
        {children}
      </div>
    </div>
  )
}