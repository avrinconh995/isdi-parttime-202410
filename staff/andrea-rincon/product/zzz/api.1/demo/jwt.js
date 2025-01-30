import jwt from 'jsonwebtoken'

var secret = 'el padre de mi abuela tenia una doble vida'

var userId = 'abc123'
//CREATE TOKEN

var token = jwt.sign({ sub: userId }, secret)

// console.log(token)

// primera version 

// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmMxMjMiLCJpYXQiOjE3MzgyNjM3MTR9.SAy2GOj58iNJMgV5Y3jOtl58-rF_6yedLiy_I2oay1E'
// var firstDotIndex = token.indexOf('.')
// console.log(firstDotIndex)

// var headerB64 = token.slice(0, firstDotIndex)
// console.log(headerB64)

// var headerJSON = atob(headerB64)
// console.log(headerJSON)
// {"alg":"HS256","typ":"JWT"}


// var lastDotIndex = token.lastIndexOf('.')
// console.log(lastDotIndex)

// var payloadB64 = token.slice(firstDotIndex + 1, lastDotIndex)
// console.log(payloadB64)

// var payloadJSON = atob(payloadB64)
// console.log(payloadJSON)

// var payload = JSON.parse(payloadJSON)
// console.log(payload)
// var sub =  payload.sub

// var { sub } = payload
// console.log(sub)

//EXTRAR USERID


// function extractPayloadFromToken(token) {
//     var firstDotIndex = token.indexOf('.')
//     var lastDotIndex = token.lastIndexOf('.')

//     var payloadB64 = token.slice(firstDotIndex + 1, lastDotIndex)
//     var payloadJSON = atob(payloadB64)
//     var payload = JSON.parse(payloadJSON)

//     return payload
// }

// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmMxMjMiLCJpYXQiOjE3MzgyNjM3MTR9.SAy2GOj58iNJMgV5Y3jOtl58-rF_6yedLiy_I2oay1E'

// var payload = extractPayloadFromToken(token)
// var { sub } = payload
// console.log(sub)

//VALIDATE TOKEN

//var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmMxMjMiLCJpYXQiOjE3MzgyNjM3MTR9.SAy2GOj58iNJMgV5Y3jOtl58-rF_6yedLiy_I2oay1E'

var payload = jwt.verify(token, secret)
var { sub } = payload
console.log(sub)