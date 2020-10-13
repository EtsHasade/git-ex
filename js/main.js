'use strict';

console.log('Starting up');

$('document').ready(function initPage() {
    renderProjects();
})

function renderProjects() {
    var projects = getProjects()
    console.log(projects);

    var strHTML = '';

    projects.forEach(function (project) {
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')" >
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i>Show Project</i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/projects/${project.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
      `
    });
    console.log('strHTML', strHTML);

    $('.render-projects-area').html(strHTML);
}


function renderModal(projectId) {
    var project = getProjectById(projectId);
    console.log('proj to modal', project);

    var labelsStrHtml = project.labels.map(function(label) {
        return `<span class="category-tag category-tag-${label}">${label}</span>\n`
        }).join('');     

    var strHTML = `
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}-full.jpg" alt="">
    <div class="modal-detail">
        <h2>${project.name}</h2>
        <p class="item-intro text-muted">${project.title}.</p>

        <p>${project.desc}</p>
        <ul class="list-inline">
          <li class="modal-proj-title">${project.title}</li>
          <li>Date: ${new Date(project.publishedAt).toLocaleDateString()}</li>
          <li>Client: ${project.client}</li>
          <li>Category:${labelsStrHtml}</li>
        </ul>

    </div>
      `

    //   <li>Category: <span>${project.labels.map('</span><span> ')}</span></li>
    console.log('strHTML', strHTML);

    $('.portfolio-modal .modal-body').html(strHTML);

}
