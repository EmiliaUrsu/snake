class Snake {
    constructor(x,y,dir="up") {
        this.x = x 
        this.y = y
        this.dir  = dir
        this.head = new Head(x,y,dir)
        this.body = new Body(x,y+1,dir)
        this.tail = new Tail(x,y+2,dir)
        
       
    }
    render(){
       return(
       this.head.render() +
        this.body.render() +
        this.tail.render() )
    }
}