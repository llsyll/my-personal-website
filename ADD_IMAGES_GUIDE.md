# 添加图片到作品集指南

此指南将帮助你为作品集项目添加图片。

## 步骤1：查找你的Behance作品

以下是你的12个作品，你可以按此列表逐一访问并获取图片：

1. 大益茶创意练习
2. ICBC - Opening School Season Marketing Poster
3. 工行司法拍卖 h5游戏 素材设计 ICBC Judicial Auctions h5 Game
4. Suning 418 Electrical Festival Marking Project
5. Personal work：Tech zen mind
6. Huawei mall brand kv
7. GOME Investment Manual design
8. merry christmas bang
9. JD Logistics 2017 Investment Conference KV
10. ICBC marking design
11. JD home proposal project
12. Lonely Planet

## 步骤2：获取图片

1. 访问 https://www.behance.net/llsyll
2. 点击每个项目进入详情页
3. 在项目页面中右键保存图片到本地
4. 将图片重命名为有意义的名称（如：dayi-tea-creative-practice.jpg）

## 步骤3：上传图片到网站

有两种方式可以为你的网站添加图片：

### 方式一：使用GitHub仓库
1. 将图片文件放在 `/public/images/` 目录下
2. 在对应项目的Markdown文件中更新coverImage字段为：`/images/your-image-file.jpg`

### 方式二：使用在线图床
1. 使用免费图床服务（如Imgur、腾讯云等）上传图片
2. 获取图片的公开链接
3. 在对应项目的Markdown文件中更新coverImage字段为完整URL

## 示例

如果你想为"大益茶创意练习"项目添加图片：

1. 编辑 `/content/projects/dayi-tea-creative-practice.md`
2. 将 coverImage 字段改为你的图片链接，例如：
   ```yaml
   coverImage: "/images/dayi-tea-creative-practice.jpg"
   ```

## 提交更改

完成图片添加后：
1. 提交更改到GitHub
2. 推送更新以触发网站重建

完成后，你的作品集页面将显示带有实际图片的作品。