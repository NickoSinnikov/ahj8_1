export default class Request {
  allTickets() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://ahj-http1-bk.herokuapp.com/?method=allTickets");
      // xhr.open('GET', 'http://localhost:8080/?method=allTickets');
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (e) {
            console.error(e);
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  ticketById(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append("id", id);
      xhr.open(
        "GET",
        `https://ahj-http1-bk.herokuapp.com/?method=ticketById&id=${id}`
      );
      // xhr.open('GET', `http://localhost:8080/?method=ticketById&id=${id}`);
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (e) {
            console.error(e);
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  createTicket(name, description) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append("name", name);
      params.append("description", description);
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://ahj-http1-bk.herokuapp.com/?method=createTicket"
      );
      // xhr.open('POST', 'http://localhost:8080/?method=createTicket');
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (e) {
            console.error(e);
            reject(e);
          }
        }
      });
      xhr.send(params);
    });
  }

  removeById(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append("id", id);
      xhr.open(
        "DELETE",
        `https://ahj-http1-bk.herokuapp.com/?method=removeById&id=${id}`
      );
      // xhr.open('POST', `http://localhost:8080/?method=removeById&id=${id}`);
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (e) {
            console.error(e);
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  editTicket(id, name, description) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append("id", id);
      params.append("name", name);
      params.append("description", description);
      console.log(params);
      xhr.open(
        "POST",
        `https://ahj-http1-bk.herokuapp.com/?method=editTicket&id=${id}`
      );
      // xhr.open('POST', 'http://localhost:8080/?method=editTicket');
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (e) {
            console.error(e);
            reject(e);
          }
        }
      });
      xhr.send(params);
    });
  }
}
