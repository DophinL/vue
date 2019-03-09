require('es6-promise/auto')

// import all helpers
const helpersContext = require.context('../../../helpers', true)
helpersContext.keys().forEach(helpersContext)


const testsContext = require.context('../../modules/vdom', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
