/** @NOTE: This is not necessary but makes mocking in Jest easier and flexible. */
const global = window
const { document, navigator } = global

export { global as default, document, navigator }
