// Работа с Cookies
/*document.cookie = 'first=HelloWorld; max-age=5; path=/';
var UTCDate = new Date(Date.now() + 30 * 60 * 1000).toUTCString();
document.cookie = `second=Bye World!; expires=${UTCDate}`;
addCookie('third', 'Oranges and Apples', 'max-age=100');
console.log(document.cookie);

console.log(`Cookie "second" = ${getCookie('second')}`);*/

const startWindow = document.getElementById('start-window');

function checkReg() {
    if (getCookie('registered') == undefined) {
        register.addEventListener('click', () => {
            addCookie('registered', 'true', `max-age=${24 * 60 * 60}`);
            //startWindow.style.display = 'none';
            document.body.removeChild(startWindow);
        });
        return;
    }
    document.body.removeChild(startWindow);
}






function addCookie(key, value, parameters) {
    document.cookie = `${key}=${value}; ${parameters}`;
}
function getCookie(key) {
    var cookies = {};
    var tempCookiesStrings = document.cookie.split('; ');
    //console.log(tempCookiesStrings);
    for(let el of tempCookiesStrings) {
        let pare = el.split('=');
        cookies[pare[0]] = pare[1];
    }
    return cookies[key];
}
function deleteCookie(key) {
    addCookie(key, '!', 'max-age=0');
}



// window.localStorage.setItem('myKey', 'keyValue');
console.log(localStorage);
console.log(localStorage.getItem('myKey'));

window.sessionStorage.setItem('session', 'Apples')
console.log(sessionStorage);