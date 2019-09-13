/* :: object -> boolean */
export const isLoggedIn = user => Boolean(user) && Boolean(user.token)

/* :: object -> object */
export const userSelector = store => store.auth.user

/* :: object -> boolean */
export const hasValidSession = user => {
  const { token } = user

  if (!token) {
    return false
  }

  return true
}
