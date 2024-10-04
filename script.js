const getData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/4d66b532/events"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
};
getData();

class eventName {
  constructor(name, date, description) {
    this.name = name;
    this.date = date;
    this.description = description;
  }
  createWidget() {
    document.createElement("div");
    populateData.classList.add("event__widget");
    populateData.innerHTML = `
        <h3 class="name">${this.name}</h3>
        <p class="description">${this.description}</p>
        <p class="date">${this.date}</p>
        <button class="registration__button">Register</button>`;
    const addingInfoToDiv = document.querySelector(".events");
    addingInfoToDiv.appendChild(populateData);
  }
}
