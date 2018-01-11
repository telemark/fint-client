const test = require('ava')
const fint = require('../../index')

test('throws if missing options', async t => {
  const error = await t.throws(fint())
  t.is(error.message, 'Missing required input: options')
})
