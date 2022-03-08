/*
  Необходимо разработать функцию getDayInfo(date), которая возвращает информацию о выбранной дате.
  Результатом функции должен быть форматированный текст:
  <день недели>, <номер недели> неделя <месяц> <год> года
  Пример:
  getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
  getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года
  Ограничения:
      • Запрещено использовать сторонние библиотеки
*/

function getWeekOfMonth(date) {
  const month = date.getMonth(), 
        year = date.getFullYear(), 
        firstWeekday = new Date(year, month, 1).getDay(), 
        lastDateOfMonth = new Date(year, month + 1, 0).getDate(), 
        offsetDate = date.getDate() + firstWeekday - 1, 
        index = 1, 
        weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7), 
        week = index + Math.floor(offsetDate / 7);

  return week < 2 + index ? week : week === weeksInMonth ? index + 5 : week;
};

function getWeekDay(index) {
  return ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][index];
}

function getMonthStr(index) {
  return ["Января", "Февраля", "Марта", 
          "Апреля", "Мая", "Июня", 
          "Июля", "Августа", "Сентября", 
          "Октября", "Ноября", "Декабря"][index];
}

function getDayInfo(myDateStr) {
  if (!myDateStr.includes('.')) throw new Error('введите дату в формате дд.мм.гггг');

  let date = myDateStr.split('.');
  [date[0], date[1]] = [date[1], date[0]];
  date = new Date(date);

  const year = date.getFullYear (),
        month = getMonthStr(date.getMonth()),
        weekDay = getWeekDay(date.getDay()),
        weekOfMonth = getWeekOfMonth(date);

  return `${weekDay}, ${weekOfMonth} неделя ${month} ${year} года`;
}

console.log(getDayInfo('01.01.2022')); // => Суббота, 1 неделя Января 2022 года
console.log(getDayInfo('15.12.2021')); // => Среда, 3 неделя Декабря 2021 года