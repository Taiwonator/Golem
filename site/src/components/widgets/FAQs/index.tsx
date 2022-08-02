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

const data = [
  {
    question: "Where does the money go?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet."
  },
  {
    question: "Example Question 1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "How do I see what impact I’m making?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet."
  },
  {
    question: "Example Question 2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Example Question 4",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Example Question 5",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Example Question 6",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

const FAQs: React.FC = props => {
    const [visibleFaqs, setVisibleFaqs] = useState(3)

    return (
      <Content className={styles['faqs']} width="medium">
        <Stack gap="large">
          <Text tag="h2" size="header--large"><TextDecorator underline underlineColor='green' underlineCenter>FAQs</TextDecorator></Text>
          {data.map((faq, i) => {
            return i < visibleFaqs ? <FAQ key={faq.question} {...faq} /> : null
          })}
          {visibleFaqs <= data.length && (
            <Button
              onClick={() => setVisibleFaqs(visibleFaqs + 3)}
              otherClassNames={styles['faqs__pagination-button']}
              border
              color={SETTINGS.darkgreen
            }>
              Show more
            </Button>
          )}
        </Stack>
      </Content>
    )
}

interface FAQProps {
  question: string
  answer: string
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
        <Text>{answer}</Text>
        </div>
      )}
    </div>
  )
}

export default FAQs