<template>
  <ul class="tree">
    <li
      class="tree-li"
      v-for="(item, index) in treeData"
      :key="item.name"
      :class="{'scope': item.children, 'active': showChildren[index]}"
    >
      <span @click="handleClick($event,index)">{{ item.name }}</span>
      <tree :treeData="item.children" v-show="showChildren[index]" v-if="alreadyShow[index]" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree",
  props: ["treeData"],
  created() {
    const len = this.treeData.length;
    this.showChildren = new Array(len).fill(false);
    this.alreadyShow = new Array(len).fill(false);
  },
  data() {
    return {
      showChildren: null,
      alreadyShow: null
    };
  },
  methods: {
    handleClick(e, index) {
      this.showChildren.splice(index, 1, !this.showChildren[index]);
      if (!this.alreadyShow[index]) {
        this.alreadyShow.splice(index, 1, true);
      }
    }
  }
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@font-face {
  font-family: "iconfont";
  src: url("./icon/iconfont.eot");
  src: url("./icon/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./icon/iconfont.woff2") format("woff2"),
    url("./icon/iconfont.woff") format("woff"),
    url("./icon/iconfont.ttf") format("truetype"),
    url("./icon/iconfont.svg#iconfont") format("svg");
}

.tree-li {
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
}

.scope::before {
  display: inline-block;
  content: "\e65a";
  font-family: "iconfont";
}

.active::before {
  transform: rotateZ(-90deg);
}
</style>