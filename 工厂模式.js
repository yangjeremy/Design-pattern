/*工厂模式,工厂模式在于创建了一个新的引用*/
function createPerson(name){
  var person={
    name:name,
    sayName:function(){
      console.log(this.name)
    }
  };
  return person
}
createPerson('jirengu')
