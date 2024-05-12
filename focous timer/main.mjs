import { f } from "./utils.mjs"


f.play.addEventListener('click',function(){
    f.UpdateClock()
    f.HandlePlay()
    
})

f.stop.addEventListener('click',function(){
    f.HandleStop()
})
