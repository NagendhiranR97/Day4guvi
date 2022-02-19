var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v2/all')

xhr.send();

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
        var result = this.responseText;
        var data = JSON.parse(result);
        //console.log(data);
        for(i=0;i<=data.length-1;i++){
        //console.log(data[i].name);
        console.log(
        `country name: ${data[i].name}
        country region: ${data[i].region}
        country sub region: ${data[i].subregion}
        country population: ${data[i].population}
        `);
         }
    }
}