const studentsData = [
    {
        'name': 'John',
        'surname': 'Smith',
        'city': 'London',
        'hobby': ['reading, diving']
    },
    {
        'name': 'Mark',
        'surname': 'Spencer',
        'city': 'Berlin',
        'hobby': ['hiking', 'singing', 'riding']
    },
    {
        'name': 'Olivia',
        'surname': 'Flown',
        'city': 'Paris',
        'hobby': ['reading']
    },
    {
        'name': 'Nina',
        'surname': 'Mab',
        'city': 'Milan',
        'hobby': []
    }
]

const studentsList = document.querySelector('.bestStudents');

for (item in studentsData) {
    // create a card for every student
    const student = document.createElement('article');
    student.classList.add('card');

    // add student name in a card
    const studentName = document.createElement('h3');
    studentName.classList.add('studentName');
    studentName.innerText = studentsData[item].name;
    student.appendChild(studentName);
    
    // add student surname in a card
    const surname = document.createElement('h3');
    surname.classList.add('studentSurname');
    surname.innerText = studentsData[item].surname;
    student.appendChild(surname);
    
    // add student city in a card
    const city = document.createElement('p');
    city.classList.add('studentCity');
    
    const cityTitle = document.createElement('span');
    cityTitle.classList.add('categoryTitle');
    cityTitle.innerText = 'City: ';
    city.appendChild(cityTitle);

    city.innerHTML += studentsData[item].city;
    student.appendChild(city);
    
    // add student hobby in a card
    if (studentsData[item].hobby.length !== 0) {
        const hobbyList = document.createElement('p');
        hobbyList.classList.add('studentHobby');

        const hobbyTitle = document.createElement('span');
        hobbyTitle.classList.add('categoryTitle');
        hobbyTitle.innerText = 'Hobby: ';
        hobbyList.appendChild(hobbyTitle);

        for (hobby of studentsData[item].hobby) {
            hobbyList.innerHTML += hobby + '; ';
        }
        student.appendChild(hobbyList);
    }

    // add student card to document
    studentsList.appendChild(student);
}