import React, {useEffect} from 'react'
import Router from 'next/router'
import { logOut, getCurrentUser } from 'src/service/firebase'

const Logout = () => {
    useEffect(() => {
        logOut()
        getCurrentUser()
        Router.push('/')
    })
    return <div />
}

export default Logout