const createDivAndAddToSection = ({target}) => {
  if (document.querySelector('.video')) {
    document.querySelector('.video').remove();
  }
  const section = document.querySelector('.show-video-project');
  const divVideo = document.createElement('div');
  divVideo.className = 'video';
  const video = document.createElement('video');
  video.className = target.innerHTML;
  video.className = 'container-video';
  video.controls = 'controls';
  const source = document.createElement('source');
  source.src = `https://github.com/sorinesavage/sorinesavage.github.io/raw/main/__videos/${target.innerHTML.toLowerCase()}.mp4`;
  video.appendChild(source);
  divVideo.appendChild(video);
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
