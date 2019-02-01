const GetURL = location => {
  if (typeof location !== 'string') return 'the `location` parameter should be a string.'
  return new URL(location) 
}

export default GetURL