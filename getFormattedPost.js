const getWeeklyTopArtists = require('./getWeeklyTopArtists.js')
const getTags = require('./getTags.js')
const getMediaIds = require('./getMediaIds.js')
const emoji = require('node-emoji')


const getFormattedPost = async() => {
    try {
        const topArtists = await getWeeklyTopArtists()
        const tagsList = await getTags()

        const listArtists = topArtists.map(artist => {
            return artist['@attr'].rank + '. ' + artist.name
        })

        const formattedArtists = listArtists.join(' | ')
        const formattedTags = 'tags: ' + tagsList.join(', ')

        const statusPost = emoji.get('musical_keyboard') + emoji.get('notes') + emoji.get('man_dancing') + 
                            '\n' + formattedArtists + '\n' + formattedTags + '\n'
        
        //getMediaIds(listArtists)

        return statusPost
    } catch(err) {
        throw err
    }    
}

module.exports = getFormattedPost