'use strict';

console.log('load projects');
const PROJECTS_STORAGE_KEY = 'gProjects';
const GNEXT_Id_STORAGE_KEY = 'gNextId';
const PROJECTS_FOLDER = 'proj'

var gProjects = [
    createProject('Book Shop','Book Shop', 'In studies', 'lorem','HTML', 'CSS', 'JS'),
    createProject('Fire-Line','Fire-Line', 'In studies', 'lorem','HTML', 'CSS', 'JS'),
    createProject('Guess who','Guess who', 'In studies', 'lorem','HTML', 'CSS', 'JS'),
    createProject('mine-spweeper','mine-spweeper', 'In studies', 'lorem','HTML', 'CSS', 'JS'),
    createProject('pacman','pacman', 'In studies', 'lorem','HTML', 'CSS', 'JS'),
    createProject('To-Do app','To-Do app', 'In studies', 'lorem','HTML', 'CSS', 'JS'),
];

function getProjects() {
    var projectsForView =  gProjects;
    return projectsForView;
}

function getProjectById(projectId) {
    return gProjects.find(function (project) {
        return projectId === project.id
    })
}


function createProject(projectName, title, client , desc) {  
    return {
        id: projectName,
        name: projectName,
        title: title,
        client: client,
        desc: desc,
        url: `img/portfolio/${projectName}.jpg`,
        publishedAt: Date.now(),
        labels: [...arguments].slice(4)
    }
}




// function createProjects() {
//     var gNextId = (loadFromStorage(GNEXT_Id_STORAGE_KEY) || 1001);
//     gProjects = (loadFromStorage(PROJECTS_STORAGE_KEY) || [createProject('bbb', 'title of project', 'some desc', 'labelA', 'labelB')]);
//     return gProjects;
// }





//     gProjects.push(project);
//     _saveProjects();
//     _saveGNextId();

//     return project;
// }



// function _saveProjects() {
//     return saveToStorage(PROJECTS_STORAGE_KEY, gProjects)
// }

// function _loadProjects() {
//     return loadFromStorage(PROJECTS_STORAGE_KEY)
// }
// function _saveGNextId() {
//     return saveToStorage(GNEXT_Id_STORAGE_KEY, gNextId)
// }

// function _loadGNextId() {
//     return loadFromStorage(GNEXT_Id_STORAGE_KEY)
// }