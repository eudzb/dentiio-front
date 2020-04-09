import { axios } from 'axios'

const url = 'http://www.omdbapi.com/?apikey=b502738f&s=matrix'

async function resolveAfter2Seconds () {
  const tab = await axios.get(url)
  const res = tab.data.Search.filter(value => value.Year > '2002')

  res.forEach(value => {
    console.log(value)
  })

  return res
}

resolveAfter2Seconds()
