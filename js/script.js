document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
  const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
  const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);

  const total = q1 + q2 + q3;

  let pizzaType = "";
  let bgImage = "";

  switch (total) {
    case 0:
      pizzaType = "ham";
      bgImage = "images/nic.jpg";
      break;
    case 1:
      pizzaType = "cheese";
      bgImage = "images/sunka.jpg";
      break;
    case 2:
      pizzaType = "mushroom";
      bgImage = "images/syr.jpg";
      break;
    case 3:
      pizzaType = "ham and cheese";
      bgImage = "images/zampiony.jpg";
      break;
    case 4:
      pizzaType = "ham and mushroom";
      bgImage = "images/sunka-syr.jpg";
      break;
    case 5:
      pizzaType = "all";
      bgImage = "images/sunka-zampiony.jpg";
  }

  // Nastavení obrázku jako pozadí
  document.body.style.backgroundImage = `url('${bgImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  document.getElementById("result").innerText = `Your pizza personality is: ${pizzaType}! 🍕`;
});
