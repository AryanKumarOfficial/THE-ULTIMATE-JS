const role = document.getElementById('role');

function setRoleCookie(role, expirationDays) {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    let expires = "expires=" + expirationDate.toUTCString();
    document.cookie = "userRole=" + role + ";" + expires + ";path=/";
}
function getRoleCookie() {
    let name = "userRole=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

setRoleCookie('admin', 7);

let userRole = getRoleCookie();

role.innerHTML = userRole;