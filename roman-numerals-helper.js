class RomanNumerals {
    static toRoman(num) {
      
  let M = Math.floor(num / 1000);
  let CM = Math.floor((num % 1000) / 900);
  let D =  Math.floor((num % 1000) / 500);
  let CD = Math.floor((num % 1000) / 400);
  let C = Math.floor((num % 1000) / 100);
  let XC = Math.floor((num % 100) / 90);
  let L = Math.floor((num % 100) / 50);
  let XL = Math.floor((num % 100) / 40);
  let X = Math.floor((num % 100) / 10);
  let IX = Math.floor((num % 10) / 9);
  let V = Math.floor((num % 10) / 5);
  let IV = Math.floor((num % 10) / 4);
  let I = Math.floor((num % 10) / 1);
  
  if (CM == 1){
    D = 0;
    CD = 0;
    C = 0;
  }
  else if (D == 1 || D == 1 && C > 5) {
    CD = 0;
    C = C - D * 5;
  }
  else if (CD == 1) {
    C = 0;
  }

  if (XC == 1) {
    L = 0;
    XL = 0;
    X = 0; 
  }
  else if (L == 1 || L == 1 && X > 5) {
    XL = 0;
    X = X - L * 5;
  }
  else if (XL == 1) {
    X = 0;
  }
  if (IX == 1) {
    V = 0;
    IV = 0;
    I = 0; 
  }
  else if (V == 1 || V == 1 && I > 5) {
    IV = 0;
    I = I - V * 5;
  }
  else if (IV == 1) {
    I = 0;
  }
      
  M = "M".repeat(M);
  CM = "CM".repeat(CM);
  D = "D".repeat(D);
  CD = "CD".repeat(CD);
  C = "C".repeat(C);
  XC = "XC".repeat(XC);
  L = "L".repeat(L);
  XL = "XL".repeat(XL);
  X = "X".repeat(X);
  IX = "IX".repeat(IX);
  V = "V".repeat(V);
  IV = "IV".repeat(IV);
  I = "I".repeat(I);
  
  num = M + CM + D + CD + C + XC + L + XL + X + IX + V + IV + I
      return num;
    }
  
    static fromRoman(str) {
      let sum = 0
      for (let i = 0; i < str.length; i++){
        console.log(sum)
        if (str[i] === 'M') {
          sum += 1000
          
        }
        else if (str[i] === 'C' && str[i + 1] === 'M') {
          sum += 900
          i++
        }
          else if (str[i] === 'D') {
          sum += 500
          
        }
        else if (str[i] === 'C' && str[i + 1] === 'D') {
          sum += 400
          i++
        }
        else if (str[i] === 'C') {
          sum += 100
          
        }
        else if (str[i] === 'X' && str[i + 1] === 'C') {
          sum += 90
          i++
        }
        else if (str[i] === 'L') {
        sum += 50
        }
        else if (str[i] === 'X' && str[i + 1] === 'L') {
        sum += 40
        i++
        }
        else if (str[i] === 'X') {
          sum += 10
        }
        else if (str[i] === 'I' && str[i + 1] === 'X') {
        sum += 9
        i++
        }
          else if (str[i] === 'V') {
          sum += 5
        }
        else if (str[i] === 'I' && str[i + 1] === 'V') {
          sum += 4
          i++
        }
        else if (str[i] === 'I') {
          sum += 1
        }
      }
      return sum;
    }
  }