import Image from 'next/image'
import coffeeBackground from './images/bg.png'
export default function Home() {
  return (
    <div>
      <Image src={coffeeBackground} alt='background' />
    </div>
  )
}
