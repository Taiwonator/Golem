import styles from './FieldReport.module.scss'

import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'
import { formatDate } from 'src/lib/date'
import Button from 'src/components/primitives/Button'
import SETTINGS from 'src/styles/settings'
import Link from 'src/components/primitives/Link'
import cx from 'classnames'

interface FieldReportProps {
    i: number
    title: string
    heroImage: {
        url: string
        alt?: string
    }
    publishedDate: string
    slug: string
}

const FieldReport: React.FC<FieldReportProps> = ({ i, title, heroImage, publishedDate, slug }) => {
    return (
        <Stack className={cx(styles['field-report'], i === 0 && styles['field-report--bordered'])}>
            {i === 0 && (<Text tag="p" size="standard--small" className={styles['field-report__latest']}>LATEST REPORT!!!</Text>)}
            <div className={styles['field-report__image']}>
                <img
                    src={heroImage?.url || '/assets/houses.jpg'}
                    alt={heroImage?.alt}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            {publishedDate && (<Text tag="p" size="standard--medium" className={styles['field-report__date']}>{formatDate(publishedDate)}</Text>)}
            <Button border color={SETTINGS.darkgreen} otherClassNames={styles['field-report__button']}>
                <Link to={`/mission/${slug}`}>
                    Read {title}
                </Link>
            </Button>
            {i === 0 && (<Text tag="p" size="standard--small" className={styles['field-report__latest']}>LATEST REPORT!!!</Text>)}

        </Stack>
    )
}

export default FieldReport