import React from 'react'
import Grid from 'src/components/layouts/Grid'
import Section from 'src/components/layouts/Section'
import Content from '../../layouts/Content'

const Blog: React.FC = props => {

    return (
        <Content width="medium">
            <Section id="blog">
                <Grid />
            </Section>
        </Content>
    )
}

export default Blog