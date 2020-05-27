var sections = document.getElementsByClassName("section");
var links = document.querySelectorAll(".sidebar li");
var userContainer = document.querySelector("#manage .details");
var userTemplate = (name) => {
  let div = document.createElement("div");
  div.setAttribute("class", "users");
  div.innerHTML = `${name}<i class="uil uil-edit-alt edit"></i>`;
  return div;
};

function updateUsers() {
  var users = [
    {
      name: "Sourabh Patel",
      id: 123124,
    },
    {
      name: "Shivam Ambodiya",
      id: 123124,
    },
    {
      name: "Utkarsh Dwivedi",
      id: 123124,
    },
    {
      name: "Nikhil Soni",
      id: 123124,
    },
    {
      name: "Sanket Soni",
      id: 123124,
    },
    {
      name: "Saransh Bairagi",
      id: 123124,
    },
    {
      name: "Shivam Ambodiya",
      id: 123124,
    },
    {
      name: "Utkarsh Dwivedi",
      id: 123124,
    },
    {
      name: "Nikhil Soni",
      id: 123124,
    },
    {
      name: "Sanket Soni",
      id: 123124,
    },
    {
      name: "Saransh Bairagi",
      id: 123124,
    }
  ];
  users.forEach((user) => {
    userContainer.appendChild(userTemplate(user.name));
  });
}
function toggle(n) {
  for (const section of sections) {
    if (section.classList.contains("section-active")) {
      section.classList.remove("section-active");
    }
  }
  sections.item(n).classList.add("section-active");
}

(function () {
  links.forEach((item, n) => {
    item.addEventListener("click", (ev) => {
      toggle(n);
    });
  });
  updateUsers();
})();
