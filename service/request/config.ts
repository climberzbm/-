const TIME_OUT = 10000
let BASE_URl = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URl = 'localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URl = ''
} else {
  BASE_URl = ''
}

export { BASE_URl, TIME_OUT }
