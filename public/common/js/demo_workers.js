
function getVersion(done){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://baba-mock-server.herokuapp.com/getCurrentVersion');
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            console.log(xhr.statusText); // e.g. 404: Not Found
        } else { // show the result
            //console.log(xhr.response); // responseText is the server
            done(xhr.response);
        }
    };
}

function workerTimer() {
  //i = i + 1;
  getVersion(function(response){
    postMessage(response);
  })
  setTimeout("workerTimer()",3000);
}

workerTimer();