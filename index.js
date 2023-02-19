async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  countries.forEach(createCountryCard);
}

function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.translations.por.official;
  const name = document.createElement("h2");
  name.textContent = countryName;
  const flag = document.createElement("img");
  flag.src = country.flags["svg"];

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

getCountries();
