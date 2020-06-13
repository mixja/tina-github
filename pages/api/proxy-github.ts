import { apiProxy } from 'next-tinacms-github'

const axios = require('axios')

export const authenticatedApiProxy = (req: any, res: any) => {
  const { headers, ...data } = JSON.parse(req.body)
  console.log("request")

  axios({
    ...data,
    headers: {
      ...headers,
      Authorization: 'token ' + process.env.GITHUB_TOKEN,
    },
  })
    .then((resp: any) => {
      console.log("response")
      res.status(resp.status).json(resp.data)
    })
    .catch((err: any) => {
      console.log("error")
      res.status(err.response.status).json(err.response.data)
    })
}

// export default apiProxy
export default authenticatedApiProxy
