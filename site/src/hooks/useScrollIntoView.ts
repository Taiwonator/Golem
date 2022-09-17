import { useRef, MutableRefObject } from 'react'

type UseScrollIntoView = () => [MutableRefObject<HTMLDivElement | null>, () => void] 

export const useScrollIntoView: UseScrollIntoView = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const scrollIntoView = () => ref.current.scrollIntoView({block: "center"})
    return [ref, scrollIntoView]
}