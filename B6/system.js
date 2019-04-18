
  function spin(){
    document.getElementById("roulette").style = "transform:translateZ(0px) rotate("+random()+"rad)";
  }

  var random = () => {
    return (Math.floor(Math.random() * 20))
  }