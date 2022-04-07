const httpService = require('./httpService.js')

const getWeeklyTopArtists =  async () => {
    const params = {
        method: 'user.gettopartists',
        user: process.env.LASTFM_USER,
        period: '7day',
        limit: 5,
        api_key: process.env.LASTFM_API_KEY,
        format: 'json'
    }
    if (!process.env.LASTFM_API_ROOT || !process.env.LASTFM_API_KEY) {
        throw new Error('Could not get environment variables')  
    } 

    try {
        const response = await httpService(process.env.LASTFM_API_ROOT, params)
        const artists = response.data.topartists.artist
        return artists
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = getWeeklyTopArtists
