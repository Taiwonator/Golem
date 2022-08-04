import styles from './PageStack.module.scss'
import classNames from 'classnames'

type PageStackSizes = "small" | "medium" | "large"

interface PageStackProps {
  children: React.ReactNode,
  className?: string
  gap?: PageStackSizes
}

const PageStack: React.FC<PageStackProps> = ({ children, gap="medium", className }) => {
  return (
    <div className={classNames(
      styles['page-stack'],
      styles[`page-stack--${gap}`],
      className
    )}>
      {children}
    </div>
  )
}

export default PageStack