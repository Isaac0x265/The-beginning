// que logica desgraçada
export const f = {
    i:0,
    play : document.getElementById('play'),
    stop : document.getElementById('stop'),
    timer : document.getElementById('timer'),
    buttonContainer: document.getElementById('btn-container'),
    seconds:0,
    minutes:0,
    houer:0,
    pause: false,
    HandlePlay (){
        this.pause = false
        this.MakeInvisible(this.play)
        this.MakeVisible(this.stop)
        this.buttonContainer.classList.add('zeroGap')
        this.buttonContainer.classList.add('normalGap')
    },
    HandleStop (){
        this.pause = !this.pause
        this.MakeInvisible(this.stop)
        this.MakeVisible(this.play)
       
   },
   MakeInvisible(event){
    event.classList.add('invisible')
   },
   MakeVisible(event){
    event.classList.remove('invisible')
   },
   ContDown() {
    let interval = setInterval(()=>{
        if(this.pause === true)
        {
           clearInterval(interval)
           return;
        }
        this.seconds++
        if (this.seconds < 10 && this.minutes < 10) {
            this.timer.textContent = (`0${this.minutes}:0${this.seconds}`)
        }
        else if (this.seconds >= 10 && this.seconds < 60 && this.minutes <10) {
            this.timer.textContent = (`0${this.minutes}:${this.seconds}`)
        }
        else if (this.seconds > 60 && this.minutes < 10 ){
            
            
            this.timer.textContent = (`${this.minutes}:${this.seconds}`)
            this.minutes ++
            this.seconds = 0
        }
        else if (this.minutes >= 10 && this.seconds>=10 && this.seconds<60){
            this.timer.textContent = (`${this.minutes}:${this.seconds}`)
        }   
        else if (this.seconds === 60 && this.minutes<10){
            this.seconds = 0
            this.minutes ++
            if (this.minutes == 10) {
                this.timer.textContent = (`${this.minutes}:0${this.seconds}`)
            }
            else{
                 this.timer.textContent = (`0${this.minutes}:0${this.seconds}`)
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
   },
   UpdateClock () {
    this.ContDown()
    }  
}

