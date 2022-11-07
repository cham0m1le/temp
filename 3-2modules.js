const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')


// either names as a whole structured
// or names.john and names.peter

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
