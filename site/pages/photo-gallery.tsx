import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/PhotoGallery'
import { GalleryProps } from 'src/components/pages/PhotoGallery/Gallery'
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const PhotoGallery: NextPage<GalleryProps> = (props) => {

  return (
    <BaseLayout 
      pageTitle='Golem | Photo Gallery'
      metaData={{
        description: 'A quick look at the change we are making.',
        keywords: 'Photos, Golem, Pictures, Gallery, Volunteers, Missionary, Ministry'
      }}
    >
      <Main {...props} />
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const client = new S3Client({
    region: process.env.AWS_API_REGION,
    credentials: {
      accessKeyId: process.env.AWS_API_KEY,
      secretAccessKey: process.env.AWS_API_SECRET,
    },
  });

    var awsParams = { 
        Bucket: 'golem-uploads-bucket',
    }

    const command = new ListObjectsCommand(awsParams);
    const response = await client.send(command);
    const allFilenames = response.Contents.map(c => c.Key)
    const galleryFilenames = allFilenames.filter(f => f.split('/').filter(x => x != '').length > 1 && f.includes('gallery'))
    const modifiedGalleryFilenames = galleryFilenames.map(f => f.split(' ').join('+'))
    const imageUrls = modifiedGalleryFilenames.map(f => `${process.env.AWS_BUCKET_API_URL}/${f}`)

  return {
    props: {
      imageUrls
    },
  }
}

export default PhotoGallery