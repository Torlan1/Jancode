var b = "OpenItems"

/* This is for the Buttons/Table to make active on click*/
function BtnFuction(Sender) {
  
  if (b != Sender) {
    /*This handles the buttons*/
      document.getElementById(Sender).className = "ButtonActive";
      document.getElementById(b).className = "BtnNonActive";
    
    /*This handles the tables*/
      document.getElementById(Sender + "Table").className = "SelectedTable";
      document.getElementById(b + "Table").className = "HiddenTable";
      
    /*This remebers the new active table*/
      b=Sender;}
  
  };