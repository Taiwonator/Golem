import React from 'react'
import SETTINGS from '../../styles/settings'
import classNames from 'classnames'
import styles from './Circle.module.scss'

interface ICircle {
    children?: React.ReactNode,
    color?: string,
    otherClassNames?: string
}

const Circle: React.FC<ICircle> = ({ children, color, otherClassNames }) => {
    color = color || SETTINGS.green

    return (
        <div 
            className={classNames(
                styles['circle'],
                children && styles['circle--has-child'],
                otherClassNames
        )}>
            {children &&   
            <div className={styles['circle__content']}>
                { children }
            </div>}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 366.9 394.29"
            >
                <path d="M517.33,510.12a182.91,182.91,0,1,1,71.41-14.42A182.42,182.42,0,0,1,517.33,510.12Zm0-297.36A113.91,113.91,0,1,0,631.25,326.67,114,114,0,0,0,517.33,212.76Z" transform="translate(-333.89 -143.22)" fill={SETTINGS.black} />
                <path d="M517.33,537.51a182.85,182.85,0,1,1,71.41-14.41A182.06,182.06,0,0,1,517.33,537.51Zm0-297.36A113.92,113.92,0,1,0,631.25,354.07,114.05,114.05,0,0,0,517.33,240.15Z" transform="translate(-333.89 -143.22)" fill={SETTINGS.black} />
                <path d="M517.33,152.6a174.07,174.07,0,0,0,0,348.14h0A174.08,174.08,0,0,0,691.41,326.67h0A174.07,174.07,0,0,0,517.34,152.6Zm0,297.36A123.28,123.28,0,0,1,394.05,326.67h0A123.29,123.29,0,1,1,517.34,450Z" transform="translate(-333.89 -143.22)" fill={color} />
            </svg>
        </div>
        
    )
}

export default Circle