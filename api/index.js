const main = require('../app.js')

module.exports = (req, res) => {
    try {
        main()
    } catch(err) {
        console.error(err)
    }    
}