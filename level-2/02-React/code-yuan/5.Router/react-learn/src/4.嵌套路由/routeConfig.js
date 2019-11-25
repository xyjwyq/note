const config = {
  user: {
    root: "/user",
    update: "/update",
    pay: {
      root: "/pay",
      beforePay: "/before",
      afterPay: "/after"
    }
  }
};

function setConfig() {
  _setConfig(config, "");
}

/**
 * 将该对象的每一个字符串属性，前面添加baseStr
 * 如果属性名为root，则直接添加baseStr
 * 如果属性名不是root，则添加baseStr/root属性值
 * 如果属性不是字符串，递归调用该方法
 * @param {*} obj
 * @param {*} baseUrl
 */
function _setConfig(obj, baseUrl) {
  const newBaseUrl = baseUrl + (obj.root === undefined ? "" : obj.root);
  for (let prop in obj) {
    let val = obj[prop];
    if (typeof val === "string") {
      if (prop === "root") {
        obj[prop] = newBaseUrl;
      } else {
        obj[prop] = newBaseUrl + val;
      }
    } else {
      _setConfig(obj[prop], newBaseUrl);
    }
  }
}

setConfig();

export default config;
