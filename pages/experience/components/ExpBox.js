import { motion } from "framer-motion";
import styles from '../../../styles/Box.module.css'

export default function Experience(props) {
  return (
    <div className={styles.item}>
      <div>
        {props.title}
      </div>
      <div>
        {props.subtitle}
      </div>
      <div>
        {props.lines?.map((line, index) => (
          <p key={index}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}