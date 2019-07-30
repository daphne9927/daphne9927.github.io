document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('inputSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
	//var petFinderKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY3NjRjNmRlYWI0NTdlNmQ3NGIxOWRkODc5NzVkM2ZiZjNjOGZhNGQ1OWVhNDhkYWMwNzMxMTE0YjZiMDRjZTM0YjgwMTZkYjM1Njk5MDEzIn0.eyJhdWQiOiJQV3hiN3RWaVV5VlJnWHlyQWl5SUhMS0hHRkNaYVhOblp4MEN2U1JURFFGWUtOWjN3VSIsImp0aSI6IjY3NjRjNmRlYWI0NTdlNmQ3NGIxOWRkODc5NzVkM2ZiZjNjOGZhNGQ1OWVhNDhkYWMwNzMxMTE0YjZiMDRjZTM0YjgwMTZkYjM1Njk5MDEzIiwiaWF0IjoxNTY0NTA0NjMyLCJuYmYiOjE1NjQ1MDQ2MzIsImV4cCI6MTU2NDUwODIzMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.wqaNJA09zjZ0GhUVBXBvOOmqEOpLT_rrTl8QSQBUTUk9QN084sMSQHto_Zmb5aE9FvsuR0bKQyJsILUbcppwmw6KNGfY6KTXM6F5JIZ6AAfzxT70DHwME9xu2jfJjge_xHPSRSCq9ipJOXFzMJ2QiLhIc4IquRE_s060YoW5ToD2tnlg3mOFR30EfIxQbpoCkHBb0cw5llG-FXFPqZBr2lqgHgzp6iAeYy4elhzMI2SdStjVid7FvlMzWX_r9YN8hv_XOuYF30oiDqcficvHAGOGqofP28fQGbNL7d_Zh-ewdSTLC6FZ7qf_-pTs3PVhYBW8aNp3_Uf5f2gw-B6h9w";

    var dog = document.getElementById('dog').value;
   
   	//var getString = "http://api.petfinder.com/v2/animals?q=" + dog + ",us&units=imperial&appid=fa7d80c48643dfadde2cced1b1be6ca1";
    //practice weather "https://api.openweathermap.org/data/2.5/weather?q="
	//var getString = "https://api.openweathermap.org/data/2.5/weather?q=" + dog + ",us&units=imperial&appid=fa7d80c48643dfadde2cced1b1be6ca1";
    var getString = "https://dog.ceo/api/breeds/image/random?q=" + dog;
	var getString = "https://dog.ceo/api/breeds/blenheim spaniel";
	  console.log("getString='" + getString + "'");
    req.open('GET', getString, true);
	console.log("getString='" + getString + "'");
    req.open('GET', getString, true);
    req.addEventListener('load',function(){
      if (req.status >= 200 && req.status < 400){
        console.log(JSON.parse(req.responseText));
        var response = JSON.parse(req.responseText);
        document.getElementById('dog').textContent = response.dog;
//document.getElementById('type').textContent = response.type;
  //      document.getElementById('breed').textContent = response.breed;
        
      } else {
        console.log("Error in network request: " + response.id);
     }});
    req.send(null);
    event.preventDefault();
  })
}
