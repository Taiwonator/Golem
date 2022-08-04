export interface Config {
  title?: string
  slides: React.ReactNode[]
  slideOptions?: {
    center?: boolean
    hideThumbnails?: boolean,
    loop?: boolean,
    sneakPeak?: boolean
  }
  images?: ImageProps[]
}

interface ImageProps {
  src: string
  alt?: string
}

export * from './mission'
export * from './about'
export * from './projects'