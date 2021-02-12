let choice = prompt("what would you like to do")
const todo = [ ' learn to code '] ;
while(choice !== 'quit'){
     if(choice === 'list'){
        console.log('******************')
        console.log("MY TODO LIST")
        for(let i = 0; i < todo.length ; i++){
            console.log(todo[i])
        }
        console.log('******************')
    }
    else if(choice === 'new'){
        const newtodo = prompt("enter todo you would like to add")
        todo.push(newtodo);
        console.log("todo  list updated")
    }
    choice = prompt("what would you like to do")
}
console.log("you quit the application")




