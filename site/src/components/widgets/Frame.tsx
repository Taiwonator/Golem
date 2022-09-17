import React from 'react'
import styles from './Frame.module.scss'
import Image from 'next/image'
import Button from '../primitives/Button'
import classNames from 'classnames'
import SETTINGS from 'src/styles/settings'

interface IFrame {
    loading?: boolean,
    square?: boolean
    src?: string
}

const Frame: React.FC<IFrame> = ({ loading, square, src }) => {

    const className = classNames(
        styles['frame'],
        square && styles['frame--square'],
    )

    return (
        <Button border otherClassNames={className} color={SETTINGS.white}>
            <div className={styles['frame__inner']}>
                {loading && (
                    <span className={styles['frame__loader']} />
                )}
                {src && (
                    <Image 
                        src={src}
                        layout='fill'
                        objectFit='cover'
                        alt="Image of tigers"
                    />
                )}
            </div>
        </Button>
        
    )
}

export default Frame