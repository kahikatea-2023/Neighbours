import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

function Slogan() {
  const texts = [
    'Connect with your neighbours',
    'And with your neighbours,',
    'Making good connection',
  ]
  return (
    <div className={twMerge('text-black')}>
      {texts.map((text, index) => (
        <motion.p
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 1.3 }}
          className="text-3xl font-bold"
          key={text}
        >
          {text}
        </motion.p>
      ))}
    </div>
  )
}

export default Slogan
