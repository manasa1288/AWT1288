function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
      yield count;  
      count++;
    }
  } 
  const counter = countUpTo(5);
  console.log(counter.next().value);
  console.log(counter.next().value);
  console.log(counter.next().value); 
  console.log(counter.next().value);
  console.log(counter.next().value);
  console.log(counter.next().value); 
  