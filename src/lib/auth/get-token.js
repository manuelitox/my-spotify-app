const GetToken = url => {
  if (typeof url !== 'object') return 'the `url` parameter should be an object.'
  if (typeof url.hash !== 'string') return 'the `url.hash` parameter should be a string.'
  return url.hash.substr(14, 162)
}

export default GetToken