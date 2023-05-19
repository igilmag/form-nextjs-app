import Link from 'next/link'
import { Logo } from '@/components/Logo'
import styles from './Header.module.css'

const routes = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Form',
    route: 'form'
  }
]

function Header () {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          {
            routes.map(({ label, route }) =>
              (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              )
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
