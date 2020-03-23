var BaseLog = /*#__PURE__*/function () {
  function BaseLog(props) {
    this.pageName = props.pageName || window.location.pathname;
  }

  var _proto = BaseLog.prototype;

  _proto._getBaseData = function _getBaseData() {
    return {
      userAgent: navigator.userAgent,
      pageInfo: {
        pageName: this.pageName
      }
      /* 用户访问地址的方式 */

    };
  };

  return BaseLog;
}();

export { BaseLog as default };