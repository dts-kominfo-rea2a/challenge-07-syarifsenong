const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let a = await promiseTheaterIXX();
  let b = await promiseTheaterVGC();
  let gabung = a.concat(b);
  let total = 0;
  gabung.map((a) => a.hasil === emosi && (total += 1));
  return total;
};

module.exports = {
  promiseOutput,
};
