---
page: true
date: 2021-06-30
title: page_2
sidebar: false
---
<script setup>
import Page from "./.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(20,40)
</script>
<Page :posts="posts" :pageCurrent="2" :pagesNum="2" />