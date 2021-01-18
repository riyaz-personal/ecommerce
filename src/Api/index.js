export async function getApi(requestUrl) {
  let output = {};
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic dXNlcjpHWmNNVkc4eG5uNEY=",
    },
  };
  await fetch(requestUrl, requestOptions)
    .then(async (response) => {
      output.data = await response;
    })
    .catch((error) => (output.error = error));
  return output;
}

export async function postApi(requestUrl, inputData) {
  let output = {};
  const requestOptions = {
    method: "POST",
    headers: {
      calling_source: "Web",
      Authorization: "RgUkXp2s5v8y5B8E7H1MbQeThVmYq3t6",
      calling_app: "shopview",
    },
    body: JSON.stringify(inputData),
  };
  await fetch(requestUrl, requestOptions)
    .then(async (response) => {
      output.data = await response.json();
    })
    .catch((error) => (output.error = error));
  
  return await output;
}

export function postApi2(requestUrl, inputData) {
  let output = {};

  const requestOptions = {
    method: "POST",
    headers: {
      calling_source: "Web",
      Authorization: "RgUkXp2s5v8y5B8E7H1MbQeThVmYq3t6",
      calling_app: "shopview",
    },
    body: JSON.stringify(inputData),
  };
  
  return fetch(requestUrl, requestOptions)
    .then((response) => {
     return response.json();
    })
    .then((json) => {
      return json
    }).catch((error) => (output.error = error));
}
