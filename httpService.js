const axios = require('axios')

const httpService = async (url, params) => {
    try {
        const result = await axios.get(url, {params})
        return result
    } catch (err) {
        throw new Error('HTTP Request Error:', err.message)
    } 
}

module.exports = httpService
