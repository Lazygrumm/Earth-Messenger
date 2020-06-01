---
title: "Markdown Test"
layout: post
permalink: /blog/markdown-test
date: 1970-1-1
---

# 标题1

## 标题2

### 标题3

#### 标题4

##### 标题5

###### 标题6

这是一个段落

**这是一个加粗文本**

*这是一个斜体问们*

~~这是一个有删除线的文本~~

[这是一个链接](https://earthmessenger.github.io)

这是一个无序列表

- 项目1
- 项目2
- 项目3

这是一个有序列表

1. 项目1
2. 项目2
3. 项目3

这是一段引用文本

> 静夜思
> 
> 床前明月光，疑是地上霜。
> 
> 举头望明月，低头思故乡。

这是一个行内代码块

`std::cout << "Hello World!" << endl;   // This code outputs \'Hello World\'`

这是一个 C++ 代码块

```cpp
#include <iostream>
int main()
{
    std::cout << "Hello World" << endl;
    return 0;
}
```

这是一个图像

![Bing 壁纸](https://api.dujin.org/bing/1920.php)

这是一个 LaTeX 公式

$$\sum_{i=1}^n a_i=0$$

这是一个表格

| 物品       |  价格 | 数量 |
| :--------- | -----: | :------: |
| 电脑   | \$1600 |    5     |
| 手机 |   \$12 |    12    |

这是一个分割线

---

# 样式测试

## 1. 语法高亮测试

C++ 代码

```cpp
// 注释
/* 多行注释 */

#include <iostream> // 宏命令

int i; // 变量类型与变量

void function(int args) { // 函数定义
    std::cout << args; // 一个包含命名空间、符号、变量的语句
}

using namespace std; // 关键字和命名空间

class MyClass { // 类

private:
    int value;

public:
    MyClass(int newValue) : value(newValue) {}
    
    int getValue() { return this->value; }

    void setValue(int newValue) { this->value = newValue }

};

MyClass operator+(const MyClass& mc1, const MyClass& mc2) // 运算符重载
{
    MyClass ans(mc1.getValue() + mc2.getValue());
    return ans;
}

int main() {
    MyClass mc1(5), mc2((int)1.0), mc3;
    mc3 = mc1 + mc2;
    function(mc3.getValue());
    return 0;
}
```

---

编写中……