class Student {
  constructor(id, name, surname, city, hobby) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.hobby = hobby;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

const studentsData = [
  new Student(0, "John", "Smith", "London", ["reading", "diving"]),
  new Student(1, "Mark", "Spencer", "Berlin", ["hiking", "singing", "riding"]),
  new Student(2, "Olivia", "Flown", "Paris", ["reading"]),
  new Student(3, "Nina", "Mab", "Milan", []),
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

const checkRequired = () => {
  const requiredFields = document.querySelectorAll("input[required]");
  let isRequired = false;
  for (element of requiredFields) {
    if (element.value.trim() === "") {
      element.classList.add("error");
      element.nextSibling.nextSibling.classList.remove("hidden");
      isRequired = true;
    }
  }
  return isRequired;
};

const onChangeHandle = (event) => {
  if (event.target.value.trim() === "") {
    event.target.classList.add("error");
    event.target.nextSibling.nextSibling.classList.remove("hidden");
  } else {
    event.target.classList.remove("error");
    event.target.nextSibling.nextSibling.classList.add("hidden");
  }
};

document.querySelectorAll("input[required]").forEach((element) => {
  element.addEventListener("blur", onChangeHandle);
});

document.querySelectorAll("input[required]").forEach((element) => {
  element.addEventListener("focus", (event) => {
    event.target.classList.remove("error");
  });
});

addStudentBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (checkRequired()) return;

  newId = studentsData.length;
  newName = studentNameInput.value.trim();
  newSurname = studentSurnameInput.value.trim();
  newCity = studentCityInput.value.trim();
  let newHobby = [];
  if (studentHobbyInput.value.trim() != "") {
    newHobby = studentHobbyInput.value.match(/(\w)+/g);
    // newStudent.hobby = studentHobbyInput.value.split(/[^a-zA-Z0-9 ]/);
  }

  const newStudent = new Student(newId, newName, newSurname, newCity, newHobby);

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

    student.innerHTML = `
      <h3 class='studentFullName'>${item.getFullName()}</h3>
      <p class='studentCity'><span class='categoryTitle'>City: </span>${
        item.city
      }</p>
    `;

    if (item.hobby.length > 0) {
      student.innerHTML += `<p class="studentHobby"><span class="categoryTitle">Hobby: </span>${item.hobby.join(
        ", "
      )}</p>`;
    }

    //Create new option in select list of Delete Student form
    const newDeleteItem = document.createElement("option");
    newDeleteItem.value = item.getFullName();
    newDeleteItem.innerText = newDeleteItem.value;
    newDeleteItem.id = "del" + item.id;
    deleteStudentList.appendChild(newDeleteItem);

    // add student card to document
    studentsList.appendChild(student);
  }
};

renderStudentsList();
