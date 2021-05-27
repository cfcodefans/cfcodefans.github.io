```cmd
copy _git out\.git
```

```
# 用来初始化本地配置文件
git submodule init
# 从该项目中抓取所有数据并检出父项目中列出的合适的提交(指定的提交)。
git submodule update
------------------更好的方式---------------------
# clone 父仓库的时候加上 --recursive，会自动初始化并更新仓库中的每一个子模块
git clone --recursive https://github.com/chaconinc/MainProject
```