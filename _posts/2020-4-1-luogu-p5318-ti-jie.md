---
title: "洛谷 P5318 题解"
layout: post
permalink: /blog/luogu-p5318-ti-jie
---

# 1 题目分析

原题传送门：[查看原题](https://www.luogu.com.cn/problem/P5318)

这道题其实是一道简单的~~水题~~模板题，主要考察**DFS** 和 **BFS**。

## 1.1 存图

图论的题肯定是要分析存图的方式的。

由于**邻接矩阵**存图需要的内存太大，所以需要换一个存图方法。我们可以只把**每个顶点所指向的顶点编号保存起来**。

样例图片：

![题目原图.png](https://i.loli.net/2020/05/02/ecbs5MLzk3gtC1w.png)

存法如表：

|   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   2   |   5   |   7   |   7   |       |       |   8   |       |
|   3   |   6   |       |   8   |       |       |       |       |
|   4   |       |       |       |       |       |       |       |

这种存法就是所谓的 **邻接表**。

由于题目中要求编号较小的文章优先，因此我们需要对图每个顶点的所指向的顶点编号进行**排序**。

所以，我们有两种存法：

1. `set<int> g[100005]` 由于 `set` 可以自动排序，并且可以用迭代器进行遍历，而且还是不定长的，所以可以拿来存。
2. `vector<int> g[100005]` + `sort()` 虽然 `vector` 不可以自动排序，但我们可以再手动排一边，也可以拿来存。

到底哪种方法好呢？

如果你选择使用 `set`，那么~~恭喜您~~[评测记录](https://www.luogu.com.cn/record/32317182)。

如果你选择使用 `vector`，那么更恭喜您！

说实话，当时我做这道题时，第一反应也是用 `set` 。因为 `vector` 还要手动排一边，以为 `vector` + `sort()` 更慢。但经过测试后，`vector` + `sort()` 在速度上完胜!（[测试代码](https://www.luogu.com.cn/paste/avs0gs8t)）

测试图片：

![速度测试.png](https://i.loli.net/2020/05/02/4dMa9E2Jmh7VrvO.png)

## 1.2 DFS

DFS，又叫深度优先搜索。它的基本思路是：一条路走到走不动，走不动了再回溯回去找另一条路。

对于这道题的样例，用 DFS 遍历的话，就是这样的：

从1出发，输出1；找到1指向的最小的编号2，输出2；找到2指向的最小编号5，输出5；5没有指向任何编号，回溯到2；由于2指向的5已经输出过了，那么输出第二小的6；6也没有指向任何编号，而2指向的所有编号已经全部输出，回溯到1；1指向的2已经输出，输出3；……

如图：

![dfs讲解.png](https://i.loli.net/2020/05/02/tbzSsR3OA1Cx8Wf.png)

(直接用截图软件画在上面的，可能不太好看)

DFS 代码：

```cpp
void dfs(int cur)           // cur 表示当前节点
{
    b[cur] = true;          // 用于标记顶点是否访问
    cout << cur << " ";
    for (int i = 0; i < (int)g[cur].size(); i++)
        if(!b[g[cur][i]])   // 如果当前节点指向的第 i 小的节点未访问
            dfs(g[cur][i]);
}
```

## 1.3 BFS

BFS,又叫广度优先搜索。基本思路是：一层一层地遍历。

对于这道题，用 BFS 遍历的话，就是这样的：

从1出发，输出1，再把1指向的所有编号全部输出一遍；再从1到2，把2指向的所有编号输出一遍；再从1到3，把3指向的编号输出一遍……

还是如图：

![bfs讲解.png](https://i.loli.net/2020/05/02/J9u6zAnCMsIKFcb.png)

BFS 代码：

```cpp
void bfs()
{
    queue<int> q;           // 用一个 queue 来存要访问的编号
    int cur = 1, tmp;
    b[cur] = true;          // 初始化
    q.push(cur);
    while (!q.empty())      // 运行到队列空为止
    {
        tmp = q.front();
        q.pop();
        cout << tmp << " ";
        for (int i = 0; i < (int)g[tmp].size(); i++) 
                                        // 遍历队首所有指向的编号
            if (!b[g[tmp][i]])          // 若当前节点指向的第 i 小的节点未访问
            {
                b[g[tmp][i]] = true;    // 打标记
                q.push(g[tmp][i]);      // 不要忘了入队
            }
    }
}
```

# 2 代码

这篇题解就到这里了，下面是AC代码：

```cpp
#include <algorithm>
#include <cstring>
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int n, m;
vector<int> g[100001];
bool b[100001];

void dfs(int cur = 1)
{
    b[cur] = true;
    cout << cur << " ";
    for (int i = 0; i < (int)g[cur].size(); i++)
        if (!b[g[cur][i]])
            dfs(g[cur][i]);
}

void bfs()
{
    queue<int> q;
    int cur = 1, tmp;
    b[cur] = true;
    q.push(cur);
    while (!q.empty())
    {
        tmp = q.front();
        q.pop();
        cout << tmp << " ";
        for (int i = 0; i < (int)g[tmp].size(); i++)
            if (!b[g[tmp][i]])
            {
                b[g[tmp][i]] = true;
                q.push(g[tmp][i]);
            }
    }
}

int main()
{
    memset(b, false, sizeof(b));
    cin >> n >> m;
    for (int i = 1, t1, t2; i <= m; i++)
    {
        cin >> t1 >> t2;
        g[t1].push_back(t2);
    }
    for (int i = 1; i <= n; i++)
        sort(g[i].begin(), g[i].end());
    dfs();
    cout << endl;
    memset(b, false, sizeof(b));
    bfs();
    return 0;
}

```

由于该题无法提交题解，故不会出现在P5318的题解内

