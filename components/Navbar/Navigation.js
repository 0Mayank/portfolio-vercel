import styles from '../../styles/Navbar.module.css'
import Element from "./Element";
export default function Navigation(props) {
  const elements = [
    {
      label: "/",
      href: "/",
    },
    {
      label: "/experience",
      href: "/experience/content",
    },
    // {
    //   label: "/projects",
    //   href: "/projects/content",
    // },
    {
      label: "/tech",
      href: "/tech/content",
    },
    {
      label: "/contact",
      href:"/contact/content"
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map((el, ind) => (
        <Element key={ind} {...el}/>
      ))}
    </div>
  );
}