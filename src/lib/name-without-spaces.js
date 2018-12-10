const NameWithOutSpaces = name => {
  if ( typeof name !== 'string' ) return 'the `name` parameter should be a string.'
  return name.replace(' ', '-')
}

export default NameWithOutSpaces