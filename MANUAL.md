# 个人网站使用说明书 (MANUAL.md)

这份文档将帮助你了解、开发和管理你的个人网站。

## 1. 项目简介

这是一个基于 **Next.js 16** 构建的高性能个人网站，集成了 **博客 (Posts)** 和 **作品集 (Portfolio)** 功能。

- **核心技术**: Next.js, React, TypeScript, Tailwind CSS (或 CSS Modules)
- **内容管理**: Markdown + Decap CMS
- **评论系统**: Giscus (GitHub Discussions)
- **部署方式**: GitHub Pages (静态导出)

## 2. 快速开始 (本地开发)

确保你的电脑已安装 Node.js。

1.  **安装依赖**:
    ```bash
    npm install
    ```

2.  **启动开发服务器**:
    ```bash
    npm run dev
    ```
    打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可预览。

3.  **启动内容管理系统 (CMS)**:
    如果你想通过可视化界面管理内容：
    ```bash
    npm run cms
    ```
    - 这会同时启动 Next.js 网站和 CMS 代理服务器。
    - 访问 [http://localhost:3000/admin](http://localhost:3000/admin) 进入管理后台。
    - 由于配置了 `local_backend: true`，你可以直接在本地编辑内容，文件会自动保存到 `content/` 目录。

## 3. 内容管理指南

### 方式一：使用 CMS (推荐)
访问 `/admin` 页面：
1.  **文章 (Posts)**: 撰写博客文章。
    - 填写标题、日期、描述、标签。
    - 使用富文本编辑器撰写正文。
2.  **作品 (Projects)**: 上传作品集。
    - 填写项目名称、描述、链接。
    - 上传封面图 (`coverImage`)。
    - 上传多张画廊图片 (`images`)。
    - 撰写详细介绍。

### 方式二：直接编辑 Markdown 文件
所有内容都存储在 `content` 目录下：

- **博客文章**: `content/posts/*.md`
- **作品集**: `content/projects/*.md`

文件格式示例 (Frontmatter):
```yaml
---
title: "项目标题"
date: "2024-03-20"
description: "简短描述"
coverImage: "/images/cover.jpg"
---

这里是正文内容...
```

### 图片管理
图片存储在 `public/images/` 目录下。
- 在 Markdown 中引用图片路径为: `/images/filename.jpg`
- 请参考项目根目录下的 `ADD_IMAGES_GUIDE.md` 获取更详细的图片添加指南。

## 4. 部署与发布

该项目配置为自动部署到 GitHub Pages。

1.  **推送更新**:
    将本地修改提交并推送到 GitHub 仓库的 `main` 分支。
    ```bash
    git add .
    git commit -m "更新内容"
    git push origin main
    ```

2.  **自动构建**:
    GitHub Actions 会自动触发构建流程，将网站生成静态文件并发布。

3.  **查看上线效果**:
    访问你的 GitHub Pages 链接 (例如: `https://yourname.github.io/my-personal-website`)。

## 5. 常用命令速查

| 命令 | 说明 |
| :--- | :--- |
| `npm run dev` | 启动开发服务器 (localhost:3000) |
| `npm run cms` | 启动开发服务器 + CMS 本地后端 |
| `npm run build`| 构建生产版本 (生成 `out` 目录) |
| `npm run lint` | 检查代码格式问题 |

## 6. 自定义配置

- **网站基本信息**: 修改 `src/app/layout.tsx` 中的 `metadata`。
- **导航栏**: 修改 `src/components/Header.tsx`。
- **全局样式**: 修改 `src/app/globals.css` (字体、颜色变量等)。
