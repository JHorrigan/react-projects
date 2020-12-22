import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubMenu } = useGlobalContext()

  return (
    <section className="hero">
      <div className="hero-center">
      </div>
    </section>
  )
}

export default Hero
