---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 郭郭的
  text: 白酒展示厅
  tagline: 主打性价比
  image:
    src: /logo.png
    alt: 南将名酒宁夏总代
  actions:
    - text: 白酒展厅
      link: /wine/
features:
  - icon: 💯
    title: 南将名酒宁夏总代
    details: '<marquee class="advertisement">买酒找我真的很便宜</marquee>'
    link: /me/
    linkText: 关于我
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
