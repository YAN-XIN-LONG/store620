<template>
  <div class="Add">
    <div>
      newName2:<input type="text" :value="newName2" @input="ONnewName2">
    </div>
    <div>
      姓名：{{userName}},
      性别：{{SEX[sex]}},
      年龄：{{age}}
      <button @click="ChangeAge(id)">年龄++</button>
      <button @click="remove(id)">删除it</button>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model } from "vue-property-decorator";
//枚举
enum Sex {
  "男" = 1,
  "女" = 0,
}

@Component
export default class Add extends Vue {
  SEX: any = Sex; //任意类型

  @Prop(Number)
  id!: number; //!表示非空，即：必传

  @Prop([Number, String])
  userName!: string | number; //多类型可选

  @Prop({ type: Number })
  age!: number; //{ type: Number } 另一种写法而已

  @Prop({ type: Number, default: 1 })
  sex!: number; //性别是可选值（非必传），所以设置了默认值

  //方法
  @Emit("on-remove") //@Emit括号里加了监听的事件名称，那父组件就得监听这个on-remove事件名称
  remove(id: number) {
    return id;
  }

  @Emit() //@Emit括号里可以不加监听的事件名称，如果不加父组件就默认监听remove方法名称【类似于简写形式】
  //ChangeAge方法名称在父组件里监听时得写成change-age[默认会驼峰转换]
  ChangeAge(id: number) {
    return id;
  }

  //双向数据绑定
  @Model("ChangName2", { type: String }) //发给父组件时的Emit事件名称'ChangName2'
  newName2!: string; //非空，字符串类型

  @Emit("ChangName2")
  ONnewName2(e: any) {
    return e.target.value;
  }
}
</script>


<style scoped lang="scss">
</style>