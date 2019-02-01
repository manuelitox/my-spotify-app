import GetToken from 'lib/auth/get-token'

describe('Function | GetToken', () => {
  const token = 'w6ivfhki73uvu993quc9jh0wshbqt0lgu4u1j1oybz6n9i6j4noika9l9l0cjvxy6lnrjpaxzgio6waalmeosijhsx66a6deumdmj6wenpvk17nnkniku4zckwu4z5baxfot8yyl12mb01zspisewziof88nij080w'
  let url = {}
  beforeEach(() => {
    url = { hash: `#access_token=${ token }&foo=bar` }
  })
  it('should extract and return only the token of hash' , () => {
    expect(GetToken(url)).toEqual(token)
  })
  it('should return an error message when the url is not an object', () => {
    expect(GetToken(123)).toEqual('the `url` parameter should be an object.')
  })
  it('should return an error message when the url.hash is not a string', () => {
    url.hash = 123
    expect(GetToken(url)).toEqual('the `url.hash` parameter should be a string.')
  })  
})