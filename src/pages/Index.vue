<template>
  <Layout>
    <div class="title">{{$page.list.edges[0].node.title}}</div>
    <div v-html="mdToHtml($page.list.edges[0].node.content)"></div>
  </Layout>
</template>

<page-query>
  query {
    list: allStrapiBlog {
      edges {
        node {
          id,
          title,
          content,
          categories {
            id,
            name,
            code
          }
        }
      }
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'IndexPage',
  methods: {
    mdToHtml (text) {
      return md.render(text)
    }
  }
}
</script>

<style>

</style>