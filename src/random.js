// Get random number in range [min; max). Max not included
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default getRandomNumber;
