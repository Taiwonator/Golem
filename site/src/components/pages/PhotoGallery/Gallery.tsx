import React, {useState} from 'react'
import { useResponsiveWidth } from 'src/hooks/useResponsiveWidth'
import styles from './Gallery.module.scss'
import Image from 'next/image'
import { useScroll } from 'src/hooks/useScroll'
import { IContainer } from 'src/types/react-types'

interface IGallery {
    images: string[]
}

const Gallery: React.FC<IGallery> = () => {

    const path = require.context('./photos', false)
    const keys = path.keys().map(path)
    let images = keys.map(k => k.default)

    const device = useResponsiveWidth()
    const [modalImage, setModalImage] = useState<any>({})

    function generateGrid() {
        let Grid
        switch(device) {
            case 'mobile':
                Grid = generateColumns(images, 2)
                break;
            case 'tablet':
                Grid = generateColumns(images, 3)
                break;
            case 'desktop':
                Grid = generateColumns(images, 5)
                break;
            default:
                break;
        }

        console.log('grid rerender')
        return Grid
    }

    function generateColumns(images, columnCount) {
        let columns = []
        // setVarience(Array(columnCount).fill(Math.random()))
        for(var i = 0; i < columnCount; i++) {
            columns.push([])
        }

        for(var i = 0; i < images.length; i++) {
            const startIndex = 1
            const columnIndex = (i + startIndex) % columnCount
            const image = images[i]
            columns[columnIndex].push(
                <GalleryItem 
                    key={`item-${i}`} 
                    blurDataURL={image.blurDataURL}
                    alt={image.src}
                    src={image.src} 
                    width={image.width}
                    height={image.height}
                    onClick={() => setModalImage(image)}
                />
            )
        }
        
        const Columns = columns.map((column, i) => {
            return (
                <GalleryColumn key={`column-${i}`} varience={(((i + 2) % columnCount) * 0.1)}>
                    {column}
                </GalleryColumn>
            )
        })
        return Columns
    }

    const closeModal = () => {
        setModalImage({})
    }

    const Component = generateGrid()
    
    return (
        <React.Fragment>
            <ul className={styles['gallery']}>
                {Component}
            </ul>
            <div className={styles['gallery__shadow']} />
            <Modal 
                src={modalImage.src} 
                onClick={() => closeModal()}
                alt={modalImage.src}
                blurDataURL={modalImage.blurDataURL}
            />
        </React.Fragment>
    )
}

interface IGalleryItem {
    src: string,
    alt?: string,
    width: number,
    height: number,
    onClick: () => void
    blurDataURL?: string
}

const GalleryItem: React.FC<IGalleryItem> = ({ src, alt, width, height, onClick, blurDataURL }) => {

    return (
        <button 
            className={styles['gallery__item']}
            onClick={onClick}
        >
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                objectFit="cover"
                blurDataURL={blurDataURL}
                placeholder="blur"
            />
        </button>
    )
}

interface IGalleryColumn extends IContainer {
    varience: number
}

const GalleryColumn: React.FC<IGalleryColumn> = ({ children, varience }) => {
    const scrollY = useScroll()

    return (
        <div className={styles['gallery__column']} style={{ transform: `translateY(-${scrollY * varience}px)` }}>
            {children}
        </div>
    )
}

interface IModal {
    src: string,
    alt?: string,
    blurDataURL?: string
    onClick: () => void
}

const Modal: React.FC<IModal> = ({ src, alt, blurDataURL, onClick }) => {

    const Component = (
        <li className={styles['gallery__modal']} onClick={onClick}>
            <div className={styles['gallery__modal__inner']}>
                <Image 
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                    blurDataURL={blurDataURL}
                    placeholder="blur"
                />
            </div>
        </li>
    )
    if(src) return Component
    return null
}

export default Gallery