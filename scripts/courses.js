const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Populate default / all courses
displayCourses(courses);
displayCourseWork();


allLink=document.querySelector("#allCourses");
cseLink=document.querySelector("#cseCourses");
wddLink=document.querySelector("#wddCourses");

allLink.addEventListener('click', () => {
    console.clear();
    console.log("Clicked All Button");
    displayCourses(courses);
})

cseLink.addEventListener('click', ()  => {
    console.clear();
    console.log("Clicked CSE Button");
    let cseCourses = courses.filter(courses => courses.subject.includes("CSE"));
    displayCourses(cseCourses);
    //console.log(cseCourses);
})

wddLink.addEventListener('click', () => {
    console.clear();
    console.log("Clicked WDD Button");
    let wddCourses = courses.filter(courses => courses.subject.includes("WDD"));
    displayCourses(wddCourses);
    //console.log(wddCourses);
})

// Default * Show all courses
function displayCourses(filteredCourses){
    console.clear();
    console.log(filteredCourses);


    // Get courseListResults div and clear it out
    let courseList = document.getElementById("courseListResults");
    courseList.innerHTML = "";
    console.log(courseList);

    filteredCourses.forEach(element => {
        let fullCourseName = element.subject + " " + element.number;
        let finished = element.completed;
        //console.log(fullCourseName);
        //console.log(finished);
        
        // build html
        let newCourse = document.createElement("p");
        newCourse.setAttribute('class', finished);
        newCourse.innerHTML = fullCourseName;

        courseList.appendChild(newCourse);

        //htmlText = "<p class=" + finished + ">" + fullCourseName + "</p>\n" ;
        //newCourse.classlist.add(finished);
        //console.log(htmlText);

    });
}

function displayCourseWork() {
    console.log("Entering Course Work");
    let certificateCourseList = document.getElementById("courseWork");
    certificateCourseList.innerHTML="";

    let creditTotal = 0;

    courses.forEach(element => {
        //console.log("Currently credit total: " + creditTotal);
        //console.log("Course credits: " + element.credits);

        let fullCourseName = element.subject + " " + element.number + " - " + element.title;
        let credits = element.credits;
        
        let newCourse = document.createElement("div");

        let courseName = document.createElement("p");
            courseName.innerText = fullCourseName;
        let courseCredits = document.createElement("p");
            courseCredits.innerText = credits + " credits";

        newCourse.setAttribute('class', 'course-credits');
        certificateCourseList.appendChild(newCourse);
        newCourse.appendChild(courseName);
        newCourse.appendChild(courseCredits);


        creditTotal += parseInt(element.credits);
        //console.log("credits before: " + credit);

    })

    let newCourse = document.createElement("div");
    newCourse.setAttribute('class', 'tally');
    certificateCourseList.appendChild(newCourse);

    let totalCourse = document.createElement("p");
        totalCourse.innerText = "Total Course Credits:";
    let totalCredits = document.createElement("p");
        totalCredits.innerText = creditTotal + " credits";

    newCourse.appendChild(totalCourse);
    newCourse.appendChild(totalCredits);
    
}



