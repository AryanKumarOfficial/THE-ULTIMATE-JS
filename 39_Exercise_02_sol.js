let user = prompt("Enter Among : G,W or S ");
user = user.toUpperCase()
let cpu = Math.random() * 3;
cpu = Math.floor(cpu);
let cpuOut = ["G", "W", "S"][cpu];

const match = (user, cpuOut) => {
    if (user === cpuOut) {
        return 0;
    }
    else if (cpuOut === "S" && user === "W") {
        return "cpu";
    }

    else if (cpuOut === "G" && user === "W") {
        return "user";
    }
    else if (cpuOut === "S" && user === "G") {
        return "user";
    }
    else if (cpuOut === "W" && user === "G") {
        return "cpu";
    }
    else if (cpuOut === "W" && user === "S") {
        return "user";
    }
    else if (cpuOut === "G" && user === "S") {
        return "cpu";
    }
}

let result = match(user, cpuOut);

let root = document.getElementById("root")
let rootStyle = root.style;
rootStyle.display = "flex";
rootStyle.flexDirection = "column";
rootStyle.justifyContent = "center";
rootStyle.alignItems = "center";
rootStyle.fontSize = "30px";
rootStyle.fontWeight = "bold";
rootStyle.height = "100vh";
rootStyle.width = "100vw";
rootStyle.backgroundColor = "black";
rootStyle.color = "white";
root.innerHTML = `${result !== 0 ? `CPU choose:${cpuOut}<br/>You Choose:${user}<br/>The Winner is ${result}` : `CPU choose:${cpuOut}<br/>You Choose:${user}<br/>The Match is Drow`}`

// switch (result) {
//     case 0:
//         alert("Drow")
//         break;
//     case "user":
//         alert("You Win :-)")
//         break;
//     case "cpu":
//         alert("CPU Win :)")
//         break;
//     default:
//         break;
// }