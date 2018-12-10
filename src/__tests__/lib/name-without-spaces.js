import NameWithOutSpaces from 'lib/name-without-spaces'

describe('Function | NameWithOutSpaces', () => {
  it('should replace spaces by `-`', () => {
    expect(NameWithOutSpaces('john doe')).toEqual('john-doe')
  })
  it('should return the same word if it has not spaces' , () => {
    expect(NameWithOutSpaces('johndoe')).toEqual('johndoe')
  })
  it('should return an error message when the name is not a string', () => {
    expect(NameWithOutSpaces(123)).toEqual('the `name` parameter should be a string.')
  })
})