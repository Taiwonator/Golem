import React, { useRef, useEffect } from 'react'
import Section from '../../layouts/Section'
import Stack from '../../layouts/Stack'
import Text from '../../primitives/Text'
import TextDecorator from '../../primitives/TextDecorator'
import styles from './ChristmasAtGolem.module.scss'

const ChristmasAtGolem: React.FC = () => {
  return (
    <Section id='christmas-at-golem' otherClassNames={styles['christmas__section']}>
      <Stack gap="large">
        <Text tag="h2" size="header--large" className={styles['christmas__main-title']}>
          🌟 <TextDecorator>Christmas at GOLEM</TextDecorator> 🎁
        </Text>

        <div className={styles['christmas__grid']}>
          {/* Left side - Video and Image */}
          <div className={styles['christmas__video-section']}>
            <Text tag="h3" size="header--small" className={styles['christmas__subtitle']}>
              Christmas Love
            </Text>
            <Video src={'https://golem-uploads-bucket.s3.eu-west-2.amazonaws.com/videos/WhatsApp+Video+2025-12-20+at+22.47.39.mp4'} />
            <div className={styles['christmas__image-wrapper']}>
              <img
                src="https://golem-uploads-bucket.s3.eu-west-2.amazonaws.com/gallery/WhatsApp+Image+2025-09-23+at+00.18.00+(1).jpeg"
                alt="Christmas at GOLEM"
                className={styles['christmas__image']}
              />
            </div>
          </div>

          {/* Right side - Newsletter */}
          <div className={styles['christmas__newsletter']}>
            <div className={styles['christmas__image-wrapper']}>
              <img
                src="/assets/season-of-love.jpeg"
                alt="Season of Love Newsletter"
                className={styles['christmas__image']}
              />
            </div>
          </div>
        </div>
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

export default ChristmasAtGolem

