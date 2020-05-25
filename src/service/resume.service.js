export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

const setRequestOptions = (options) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (options.token) {
    headers.authorization = options.token;
  }

  const body = options.body;

  const requestOptions = {
    method: options.method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(body),
  };
  return requestOptions;
};

export const ResumeService = {
  getAbout: async () => {
    try {
      const URL = `${process.env.REACT_APP_ENDPOINT}/about`;
      const requestOptions = setRequestOptions({
        method: GET,
      });
      const req = new Request(URL, requestOptions);
      const response = await fetch(req);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },
  getItemsByType: async (type) => {
    try {
      const URL = `${process.env.REACT_APP_ENDPOINT}/items?type=${type}`;
      const requestOptions = setRequestOptions({
        method: GET,
      });
      const req = new Request(URL, requestOptions);
      const response = await fetch(req);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },
  getSkills: async () => {
    try {
      const URL = `${process.env.REACT_APP_ENDPOINT}/skills`;
      const requestOptions = setRequestOptions({
        method: GET,
      });
      const req = new Request(URL, requestOptions);
      const response = await fetch(req);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },
};
