// 判断是否有QIANKUN对象，如果有则代表是依赖于主应用访问的，单独运行子应用是没有这个对象的
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
