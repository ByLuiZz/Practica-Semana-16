const axios =  require("axios")
const fs = require("fs").promises;

const urlData = "https://api.coindesk.com/v1/bpi/currentprice.json";
let bitcoinData = "";

axios.get(urlData)
    .then(response => {
        Object.entries(response.data.bpi).forEach(currency =>{
            bitcoinData += `${currency[1].description}; ${currency[1].code}; ${currency[1].rate}\n`
        })
        return fs.writeFile("Precio_bitcoin.csv", bitcoinData)
    })
    .then(()=>{
        console.log("Archivo creado con exito")
    })