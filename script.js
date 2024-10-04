const getData = async () => {
    const response = await fetch("https://test-api.codingbootcamp.cz/api/4d66b532/events");
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
    createWidget() {}
  }
