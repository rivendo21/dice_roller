// const person = (name, age) => {
//   console.log(`my name is ${name}`);
//   console.log(`my age is ${age}`);
// };

// const personHobbies = (person_name, person_age, firstpet, secondpet) => {
//   person(person_name, person_age);
//   console.log(`my first pet is ${firstpet}`);
//   console.log(`my second pet is ${secondpet}`);
// };

// personHobbies("abdel", 20, "dog", "cat");

function roll() {
  const textbox = document.getElementById("textbox").value;
  const noOfDiceContainer = document.getElementById("noOfDiceContainer");
  const imagesContainer = document.getElementById("imagesContainer");
  let values = [];
  let images = [];

  if (textbox >= 1 && textbox <= 6) {
    for (let i = 0; i < textbox; i++) {
      const value = Math.floor(Math.random() * 6 + 1);
      const image = `<img src="Dice_images/${value}.png" alt=dice:${value}>`;
      values.push(value);
      images.push(image);
    }
    noOfDiceContainer.innerHTML = values.join(",");
    imagesContainer.innerHTML = images.join(",");
  } else {
    window.alert(
      "AYYYY aintnoway you trying to do negatives or higher than 6 even tho i limit it from the slide"
    );
  }
}
