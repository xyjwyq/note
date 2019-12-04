/**
 * 判断某个对象是否是一个plain-object
 * @param {*} obj
 */
export default function isPlainObject(obj) {
  return (
    typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype
  );
}
