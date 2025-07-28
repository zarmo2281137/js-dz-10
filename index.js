const countItems = (array, condition) => {
    let count = 0;
    for (const item of array) {
      if (condition(item)) {
        count++;
      }
    }
    return count;
  };
  
  const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
  const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];
  
  const isEven = num => num % 2 === 0;
  const isLarge = num => num > 10;
  const isShort = word => word.length <= 3;
  
  console.log('Парних чисел:', countItems(numbers, isEven));
  console.log('Чисел більше 10:', countItems(numbers, isLarge));
  console.log('Коротких слів:', countItems(words, isShort));

  




  const calculate = (a, b, operation) => {
    return operation(a, b);
  };
  
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      return 'Помилка: Ділення на нуль';
    }
    return a / b;
  };
  
  console.log(calculate(10, 5, add));      
  console.log(calculate(10, 5, subtract)); 
  console.log(calculate(10, 5, multiply)); 
  console.log(calculate(10, 5, divide));   
  console.log(calculate(10, 0, divide));   
  



  const repeatMessage = (times, messageCreator) => {
    for (let i = 0; i < times; i++) {
      console.log(messageCreator(i));
    }
  };
  
 
  const helloMessage = i => `Привіт №${i + 1}`;
  const countdown = i => `Залишилось: ${5 - i}`;
  const evenMessage = i => i % 2 === 0 ? `Число ${i} парне` : `Число ${i} непарне`;
  
  repeatMessage(5, helloMessage);
  repeatMessage(5, countdown);
  repeatMessage(5, evenMessage);
  



  const processMovies = (movies, action) => {
    for (let i = 0; i < movies.length; i++) {
      action(movies[i], i);
    }
  };
  
  const movies = [
    { title: 'Inception', genre: 'sci-fi', rating: 8.8 },
    { title: 'The Godfather', genre: 'drama', rating: 9.2 },
    { title: 'Avengers', genre: 'action', rating: 7.9 },
  ];
  
 
  const logTitles = (movie, index) => console.log(`${index + 1}. ${movie.title}`);
  const highRated = (movie) => {
    if (movie.rating >= 9) {
      console.log(`🔥 ${movie.title} — шедевр!`);
    }
  };
  const recommendByGenre = (movie) => {
    if (movie.genre === 'sci-fi') {
      console.log(`🔭 Рекомендуємо наукову фантастику: ${movie.title}`);
    }
  };
  
  console.log('Список фільмів:');
  processMovies(movies, logTitles);
  
  console.log('\nШедеври з високим рейтингом:');
  processMovies(movies, highRated);
  
  console.log('\nРекомендації за жанром:');
  processMovies(movies, recommendByGenre);
  