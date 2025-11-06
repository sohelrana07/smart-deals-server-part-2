/**
 *
 * 1. after login: server will create a jwt token
 * 2. store it in the client side (localStorage, http only cookies, in memory)
 * 3. For asking for sensitive data: send a request with jwt token in header.
 * 4. server will verify the token. if token is valid; then will provide the data
 *
 *
 *
 */
