import faker from 'faker'

export const generateImageUrls = (photoCount) => {
    let images = []
    for(var i = 0; i < photoCount; i++) {
        images.push({ 
            src: faker.random.image(),
            width: 400,
            height: Math.max(250, 700 * Math.random())
        })
    }
    return images
}
