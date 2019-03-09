require('es6-promise/auto')

// import all helpers
const helpersContext = require.context('../../../helpers', true)
helpersContext.keys().forEach(helpersContext)

require('../../modules/compiler/parser.spec')
