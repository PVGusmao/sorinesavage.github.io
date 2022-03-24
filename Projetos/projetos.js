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
  gif.src = `https://user-images.githubusercontent.com/63107666/159835340-4eb9860b-738f-4eac-b572-8490a2392e4b.mp4`;
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
