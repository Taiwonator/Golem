import Link from "../Link"
import Text from "../Text"
import styles from './SlateSerialiser.module.scss'
import Image from 'next/image'
import SETTINGS from "src/styles/settings"
import cx from "classnames"
import Stack from "src/components/layouts/Stack"

interface SlateSerialiserProps {
    data: any,
}

const serialise = (data: any): any => {
    const Component = data?.map((node, i) => {
        if(node.type) {
            switch(node.type) {
                case 'h1':
                    return <Text key={i} size="header--large" tag={node.type}>{serialise(node.children)}</Text>
                case 'h2':
                    return <Text key={i} size="header--medium" tag={node.type}>{serialise(node.children)}</Text>
                case 'h3':
                    return <Text key={i}  size="header--small" tag={node.type}>{serialise(node.children)}</Text>
                case 'h4':
                    return <Text key={i} size="standard--medium" tag={node.type}>{serialise(node.children)}</Text>
                case 'h5':
                    return <Text key={i} size="standard--small"  tag={node.type}>{serialise(node.children)}</Text>
                case 'h6':
                    return <Text key={i} size="standard--small" tag={node.type}>{serialise(node.children)}</Text>
                case 'li':
                    return <li  key={i}><Text size="standard--medium">{serialise(node.children)}</Text></li>
                case 'ol':
                    return <ol  key={i}>{serialise(node.children)}</ol>
                case 'indent':
                    return <div key={i} className={styles['slate-serialiser__indent']}>{serialise(node.children)}</div>
                case 'link':
                    return <Link key={i} to={node.url} external={node.newTab}>{serialise(node.children)}</Link>
                case 'upload':
                    return (
                        <div key={i} className={styles['slate-serialiser__image-wrapper']}>
                            <div className={styles['slate-serialiser__image']}>
                                <Image layout="fill" src={node.value.url} alt={node.value.filename} objectFit="contain" />
                            </div>
                            <Text className={styles['slate-serialiser__image__filename']} bold tag="small" size="standard--small">{node.value.filename}</Text>
                        </div>
                    )
                default: 
                    break
            }
        }

        if(node.children) return <p key={i}>{serialise(node.children)}</p>
        
        if(node.bold) return <span key={i} className={styles['slate-serialiser__bold']}>{node.text}</span>
        if(node.italic) return <span key={i} className={styles['slate-serialiser__italic']}>{node.text}</span>
        if(node.underline) return <span key={i} className={styles['slate-serialiser__underline']}>{node.text}</span>
        if(node.strikethrough) return <span key={i} className={styles['slate-serialiser__strikethrough']}>{node.text}</span>

        if(node.code) return<code key={i}>{node.text}</code>

        return node.text
    })

    return Component
}

const SlateSerialiser: React.FC<SlateSerialiserProps> = ({ data }) => {
    return <div className={cx(styles['slate-serialiser'])}>
        <Stack gap="large">
            {serialise(data)}
        </Stack>
    </div>
}

export default SlateSerialiser