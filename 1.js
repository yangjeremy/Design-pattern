

/*构造函数模式*/
function Person(name,age){
  this.name=name
  this.age=age
}
Person.prototype.sayName=function(){
  return this.name
}
var student=new Person("Jeremy",20);

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


/*mixin混合模式*/
var Person=function(name,age){
   this.name=name;
   this.age=age;
}
Person.prototype.sayName=function(){
  console.log(this.name)
}

var Student=function(name,age,score){
  Person.call(this,name,age)
  this.score=score
}

Student.prototype=create(Person.prototype)
function create(parentObj){
  function F(){}
  F.prototype=parentObj;
  return new F()
}

Student.prototype.sayScore=function(){
  console.log(this.score)
}
var student=new Student('Jeremy',28,99)


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



/*订阅发布模式*/
var EventCenter=(function(){
  var events={}
  function on(evt,handler){
    events[evt]=events[evt]||[];
    events[evt].push({
      handler:handler
    })
  }
  function fire(evt,args){
    if(!events[evt]){
      return
    }
    for(var i=0;i<events[evt].length;i++){
      events[evt][i].handler(args)
    }
  }
  function off(name){
    delete events[name]
  }
  return {
    on:on,
    fire:fire,
    off:off
  }
})()

EventCenter.on('hello',function(){
  console.log('hello')
})
EventCenter.fire('hello')
