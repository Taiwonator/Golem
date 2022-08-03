import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';
import { AiFillFacebook, AiTwotoneCalendar, AiOutlineEye } from 'react-icons/ai';
import { Calendar, Eye } from './vanilla-icons';

interface IIcon {
    fa?: string,
    width?: number, 
    height?: number,
    name?: string,
    color?: string
}

const Icon: React.FC<IIcon> = ({ fa, height, width, name, color }) => {

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
                Component = <Image src={`/assets/svg/${name}.svg`} width={width || '100%'} height={height || '100%'} alt={'logo'} objectFit="contain" />

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