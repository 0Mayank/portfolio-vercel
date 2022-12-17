import Box from './components/ExpBox'
import styles from '../../styles/Box.module.css'
import {motion} from 'framer-motion'

export default function Exp(props) {
  const exps = [
    {
      title: "Hub",
      subtitle: "July, 22",
      lines: [
        "Proin fringilla",
        "• Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Nunc sollicitudin",
      subtitle: "Mar, 22",
      lines: [
        "Sed convallis justo a lacinia dictum",
        "• Nunc sollicitudin",
        "• Quisque quis turpis accumsan, varius ligula sed, ultrices velit. Aenean eros justo, tristique ut tempus id, iaculis non augue.",
      ],
    },
    {
      title: "Donec sapien",
      subtitle: "Feb, 22",
      lines: [
        "Nulla eu vulputate ligula, eget rhoncus magna.",
        "• Vivamus ac ex quis elit consequat commodo.",
      ],
    },
    {
      title: "Nomaan",
      subtitle: "Jan, 22",
      lines: ["Maruis", "• Typing more lorem ipsum."],
    },
    {
      title: "Cras lectus",
      subtitle: "Jan, 21",
      lines: [
        "Mauris",
        "• Donec sapien mauris, suscipit nec lorem lacinia, porttitor mattis enim.",
        "• Cras lectus leo, blandit convallis porta id, iaculis a magna.",
      ],
    },
    {
      title: "Aliquam",
      subtitle: "Feb, 20",
      lines: [
        "Aenean consequat ornare consequat.",
        "• Sed convallis justo a lacinia dictum. Cras lectus leo, blandit convallis porta id, iaculis a magna.",
      ],
    },
    {
      title: "Cras lectus",
      subtitle: "Jan, 21",
      lines: [
        "Donec sapien mauris",
        "• Donec sapien mauris, suscipit nec lorem lacinia, porttitor mattis enim.",
        "• Cras lectus leo, blandit convallis porta id, iaculis a magna.",
      ],
    },
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
          Experiences
        </h1>
        {exps.map((el, ind) => (
          <Box key={ind} {...el} />
        ))}
      </code>
    </motion.div>
  )

}