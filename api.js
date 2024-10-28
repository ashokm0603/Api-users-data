window
  .fetch("https://api.github.com/users")
  .then((data) => data.json())
  .then((person) =>
    person.map((user) => {
      const heading = document.createElement("h1");
      const image = document.createElement("img");
      heading.innerText = `${user.login} : ${user.id}`;
      image.src = `${user.avatar_url}`;
      let body = document.querySelector("body");
      body.appendChild(heading);
      body.appendChild(image);
    })
  );
