<template>
  <div id="classify">
    <div class="bubble-container">
      <div class="bubble" v-for="item in showList" @click="goList(item.id)">
        {{ item.name }}
      </div>
    </div>
    <div class="button-container">
      <button @click="change">换一换</button>
      <button @click="goList">查看全表</button>
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
  #classify {
    background-color: #404a59;
  }
  .bubble-container {
    height: 70vh;
    position: relative;
  }
  .bubble {
    border-radius: 50%;
    position: absolute;
    text-align: center;
    color: rgba(255,255,255,1);
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  .bubble:nth-child(1) {
    background-color: rgba(40,249,239,0.5);
    height: 30vh;
    width: 30vh;
    top: 19vh;
    left: calc(50% - 19vh);
    line-height: 32vh;
    font-size: 0.4rem;
  }
  .bubble:nth-child(2) {
    background-color: rgba(250,252,183,0.5);
    height: 27vh;
    width: 27vh;
    top: 5%;
    left: 5%;
    line-height: 27vh;
    font-size: 0.3rem;
  }
  .bubble:nth-child(3) {
    background-color: rgba(255,142,142,0.78);
    height: 18vh;
    width: 18vh;
    top: 10%;
    right: 10%;
    line-height: 18vh;
    font-size: 0.26rem;
  }
  .bubble:nth-child(4) {
    background-color: rgba(145,157,244,0.78);
    height: 20vh;
    width: 20vh;
    bottom: 0;
    left: 12%;
    line-height: 20vh;
    font-size: 0.26rem;
    color: rgba(255,255,255,1);
  }
  .bubble:nth-child(5) {
    background-color: rgba(193,254,198,0.5);
    height: 24vh;
    width: 24vh;
    bottom: 20%;
    right: 5%;
    line-height: 24vh;
    font-size: 0.3rem;
    color: rgba(255,255,255,1);
  }
  .button-container {
    text-align: center;
    height: 30vh;
  }
  button {
    width: 28vh;
    border-radius: 0.03rem;
    font-size: 0.2rem;
    background-color: rgba(255,255,255,0.1);
    color:#fff;
    height: 10vh;
    line-height: 10vh;
    border: 0;
    box-shadow: 0 0 0.2rem rgba(0,0,0,0.2);
  }
</style>
