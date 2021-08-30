const studentsData = [
  {
    id: 0,
    name: "John",
    surname: "Smith",
    city: "London",
    hobby: ["reading", "diving"],
  },
  {
    id: 1,
    name: "Mark",
    surname: "Spencer",
    city: "Berlin",
    hobby: ["hiking", "singing", "riding"],
  },
  {
    id: 2,
    name: "Olivia",
    surname: "Flown",
    city: "Paris",
    hobby: ["reading"],
  },
  {
    id: 3,
    name: "Nina",
    surname: "Mab",
    city: "Milan",
    hobby: [],
  },
];

const studentsList = document.querySelector(".bestStudents");
const sectionTitle = studentsList.querySelector(".sectionTitle");
const addStudentForm = document.querySelector(".addStudent");
const addStudentBtn = addStudentForm.querySelector(".addStudentBtn");
const studentNameInput = addStudentForm.querySelector("#studentName");
const studentSurnameInput = addStudentForm.querySelector("#studentSurname");
const studentCityInput = addStudentForm.querySelector("#studentCity");
const studentHobbyInput = addStudentForm.querySelector("#studentHobby");
const errorName = addStudentForm.querySelector(".requiredErrorName");
const errorSurname = addStudentForm.querySelector(".requiredErrorSurname");
const errorCity = addStudentForm.querySelector(".requiredErrorCity");
const deleteStudent = document.querySelector(".deleteStudent");
const deleteStudentList = deleteStudent.querySelector("#deleteStudentList");
const deleteStudentBtn = deleteStudent.querySelector(".deleteStudentBtn");

addStudentBtn.addEventListener("click", (event) => {
  event.preventDefault();

  /*  const requiredError = (field) => {
    const error = "error" + `${field[0].toUpperCase()}${field.slice(1)}`;
    const input =
      "student" + `${field[0].toUpperCase()}${field.slice(1)}` + "Input";
    if (newStudent.field === "") {
      error.classList.remove("hidden");
      input.classList.add("error");
      return;
    } else {
      error.classList.add("hidden");
      input.classList.remove("error");
    }
  }; */

  const newStudent = {};

  newStudent.id = studentsData.length;

  newStudent.name = studentNameInput.value.trim();
  //requiredError("name");
  if (newStudent.name === "") {
    errorName.classList.remove("hidden");
    studentNameInput.classList.add("error");
    return;
  } else {
    errorName.classList.add("hidden");
    studentNameInput.classList.remove("error");
  }

  newStudent.surname = studentSurnameInput.value.trim();
  //requiredError("surname");
  if (newStudent.surname === "") {
    errorSurname.classList.remove("hidden");
    studentSurnameInput.classList.add("error");
    return;
  } else {
    errorSurname.classList.add("hidden");
    studentSurnameInput.classList.remove("error");
  }

  newStudent.city = studentCityInput.value.trim();
  //requiredError("city");
  if (newStudent.city === "") {
    errorCity.classList.remove("hidden");
    studentCityInput.classList.add("error");
    return;
  } else {
    errorCity.classList.add("hidden");
    studentCityInput.classList.remove("error");
  }

  newStudent.hobby = studentHobbyInput.value.split(", ");
  console.log(newStudent);

  studentNameInput.value = "";
  studentSurnameInput.value = "";
  studentCityInput.value = "";
  studentHobbyInput.value = "";

  studentsData.push(newStudent);
  renderStudentsList();
});

deleteStudentBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const options = deleteStudentList.options;
  const idToDelete = +options[options.selectedIndex].id.slice(3);
  const studentIndex = studentsData.findIndex(
    (element) => element.id === idToDelete
  );
  studentsData.splice(studentIndex, 1);
  deleteStudentList.value = "";
  renderStudentsList();
});

const renderStudentsList = () => {
  studentsList.innerHTML = "";
  studentsList.appendChild(sectionTitle);
  deleteStudentList.innerHTML = "";
  for (item of studentsData) {
    // create a card for every student
    const student = document.createElement("article");
    student.classList.add("card");

    // add student name in a card
    const studentName = document.createElement("h3");
    studentName.classList.add("studentName");
    studentName.innerText = item.name;
    student.appendChild(studentName);

    // add student surname in a card
    const surname = document.createElement("h3");
    surname.classList.add("studentSurname");
    surname.innerText = item.surname;
    student.appendChild(surname);

    // add student city in a card
    const city = document.createElement("p");
    city.classList.add("studentCity");

    const cityTitle = document.createElement("span");
    cityTitle.classList.add("categoryTitle");
    cityTitle.innerText = "City: ";
    city.appendChild(cityTitle);

    city.innerHTML += item.city;
    student.appendChild(city);

    // add student hobby in a card
    if (item.hobby.length !== 0 && item.hobby[0] !== "") {
      const hobbyList = document.createElement("p");
      hobbyList.classList.add("studentHobby");

      const hobbyTitle = document.createElement("span");
      hobbyTitle.classList.add("categoryTitle");
      hobbyTitle.innerText = "Hobby: ";
      hobbyList.appendChild(hobbyTitle);

      const text = item.hobby.join(", ");
      hobbyList.innerHTML += text;

      student.appendChild(hobbyList);
    }

    //Create new option in select list of Delete Student form
    const newDeleteItem = document.createElement("option");
    newDeleteItem.value = item.name + " " + item.surname;
    newDeleteItem.innerText = newDeleteItem.value;
    newDeleteItem.id = "del" + item.id;
    deleteStudentList.appendChild(newDeleteItem);

    // add student card to document
    studentsList.appendChild(student);
  }
};

renderStudentsList();
