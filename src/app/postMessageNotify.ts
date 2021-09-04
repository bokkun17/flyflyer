export function postMessageNotify(message: string): void {
  const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + process.env.NOTIFY_TOKEN
    },
    payload: {
      message: message
    }
  }
  UrlFetchApp.fetch(process.env.NOTIFY_API, params)
}
