<template>
	<div class="vue-dragtable-container">
		<table id="vue-dragtable">
			<thead>
				<tr>
					<th v-for="item,$index in dragTableData.header" @mousedown="bindResize($event, $index)" @mouseleave="unbindResize">
						<div :class="'resize' + $index" class="tablecell" :style="{width: width[$index] + 'px'}">
							{{ item }}
						</div>
						<!--div class="movebar" @mousedown="bindResize($event, $index)"></div-->
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in dragTableData.value">
					<td v-for="data,$index in item">
						<div :class="'resize' + $index" class="tablecell" :style="{width: width[$index] + 'px'}">{{ data }}</div>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="tip-text" v-show="dragTableData.loading && !finished">正在加载数据...</div>
		<div class="tip-text" v-show="finished">已加载全部</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'vue-dragtable',
    props: {
    	step: {
    		type: Number,
      		required: false,
      		default: 20,
    	},
    	max: {
    		type: Number,
    		required: false,
    		default: 1000,
    	},
    },
    mounted() {
        this.$emit('loadData', { current_count: this.count, step: this.step });
    	// bin scroll
    	const container = document.getElementsByClassName('vue-dragtable-container')[0];
    	container.addEventListener('scroll', this.scroll);
    	// bin document mouseup
    	document.addEventListener('mouseup', this.unbindResize);
    	
    },
    data() {
    	return {
    		index: null,
    		targetElement: null,
            init: true,
            width: []
    	};
    },
    methods: {
    	scroll(e) {
    		if (!this.dragTableData.loading && !this.finished && e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
    			this.dragTableData.loading = true;
    			this.$emit('loadData', { current_count: this.count, step: this.step });
                e.target.scrollTop = e.target.scrollTop - 30;
    		}
    	},
    	bindResize(e, index) {
    		if (e.target.clientWidth - e.offsetX < 10) {
    			this.index = index;
    			this.targetElement = e.target;
    			this.targetElement.addEventListener('mousemove', this.resize);
    		}
    	},
    	resize(e) {
    		if (e.offsetX > 10) {
    			const className = `resize${this.index}`;
    			const items = document.getElementsByClassName(className) || [];
    			for (let i = 0; i < items.length; i++) {
    				items[i].style.width = `${e.offsetX - 32}px`;
    			}
    		}    		else if (e.offsetX < 10) {
    			this.targetElement.removeEventListener('mousemove', this.resize);
    		}
    	},
    	unbindResize(e) {
    		if (this.targetElement) {
    			this.targetElement.removeEventListener('mousemove', this.resize);
    		}
    	},
    },
    computed: {
        ...mapGetters(['dragTableData']),
        finished() {
            if(this.init && this.dragTableData.header && this.dragTableData.header.length > 0) {
                // reset cell width
                let w = document.getElementsByClassName('vue-dragtable-container')[0].clientWidth / this.dragTableData.header.length;
                w = Math.max(w, 100);
                for (let i = 0; i < this.dragTableData.header.length; i++) {
                    this.width.push(w);
                }
                this.init = false;
            }
        	return this.dragTableData.header.length >= Math.max(this.max, this.dragTableData.total);
        }
    },
};
</script>
<style scope>
	#vue-dragtable {
		border-collapse: collapse;
		min-width: 100%;
	}
	#vue-dragtable th div.tablecell, #vue-dragtable td div.tablecell {
		white-space: nowrap;
		overflow: hidden;
		padding: 8px;
		text-overflow: ellipsis;
		text-align: left;
		display: inline-block;
	}
	#vue-dragtable th, #vue-dragtable td{
		border: 1px solid #ddd;
		white-space: nowrap;
		text-align: left;
	}
	.vue-dragtable-container {
		width: 100%;
		height: 200px;
		overflow: auto;
	}
	#vue-dragtable th:after {
		height: 37px;
		width: 21px;
		display: inline-block;
		cursor: ew-resize;
		content: '1';
		vertical-align: top;
		color: transparent;
		position: relative;
		left: 11px;
	}
	.tip-text {
		color: #ccc;
		padding: 10px;
	}
    .tablecell {
        width: 1000px;
    }
</style>