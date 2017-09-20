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
