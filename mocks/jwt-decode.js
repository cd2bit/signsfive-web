export default (tokenAsDate) => {
  if (tokenAsDate) {
    tokenAsDate.setDate(tokenAsDate.getDate() + 1);
    return { exp: tokenAsDate.getTime() / 1000 };
  }
  return false;
};
