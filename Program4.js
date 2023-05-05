{
    console.log(a); // undefined
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // ReferenceError: c is not defined
  
    var a = 'using var';
    let b = 'using let';
    const c = 'using const';
  
    console.log(a); // using var
    console.log(b); // using let
    console.log(c); // using const
  }