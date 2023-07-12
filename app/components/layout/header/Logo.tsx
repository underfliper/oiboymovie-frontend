import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo.svg'

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image src={logo} width={291} height={60} alt="Logo" />
    </Link>
  )
}

export default Logo
