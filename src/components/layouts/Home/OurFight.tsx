import classNames from 'classnames'
import React from 'react'
import Section from '../Section'
import Image from 'next/image'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Button from 'src/components/primitives/Button'
import styles from './OurFight.module.scss'
import Icon from 'src/components/primitives/Icon'

const OurFight: React.FC = props => {

    return (
        <Section otherClassNames={styles['our-fight']}>

            <div className={styles['our-fight__content']}>
                <Header large><TextDecorator underline underlineColor='green'>Our Fight</TextDecorator><Icon name="logo" /></Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue. Maecenas in lorem non ligula pellentesque efficitur vitae et tellus. Mauris quis sodales orci. Nunc scelerisque, nunc et sollicitudin venenatis, orci lacus fermentum purus, et consectetur ante urna non justo. Donec molestie pretium nisl sit amet pharetra. Etiam finibus turpis et suscipit dignissim.</p>
                <Button border>Read More</Button>
            </div>
            
            <div className={styles['our-fight__desktop-image']}>
                <Image 
                    src="/assets/cross.png"
                    width={520.99}
                    height={652.82}
                    alt="logo"
                />
            </div>

        </Section>
    )
}

export default OurFight