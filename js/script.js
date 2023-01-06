/* 
 * Main scripts file for the timetable website.
 * Assignment 5, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

// This assignment solution contains code re-used from A4 in this course. This code is used with Prof. Raghav Sampangi's permission. This code is used as a starting point for my solution for A5.

let cont = document.querySelector(".container")
let sel =  document.createElement("section")
sel.className = "course-info"

// Used this for loop to import data from course-data.js to script.js
function display(courseInfo){
    sel.innerHTML=""
    if(courseInfo.length > 0){
        for(let item in courseInfo){
        
            let section = document.createElement("section")
            section.className="course-offering-info"
        
            let heading = document.createElement("h1")
            heading.className = "headingClass_1"
        
            let paragraph = document.createElement("p")
            paragraph.className = "paraClass_1"
        
            let paragraph1 = document.createElement("p")
            paragraph1.className="paraClass_2"
        
            let paragraph2= document.createElement("p")
            paragraph2.className="paraClass_3"
        
            let paragraph3= document.createElement("p")
            paragraph3.className="paraClass_4"
        
            let button = document.createElement("button")
            button.className = "buttonClass"
        
            button.addEventListener("click", setter)
        
        
            function setter(){
                let p = document.createElement("p")
                p.innerText=(courseInfo[item].code+": "+courseInfo[item].name+"\n")
                document.querySelector(".course-selection-bag").appendChild(p)
            }
        
            heading.innerHTML = courseInfo[item].code +": "+courseInfo[item].name
            paragraph.innerHTML= courseInfo[item].prof
        
            paragraph1.innerHTML="Current enrollment: "+courseInfo[item].currEnroll+" (max: " +courseInfo[item].maxEnroll + ")"
            paragraph2.innerHTML="Location: "+courseInfo[item].location+"\n"+"(schedule: "+courseInfo[item].schedule+")"
            paragraph3.innerHTML=courseInfo[item].info
            button.innerHTML="Sign-up for course"
        
            paragraph3.appendChild(button)
            paragraph2.appendChild(paragraph3)
            paragraph1.appendChild(paragraph2)
            paragraph.appendChild(paragraph1)
            heading.appendChild(paragraph)
            section.appendChild(heading)
            sel.appendChild(section)
        
        }
    }
    else{
        sel.innerHTML = "Sorry! No course exists with this course code or name"
    }
    cont.appendChild(sel)
    }

    display(courseInfo);

    function search() {
        let searchInput = document
        .getElementById("search-keywords")
        .value.trim()
        .toLowerCase();
        console.log(searchInput);
        if (!searchInput) {
          console.log("Empty Search");
        }
        let searchedCourses = courseInfo.filter(function(course){
            return (
                course.name.toLowerCase().includes(searchInput) ||
                course.code.toLowerCase().includes(searchInput)
            );
        });
    display(searchedCourses);
    }

let button = document.getElementById("search-btn");
button.addEventListener("click", search);