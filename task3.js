function createCounter() {
    let count = 0;
  
    return {
      increment() {
        count++;
        console.log(this.count); 
      },
      getCount() {
        return count;
      }
    };
  }
  
  let counter = createCounter();
  counter.increment(); 
  console.log(counter.getCount()); 
  