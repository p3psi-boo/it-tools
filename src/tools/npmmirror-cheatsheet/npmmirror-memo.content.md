---
layout: default
title: Npmmirror Cheat Sheet
description: A quick reference to the Npmmirror config.
last_modified_at: 2025-03-08
---

- 加速源： `https://registry.npmmirror.com`
- 官方源： `https://registry.npmjs.org/`

## Pnpm

在用户根目录创建 `.npmrc` 文件，添加以下内容：

```bash
echo "registry=https://registry.npmmirror.com" >> ~/.npmrc
```

## Bun

### 全局配置

在用户家目录创建 `.bunfig.toml` 文件，添加以下内容：

```toml
[install]
registry = "https://registry.npmmirror.com"
```

### 项目配置

在项目根目录（package.json 同级目录）创建 `bunfig.toml` 文件，添加以下内容：

```toml
[install]
registry = "https://registry.npmmirror.com"
```

## Npm

### 全局配置

```bash
npm config set registry https://registry.npmmirror.com
```

### 其他命令

#### 获取当前 registry

```bash
npm get registry
```

#### 恢复官方源

```bash
npm config set registry https://registry.npmjs.org/
```

## Yarn

### 全局设置

```bash
yarn config set registry https://registry.yarnpkg.com/
```
