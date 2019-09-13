import window from 'global'

/* :: () -> boolean */
export const isMobile = () => !!window.navigator.userAgent.match(/Mobi/)
