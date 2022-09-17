import React from 'react'

export interface IContainer {
    children: React.ReactNode,
    otherClassNames?: string
    className?: string
}