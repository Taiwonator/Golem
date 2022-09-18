import React, { useRef, useMemo } from 'react'
import Stack from 'src/components/layouts/Stack'
import Text from 'src/components/primitives/Text'
import Section from 'src/components/layouts/Section'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Icon from 'src/components/primitives/Icon'
import styles from './LandingPage.module.scss'
import Image, { StaticImageData } from 'next/image'
import PlaceholderImage from '../../../../public/assets/tigers.png'
import useMouse, { MousePosition } from '@react-hook/mouse-position'
import Content from 'src/components/layouts/Content'
import getRandomNumber from 'src/lib/get-random-number'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const LandingPage: React.FC = () => {
  return (
      <>
      <Content width="small">
        <Section id='mission-landing' otherClassNames={styles['landing-page']}>
            <Stack gap="large">
                <Text tag="h1" size="header--large">
                    <TextDecorator
                        underline
                        underlineCenter
                        underlineColor={'green'}
                        theme='blog'
                    >
                        Our Mission & Objectives
                    </TextDecorator>
                </Text>
                <Text className={styles["landing-page__description"]}>
                    Our mission is to accomplish the holistic emancipation of vulnerable people globally with a special focus on Nigeria through effective and sustainable address of physical, social, material, educational  and spiritual needs.
                </Text>
                <Icon name='bars--s--arrow' width={180}/>
            </Stack>
        </Section>
    </Content>
    <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce
        animatePreScroll
        offset={-100}
    >
        <ImageBubbleArea />
    </AnimationOnScroll>
    </>
  )
}


const ImageBubbleArea: React.FC = () => {
    const mouseAreaRef = useRef<HTMLDivElement>(null)
    const mouse = useMouse<HTMLDivElement>(mouseAreaRef, {
        enterDelay: 100,
        leaveDelay: 100
    })

    let startingPositions = useMemo(() => {
        let arr = []
        const max = 1
        for(var i = 0; i < max + 1; i++) {

            arr.push({
                left: ((90 / max) * i) + "%",
                top: getRandomNumber(40, 60) + "%",
            })
        }
        return arr
    }, [])

    const srcs = [PlaceholderImage]

    return (
        <div className={styles['image-bubble-area']} ref={mouseAreaRef}>
            {startingPositions.map((pos, i) => 
                <Bubble 
                    src={srcs[0]}
                    key={i}
                    startingPos={pos}
                    mouse={mouse}
                />
            )}
        </div>
    )
}

interface Pos {
    left: string
    top: string
}

interface BubbleProps {
    startingPos: Pos
    mouse: MousePosition
    src: StaticImageData
}

const Bubble: React.FC<BubbleProps> = ({ startingPos: { left, top }, mouse, src }) => {
    const getValues = useMemo(() => {
        const leftNum: RegExpMatchArray = left.match(/(\d+)/)
        const topNum: RegExpMatchArray = top.match(/(\d+)/)
        let randomNum: number = getRandomNumber(-0.25, 0.5)
        randomNum = randomNum === 0 ? 1 : randomNum

        return {leftNum, topNum, randomNum}
    }, [top, left])

    const getImageTransform = (): string => {
        const { x, y, elementWidth, elementHeight } = mouse
        if (x && y && elementWidth && elementHeight) {
            const { leftNum, topNum, randomNum } = getValues
            const moveX: number = Number(leftNum[0]) - (((x / elementWidth)) * 100)
            const moveY: number = Number(topNum[0]) - (((y / elementHeight)) * 100)
            return `
                translate(
                    ${(-moveX) * randomNum}vw,
                    ${(-moveY) * randomNum}vw
                )`
        } else {
            return ''
        }
    }
    return (
        <div
            style={{ left, top, transform: getImageTransform() }}
            className={styles['bubble']}
        >
            <Image 
                src={src}
                alt="placeholder"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                className="bubble__image"
            />
        </div>
    )
}

export default LandingPage