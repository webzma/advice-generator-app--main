const button = document.querySelector(".icon-neon-container");
button.addEventListener("click", getData);

async function getData() {
  const API = "https://api.adviceslip.com/advice";
  const request = await fetch(API);

  if (request.status === 200) {
    const data = await request.json();
    console.log(data.slip);
    const container = document.querySelector(".card-info");
    const htmlCode = `
      <p class="card-info__title">Advice #${data.slip.id}</p>
          <p class="card-info__copy">
            ${data.slip.advice}
          </p>
    `;
    container.innerHTML = htmlCode;
  } else {
    console.error("Hubo un error!");
  }
}
