import React, { useState } from 'react'
import Stack from 'src/components/layouts/Stack'
import Icon from '../../primitives/Icon'
import Text from '../../primitives/Text'
import styles from './FAQs.module.scss'
import Minus from './svgs/Minus'
import Plus from './svgs/Plus'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Content from 'src/components/layouts/Content'
import Button from 'src/components/primitives/Button'
import SETTINGS from 'src/styles/settings'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface FAQsProps {
  faqs?: any[]
}

const FAQs: React.FC<FAQsProps> = ({ faqs = [] }) => {
  const [visibleFaqs, setVisibleFaqs] = useState(3)

  return (
    <Content className={styles['faqs']} width="medium">
      <Stack gap="large">
        <Text tag="h2" size="header--large"><TextDecorator underline underlineColor='green' underlineCenter>FAQs</TextDecorator></Text>
        {faqs.map((faq, i) => {
          return i < visibleFaqs ? <FAQ key={faq.question} {...faq} /> : null
        })}
        {visibleFaqs <= faqs.length && (
          <Button
            onClick={() => setVisibleFaqs(visibleFaqs + 3)}
            otherClassNames={styles['faqs__pagination-button']}
            border
            color={SETTINGS.darkgreen
            }>
            Show more
          </Button>
        )}
        {!faqs.length && (<Text className={styles['faqs__empty-label']} size="header--medium">It seems like we do not get asked any questions :/</Text>)}
      </Stack>
    </Content>
  )
}

interface FAQProps {
  question: string
  answer: any
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  const Icon = open ? Minus : Plus

  return (
    <div className={styles['faq']}>
      <div className={styles['faq__question']}>
        <button className={styles['faq__toggle']} onClick={() => setOpen(!open)}>
          <span className={styles['faq__icon']}><Icon /></span>
          <Text tag="h3" size="header--small" bold>{question}</Text>
        </button>
      </div>
      {open && (
        <div className={styles['faq__answer']}>
          <TinaMarkdown content={answer} />
        </div>
      )}
    </div>
  )
}

export default FAQs