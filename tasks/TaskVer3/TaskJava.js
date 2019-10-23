var b = "OpenItems"
function BtnFuction(Sender) {
  document.getElementById(Sender).className = "ButtonActive";
  document.getElementById(b).className = "BtnNonActive";
  b=Sender;


 
    var x = document.getElementById("SelectTable");{
        if (x.style.visibility === "hidden") {
          x.style.visibility = "visible";
        } else {
          x.style.visibility = "hidden";
        }
    }
  } 