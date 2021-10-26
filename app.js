require('dotenv').config()
const T = require('twitter')
const getFormattedPost = require('./getFormattedPost.js')
//const getMediaIds = require.main.require('./getMediaIds.js')

const twitter = new T({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

//const images = await getMediaIds()

const main = async() => {
    getFormattedPost().then(data => {
        //   twitter.post(
            //       process.env.TWITTER_API_ROOT, 
            //       { status: data/*, media_ids: images*/ }, 
            //       (error, tweet, response) => {
                //          if (error) throw error;
                //          console.log(tweet);
                //   })
       console.log('data', data/*, 'media_ids:', images*/)    
    }).catch((err) => {
        throw err
    })
}

module.exports = main