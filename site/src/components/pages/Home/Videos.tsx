
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
            <Video key={'video-13'} src={require('../../../../public/assets/video/WhatsApp Video 2025-11-26 at 17.45.17.mp4')} />,
            <Video key={'video-12'} src={require('../../../../public/assets/video/WhatsApp Video 2025-09-24 at 09.10.37.mp4')} />,
            <Video key={'video-11'} src={require('../../../../public/assets/video/WhatsApp Video 2025-10-01 at 06.47.49.mp4')} />,
            <Video key={'video-10'} src={require('../../../../public/assets/video/WhatsApp Video 2025-09-27 at 08.50.22.mp4')} />,
            <Video key={'video-9'} src={require('../../../../public/assets/video/WhatsApp Video 2025-09-23 at 00.17.41.mp4')} />,
            <Video key={'video-8'} src={require('../../../../public/assets/video/WhatsApp Video 2025-09-23 at 00.17.41 (2).mp4')} />,
            <Video key={'video-7'} src={require('../../../../public/assets/video/WhatsApp Video 2025-09-23 at 00.17.41 (1).mp4')} />,
            <Video key={'video-6'} src={require('../../../../public/assets/video/WhatsApp Video 2025-09-23 at 00.17.39.mp4')} />,
            <Video key={'video-5'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.10.mp4')} />,
            <Video key={'video-4'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.10 (1).mp4')} />,
            <Video key={'video-3'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.09.mp4')} />,
            <Video key={'video-2'} src={require('../../../../public/assets/video/WhatsApp Video 2023-12-29 at 15.27.12.mp4')} />,
            <Video key={'video-1'} src={require('../../../../public/assets/video/WhatsApp Video 2024-09-21 at 05.06.18.mp4')} />,
          ]

        }} />
      </Stack>
    </Section>
  )
}

const Video: React.FC<{ src: string }> = ({ src }) => {
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