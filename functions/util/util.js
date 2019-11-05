export const send = body => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  });
};
