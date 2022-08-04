import styles from './Slideshow.module.scss'
import 'keen-slider/keen-slider.min.css'
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import ThumbnailPlugin from './helpers/ThumbnailPlugin'
import classNames from 'classnames'
import Text from 'src/components/primitives/Text'
import I from './components/I'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Stack from 'src/components/layouts/Stack'
import Image from 'next/image'
import { Config } from 'src/data/Slideshow'
import { useState } from 'react'



interface SlideProp {
  children: React.ReactNode,
  image?: {
    src: string,
    alt?: string
  }
}

interface SlideshowProps {
  config: Config
}

const Slideshow: React.FC<SlideshowProps> = ({ config={} }) => {
  const { title, slides, slideOptions={}, images } = config
  const { center, loop, hideThumbnails, sneakPeak } = slideOptions
  const [ activeSlideIndex , setActiveSlideIndex ] = useState<number>(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop,
    slides: {
      perView: sneakPeak ? 1.35 : 1,
      origin: sneakPeak ? 'center' : 'auto',
    },
    breakpoints: {
      '(min-width: 800px)': {
        slides: {
          perView: sneakPeak ? 1.5 : 1,
          origin: sneakPeak ? 'center' : 'auto',
        }
      }
    },
    slideChanged(s) {
      setActiveSlideIndex(s.track.absToRel(s.track.details.abs))
    }
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 10,
      },
      breakpoints: {
        '(min-width: 800px)': {
          slides: {
            perView: slides.length,
            spacing: 10,
          }
        },
      }
    },
    [ThumbnailPlugin(instanceRef)]
  )

  if (!slides.length) return null

  return (
    <Stack gap="large">
      {title && (
        <Text className={styles['slideshow__title']} bold>
          <I /><TextDecorator color={SETTINGS.orange}>{title}</TextDecorator>
        </Text>
      )}
      <div className={styles['slideshow__content']}>
        <div ref={sliderRef} className={classNames(
          "keen-slider",
          styles['slideshow__slides'],
          sneakPeak && "keen-slider--sneak-peak",
        )}>
          {slides.map((slide, i) => 
            <Slide
              key={i}
              className={classNames(`keen-slider__slide number-slide${i+1}`)}
              center={center}
              active={activeSlideIndex === i}
            >
              {slide}
            </Slide>
          )}
        </div>
        {images && (<div className={classNames(styles['slideshow__image'])}>
          <Image 
            src="/assets/tigers.png"
            alt="placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>
        )}
      </div>

      {!hideThumbnails && (
        <div ref={thumbnailRef} className={classNames("keen-slider thumbnail", styles['slideshow__thumbnails'])}>
          {slides.map((slide, i) => 
            <ThumbnailButton key={i} className={`keen-slider__slide number-slide${i+1}`} />
          )}
        </div>
      )}
    </Stack>
  )
}

interface ThumbnailButtonProps {
  className?: string
}

const ThumbnailButton: React.FC<ThumbnailButtonProps> = ({ className }) => {
  return (
    <button className={classNames(className, styles['slideshow__thumbnail'])} />
  )
}

interface SlideProps {
  children: React.ReactNode
  className?: string
  center?: boolean
  active?: boolean
}

const Slide: React.FC<SlideProps> = ({ active, children, className, center }) => {
  return (
    <div className={classNames(
      styles['slideshow__slide'],
      center && styles['slideshow__slide--center'],
      active && 'active',
      className
    )}>
      {children}
    </div>
  )
}

export default Slideshow