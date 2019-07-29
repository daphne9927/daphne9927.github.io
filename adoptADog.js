document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('inputSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var cityOrZip = document.getElementById('cityOrZip').value;
    var getString = "https://api.petfinder.com/v2/animals?q=" + cityOrZip + ",us&appid=PWxb7tViUyVRgXyrAiyIHLKHGFCZaXNnZx0CvSRTDQFYKNZ3wU";
    console.log("getString='" + getString + "'");
    req.open('GET', getString, true);
    req.addEventListener('load',function(){
      if (req.status >= 200 && req.status < 400){
        console.log(JSON.parse(req.responseText));
        var response = JSON.parse(req.responseText);
        document.getElementById('city').textContent = response.city;
        document.getElementById('type').textContent = response.type;
        document.getElementById('breed').textContent = response.breed;
        
      } else {
        console.log("Error in network request: " + response.id);
     }});
    req.send(null);
    event.preventDefault();
  })
}
