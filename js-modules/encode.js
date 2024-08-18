const barbieGirl = () => {
  return "Hi, I'm Barbie";
  };
const kenDoll = () => {
  return "Hiya Barbie!";
  };
const barbieGirlAndKenDoll = () => {
  return barbieGirl() + ". " + kenDoll();
    };
console.log(barbieGirlAndKenDoll());

export default barbieGirlAndKenDoll;
export {barbieGirl, kenDoll};
     
    
