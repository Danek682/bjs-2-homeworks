// Первый вызов, помимо асинхронного вызова, должен вызываться моментально. Дополнительная статья про debouncing и throttling.
// Усовершенствуйте декоратор таким образом, чтобы в свойстве count декорированной функции хранилось количество вызовов декорированной функции.
// Усовершенствуйте декоратор таким образом, чтобы в свойстве allCount декорированной функции хранилось количество вызовов декоратора. 
function debounceDecoratorNew(func, delay) {
   let timeoutId = null;
   wrapper.count = 0;
   wrapper.allCount = 0;
 
   function wrapper(...args) {
      wrapper.allCount++;
     if(!timeoutId){
         func.call(this, ...args)
         wrapper.count++
     }
     clearTimeout(timeoutId)
       timeoutId = setTimeout(() => {
         func.call(this, ...args)
         wrapper.count++;
         timeoutId = null
       },delay)
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
    const hash = md5(args.join(','))

    const checkCache = cache.find((entry) => entry.hash === hash);
    if(checkCache){
      return 'Из кеша:' + checkCache.value
    }

    const result = func(...args)
    console.log('Вычисляем' + result)

    cache.push({ hash, value: result });
    
    if(cache.length > maxCacheValuesCount){
      cache.splice(0, cache.length - maxCacheValuesCount);
    }
    return result;
  };
}

module.exports = {
  cachingDecoratorNew
}