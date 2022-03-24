let ibc = 'Meus pais são professores de matemática formados pela UERJ, minha mãe dava aula no Instituto Braga Carneiro, onde desde criança estudei do jardim de infância até a sétima série, e depois fazendo o primeiro e segundo ano do ensino médio. Sempre gostei de números e consequentimente sempre me destaquei em matemática, que era minha matéria preferida, cresci sendo um bom aluno e muito participativo, com notas boas na maioria das provas.';
let martins = 'No decorrer da minha quinta, sexta e sétima série, meu irmão fez curso preparatório para o colégio naval, influenciado por ele, resolvi tentar também. Então entrei na mesma escola que ele, e comecei a me preparar, devido a diferença de intensidade nos estudos entre colégios, tive dificuldades que consegui superar com esforço, conseguindo a aprovação na oitava série mas infelizmente falhando no concurso, no ano seguinde, parei o meu ensino médio para me dedicar inteiramente ao curso, onde estudava mais de 10 horas por dia com foco total em passar no concurso do Colégio Naval, está epoca, foi a época em que adquiri meus conhecimento em matemática e física q trago comigo até hoje, porém infelizmente, apesar de conseguir a aprovação na prova de matemática do concurso, não consegui ser aprovado para entrar para marinha, então ao final de 2 anos de curso, resolvi voltar ao ensino médio na minha antiga escola onde fiz o primeiro e o segundo ano com certa facilidade, e no terceiro ano fui para o colégio curso elite, me preparar para o vestibular.';
let elite = '';
let uerj = '';
let ppc = '';
let klimax = '';
let allevato = '';
let trybe = '';

// BUILDERS

const createSection = (classLogo, string) => {
  let logo = document.querySelector(classLogo);
  let section = document.createElement('section');
  let sectionContainer = document.querySelector('.container-main');
  let paragraph = document.createElement('p');
  section.className = 'section-about-item';
  logo.addEventListener('click', () => {
      if(document.querySelector('.section-about-item')) {
        document.querySelector('.section-about-item').remove();
      }
    sectionContainer.appendChild(section);
    section.appendChild(paragraph);
    paragraph.innerHTML = string;
  });
}

createSection('.ibc', ibc);
createSection('.martins', martins);

