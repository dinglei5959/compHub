/**
 *
 * @param {*} ele -- el
 * @param {*} cls -- 需要添加的className
 */
function hasClass (ele, cls) {
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}
// 为指定的dom元素添加样式
function addClass (ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += ' ' + cls
}
// 删除指定dom元素的样式
function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
// 如果存在(不存在)，就删除(添加)一个样式
function toggleClass (ele, cls) {
  if (hasClass(ele, cls)) {
    removeClass(ele, cls)
  } else {
    addClass(ele, cls)
  }
}

export {
  hasClass, addClass, removeClass, toggleClass
}
