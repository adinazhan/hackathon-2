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

class EventName {
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
    new EventName(event.name, event.date, event.description);
  });
  buttonRegistration(); // Initialize button events after elements are created
});

const myModal = () => {
  const docModal = document.querySelector(".my__modal");

    const addingModalToDiv = document.querySelector(".events");
    const newModal = document.createElement("div");
    newModal.classList.add("my__modal");
    newModal.innerHTML = `
      <form action="">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>

        <label for="lname">Surname:</label>
        <input type="text" id="lname" name="lname"><br><br>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email"><br><br>

        <label for="phone">Phone number:</label>
        <input type="number" id="phone" name="phone"><br><br>

        <label for="age">I am old enough to participate</label>
        <input type="checkbox" id="age" name="age"><br><br>

        <input type="submit" value="Submit">
      </form>
    `;
    addingModalToDiv.appendChild(newModal);
};

const buttonRegistration = () => {
  const buttons = document.querySelectorAll(".registration__button");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      console.log("Register button clicked for event:", e.target.previousElementSibling.previousElementSibling.textContent);
      myModal();
    });
  });
};
