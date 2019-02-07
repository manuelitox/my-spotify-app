const getImage = (items, size = 300) => {
  if (!items) return 'the `items` parameter should exists'
  if (!Array.isArray(items)) return 'the `items` parameter should be an array'
  if (typeof size !== 'number') return 'the `size` parameter should be a number'
  const images = items.filter( image => image.height <= size )
  const image = images && images.length >= 1 ? images[0].url : undefined
  return image
}

export default getImage