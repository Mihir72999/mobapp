

const partial = (fn, ...arg) => (...otherarg) => fn(...arg, ...otherarg)
const createRequest = (option) => (otheOption) => {
  option = Object.assign({}, option, otheOption)
  return fetch(option.url, option).then(res =>res.json())
}
const otherRequest = (data, url) => partial(createRequest(), {
  headers: data,
  url: url
})
export { otherRequest }