/*单例模式，单例模式是一个匿名函数*/
var People=(function(){
  var instance;
  function init(name){
    return {
      name:name
    }
  }
  return {
    createPeople:function(name){
      if(!instance){
        instance=init(name)
      }
      return instance
    }
  }
}())
People.createPeople('jirengu')
People.createPeople('hello')//出来的结果依然是jirengu，不会改变
