function getMessage(lastName, firstName) {
  const message = `私の苗字は${lastName}、下の名前は${firstName}です。`;
  return message;
}

const myMessage = getMessage("沖", "良矢");
console.log(myMessage);
const myMessage2 = getMessage("坂本", "竜馬");
console.log(myMessage2);