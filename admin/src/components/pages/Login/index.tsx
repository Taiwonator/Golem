import React, {useState} from 'react'
import styles from './Login.module.scss'
import Image from 'next/image'
import Router from 'next/router'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import { getCurrentUser, logIn } from 'src/service/firebase'
import SETTINGS from 'src/styles/settings'
import Content from '../../layouts/Content'

const Login: React.FC = props => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    async function userLogIn () {
        const user  = await logIn(email, password)
        if(user) Router.push('/')
    }

    function emailHandler (e) {
        setEmail(e.target.value)
    }

    function passwordHandler (e) {
        setPassword(e.target.value)
    }   

    return (
        <Content width="medium">
            <div className={styles['login']}>
                <div className={styles['login__logo']}>
                    <Header tag="h3" uppercase>God of Love Emancipation Ministries</Header> 
                    <Image src="/assets/golem.png" alt="Picture of logo" width={644.22 * 2} height={236.84 * 2} /> 
                </div>
                <input type="email" value={email} onChange={e => emailHandler(e)}></input>
                <input type="password" value={password} onChange={e => passwordHandler(e)}></input>
                <Button onClick={() => userLogIn()} border color={SETTINGS.green}>LOGIN</Button>
            </div>
        </Content>
    )
}

export default Login