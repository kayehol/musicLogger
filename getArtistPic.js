const ddg = require('duckduckgo-images-api')
const axios = require('axios')

//TODO: Tratar erros

const getArtistPic = async (artist) => {
    const results = await ddg.image_search({ query: artist, iterations: 1 })
    const slicedResults = results.slice(0, 3)
    const randomPic = slicedResults[Math.floor(Math.random()*slicedResults.length)]    

    const response = await axios.get(randomPic.image, {responseType: 'arraybuffer'})
    const image64 = Buffer.from(response.data, 'binary').toString('base64')

    return image64
}

module.exports = getArtistPic