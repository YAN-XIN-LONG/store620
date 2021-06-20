// ts的基本类型

//布尔
let aa: boolean = true;
// let bb:boolean = 10;//报错

//数字
let num: number = 123;

//字符串
let str: string = 'abbc';

//数组
let Arr1: Array<number> = [1, 2, 3]; //表示Arr1为Array类型，数组内的值为number
let Arr2: number[] = [1, 2, 3]; //表示数组内的值为number,Arr2为Array类型
let Arr3: Array<string> = ['1', '2', '3']; //表示Arr1为Array类型，数组内的值为string

//undefined
let und: undefined = undefined;
// let und1:undefined = 22;报错

//null
let u1: null = null;
// let n2:null = 22;//报错

// |(或)----------------还有&------------------
let acc: number | string | null | undefined | boolean = 123;
acc = true;
acc = undefined;
acc = null;
acc = 'kkj';

//any【任意--即：不进行类型校验】---------------------------------------------------------
let dds: any = '111';
dds = true;

//void[无效的；空的]--------------------------------------------------------------------
function Fn1(aa: string): void {
    //函数没有返回值即：为void类型
}
Fn1('abc')


function Fn2(aa: string): boolean {
    //函数的返回值必须有，且类型为布尔型
    return true;
}
Fn2('100')

//对象的类型采用【interface接口来定义】--------------------------------------------------------
interface IPerson {
    // name?: string; //加?表示name可以不传为空
    name: string;
    age: number;
    sex: string;
}
let Obj: IPerson = {
    name: '霍比特人',
    age: 18,
    sex: '男'
}

//接口的继承[extends关键字]继承了IPerson接口【继承多个接口用逗号分隔接口名称。例：interface IA extends xx, mm,ll {} 】
interface IA extends IPerson {
    location: string;
}
let Obj1: IA = {
    name: '霍比特人',
    age: 18,
    sex: '男',
    location: '北京'
}

//类型断言【旧方法可以使用typeof判断】----------------------------------------------------
function GetLength(str: number | string): number {
    if ((str as string).length) {//表示str就是字符串类型，不是数字
        return (str as string).length
        // 或 return ((<string> str).length)

    } else {
        return str.toString().length
    }
}

//非空断言------------------------------------------------------
function Ass(aa?: string): number {
    return aa!.length; //非空断言，表示aa不为空

}

//枚举【enum关键字】------------------------------------------------------
enum Color {
    red,
    green,
    yellow
}

//取每一个属性的索引值，默认0开始【自增】
Color.red //0
Color.green //1
Color.yellow //2

//枚举的反向映射【相当于数组的操作】
Color[0] //red
Color[1] //green
Color[2] //yellow 

//枚举的赋值【默认索引值被改变了】
enum ColorX {
    red = 10,
    green, //11
    yellow//12
}

//枚举的赋值【默认索引值被改变了】
enum ColorK {
    red,
    green = '11', //前一个属性的值如果为字符串，那它后面的属性必须赋值【因为索引值无法自增了】
    yellow = 50//50
}

//泛型--【即：表示灵活定义类型，不直接写死】
function FunSSS<T>(arg:T):void {

}
FunSSS<number>(101) //在调用函数时才传递类型为number，那形参T就是number类型了。