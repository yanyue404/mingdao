const utils = require("./utils");

module.exports = {
  title: "王明道文集精选",
  description: "记录王明道先生的文字。",
  base: "/mingdao/",
  themeConfig: {
    nav: [
      {
        text: "王明道文集精选",
        link: "/",
      },
      {
        text: "Github",
        link: "https://github.com/yanyue404/mingdao",
      },
    ],
    sidebar: [
      ["/", "简介"],
      ["/chapter1", "王明道文集精选（一）"],
      ["/chapter2", "王明道文集精选（二）"],
      ["/chapter3", "王明道文集精选（三）"],
      ["/chapter4", "王明道文集精选（四）"],
      ["/chapter5", "王明道文集精选（五）"],
      ["/chapter6", "王明道文集精选（六）"],
      ["/chapter7", "王明道文集精选（七）"],
      ["/chapter8", "王明道文集精选（八）"],
      ["/chapter9", "王明道文集精选（九）"],
      ["/chapter10", "我们因信基督耶稣得了什么？"],
      ["/chapter11", "重生真义"],
      ["/chapter12", "忠告守望的人"],
      ["/chapter13", "其他文章"],
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
  },
};
