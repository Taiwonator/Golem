import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';
import { AiFillFacebook, AiTwotoneCalendar, AiOutlineEye } from 'react-icons/ai';
import { Calendar, Eye } from './vanilla-icons';
import styles from './Icon.module.scss'
import { ExecSyncOptionsWithStringEncoding } from 'node:child_process';
import classNames from 'classnames'

interface IIcon {
    fa?: string,
    width?: number, 
    height?: number,
    name?: string,
    color?: string
    className?: string
}

const Icon: React.FC<IIcon> = ({ fa, height, width, name, color, className }) => {

    let Component
    if(fa) {
        switch(fa) {
            case 'calendar':
                Component = <FaBeer />
                break
            default:
                Component = <AiFillFacebook />
                break
        }
        return Component
    }

    if(name) {
        switch(name) {
            case 'eye':
                Component = <Eye color={color} />
                break
            case 'calendar':
                Component = <Calendar color={color} />
                break
            default:
                Component = 
                <span
                    className={classNames(styles['icon--image'], className)} 
                    style={{ width, height: width, position: "relative" }}>
                    <Image
                        src={`/assets/svg/${name}.svg`}
                        layout="fill" 
                        alt={'logo'}
                        objectFit="contain" 
                    />
                </span>

                break
        }
        return Component
    }
}

export default Icon

// logo
// bar--s
// bar--ne
// bar--nw

// Add bootstrap fonts