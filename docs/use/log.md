---
lang: zh-cn
title: 扩展：日志
---

# 扩展：日志

::: info 本节内容

本节将展示记录跑团日志相关的指令，请善用侧边栏和搜索，按需阅读文档。

:::

## .log 跑团日志

格式: `.log new/on/off/end/get/halt/list/del/stat`

别名: 无

可用范围: 群内



.log new (<日志名>) // 新建日志并开始记录

.log on (<日志名>)  // 开始记录，日志名不写则为最近一次日志

.log off // 暂停记录

.log end // 完成记录并发送日志文件

.log get // 重新上传日志，并获取链接

.log halt // 关闭当前记录，不发送日志文件

.log list // 查看当前群的日志列表

.log del // 删除一份日志

.log stat // 查看统计

.log masterget <群号> <日志名> // 重新上传日志，并获取链接(无法取得日志时，找骰主做这个操作)



**特别提醒：海豹核心的日志记录，会在bot off时自动停止。**



### 骰主代取LOG

比如说有一个团，群已经解散了，这时候有人找你来帮忙取log，骰主可以这样操作：

首先，找到任意交互界面，可以是海豹后台的指令测试界面(你要将UI:1001添加为骰主)，然后执行下面的命令

```
.log list QQ-Group:12345 // 至少要知道群号

Dice:
正在列出存在于此群的记录:
- test
- 测试
- 测试2
```

接下来再做一步:

```
.log masterget QQ-Group:12345 测试
```

就可以了。



## .ob 观众

格式: `.ob` // 成为观众

格式: `.ob exit` // 取消观众身份

可用范围: 群内、私聊



没有什么实际作用，只是修改PC名字和群名片(如果有权限)



## .sn 自动跑团名片

格式: `.sn coc` // COC名片

格式: `.sn dnd` // DND名片

格式: `.sn none` // 空名片

格式: `.sn off` // 关闭自动名片

可用范围: 群内、私聊



当骰子是管理员或群主时，通过这个指令，能够自动为非管理/群主设置群名片。

COC名片：角色名 SAN70 HP14/14 DEX60

DND名片：角色名 HP10/10 AC8 DC6 PW8

自设规则模板允许自定义名片，如有规则xxx，经配置后可以通过.sn xxx来切换至对应名片个事。



## .stat/.hiy 统计

格式: `.stat log` // 查看当前日志的统计

可用范围: 群内、私聊

> 海豹不支持.hiy来查询你使用这个骰子的所有检定的成功率。
