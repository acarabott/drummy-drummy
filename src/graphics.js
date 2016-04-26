export default {
  name:'graphics' // this is public, accessible on the graphics object
};

// this is private, won't be accessible in app.js
const names = ['Mario', 'Link'];

export const badguys = ['Wario']; // this will be accessible if you import it

export const background = () => {
  console.log('I r drawing backgrundz');
};
