import React from 'react'
import Image from 'next/image'

interface IIcon {
    name: string
}

const Icon: React.FC<IIcon> = ({ name }) => {
    return (
        <Image src={`/assets/svg/${name}.svg`} width={53} height={66} alt={'logo'} />
    )
}

export default Icon

// logo
// bar--s
// bar--ne
// bar--nw