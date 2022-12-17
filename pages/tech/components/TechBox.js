import { motion } from "framer-motion";
import styles from '../../../styles/TechBox.module.css'
import Image from 'next/image'

export default function Experience(props) {
  return (
    // <motion.div
    //   target='_blank'
    //   href='/'
    //   initial={{ y: 10, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.3, delay: 0.1 }}>
      <div className={styles.item}>
        <Image className={styles.bg}
          src={props.image}
          width={props.width}
          height={props.height}
          style={{ "backgroundColor": `${props.color}` }}
          alt="no">
        </Image>
        <div>
          {props.title}
        </div>
        <div>
          {/* {props.lines.map((line, index) => (
          <p key={index}>
            {line}
          </p>
        ))} */}
        </div>
        <div>
          {props.lines?.map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
    // </motion.div>
  );
}