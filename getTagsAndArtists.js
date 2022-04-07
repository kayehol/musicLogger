const getWeeklyTopArtists = require('./getWeeklyTopArtists.js')
const httpService = require('./httpService.js')

const getTagsAndArtists = async () => {
    try {
        const topArtists = await getWeeklyTopArtists()

        const results = topArtists.map(async artist => {
            const params = {
                method: 'artist.gettoptags',
                artist: artist.name,
                api_key: process.env.LASTFM_API_KEY,
                format: 'json'
            }
            const response = await httpService(process.env.LASTFM_API_ROOT, params)
            const tagName = response.data.toptags.tag[0].name

            return tagName
        })
        const tagsList = await Promise.all(results)

        return { tags: tagsList, artists: topArtists }
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = getTagsAndArtists
