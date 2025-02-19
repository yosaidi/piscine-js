const Planets = {
    earth :1 ,
    mercury : 0.2408467,
    venus : 0.61519726 ,
    mars : 1.8808158 ,
    jupiter : 11.862615 ,
    saturn : 29.447498 ,
    uranus : 84.016846 ,
    neptune : 164.79132 ,
} ;
const roundedNum = (num) => Math.round(num * 100) / 100;

const dogYears = (planet,AgeInSec) => {

   let age = AgeInSec/ 31557600;
  
   age = (age /Planets[planet]) *7;

   age = roundedNum(age) ;

   return age;
}   ;

console.log(dogYears("earth",1000000000))