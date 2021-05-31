let snake = new Snake(5,5)

let map = new Map()
let apple1 = new Apple(3,3)
let apple2 = new Apple(7,5)
let mouse1  = new Mouse(1,7)
let mouse2  = new Mouse(8,1)
let coin1   = new Coin(8,9)
let coin2   = new Coin(1,1)

map.children.push(apple1)
map.children.push(apple2)
map.children.push(snake)
map.children.push(mouse1)
map.children.push(mouse2)
map.children.push(coin1)
map.children.push(coin2)


map.render(container)