export function add(a, b) {
  return a + b;
}

export function minus(a, b) {
  return a - b;
}

export function multi(a, b) {
  return a * b;
}
// commonsJS 语法
try {
  // 浏览器上运行无法识别module
  module.exports = {
    add,
    minus,
    multi,
  };
} catch (error) {}
