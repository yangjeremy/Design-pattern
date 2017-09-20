/*模块模式*/
var Person=(function(){
  var name='Jeremy'
  function sayName(){
    console.log(name)
  }
  return{
    name:name,
    sayName:sayName
  }
})()
