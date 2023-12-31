
import React, { useState, useEffect, useRef } from 'react'
import Section from '../../layouts/Section'
import styles from './Videos.module.scss'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'
import Slideshow from 'src/components/widgets/Slideshow/Slideshow'

const Videos: React.FC = () => {
    return (
      <Section id='videos' otherClassNames={styles['videos__section']}>
        <Stack gap="large">
          <Text tag="h2" size="header--large">
              <TextDecorator underline underlineColor='green'>On the field</TextDecorator>
          </Text>
          <Slideshow config={{
            title: 'Videos from our missionary work',
            slides: [
              <Video key={'video-1'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.09.mp4')} />,
              <Video key={'video-2'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.10 (1).mp4')} />,
              <Video key={'video-3'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.10.mp4')} />,
              <Video key={'video-4'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.12.mp4')} />,
            ]
          }} />
        </Stack>
      </Section>
    )
}

const Video: React.FC<{src: string}> = ({src}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={styles['video__wrapper']}>
      <video ref={videoRef} src={src} controls={true} />
    </div>
  );
}

export default Videos