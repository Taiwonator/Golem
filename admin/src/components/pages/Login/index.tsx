import React, {useState} from 'react'
import Grid from 'src/components/layouts/Grid'
import Section from 'src/components/layouts/Section'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import { getCurrentUser, logIn } from 'src/service/firebase'
import SETTINGS from 'src/styles/settings'
import Content from '../../layouts/Content'
import Router from 'next/router'

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
            <Section id="login">
                <Header large>Golem log in</Header>
                <input type="email" value={email} onChange={e => emailHandler(e)}></input>
                <input type="password" value={password} onChange={e => passwordHandler(e)}></input>
                <Button onClick={() => userLogIn()} border color={SETTINGS.green}>Log in</Button>
            </Section>
        </Content>
    )
}

export default Login