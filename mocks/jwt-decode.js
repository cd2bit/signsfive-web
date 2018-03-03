// NOTE: this is mock for AuthService.getTokenExpirationDate
// where it require jwt-decode dependency, this mocks "jwtDecode"
/**
 * @param {date} tokenAsDate
 * @return {number|boolean} HTML
*/
export default (tokenAsDate) => {
  // if tokenAsDate is not null or false
  // if token are "valid", it is expected to return as numbers of seconds
  // since in AuthService.getTokenExpirationDate: date.setUTCSeconds
  // are used as to set new date.
  if (tokenAsDate) {
    // reset tokenAsDate into 1 day later of original date
    tokenAsDate.setDate(tokenAsDate.getDate() + 1);
    // store as number var of tokenAsDate's milliseconds converted into seconds
    const exp = tokenAsDate.getTime() / 1000;
    return { exp };
  }
  // if tokenAsDate is null or false
  return false;
};
