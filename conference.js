const body = document.querySelector('body');

const closeIcon = document.querySelector('#close-icon');

const hamburger = document.querySelector('#hamburger');

const speakerList = document.querySelector('#speakers-list');

hamburger.addEventListener('click', () => {
  body.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  body.classList.remove('active');
});

const createSpeaker = (speaker) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'speakers-list-item');
  const img = document.createElement('img');
  img.setAttribute('src', speaker.photoUrl);
  img.setAttribute('class', 'image');
  img.setAttribute('alt', 'image');
  const div = document.createElement('div');
  div.setAttribute('class', 'speakers-list-item__info');
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'speakers-list-item__heading');
  h2.textContent = speaker.speakerName;
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'speakers-list-item__role');
  h3.textContent = speaker.role;
  const p = document.createElement('p');
  p.setAttribute('class', 'speakers-list-item__text');
  p.textContent = speaker.description;
  li.appendChild(img);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);
  li.appendChild(div);
  return li;
};

if (speakerList) {
  const speakers = [
    {
      speakerName: 'Teddy Livist',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'assets/speaker_one.jpg',
    },
    {
      speakerName: 'Adonike Sly',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'assets/speaker_three.jpg',
    },
    {
      speakerName: 'Hiro Mataba',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'assets/speaker_four.jpg',
    },
    {
      speakerName: 'Calvince Otieno',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'assets/speaker_one.jpg',
    },
    {
      speakerName: 'Arturo Ortega',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'assets/speaker_three.jpg',
    },
    {
      speakerName: 'Damilare Akintoye',
      role: 'Director of art center',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'assets/speaker_four.jpg',
    },
  ];
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerItem = createSpeaker(speakers[i]);
    speakerList.appendChild(speakerItem);
  }
}
