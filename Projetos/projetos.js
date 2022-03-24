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
  source.src = `../__videos/${target.innerHTML}.mp4`;
  console.log( `../__videos/${target.innerHTML.replace(' ','')}.mp4`)
  source.type = 'video/mp4';
  video.appendChild(source);
  divVideo.appendChild(video);
  section.appendChild(divVideo);
  const div = document.createElement('div');
  div.className = 'repositório-link';
  divVideo.appendChild(div);
}

const addToSectionEvent = () => {
  const projects = document.querySelectorAll('.project-list');
  projects.forEach((element) => {
    element.addEventListener('click', createDivAndAddToSection);
  });
}

addToSectionEvent();
