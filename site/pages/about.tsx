import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/About'

const About: NextPage = () => {

  return (
    <BaseLayout pageTitle='Golem | About'>         
        <Main />
    </BaseLayout>
  )
}

export default About