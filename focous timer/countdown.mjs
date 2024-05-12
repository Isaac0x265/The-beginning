export let countdown = () => {
    let interval = setInterval(()=>{
        if(this.pause === true)
        {
           clearInterval(interval)
           return;
        }
        this.seconds++
        if (this.seconds < 10 && this.minutes < 10) {
            this.timer.textContent = (`0${this.minutes}:0${this.seconds}`)
            console.log('a')
        }
        else if (this.seconds >= 10 && this.seconds < 60 && this.minutes <10) {
            this.timer.textContent = (`0${this.minutes}:${this.seconds}`)
            console.log('b')
        }
        else if (this.seconds > 60 && this.minutes < 10 ){
            
            
            this.timer.textContent = (`${this.minutes}:${this.seconds}`)
            this.minutes ++
            this.seconds = 0
            console.log('c')
        }
        else if (this.minutes >= 10 && this.seconds>=10 && this.seconds<60){
            this.timer.textContent = (`${this.minutes}:${this.seconds}`)
            console.log('d')
        }   
        else if (this.seconds === 60 && this.minutes<10){
            this.seconds = 0
            this.minutes ++
            if (this.minutes == 10) {
                this.timer.textContent = (`${this.minutes}:0${this.seconds}`)
                console.log('primeiro if')
            }
            else{
                 this.timer.textContent = (`0${this.minutes}:0${this.seconds}`)
                console.log('segundo if')
            }
               
            
            
        }
        else if (this.seconds === 60 && this.minutes>=10){
            this.seconds = 0
            this.minutes ++
            this.timer.textContent = (`${this.minutes}:0${this.seconds}`)
            console.log("k")
        }
        else if (this.minutes >= 10 && this.seconds <= 10){
            this.timer.textContent = (`${this.minutes}:0${this.seconds}`)
            console.log('g')
        }
        
       
    },1000)
    
    

   }