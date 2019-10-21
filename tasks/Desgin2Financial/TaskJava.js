function BtnFuction(Sender) {
  x = document.getElementsByClassName("ButtonActive"){0}.className = "BtnNonActive";
  window.alert(x);
  document.getElementById(Sender).className = "ButtonActive";
  
}

/*  
        var x = document.getElementById("SelectTable");
        if (x.style.visibility === "hidden") {
          x.style.visibility = "visible";
        } else {
          x.style.visibility = "hidden";
        }
    }
*/    