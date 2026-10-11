import Chart from 'chart.js/auto';

// Переключение темы
const themeBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeBtn.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);
  themeBtn.innerText = newTheme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема';
});

// Логика переключения вкладок
const navItems = document.querySelectorAll('.nav-item[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');
const pageTitle = document.getElementById('page-title');

navItems.forEach((button) => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Переключение активного класса у кнопок
    navItems.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    // Отображение нужного контента
    tabContents.forEach((content) => {
      if (content.id === `tab-${targetTab}`) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    // Обновление заголовка страницы
    pageTitle.innerText = button.innerText.replace(/^[^\s]+\s/, '');
  });
});

// График 1: Динамика доходов
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxRevenue, {
  type: 'line',
  data: {
    labels: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт'],
    datasets: [{
      label: 'Дохід (грн)',
      data: [65000, 72000, 80000, 85000, 93000, 102000, 110000, 115000, 120000, 124500],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// График 2: Источники трафика
const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
new Chart(ctxTraffic, {
  type: 'doughnut',
  data: {
    labels: ['Органіка (SEO)', 'Прямі заходи', 'Соцмережі', 'Реклама'],
    datasets: [{
      data: [45, 25, 18, 12],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
    }]
  },
  options: {
    responsive: true
  }
});