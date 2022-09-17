import { useRef, MutableRefObject } from 'react'

type UseScrollIntoView = () => [MutableRefObject<HTMLElement | null>, () => void] 

export const useScrollIntoView: UseScrollIntoView = () => {
    const ref = useRef<HTMLElement | null>(null)
    const scrollIntoView = () => ref.current.scrollIntoView({block: "center"})
    return [ref, scrollIntoView]
}