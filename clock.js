const schedule = require('node-schedule')
const { main } = require('./app.js')

const rule = new schedule.RecurrenceRule()
    
rule.dayOfWeek = 0
rule.hour = 12
rule.minute = 30
rule.tz = 'America/Bahia'

schedule.scheduleJob(rule, () => {
    main()
})