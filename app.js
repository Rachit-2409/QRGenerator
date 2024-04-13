let btn = document.getElementById('btn_generate');
let input = document.getElementById('Qr');
let img = document.getElementById('Qr_image');
let query;



btn.addEventListener('click', ()=>{
    query = input.value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${query}`
    img.src = url;
})