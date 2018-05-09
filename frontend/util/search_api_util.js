export const fetchSearchResults = (searchQuery) => {
  return $.ajax({
    method: 'GET',
    url: parseSearchTerms(searchQuery)
  })
}


const parseSearchTerms = (searchQuery) => {
  let query = ""
  debugger
  const searchString = searchQuery.split(" ").join("+")
  const searchParams = {
    country: 'US',
    media: 'podcast',
    limit: 10,
    lang: 'en_us',
    term: searchString
  }
  for (let key in searchParams)
    {
      query = query + key + "=" + searchParams[key] + "&"
    }
  return `https://itunes.apple.com/search?${query}`.slice(0, -1)
}
