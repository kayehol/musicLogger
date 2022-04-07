const emoji = require('node-emoji')
const getTagsAndArtists = require('./getTagsAndArtists.js')

const getFormattedPost = async() => {
    try {
        const { tags: tagsList, artists: topArtists } = await getTagsAndArtists()
    
        const listArtists = topArtists.map(artist => {
            return artist['@attr'].rank + '. ' + artist.name
        })

        const formattedArtists = listArtists.join(' | ')
        const formattedTags = 'tags: ' + tagsList.join(', ')

        const statusPost = emoji.get('musical_keyboard') + emoji.get('notes') + emoji.get('man_dancing') + 
                            '\n' + formattedArtists + '\n' + formattedTags + '\n'
        
        return statusPost
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = getFormattedPost