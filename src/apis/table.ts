import axios from 'axios'
export function getData(
  url,
  params = {
    _page: 1,
    _limit: 10
  }
) {
  return new Promise((resolve) => {
    axios
      .get(url, {
        params
      })
      .then((res) => {
        resolve(res)
      })
  })
}
