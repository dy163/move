module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}

// const { sep } = require('path')
// // path.sep 用于获取操作系统的路劲
// module.exports = ({ file }) => {
//   const rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
//     ? 37.5
//     : 75
//   return {
//     plugins: {
//       autoprefixer: {},
//       'postcss-pxtorem': {
//         rootValue,
//         propList: ['*']
//       }
//     }
//   }
// }
