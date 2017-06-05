<template>
  <div class="list-container">
    <div class="list-item" v-for="item in showList">
      <img :src="'../img/' + {{ item.img }}">
      <div class="button-container">
        <button @click="">点赞</button>
        <button @click="">差评</button>
      </div>
      <div class="content">
        <h2>{{ item.name }}</h2>
        <div class="level">级别：<span>{{ item.level }}</span></div>
        <div class="brief">{{ item.brief }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../api';
export default {
    name: 'app',
    created() {
        // api.classify.getClassify()
        // .then((response) => {
        //     if (response.status_code == 1) {
        //         this.classifyList = response.data;
        //     } else {
        //         this.classifyList = [
        //           { name: 'sdaasf', id: 0 },
        //           { name: 'sdaasf2', id: 1 },
        //           { name: 'sdaasf3', id: 2 },
        //           { name: 'sdaas4f', id: 3 },
        //           { name: 'sdaasf5', id: 4 },
        //           { name: 'sdaas6f', id: 5 },
        //           { name: 'sdaasf7', id: 6 },
        //           { name: 'sda8asf', id: 7 },
        //           { name: 'sdaa9sf', id: 8 },
        //         ];
        //     }
        // })
        // .error(() => {
        //   this.classifyList = [
        //     { name: 'sdaasf', id: 0 },
        //     { name: 'sdaasf2', id: 1 },
        //     { name: 'sdaasf3', id: 2 },
        //     { name: 'sdaas4f', id: 3 },
        //     { name: 'sdaasf5', id: 4 },
        //     { name: 'sdaas6f', id: 5 },
        //     { name: 'sdaasf7', id: 6 },
        //     { name: 'sda8asf', id: 7 },
        //     { name: 'sdaa9sf', id: 8 },
        //   ];
        // });
        this.classifyList = [
          { name: 'sdaasf', id: 0 },
          { name: 'sdaasf2', id: 1 },
          { name: 'sdaasf3', id: 2 },
          { name: 'sdaas4f', id: 3 },
          { name: 'sdaasf5', id: 4 },
          { name: 'sdaas6f', id: 5 },
          { name: 'sdaasf7', id: 6 },
          { name: 'sda8asf', id: 7 },
          { name: 'sdaa9sf', id: 8 },
        ];
        this.change();
    },
    data() {
        return {
            classifyList: [],
            index: 0,
            showList: []
        };
    },
    computed: {
      len() {
        return this.classifyList.length;
      }
    },
    methods: {
      change() {
        let oldIndex = this.index;
        this.index = (oldIndex + 5) % this.len;
        if(oldIndex + 5 > this.len || this.index === 0) {
          this.showList = this.classifyList.slice(oldIndex, this.len).concat(this.classifyList.slice(0, this.index));
        }
        else {
          this.showList = this.classifyList.slice(oldIndex, this.index);
        }
      }
    }
};
</script>
<style scope>
  .list-item {
    padding: 0.1rem;
    border-bottom: 0.01rem solid #eee;
  }
  .list-item .content {
    overflow: hidden;
    height: 1.5rem;
  }
  .list-item .button-container{
    float: right;
    height: 1.5rem;
    font-size: 0;
  }
  .list-item img {
    float: left;
    height: 1.5rem;
    margin-right: 0.1rem;
  }
  .list-item .brief {
    color: #aaa;
    font-size: 0.2rem;
  }
  .list-item h2 {
    font-size: 0.32rem;
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
    color: #666;
  }
  .list-item button {
    border: 0;
    margin-top: 25%;
    padding: 0.2rem;
    color: #fff;
    background-color: transparent;
    font-size: 0.24rem;
    height: 50%;
    background-color: rgba(255,142,142,1);
  }
  .list-item button:nth-child(2) {
    background-color: rgba(121,224,255,1);
  }
  .list-item .level {
    font-size: 0.2rem;
    color: #ddd;
    margin-bottom: 0.05rem;
  }
  .list-item .level span{
    color: rgba(255,142,142,1);
  }
</style>
