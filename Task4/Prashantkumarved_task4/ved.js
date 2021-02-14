
const todoList = [];
let loop = true;
while (loop)
{
    let value = prompt("what would you like to do");
    if(value === "new")
    {
        const todo = prompt("Enter the value you want to push");
        todoList.push(todo);
        console.log("Todo is Added")
       
    }
    else if (value === "list")
    {
        console.log("********************")
        for(let element of todoList)
        {
           console.log(element);
         }
        console.log("********************")
    }
    else if (value === "quit")
    {
        loop = false;
    }
    else{
         alert("please enter a defined keyword");
    }

}
{
    console.log("oooh :( you are leaving me here alone!!!")
    
}
