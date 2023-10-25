let msg = prompt("What is your name?", "Jhon Doe") // used to take user input as a string. Second arguement is the default value

let desc = confirm("Are you sure you want to write it on the page?")
desc ? document.write(msg) : document.write("")
desc ? alert("Message Delivered!") : alert("message not delivered") // used to invoke a mini window with a message

