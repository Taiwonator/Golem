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
    const [modalImage, setModalImage] = useState(null)

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
                    src={image.src} 
                    width={image.width}
                    height={image.height}
                    onClick={() => setModalImage(image.src)}
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
        setModalImage(null)
    }

    const Component = generateGrid()
    
    return (
        <React.Fragment>
            <ul className={styles['gallery']}>
                {Component}
            </ul>
            <div className={styles['gallery__shadow']} />
            <Modal src={modalImage} onClick={() => closeModal()}/>
        </React.Fragment>
    )
}

interface IGalleryItem {
    src: string,
    width: number,
    height: number,
    onClick: () => void
}

const GalleryItem: React.FC<IGalleryItem> = ({ src, width, height, onClick }) => {

    return (
        <button 
            className={styles['gallery__item']}
            onClick={onClick}
        >
            <Image 
                src={src}
                alt="Image of a lady"
                width={width}
                height={height}
                loading="lazy"
                objectFit="cover"
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
    onClick: () => void
}

const Modal: React.FC<IModal> = ({ src, onClick }) => {

    const Component = (
        <li className={styles['gallery__modal']} onClick={onClick}>
            <div className={styles['gallery__modal__inner']}>
                <Image 
                    src={src}
                    alt="modal image"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </li>
    )
    return src && Component
}

export default Gallery