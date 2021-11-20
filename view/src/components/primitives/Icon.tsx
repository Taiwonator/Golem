import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';
import { AiFillFacebook, AiTwotoneCalendar, AiOutlineEye } from 'react-icons/ai';

interface IIcon {
    fa?: string,
    width?: number, 
    height?: number,
    name?: string
}

const Icon: React.FC<IIcon> = ({ fa, height, width, name }) => {

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
    }

    return fa ? Component : <Image src={`/assets/svg/${name}.svg`} width={width || '100%'} height={height || '100%'} alt={'logo'} />
}

export default Icon

// logo
// bar--s
// bar--ne
// bar--nw

// Add bootstrap fonts