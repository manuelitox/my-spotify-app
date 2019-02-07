import getImage from 'lib/get-image'

describe('Function | getImage', () => {
  let items, size 
  beforeEach(() => {
    items = [
      { height: 100, url: 'photo-1.jpg' },
      { height: 200, url: 'photo-2.jpg' },
      { height: 300, url: 'photo-3.jpg' }
    ]
    size = 100
  })
  it('should return an error message because items is not defined', () => {
    expect(getImage()).toEqual('the `items` parameter should exists')
  })
  it('should return an error message because items is not an array', () => {
    expect(getImage('123')).toEqual('the `items` parameter should be an array')
  })  
  it('should return an error message because size is not a number', () => {
    expect(getImage(items, '100')).toEqual('the `size` parameter should be a number')
  })  
  it('should return the url of the first photo because the size is 100', () => {
    expect(getImage(items, size)).toEqual(items[0].url)
  })
  it('should return the url of the third photo because his height do match with the size parameter', () => {
    items = [
      { height: 400, url: 'photo-1.jpg' },
      { height: 500, url: 'photo-2.jpg' },
      { height: 300, url: 'photo-3.jpg' }
    ]    
    size = 300
    expect(getImage(items, size)).toEqual(items[2].url)
  })  
  it('should return undefined because there are not match between items.height and size', () => {
    expect(getImage(items, 20)).toBeUndefined()
  })  
})