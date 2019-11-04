module.exports = `
import testAbsoluteImports from 'components/test'

export testExportFrom from 'components/test'

const testOptionalChaining = ({ foo: { bar: 'test' } }).foo?.bar

class testClassProperties {
  property = 'foo bar'
}

const wait = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(true)
  }, 1000)
})

const testAsync = async () => {
  console.log(await wait())
}
`.trim()
