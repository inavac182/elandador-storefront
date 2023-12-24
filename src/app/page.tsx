import Image from 'next/image'
import styles from './page.module.css'

import logo from '../../public/logo.jpeg';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} width={400} height={300} alt="Logo" />
    </main>
  )
}
