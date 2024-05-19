/**
 *
 * @param token
 * @returns {boolean}
 */
const isValidToken = (token) => {
    if (!token) {
        return false;
    }
    const payload = token.split(".")[1];
    if (!payload) {
        return false;
    }

    //convert payload to Json

    const decodedPayload = JSON.parse(window.atob(payload));
    const expiryTime = decodedPayload.exp * 1000;
    const currentTime = Date.now();
    return expiryTime > currentTime;


};

export {isValidToken};