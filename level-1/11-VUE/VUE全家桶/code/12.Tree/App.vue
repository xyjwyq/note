<template>
  <div class="app">
    <Tree :treeData="treeData" />
  </div>
</template>

<script>
import Tree from "./Tree";

export default {
  data() {
    return {
      treeData: [
        {
          name: "一级 1",
          children: [
            {
              name: "二级 1-1",
              children: [
                {
                  name: "三级 1-1-1",
                  children: [
                    {
                      name: "四级 1-1-1-1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "一级 2",
          children: [
            {
              name: "二级 2-1",
              children: [
                {
                  name: "三级 2-1-1"
                }
              ]
            },
            {
              name: "二级 2-2",
              children: [
                {
                  name: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          name: "一级 3",
          children: [
            {
              name: "二级 3-1",
              children: [
                {
                  name: "三级 3-1-1"
                }
              ]
            },
            {
              name: "二级 3-2",
              children: [
                {
                  name: "三级 3-1-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    Tree
  }
};
</script>

<style >
html,
body,
.app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>