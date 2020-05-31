#笔记
##一、项目内容回顾1  
###一、FeatrueView
+ 独立封装组件
###二、TabControl
+ 独立封装的组件
    + 通过flex布局，留出多个title
    + 根据输入的title进行遍历，显示遍历出来的title
    + css布局
    + 选中哪一个tab，文字颜色会变色，还有会border-bottom的变色
###三、首页商品数据的请求
+ 商品的存储数据结构
+ 发送数据请求，request封装axios
+ ... result.list的语法糖，将数组push进数组
+ props类型为[]和{}时，需要用函数返回默认值
###四、对商品数据的展示
+ 封装goodList的组件，传入goodList的数据
+ 组件内部对goodList进行遍历，产生goodItem
###五、使用Better-scoll进行滚动操作
+ new一个better-scroll，然后配置config
+ 注意dom的结构
+ 监听滚动配置probeType
+ bscorll.on("scorll",(position) => { })
+ pullUpLoad的配置
+ click配置true
+ home和scroll进行通信
###六、如何回到顶部
+ 封装了一个组件，如何监听组件的点击，@click.native="方法名"
+ 也可以包裹一个div
+ this.$refs.组件名即可获得某一个子组件，其中可以调用它的属性和方法
+ backtop的显示组件和隐藏，使用v-show
###七、解决better-scroll可滚动区域的问题
+ 因为刚开始的时候，没有将图片的高度计算在内，而后来图片加载出来出现了问题
+ 解决方式是监听每一张图片是否加载完成
+ 如何监听图片加载完成
    + img.onload(原生js)
    + <img @load="函数名">vue的写法
###八、事件总线
+ 子组件里$bus发射时间，在父组件里面使用on接受监听组件
+ $bus是一个vue实例，在main.js里面加上,**事件总线**
    + 在一个地方注册bus的方法 使用on
    + 在main.js里面注册bus Vue.protype.$bus = new Vue()
    + 发射时间 on.("方法名")
    + 这里的细节可能是图片加载完成之后，scroll还没有建立，这个时候调用的话就会报错，所以应该先判断scroll是否存在，使用逻辑与的方法 &&
    +  **一定不要再created里面取元素或者子组件，因为可能还没有挂在或者渲染**
###九、防抖操作(debounce/节流)
+ 第一次触发的时候，等待500ms，如果继续输入的时候，那么使用最后的结果，如果没有输入，那么使用第一次触发，防抖函数。
+ 起作用的过程，直接执行函数，会被执行30次，如果使用debounce函数
+ 执行顺序同步任务、微任务（Promise）、宏任务（setTimeout）,即使setTimeout没有传延迟时间，那么也会执行
+ 之后调用非常频繁的函数就是用新生成的函数，而新生成的函数不会非常频繁的调用。都是使用新生成的函数。
###十、上拉加载过多
+ 通过pullupload的功能
###十一、tabControl的吸顶效果
+ 必须知道滚动到多少时有吸顶效果
+ 滚动到多少offsetTop的属性即可
+ 所有的属性都有一个属性$el获取组件的元素,然后直接使用offsetTop就可以了
+ 通过监听img的Load的方法，去获取正确的数值，同时这里只调用一次，在home里面加上once，
+ 接下来监听动态改变样式
+ 监听滚动，动态改变样式不好，会忽然向上移动
+ 使用两个一样的tabContro进行自由切换，上面多复制了一份组件对象，利用切换来实现停留效果
+ 原理：当用户到一定位置是，占位的tabcontrol显示出来，否则隐藏起来。
###十二、让Home保持原来的效果
+ 保持原来的位置，使用<keep-alive></keep-alive>
+ 让Home中保持原来的位置



