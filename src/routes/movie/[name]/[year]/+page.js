const env = import.meta.env.VITE_API_KEY


export const load = async ({params, fetch}) => {
  const getData = async (name, year) => {
    const res = await fetch(`http://www.omdbapi.com/?t=${name}&y=${year}&apikey=${env}`)
    const resJson = await res.json()
    return resJson
  }

  
  return {
    movieData : getData(params.name, params.year)
  }
} 