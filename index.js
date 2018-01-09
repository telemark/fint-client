const createToken = require('fint-token-generator')
const getData = require('fint-get-data')

module.exports = async opts => {
  if (!opts) {
    throw Error('Missing required input: options')
  }
  const orgId = opts.orgId || ''
  try {
    const { access_token: token, expires_in: expires } = await createToken(opts)
    return {
      getToken: () => token,
      getData: url => getData(url, token, orgId),
      getExpiration: () => expires,
      refreshToken: () => console.log('refresh token')
    }
  } catch (error) {
    throw error
  }
}
