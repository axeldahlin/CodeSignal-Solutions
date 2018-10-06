function variableName(name) {

  const regex = /^[a-z_]\w*$/i;




  const test = regex.test(name);


  return test;




}


const name = "qq-q";


console.log(variableName(name));



