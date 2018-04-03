const url = "https://ipapi.co/"
const urlValidate = 'https://shrouded-garden-94580.herokuapp.com/'
let ipapiResponse;

const $buttonTrack = document.querySelector("#button-track");
const $buttonValidate = document.querySelector("#button-validate");
const $message = document.querySelector("#message");
    
$buttonTrack.addEventListener('click', function() {
    const $ip = document.querySelector("#ip");
    const $progress = document.querySelector('.progress');
    $progress.classList.toggle('hide');

    http.get(`${url}/${$ip.value}/json`)
        .then(response => {
            $progress.classList.toggle('hide');
            
            document.querySelectorAll("table tbody tr").forEach(function(e){ e.remove() })

            let data = JSON.parse(response)
            let $table = document.querySelector('table > tbody');
            
            if ('content' in document.createElement('template')) {
                let $template = document.querySelector('#template-ip');
        
                for (let item in data) {
                    $template.content.querySelector(".key").textContent = item;
                    $template.content.querySelector(".value").textContent = data[item];
        
                    let clone = document.importNode($template.content, true);
                    $table.appendChild(clone);
                }
            }

            $buttonValidate.classList.remove("hide");
            $message.textContent = "";

            ipapiResponse = data;
        })
        .catch(error => $message.textContent = error);
}, false)


$buttonValidate.addEventListener('click', function() {
    
    const $progress = document.querySelector('.progress');
    $progress.classList.toggle('hide');

    http.post(urlValidate, ipapiResponse )
        .then(response => {
            $progress.classList.toggle('hide');

            $message.textContent = response;
        })
        .catch(error => $message.textContent = error);
}, false)
