import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Mission'

const Mission: NextPage = () => {

  return (
    <BaseLayout pageTitle='Golem | Mission'>         
        <Main />
    </BaseLayout>
  )
}

export default Mission