const getData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/4d66b532/events"
  );
  const data = await response.json();
  console.log(data);
  return data;
};

class EventName {
  constructor(id, name, date, description) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.createWidget();
  }

  createWidget() {
    const addingInfoToDiv = document.querySelector(".events");
    const docEl = document.createElement("div");
    docEl.classList.add("event__widget");

    // Adding event ID to the register button
    docEl.innerHTML = `
      <h3 class="name">${this.name}</h3>
      <p class="description">${this.description}</p>
      <p class="date">${this.date}</p>
      <button class="registration__button" data-id="${this.id}">Register</button>
    `;
    addingInfoToDiv.appendChild(docEl);
  }
}

getData().then((data) => {
  data.forEach((event) => {
    new EventName(event.id, event.name, event.date, event.description);
  });
  buttonRegistration(); 
});

const myModal = (eventId) => {
  const addingModalToDiv = document.querySelector(".events");
  const existingModal = document.querySelector(".my__modal");


  if (existingModal) {
    existingModal.remove();
  }

  const newModal = document.createElement("div");
  newModal.classList.add("my__modal");
  newModal.innerHTML = `
    <form id="registrationForm">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" required><br><br>
      <label for="lname">Surname:</label>
      <input type="text" id="lname" name="lname" required><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>
      <label for="phone">Phone number:</label>
      <input type="number" id="phone" name="phone" required><br><br>
      <label for="age">I am old enough to participate</label>
      <input type="checkbox" id="age" name="age" required><br><br>
      <input type="submit" value="Submit">
    </form>
  `;

  addingModalToDiv.appendChild(newModal);

  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    postData(eventId); 
  });
};

const buttonRegistration = () => {
  const buttons = document.querySelectorAll(".registration__button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const eventId = button.getAttribute("data-id"); 
      myModal(eventId);
    });
  });
};


const postData = async (eventId) => {
  const url = `https://test-api.codingbootcamp.cz/api/4d66b532/events/${eventId}/registrations`;

  
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const ageChecked = document.getElementById("age").checked;

  if (!ageChecked) {
    alert("You must confirm that you are old enough to participate.");
    return;
  }

  const myDataObject = {
    event_id: eventId,
    first_name: fname,
    last_name: lname,
    email: email,
    phone: phone,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(myDataObject),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Registration successful:", result);


    const modal = document.querySelector(".my__modal");
    modal.style.display = "none";
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
