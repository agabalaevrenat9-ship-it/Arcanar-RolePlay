document.addEventListener('DOMContentLoaded', function() {
  const toggleLink = document.getElementById('toggleRaces');
  const content = document.getElementById('racesContent');

  toggleLink.addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    
    // Переключаем видимость блока
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
