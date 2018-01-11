const getToken = require('fint-get-token')
const getData = require('fint-get-data')

module.exports = async options => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  const orgId = options.orgId || ''
  try {
    const { access_token: token, expires_in: expires } = await getToken(options)
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
