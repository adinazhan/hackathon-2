const getData = async () => {
  try {
    const response = await fetch(
      "https://test-api.codingbootcamp.cz/api/4d66b532/events"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

class eventName {
  constructor(name, date, description) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.createWidget();
  }

  createWidget() {
    const addingInfoToDiv = document.querySelector(".events");
    const docEl = document.createElement("div");
    docEl.classList.add("event__widget");

    docEl.innerHTML = `
      <h3 class="name">${this.name}</h3>
      <p class="description">${this.description}</p>
      <p class="date">${this.date}</p>
      <button class="registration__button">Register</button>
    `;
    addingInfoToDiv.appendChild(docEl);
  }
}

getData().then((data) => {
  data.forEach((event) => {
    new eventName(event.name, event.date, event.description);
  });
});

const myModal = () => {
  const addingModalToDIv = document.querySelector(".events");
  const docModal = document.createElement("div");
  docModal.classList.add("my__modal");
  docModal.innerHTML = `
  <form action="">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Surname:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="lname">Email:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="fname">Phone number:</label>
  <input type="number" id="fname" name="fname"><br><br>
  <label for="fname">I am old enough to participate</label>
  <input type="checkbox" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>
  `;
  addingModalToDIv.appendChild(docModal);
};
myModal();

const buttonRegistration = () => {
  const myButton = document.querySelector(".registration__button");
  myButton.addEventListener("click");
};
