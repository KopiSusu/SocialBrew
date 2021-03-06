/* @flow */
/*global setTimeout*/
export const selectItem = (type, item) => {
    return {
        type: 'SELECT_' + type,
        payload: item
    }
}

export const submitMessage = (message) => {
  return {
    meta: {remote: true},
    type: 'SUBMIT_MESSAGE',
    payload: message
  }
}

export const receiveData = (json, returnType, nestedKey) => {
  let returnResponse = {
    type: returnType,
    payload: json,
    receivedAt: Date.now()
  }
  if (nestedKey)
    returnResponse.nestedKey = nestedKey

  return returnResponse
}
export function fetchData(url, returnType, nestedKey) {
  return function (dispatch) {
    // return fetch(`https://s3.amazonaws.com/datadummy/${url}.json`)
    return fetch(`https://s3.amazonaws.com/datadummy/direct.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveData(json, returnType, nestedKey))
      )
  }
}