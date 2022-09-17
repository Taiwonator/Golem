export interface Config {
  title?: string
  slides: React.ReactNode[]
  slideOptions?: {
    center?: boolean
    hideThumbnails?: boolean,
    loop?: boolean,
    sneakPeak?: boolean,
    perViewOptions?: {
      mobile?: { 
        perView?: number,
        origin?: string
      },
    tablet?: { 
        perView?: number,
        origin?: string
      }  
    }
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
export * from './field-reports'