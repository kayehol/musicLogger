require('dotenv').config()
const emoji = require('node-emoji')
const T = require('twitter')
//const express = require('express')
//const app = express()

const getWeeklyTopArtists = require.main.require('./getWeeklyTopArtists.js')
const getTags = require.main.require('./getTags.js')

const twitter = new T({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const formattedPost = async() => {
    const topArtists = await getWeeklyTopArtists()
    const tagsList = await getTags()

    const listArtists = topArtists.map(artist => {
        return artist['@attr'].rank + '. ' + artist.name
    })

    // const artistsPics = topArtists.map(artist => {
    //     return artist.image[2]['#text']
    // })

    const formattedArtists = listArtists.join(' | ')
    const formattedTags = 'tags: ' + tagsList.join(', ')
    //const listPics = artistsPics.join(',')7

    const statusPost = emoji.get('musical_keyboard') + emoji.get('notes') + emoji.get('man_dancing') + 
                        '\n' + formattedArtists + '\n' + formattedTags + '\n'

    return statusPost
}

exports.main = async() => {
    formattedPost().then(data => {
        twitter.post(process.env.TWITTER_API_ROOT, {status: data}, (error, tweet, response) => {
            if (error) throw error;
            console.log(tweet);
        })
        //console.log('data', data)
    })
}

// app.get('/postar', function(req, res) {
//     main()
//     res.send(200, "TWEET POSTADO")
// })