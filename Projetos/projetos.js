const createDivAndAddToSection = ({target}) => {
  if (document.querySelector('.video')) {
    document.querySelector('.video').remove();
  }
  const section = document.querySelector('.show-video-project');
  const divVideo = document.createElement('div');
  divVideo.className = 'video';
  const gif = document.createElement('img');
  gif.className = target.innerHTML;
  gif.className = 'container-video';
  gif.src = `../__videos/${target.innerHTML}.gif`;
  const source = document.createElement('source');
  gif.appendChild(source);
  divVideo.appendChild(gif);
  section.appendChild(divVideo);
  const div = document.createElement('div');
  div.className = 'repositório-link';
  div.innerHTML = 'Repoitório Projeto (Breve)'
  divVideo.appendChild(div);
}

const addToSectionEvent = () => {
  const projects = document.querySelectorAll('.project-list');
  projects.forEach((element) => {
    element.addEventListener('click', createDivAndAddToSection);
  });
}

addToSectionEvent();
