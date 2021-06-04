const tbody = document.querySelector('tbody');

function displayStudents() {

    students.map((s,i) => {
        console.log('Index:', i, 'Students:', s);

        let tr = document.createElement('tr');
        let cohort = document.createElement('td');
        let name = document.createElement('td');
        let imgLink = document.createElement('td');
        let img = document.createElement('img');

        tr.setAttribute('id', i);
        cohort.innerText = s.cohort;
        name.innerText = s.name;
        img.src = s.icon;
        img.alt = `${s.name} icon`;
        img.setAttribute('class', 'imgSizes');

        imgLink.appendChild(img);
        tr.appendChild(cohort);
        tr.appendChild(name);
        tr.appendChild(imgLink);
        tbody.appendChild(tr);

    })

}

displayStudents();