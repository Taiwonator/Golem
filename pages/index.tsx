import React, { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
const Home: NextPage = () => {

  return (
    <React.Fragment>

      <Head>
        <title>Golem</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <BaseLayout>
          Hello
      </BaseLayout>

    </React.Fragment>
  )
}

export default Home