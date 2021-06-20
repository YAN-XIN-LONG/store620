<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{Name1}}</h2>
    <h2>{{Name2}}</h2>
    <h2>{{NameBox}}</h2>
    <button @click="Add">修改</button>
    <hr>
    <!-- 子组件 -->
    <Add v-for="it in AddList" :key="it.id" v-bind="it" @on-remove="remove" @change-age="ChangeAge" v-model="Name2"></Add>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
//子组件
import Add from "../components/Add.vue"; //必须有文件的后缀
// @Component({
// name:'About',
// components:{
//    引入组件
// }
// })

//定义接口
interface MyUser {
  id: number;
  userName: string | number; //多类型
  sex?: number; //加问号表示可选项即：不是必传项【性别可以不设置】
  age: number;
}

@Component({
  components: {
    Add,
  },
})
export default class About extends Vue {
  Name1: string = "yanxinlong";
  Name2: string = "liqiong";

  AddList: Array<MyUser> = [
    //Array表示大数组的类型 <MyUser>表示子类型配置
    {
      id: 0,
      userName: 33,
      sex: 1,
      age: 18,
    },
    {
      id: 1,
      userName: "李四",
      sex: 0,
      age: 25,
    },
    {
      id: 2,
      userName: "王五",
      age: 42,
    },
  ];

  //计算属性--------------------------------------------------------
  //第一次赋值
  get NameBox() {
    return this.Name1 + " " + this.Name2;
  }

  //监听到函数Add方法里的NameBox发生变化时，修改初始化的赋值
  set NameBox(val) {
    let arr = val.split(" ");
    this.Name1 = arr[0];
    this.Name2 = arr[1];
  }
  // 监听--------------------------------------------------------------
  @Watch("Name1")
  onName1Chang(newVal: string, oldVal: string) {
    console.log("监听Name1", "新值", newVal, "老值", oldVal);
  }

  //函数方法【动态修改this.NameBox】
  Add() {
    this.NameBox = "闫 李";
    console.log(this.Name1);
    console.log(this.Name2);
  }

  //Add子组件传递过来的方法及参数
  remove(id: number) {
    //接收子组件传递过来的id

    //利用findIndex方法找出AddList数组某个it项的id === 传递过来的id
    const index: number = this.AddList.findIndex((it) => it.id === id);
    //删除数组内对应的it项
    this.AddList.splice(index, 1);
  }

  //Add子组件传递过来的方法及参数
  ChangeAge(id: number) {
    //接收子组件传递过来的id
    //利用find方法找出AddList数组某个it项的id === 传递过来的id
    const it: MyUser = this.AddList.find((it) => it.id === id)!;
    // MyUser里有可选项（非必传项），所以把他作为it的类型时会报错即：下面两行【意思是MyUser里有可选项或许是undefined所以不能作为it的类型来使用】
    //所以要在最后加!即，表示MyUser里的可选项（非必传项）不是空值。
    //Type 'MyUser | undefined' is not assignable to type 'MyUser'.
    //Type 'undefined' is not assignable to type 'MyUser'.
    it.age++;
  }

  //生命周期与之前一样直接写就好了--------------------------------------------------------
}
</script>


