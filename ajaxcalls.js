function getuser(){

 $.ajax({
    method: 'GET',
    url: "https://api.github.com/user",
    headers: {
     'Host': 'api.github.com',
     'Connection': 'keep-alive',
     'Cache-Control':'max-age=0',		      
     'Accept':'application/json',
     'Accept-Language':'r-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4',
     'Accept-Encoding': 'gzip, deflate, sdch, br',
     'Origin':'https://api.github.com',
     'Referer':'https://github.com/',
     'Content-Type': 'text/html;application/json;charset=UTF-8',
     'DNT':'1'}		      
 
   }).done(function(data) { 
   alert(data);
});
}
