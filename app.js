require('dotenv').config()
const T = require('twitter')
const getFormattedPost = require('./getFormattedPost.js')

const twitter = new T({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const main = async () => {
    try {
        const post = await getFormattedPost()
        const result = await twitter.post(process.env.TWITTER_API_ROOT, { status: post })
        console.log(result);
    } catch(err) {
        throw new Error(err.message)
    }
}

main()