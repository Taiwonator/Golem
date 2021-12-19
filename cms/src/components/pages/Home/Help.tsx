import React from 'react'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Section from '../../layouts/Section'
import styles from './Help.module.scss'

const Help: React.FC = props => {
    return (
        <Section id='help' otherClassNames={styles['help']}>
            <Header large><TextDecorator underline underlineColor='green' underlineCenter>How to help</TextDecorator></Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue. Maecenas in lorem non ligula pellentesque efficitur vitae et tellus. Mauris quis sodales orci. Nunc scelerisque, nunc et sollicitudin venenatis, orci lacus fermentum purus, et consectetur ante urna non justo. Donec molestie pretium nisl sit amet pharetra. Etiam finibus turpis et suscipit dignissim.</p>
            <Button color={SETTINGS.orange} border>Donate now</Button>
        </Section>
    )
}

export default Help