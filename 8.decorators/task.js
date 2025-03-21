// Первый вызов, помимо асинхронного вызова, должен вызываться моментально. Дополнительная статья про debouncing и throttling.
// Усовершенствуйте декоратор таким образом, чтобы в свойстве count декорированной функции хранилось количество вызовов декорированной функции.
// Усовершенствуйте декоратор таким образом, чтобы в свойстве allCount декорированной функции хранилось количество вызовов декоратора. 
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if(timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}

module.exports = {
  debounceDecoratorNew, 
}


//  Напишите усовершенствованный кеширующий декоратор cachingDecoratorNew, аналогичный рассмотренному на лекции, так, чтобы он кешировал только последние пять различных вызовов функции — то есть чтобы кеш мог хранить только пять значений.

//  Чтобы тесты выполнялись, функция должна возвращать строки: “Вычисляем: 10” — для первого вызова (10 для примера) и “Из кеша: 10” — для повторного.

const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectFromCache = cache.find(object => object.hash === hash);
    if (objectFromCache){
      console.log("Из кеша: ", objectFromCache.value);
      return "Из кеша: " + objectFromCache.value;
    }

    const value = func(...args);
    cache.push({hash, value})
    if(cache.length > maxCacheValuesCount) {
      cache.shift();
    }

    console.log("Вычисляем: ", value);
    return "Вычисляем: " + value;
  };
}

module.exports = {
  cachingDecoratorNew
}


