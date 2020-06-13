import { previewHandler } from 'next-tinacms-github'

export const ACCESS_TOKEN_KEY = 'github_access_token'
export const WORKING_REPO_KEY = 'working_repo_full_name'
export const HEAD_BRANCH_KEY = 'head_branch'

export const authenticatedPreviewHandler = (req: any, res: any) => {
  const previewData = {
    working_repo_full_name: req.cookies[WORKING_REPO_KEY],
    github_access_token: process.env.GITHUB_TOKEN,
    head_branch:
      req.cookies[HEAD_BRANCH_KEY] || process.env.BASE_BRANCH || 'master',
  }
  res.setPreviewData(previewData)
  res.status(200).end()
}

// export default previewHandler
export default authenticatedPreviewHandler

