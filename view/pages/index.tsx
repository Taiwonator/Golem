import React, { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/layouts/Home'

const Home: NextPage = () => {

  return (
    <React.Fragment>

      <BaseLayout pageTitle='Golem | Home'>
          <Main />
      </BaseLayout>

    </React.Fragment>
  )
}

export default Home