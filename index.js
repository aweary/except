
module.exports = function(obj, deny) {

  obj = obj || {}
  if (typeof keys == 'string') deny = deny.split(/ +/)
  var keys = Object.keys(obj)

  var result = {}

  keys.forEach(function(key) {
    if (~deny.indexOf(key)) return
    result[key] = obj[key]
  })

  return result

};
