function home() {
  const container = document.createElement("div");
  container.setAttribute('id', 'main-section');

  const card = document.createElement('div');
  card.setAttribute('id', 'home-card');

  const heading_container = document.createElement('div');
  heading_container.setAttribute('id','heading-container'  );

  const heading = document.createElement('h2');
  heading.setAttribute('id', 'home-card-heading');
  heading.textContent = 'ASIAN INSPIRED BOWLS';

  const text = document.createElement('p');
  text.setAttribute('id', 'home-card-text');
  text.textContent = 'Fresh, healthy, delicious';

  const button = document.createElement('button');
  button.setAttribute('id', 'home-card-btn');
  button.textContent = 'Order Now';

  heading_container.appendChild(heading);
  heading_container.appendChild(text);
  card.appendChild(heading_container);
  card.appendChild(button);

  container.appendChild(card);  

  return container;
}
export default home;