## 收集的数据

分为基本数据和性能数据

### 基本数据

- useAgent
- 页面信息

---

### 性能数据

---

#### 页面加载完成的时间 `loadPage`

代表了用户等待页面可用的时间 `t.loadEventEnd - t.navigationStart`

#### 白屏时间 `ttfb`

读取页面第一个字节的时间 这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加 CDN 处理了么？加带宽了么？加 CPU 运算速度了么？
// TTFB 即 Time To First Byte 的意思 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte `t.responseStart - t.navigationStart`

#### 解析 DOM 树结构的时间 `domReady`

反省下你的 DOM 树嵌套是不是太多了！ `t.domComplete - t.responseEnd`

#### DNS 查询时间 `lookupDomain`

DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？ 可使用 HTML5 Prefetch 预查询 DNS ，见：[HTML5 prefetch](http://segmentfault.com/a/1190000000633364)
`t.domainLookupEnd - t.domainLookupStart`

#### 内容加载完成的时间 `request`

页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？ `t.responseEnd - t.requestStart`

#### 执行 onload 回调函数的时间 `loadEvent`

是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？ `t.loadEventEnd - t.loadEventStart`

#### 用户访问地址的方式 `type`

- 0 TYPE_NAVIGATE The page was accessed by following a link, a bookmark, a form submission, a script, or typing the URL in the address bar.
- 1 TYPE_RELOAD The page was accessed by clicking the Reload button or via the Location.reload() method.
- 2 TYPE_BACK_FORWARD The page was accessed by navigating into the history.
  `navigation.type`
