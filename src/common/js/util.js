// 解析url参数
// @example ?id=12345&a=b
// @return Object {id:123456,a:b}

export function urlParse() {
  let url = window.location.search; //取得?id=12345&a=b
  let Obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345','&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    })
  }
  return Obj;
}