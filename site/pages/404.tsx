import { NextPage } from "next"
import Content from "src/components/layouts/Content"
import Stack from "src/components/layouts/Stack"
import Button from "src/components/primitives/Button"
import Text from "src/components/primitives/Text"
import TextDecorator from "src/components/primitives/TextDecorator"
import SETTINGS from "src/styles/settings"

const NotFound: NextPage = () => {
  return(
    <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <Content width="small">
        <Stack gap="small">
          <Text size="header--large">
            <TextDecorator color={SETTINGS.orange} underline underlineCenter underlineColor="green" bold>
              404
            </TextDecorator>
          </Text>
          <Text>Whoops looks like this page does not exist</Text>
          <Button border color={SETTINGS.darkgreen}>Head back home</Button>
        </Stack>
      </Content>
    </div>
  )
}

export default NotFound