import BaseLog, { BaseLogData } from "./baseLog";
export interface ReportData extends BaseLogData {
  pData: PerformanceData;
}
export interface PerformanceData {
  loadPage: number;
  ttfb: number;
  domReady: number;
  lookupDomain: number;
  request: number;
  loadEvent: number;
  type: number;
}
export interface PerformanceLogProps {
  pageName: string;
  request: <T = PerformanceData, P = void>(data: T) => P;
}
export default class PerformanceLog extends BaseLog {
  readonly _t: PerformanceTiming;
  readonly _navigation: PerformanceNavigation;
  _request: <T = PerformanceData, P = void>(data: T) => P;
  constructor(props: PerformanceLogProps) {
    super({ pageName: props.pageName });
    this._request = props.request;
    this._t = window.performance.timing;
    this._navigation = window.performance.navigation;
  }
  report() {
    const oData: ReportData = {
      ...this._getBaseData(),
      pData: {
        ...this.getPerformanceTiming(),
        ...this.getPerformanceNavigation()
      }
    };
    /* 如果配置了请求方法，直接返回请求方法 */
    return typeof this._request === "function" ? this._request(oData) : oData;
  }

  getPerformanceNavigation() {
    return {
      /* 用户访问地址的方式 */
      type: this._navigation.type
    };
  }
  getPerformanceTiming() {
    return {
      /* 页面加载完成的时间*/
      /*【原因】这几乎代表了用户等待页面可用的时间*/
      loadPage: this._t.loadEventEnd - this._t.navigationStart,

      /* 读取页面第一个字节的时间 白屏时间*/
      /*【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？*/
      /* TTFB 即 Time To First Byte 的意思 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte*/
      ttfb: this._t.responseStart - this._t.navigationStart,

      /* 解析 DOM 树结构的时间*/
      /*【原因】反省下你的 DOM 树嵌套是不是太多了！*/
      domReady: this._t.domComplete - this._t.responseEnd,

      /* DNS 查询时间*/
      /*【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？*/
      /* 可使用 HTML5 Prefetch 预查询 DNS ，见：[HTML5 prefetch](http://segmentfault.com/a/1190000000633364)            */
      lookupDomain: this._t.domainLookupEnd - this._t.domainLookupStart,

      /* 内容加载完成的时间*/
      /*【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？*/
      request: this._t.responseEnd - this._t.requestStart,

      /* 执行 onload 回调函数的时间*/
      /*【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？*/
      loadEvent: this._t.loadEventEnd - this._t.loadEventStart
    };
  }
}
