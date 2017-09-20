
/*构造函数模式*/
function Person(name,age){
  this.name=name
  this.age=age
}
Person.prototype.sayName=function(){
  return this.name
}
var student=new Person("Jeremy",20);
