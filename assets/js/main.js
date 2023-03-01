// Yu-Gi-Oh! Card Generator
// Author: @GemAfaWell

// define variables
const cardImage = document.getElementById('cardImage');
const cardInfo = document.getElementById('cardInfo');
const cardButton = document.getElementById('button');
const cardReset = document.getElementById('reset');

function getCard() {
  // Set up the API endpoint URL
  const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php';

  // Make the API call
  fetch(url)
    // Convert the response to JSON
    .then((response) => response.json())

    // Use the JSON data
    .then((data) => {
      // Log the data to the console
      console.log(data);

      // Log the data to the page
      cardImage.innerHTML = `<img src="${data.card_images[0].image_url}" alt="${data.name}">`;
      // scroll to the card image smoothly
      cardImage.scrollIntoView({behavior: "smooth"});

      // Function to reveal the card's info
      cardImage.onclick = revealCardInfo = () => {
        cardInfo.classList.add('showCardInfo');
        cardInfo.innerHTML = 
          `Name: ${data.name} | Type: ${data.type} | Attribute: ${data.attribute} | Level: ${data.level}
          <br>
          ATK: ${data.atk} | DEF: ${data.def}
          <br>
          Card Text: ${data.desc}
          <br>
          Card ID: ${data.id}
          <br>`;
        // scroll to the card info smoothly
        cardInfo.scrollIntoView({behavior: "smooth"});
      };
    });
}

// Event listener to reset the page when the reset button is clicked
cardReset.addEventListener('click', () => {
  location.reload();
});
