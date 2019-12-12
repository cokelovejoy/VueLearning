// 1. 获取并遍历DOM树
// 2. 文本节点: 获取{{}}格式的内容并解析
// 3. 元素节点: 访问节点特性,截获K- 和@ 开头内容并解析
// new Compile('#app', vm)
class Compile {
    constructor(el, vm) {
        this.$vm = vm;
        this.$el = document.querySelector(el);
        if (this.$el) {
            // 执行编译
            this.compile(this.$el);
        }
    }

    compile(el) {
        // 遍历el
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            // 判断节点类型
            if (this.isElement(node)) {
                // 元素节点: 访问节点特性,并截获 k-和 @开头的内容并解析
                this.compileElement(node);
            } else if (this.isInter(node)) {
                // 文本节点: 获取{{}}格式的内容并解析
                this.compileText(node);
            }

            // 递归 如果子节点下面还有子节点就继续compile操作
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node);
            }
        })
    }
    // 判断是否是元素节点
    isElement(node) {
        return node.nodeType === 1;
    }
    // 判断是否是插值表达式 {{}}
    isInter(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
    //  编译插值文本
    compileText(node) {
        // 获取表达式 exp 正则表达式匹配的内容
        // {{a+b()}}
        const exp = RegExp.$1;
        this.update(node, exp, "text");
    }
    //通用方法 update(node, 'xxx', 'text')
    update(node, exp, dir) {
        // 构造更新函数并执行: 相当于首次赋值
        let updaterFunc = this[dir + 'Updater'];
        updaterFunc && updaterFunc(node, this.$vm[exp]);
        
        // 创建watcher,执行后续更新操作
        // 额外传递一个更新函数: 能够更新指定dom元素
        new Watcher(this.$vm, exp, function(value) {
            updaterFunc && updaterFunc(node, value);
        });
    }
    textUpdater(node, value) {
        node.textContent = value;
    }
    // 编译元素节点,解析指令
    compileElement(node) {
        // 获取属性
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr => {
            // k-text = "test"
            const attrName = attr.name; //k-text
            const exp = attr.value; //test

            if (attrName.indexOf('k-') === 0) {
                // 指令k-text k-model
                const dir = attrName.slice(2); //text
                this[dir] && this[dir](node, exp);
            }
        });
    }
    text(node, exp) {
        this.update(node, exp, "text");
    }
    // k-model
    model(node, exp) {
        // 执行更新
        this.update(node, exp, 'model');
        // 事件监听
        node.addEventListener('input', e => {
            this.$vm[exp] = e.target.value
        })
    }
    modelUpdater(node, value) {
        node.value = value;
    }
    // k-html
    html(node, exp) {
      this.update(node, exp, 'html')  
    }
    htmlUpdater(node, value) {
        node.innerHtml = value
    }

    // @event
    eventHandler(node, exp, dir) {
        // 获取回调函数
        fn = this.$vm.$options.methods && this.$vm.$options.methods[exp]
        if (dir && fn) {
            node.addEventListener(dir, fn.bind(this.$vm))
        }
    }
}