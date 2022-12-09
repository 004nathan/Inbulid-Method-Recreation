//Re-Create your favorite built-in methods under String, Array, Object, and Math. Try at least 5 under each category.
// String method recreation
//1.string concat method
String.prototype.concat1=function(arg1,arg2)
{
  const startWord = this;
  return startWord+arg1+arg2;
}
console.log("hello".concat1(" ","world"));
const first_Name = "Parvathi";
const last_Name = "Nathan";
console.log(first_Name.concat1(" ",last_Name));
//2.String charAt method
String.prototype.charAt1 = function(index)
{
   const word = this;
   const indexValue = index;
   for(let i =0;i<word.length;i++)
   {
    if(i === indexValue)
    {
        return  word[i];
    }
 }
}
console.log("parvathinathan".charAt1(5));
//3.String length method
String.prototype.length1 = function()
{
    const word = this;
   let count = 0;
   for (const i of word) {
    count++;
   } 
   return count;
}
console.log("The quick brown fox jumps over the lazy dog. If the dog barked, was really lazy?".length1());
//4.String indexOf method
String.prototype.indexOf1 = function(input)
{
    let word = this;
    let inputWord = input;
    for(let i =0;i<word.length;i++)
    {
        if(inputWord[0] == word[i])
        {
            return i;
        }
    }
}
console.log("parvathinathan is a good boy".indexOf1("good"));
// 5. String substring method
String.prototype.substring1 = function(index)
{
    let word =this;
    return word.slice(index+1);
}
console.log("Zohoschools".substring1(3));

// Math Method Recreation
//1.Math.pow method
Math.power = function(base,power)
{
   return base**power;
}

console.log(Math.power(5,5));
console.log(Math);
//2.Math.abs method
Math.absolute=function(input)
{
    if(input > 0)
    {
        return input;
    }
  else
  {
    return input*(-1);
  }
}
console.log(Math.absolute(-3));
console.log(Math.absolute(34));
//3.Math.log mathod
Math.log1=function(num1,num2)
{
    let count = 0;
    let divValue =0;
    console.log(num2/num1)
  for(let i =0;num2>0;i++){
    divValue = Math.floor(num2/num1);
    num2 = divValue ;
    count++;
}
 return count-1;
}
console.log(Math.log1(3,90));
//4.Math.squre method
Math.square = function(number)
{
  for(let i = number;i>1;i--)
  {
    if(i*i === number)
    {
       number = i;
       break;
    }
  }
  return number;
}
console.log(Math.square(3025));
//Math.PI property
Math.PI1=function()
{
    return 3.14;
}
console.log(Math.PI1());
//Array method
//1.Array.length method
Array.prototype.length1=function()
{
    let array = this;
    let count = 0;
    for (const i of array) {
       count++;
    }
    return count;
}
console.log([1,3,22,11,22,55].length1());
//2.Array.reverse method
Array.prototype.reverse1 = function()
{
    let array = this;
    let output = [];
    for(let i = array.length-1;i>=0;i--)
    {
        output.push(array[i]);
    }
    return output;
}
console.log(['one', 'two', 'three'].reverse1());
//3.Array.join method
Array.prototype.join1 = function(arg)
{
    let array = this;
    let output = "";
    for(let i =0;i<array.length;i++)
    {
        output += array[i];
        output+= arg;
    }
    return output;
}
console.log(['Fire', 'Air', 'Water'].join1("/"));
//4.Array.concat method
Array.prototype.concat1 = function(input)
{
    let startArray = this;
    let joinArray = input;
    for(let i =0;i<joinArray.length;i++)
    {
         startArray.push(joinArray[i]);
    }
    return startArray;
}
console.log(['a', 'b', 'c'].concat1(['d', 'e', 'f']));
// Array.lastIndexOf method
Array.prototype.lastIndexOf1 = function(input)
{
  let array = this;
  console.log(array);
  for(let i =array.length-1;i>0;i--)
  {
    if(input == array[i])
    {
        return i;
    }
    else{
        return -1;
    }
  }
}
console.log(['Dodo', 'Tiger', 'Penguin', 'Dodo'].lastIndexOf1("Dodo"));