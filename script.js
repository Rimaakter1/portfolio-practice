// const rima = "Rima"; //string
// const age = 22; //number
// const isLogin = false; //boolean
const friends = ["Jinia", "Sohana", "Saba", "sadia", "azad"]; //array

// const person = {
//     Name: "Rima",
//     age: 23,
//     job: "Web Instructor"
// }//object

// console.log(rima);
// console.log(age);
// console.log(isLogin);
// console.log(friends);
// console.log(person);



function handleContact(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value
    const message = event.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);


    const successContainer = document.getElementById("success-container")
    console.log(successContainer);

    const nameParagraph = document.createElement('p');
    // nameParagraph.innerText = "This is name";
    nameParagraph.innerText = `Your Name: ${name}`;
    const emailParagraph = document.createElement('p');
    emailParagraph.innerText = `Your Email : ${email}`
    const messageParagraph = document.createElement('p');
    messageParagraph.innerText = `Your message : ${message}`
    console.log(nameParagraph);
    console.log(emailParagraph);
    console.log(messageParagraph);

    successContainer.appendChild(nameParagraph);
    successContainer.appendChild(emailParagraph);
    successContainer.appendChild(messageParagraph);

}



// Array of Object

const imageArray = [
    {
        url: "./images/project-1.png",
    },
    {
        url: "./images/project-2.png",
    },
    {
        url: "./images/project-3.png",
    },
    {
        url: "./images/project-4.png",
    }
]



// const firstUrlObject = imageArray[0];
// const secondUrlObject = imageArray[2];
// const saba = friends[2];
// console.log(saba);

// console.log(firstUrlObject);
// console.log(firstUrlObject.url);
// console.log(secondUrlObject);
// console.log(imageArray);


// const imageLength = imageArray.length;
// console.log(imageLength);


// const firstUrl = imageArray[0];
// console.log(firstUrl);


// for (const item of imageArray) {
//     console.log(item);

// }

// for (let index = 0; index < imageLength; index++) {
//     console.log(index);
//     console.log(imageArray[index]);

// }


{/* <div class="project">
<img src="./images/project-4.png" alt="">
</div> */}

function handleShowMoreProjects() {
    const projectContainer = document.getElementById('projects')
    // const projectDiv = document.createElement('div');
    for (const item of imageArray) {
        const projectDivImage = document.createElement('div');
        projectDivImage.classList.add("project")
        projectDivImage.innerHTML = ` <img  src="${item.url}" alt="">
 `

        projectContainer.appendChild(projectDivImage);
        console.log(projectDivImage)

    }

}
