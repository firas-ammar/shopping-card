function AddCoq() {
  console.log(AddCoq);
  var counter_0 = document.getElementById("qauntite").textContent;
  counter_0++;
  document.getElementById("qauntite").innerHTML = "" + counter_0;
  console.log(counter_0);

  var prix = counter_0 * 10;
  document.getElementById("price1").innerHTML = "" + prix;

  var Total = Number(document.getElementById("Total-price").textContent);
  Total = Total + 10;
  document.getElementById("Total-price").innerHTML = "" + Total;
  console.log(Total);
}
function DeductCoq() {

console.log(DeductCoq);
  var counter_1 = parseInt(document.getElementById("qauntite").textContent);
  if (counter_1 === 0) {
      return
  }
  counter_1--;

  document.getElementById("qauntite").innerHTML = "" + counter_1;
  console.log(counter_1);

  var prix = counter_1 * 10;
  document.getElementById("price1").innerHTML = "" + prix;

  var Total = Number(document.getElementById("Total-price").textContent);
  Total = Total - 10;
  document.getElementById("Total-price").innerHTML = "" + Total;
  console.log(Total);
}


function AddAdidas() {
    console.log(AddAdidas);
    var counter_adidas = document.getElementById("qauntite2").textContent;
    counter_adidas++;
    document.getElementById("qauntite2").innerHTML = "" + counter_adidas;
    console.log(counter_adidas);
  
    var prix = counter_adidas * 30;
    document.getElementById("price2").innerHTML = "" + prix;
  
    var Total = Number(document.getElementById("Total-price").textContent);
    Total = Total + 30;
    document.getElementById("Total-price").innerHTML = "" + Total;
    console.log(Total);
  }
  function DeductAdidas() {

    console.log(DeductAdidas);
      var counter_adida = parseInt(document.getElementById("qauntite2").textContent);
      if (counter_adida === 0) {
          return
      }
      counter_adida--;
    
      document.getElementById("qauntite2").innerHTML = "" + counter_adida;
      console.log(counter_adida);
    
      var prix = counter_adida * 30;
      document.getElementById("price2").innerHTML = "" + prix;
    
      var Total = Number(document.getElementById("Total-price").textContent);
      Total = Total - 30;
      document.getElementById("Total-price").innerHTML = "" + Total;
      console.log(Total);
    }


    
function AddNike() {
    console.log(AddNike);
    var counter_nikes = document.getElementById("qauntite3").textContent;
    counter_nikes++;
    document.getElementById("qauntite3").innerHTML = "" + counter_nikes;
    console.log(counter_nikes);
  
    var prix = counter_nikes * 20;
    document.getElementById("price3").innerHTML = "" + prix;
  
    var Total = Number(document.getElementById("Total-price").textContent);
    Total = Total + 20;
    document.getElementById("Total-price").innerHTML = "" + Total;
    console.log(Total);
  }
  function DeductNike() {

    console.log(DeductNike);
      var counter_nike = parseInt(document.getElementById("qauntite3").textContent);
      if (counter_nike === 0) {
          return
      }
      counter_nike--;
    
      document.getElementById("qauntite3").innerHTML = "" + counter_nike;
      console.log(counter_nike);
    
      var prix = counter_nike * 20;
      document.getElementById("price3").innerHTML = "" + prix;
    
      var Total = Number(document.getElementById("Total-price").textContent);
      Total = Total - 20;
      document.getElementById("Total-price").innerHTML = "" + Total;
      console.log(Total);
    }