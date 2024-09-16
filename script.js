const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const backgroundColor = getBackgroundColor(scrollPosition);
  container.style.backgroundColor = backgroundColor;
});

function getBackgroundColor(scrollPosition) {
  if (scrollPosition < 200) {
    return '#927c9f'; // initial background color
  } else if (scrollPosition < 400) {
    return '#6495ed'; // blue-ish color
  } else if (scrollPosition < 600) {
    return '#ffd700'; // yellow-ish color
  } else {
    return '#ff69b4'; // pink-ish color
  }
}