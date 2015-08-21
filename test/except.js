var except = require('..')
var should = require('should')

var obj = {
  name: 'brandon dail',
  email: '2cool4school@fake.org',
  id: '56789'
}

var expected = {
  name: 'brandon dail'
}

describe('except(obj, key)', function() {
  describe('With an array', function(){
    it('should blacklist properties', function() {
      except(obj, ['email', 'id']).should.eql(expected)
    })
  })
  describe('Given a string', function() {
    it('should blacklist properties', function() {
      except(obj, 'email id').should.eql(expected)
    })
  })

  describe('With no props', function() {
    it('Should ignore undefined props', function(){
      except({}, 'z y z').should.eql({})
    })
  })
  
})
