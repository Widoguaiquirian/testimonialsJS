'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, odit ut neque fuga reiciendis dolor aut quia velit deleniti obcaecati!Voluptas, minus reiciendis. Expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in animi quos similique nobis esse dignissimos blanditiis provident est! Minus.',
  },
  {
    name: 'Myles Morales',
    position: 'Sales',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, odit ut neque fuga reiciendis dolor aut quia velit deleniti obas',
  },
  {
    name: 'Peter Parker',
    position: 'BI',
    photo: 'https://randomuser.me/api/portraits/men/25.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt veritatis, suscipit qui rerum ut obcaecati laborum similique sint, molestiae eaque eligendi? Voluptatum accusamus delectus, minima nesciunt esse id quibusdam quod. Deserunt, obcaecati autem!',
  },
  {
    name: 'Tony Stark',
    position: 'Supply',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur praesentium sunt, obcaecati dolore enim quis non voluptatem laborum cumque nesciunt dolorum veritatis. ',
  },
  {
    name: 'Steve Rogers',
    position: 'IT',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis maiores aut at itaque tempora, voluptatum nostrum consectetur tempore perferendis, molestias numquam debitis recusandae vero incidunt molestiae qui ipsum? Eius facilis beatae tempore cumque rerum inventore, aliquam reiciendis sequi ratione, enim esse suscipit totam fuga nobis eaque dolore est quo vel aliquid deleniti dignissimos consequatur itaque? Odit facilis necessitatibus maxime fugiat.',
  },
];

let idx = 1;
//ACA USAMOS IDX 1 PORQUE EL CERO YA ESTA EN EL HTML, NO HACE FALTA PASARLO OTRA VEZ

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;
  changeBG();
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

//IT'S VERY IMPORTANT THAT THIS MILISECONDS ARE THE SAME AS THE SECONDS IN THE ANIMATION
// PUT IN CSS
setInterval(updateTestimonial, 10000);

const BG = ['#476ce4', '#8047e4'];
let bgColor = 1;
function changeBG() {
  testimonialsContainer.style.backgroundColor = BG[bgColor];
  bgColor++;

  if (bgColor > BG.length - 1) {
    bgColor = 0;
  }
}
