---
editLink: false
layout: page
title: "关于"
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://github.com/Conlux-Studio.png',
    name: 'Conlux-Studio',
    title: '所有者',
    links: [
      { icon: 'github', link: 'https://github.com/Conlux-Studio' }
    ]
  },  
  {
    avatar: 'https://github.com/StarLight-Core.png',
    name: 'StarLight_Core',
    title: '吉祥物',
    links: [
      { icon: 'github', link: 'https://github.com/StarLight-Core' }
    ]
  },
  {
    avatar: 'https://github.com/zhifengcode.png',
    name: 'ZhiFeng',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/zhifengcode' }
    ]
  },
  {
    avatar: 'https://github.com/isThisaDog.png',
    name: 'isThisaDog',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/isThisaDog' }
    ]
  },
  {
    avatar: 'https://github.com/awaEric233.png',
    name: 'awa_Eric233',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/awaEric233' }
    ]
  },  
  {
    avatar: 'https://github.com/CNwenwen.png',
    name: 'CNwenwen',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/CNwenwen' }
    ]
  }
];

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      贡献者
    </template>
    <template #lead>
        感谢在 StarLight.Core 开发路上做出的巨大到渺小的贡献的所有开发者
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
