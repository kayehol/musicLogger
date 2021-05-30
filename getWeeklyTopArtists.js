const axios = require('axios')

const getWeeklyTopArtists =  async () => {
    const params = {
        method: 'user.gettopartists',
        user: process.env.LASTFM_USER,
        period: '7day',
        limit: 5,
        api_key: process.env.LASTFM_API_KEY,
        format: 'json'
    }
    try {
        const response = await axios.get(process.env.LASTFM_API_ROOT, {params})
        const artists = response.data.topartists.artist
        
        return artists
    } catch (error) {
        console.log('getWeeklyTopArtists error: ', error)
    }
    
}

module.exports = getWeeklyTopArtists