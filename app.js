const heart = document.querySelector('.heart');
  const card = document.querySelector('.card');

  card.addEventListener('mouseenter', function() {
    heart.style.animation = 'heartbeat 1s infinite alternate';
  });

  card.addEventListener('mouseleave', function() {
    heart.style.animation = 'none';
  });