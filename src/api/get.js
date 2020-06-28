import axios from 'axios'
const ERR_OK = 0

function get (url) {
  return function (params) {
    return axios.get(url, { params }).then(res => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {
      alert('data can not get')
    })
  }
}

const getSeller = get('/api/index')
export {
  getSeller
}
