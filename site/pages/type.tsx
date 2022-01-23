import type { NextPage } from 'next'
import Text from 'src/components/primitives/Text'
import Content from '../src/components/layouts/Content'

const PhotoGallery: NextPage = () => {

  return (
      <Content>
          <Text size="header--large" tag="h1">This is a title</Text>
          <Text size="header" tag="h1">This is a title</Text>
          <Text size="header--small" tag="h2">Sub title to title</Text>
          <Text bold tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text size="header" tag="h2">Small text below</Text>
          <Text size="standard--small" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text size="standard--small" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text size="standard--small" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text size="header" tag="h2">Large text below</Text>
          <Text bold uppercase size="standard--large" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text size="standard--large" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
          <Text size="standard--large" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, est nulla error porro accusantium aut saepe id exercitationem dolorem, ullam dolore nobis. Sed soluta consequatur reprehenderit voluptatum excepturi vel!</Text>
      </Content>
  )
}

export default PhotoGallery