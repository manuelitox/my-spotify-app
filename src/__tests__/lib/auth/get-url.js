import GetURL from 'lib/auth/get-url'

describe('Function | GetURL', () => {
  it('should return an error message when the location is not a string', () => {
    expect(GetURL(123)).toEqual('the `location` parameter should be a string.')
  })  
})