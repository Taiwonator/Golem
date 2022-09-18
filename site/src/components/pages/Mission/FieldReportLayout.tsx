import React from 'react'
import Button from 'src/components/primitives/Button'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Content from '../../layouts/Content'
import styles from './FieldReportLayout.module.scss'
import SlateSerialiser from 'src/components/primitives/SlateSerialiser/SlateSerialiser'
import I from 'src/components/widgets/Slideshow/components/I'
import SETTINGS from 'src/styles/settings'
import { formatDate } from 'src/lib/date'
import Link from 'src/components/primitives/Link'
import { useRouter } from 'next/router'

interface FieldReportLayoutProps {
    publishedDate: Date,
    title: string,
    content: string,
    siteUrl?: string
}

const FieldReportLayout: React.FC<FieldReportLayoutProps> = ({ publishedDate, title, content, siteUrl }) => {  

    const router = useRouter()
        
    return (
        <article className={styles['field-report-layout']}>
            <Content width='small'>
                <div className={styles['field-report-layout__header']}>
                    <Text className={styles['field-report-layout__title']} bold>
                            <I /><TextDecorator color={SETTINGS.orange}>{title} - {formatDate(publishedDate)}</TextDecorator>
                    </Text>
                </div>
                <div className={styles['field-report-layout__content']}>
                   <SlateSerialiser data={content} />
                </div>
                <Button border otherClassNames={styles['field-report-layout__share-button']}>
                    <Link to={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${router.asPath}`} external>
                        <p><Icon fa='hello'/> Share on <span>facebook</span></p>
                    </Link>
                </Button>
            </Content>
        </article>
    )
}

export default FieldReportLayout