module.exports = `
import testAbsoluteImports from 'components/test'

export testExportFrom from 'components/test'

const testOptionalChaining = ({ foo: { bar: 'test' } }).foo?.bar

class testClassProperties {
  property = 'foo bar'
}
`.trim()
