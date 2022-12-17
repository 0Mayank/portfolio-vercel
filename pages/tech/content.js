import Box from './components/TechBox'
import styles from '../../styles/Box.module.css'
import {motion} from 'framer-motion'

export default function Exp(props) {
  const exps = [
    {
      title: "Python",
      image: "/pythonblack.png",
      width: 128,
      height: 128,
      color: 'white',
      lines: [
        "First language I learned."
      ],
    },
    {
      title: "Javascript",
      image: "/js.svg.png",
      width: 128,
      height: 128,
      color: '#F7E01D',
      lines: [
        "My go to language for webdev."]
    },
    {
      title: "NodeJS",
      image: "/nodejs.svg",
      width: 128,
      height: 128,
      color: '#F7F7F7',
      lines: [
        "Currently learning."
      ],
    },
    {
      title: "Firebase",
      image: "/firebase.svg",
      width: 128,
      height: 128,
      color: '#4A4A4A',
      lines: [
        "Easy to configure and use."
      ],
    },
    {
      title: "NextJS",
      image: "/next_logo.png",
      width: 128,
      height: 128,
      color: '#111111',
      lines: [
        "My go to react framework to build web applications."
      ],
    }
  ];

  return (
    <motion.div
    target='_blank'
    href='/'
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.1 }}>
    <code className={styles.container}>
      <h1>
        Languages and Frameworks
      </h1>
      <h3>
        (Languages and frameworks Im familiar with right now)
      </h3>
      {exps.map((el, ind) => (
        <Box key={ind} {...el} />
      ))}
    </code>
    </motion.div>
  )

}