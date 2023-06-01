var deferredPrompt = null;

if(!window.Promise){
    window.Promise = Promise;
}

if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log('Service worker registered!')
    }).catch((err)=>{
        console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', (event) =>{
    console.log('beforeinstallprompt fired',event);
    event.preventDefault();
    deferredPrompt = event;
    return false;

});

var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       // resolve('This is executed once the timer is done!');
       reject({code: 500, message: "An error occurred"});
    }, 3000);
})
//Exemplo de um 'get' usando xhr de forma síncrona
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = () => {
    console.log(xhr.response);
};

xhr.onerror = () => {
    console.log('Error!');
}
xhr.send();
//exemplo de um 'get' usando a api fetch de forma assíncrona
fetch('https://httpbin.org/ip')
.then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({message: 'Does this work?'})
})
.then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

/*promise.then((text)=>{
    return text;
}, (err) =>{
    console.log(err.code, err.message)
}).then((newText)=>{
    console.log(newText);
});*/

//Usando o catch para retornar um erro
promise.then((text)=>{
    return text;
}).then((newText)=>{
    console.log(newText);
}).catch((err)=>{
    console.log(err.code, err.message);
});

console.log('This is executed right after setTimeout()');