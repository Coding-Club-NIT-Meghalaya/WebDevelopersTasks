var todos = [];
var input = prompt("What would you like to do?");
while(input !== "quit"){
    if(input === "list"){
        console.log("*********");
        todos.forEach(function(x){
            console.log(x);
        });
        console.log("*********");
        input = prompt("What would you like to do?");
    }
    else if(input === "new"){
        var todo1 = prompt("Enter the value you want to push");
        todos.push(todo1);
        console.log("Added todo !!");
        input = prompt("What would you like to do?");
    }
    else{
        input = prompt("Please follow the instructions. What would you like to do?");
    }
}
console.log("Ok, you quit the application !!")