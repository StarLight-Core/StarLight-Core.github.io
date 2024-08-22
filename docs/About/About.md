---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://github.com/Ink-Marks-Studio.png',
    name: 'Ink-Marks-Studio',
    title: '所有者',
    links: [
      { icon: 'github', link: 'https://github.com/Ink-Marks-Studio' }
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
    avatar: 'https://github.com/zhi-feng2008.png',
    name: 'ZhiFeng',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/zhi-feng2008' }
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
    avatar: 'https://github.com/FutureStudios-FSC.png',
    name: 'FutureStudios-FSC',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/FutureStudios-FSC' }
    ]
  },
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