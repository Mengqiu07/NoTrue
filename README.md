# No True Journal

[中文](#中文) · [English](#english)

---

## 中文

**No True Journal** 是一个面向学生的逻辑幽默期刊网站。它为荒诞、奇想、假设性论证与创意写作留出认真阅读和讨论的空间：题目可以离奇，表达仍应具有自己的规则、推理与尊重。

这是一个无需构建工具的静态网站，可直接部署到 GitHub Pages。

### 页面与功能

- 首页：介绍期刊定位、研究领域、出版动态与投稿提示。
- 当前期刊：展示首期的筹备状态与待刊载内容区域。
- 期刊归档：提供卷期索引与发布状态入口。
- 关于期刊：说明办刊定位、投稿范围、出版原则和编辑协作方式。
- 作者指南：介绍稿件范围、写作要求与伦理规范。
- 响应式界面：适配桌面端与移动端；移动端提供折叠导航。
- 轻量交互：搜索面板、归档视图切换提示与返回顶部按钮。

> 当前搜索和归档筛选为前端交互占位，尚未连接真实内容检索或筛选数据。

### 技术栈

- HTML5
- CSS3（原生响应式样式）
- 原生 JavaScript


### 许可证

本项目采用[专有许可协议](LICENSE)。版权所有 © 2026 Mengqiu07，保留所有权利。

以下为许可证全文；如中英文条款存在争议，以中文版为准。

#### 一、许可范围

1. 本软件及其源代码（以下简称“本软件”）的著作权归作者 Mengqiu07 所有。
2. 您仅被授权以个人学习、研究为目的，查看和运行本软件。

#### 二、禁止事项

未经作者事先书面许可，您不得：

1. 以任何形式复制、抄袭或转载本软件的全部或部分源代码；
2. 修改、改编、翻译本软件，或基于本软件创作衍生作品；
3. 将本软件用于任何商业目的，包括出售、出租、许可、营利性分发，或嵌入商业产品或服务；
4. 以任何形式再分发或传播本软件的全部或部分内容。

#### 三、免责声明

本软件按“现状”提供，不附带任何明示或默示的担保，包括但不限于对适销性、特定用途适用性及不侵权的担保。在任何情况下，作者均不对因使用本软件而产生的任何直接、间接、偶然、特殊或后果性损害承担责任。

#### 四、其他

1. 任何未经授权的使用均构成对作者著作权的侵犯，作者保留依法追究法律责任的权利。
2. 如需获得商业授权或其他使用许可，请联系作者：<lyr_0807@163.com>。
3. 本专有许可协议自专有许可协议发布之日起有效。
4. 本专有许可协议如出现争议，以中文版为准。

---

## English

**No True Journal** is a student-facing journal website for logical humor. It makes room for absurd ideas, thought experiments, hypothetical arguments, and creative writing to be read and discussed seriously: a premise may be strange, but it should still have its own rules, reasoning, and respect for others.

The project is a build-free static website that can be deployed directly to GitHub Pages.

### Pages and features

- **Home:** journal introduction, research areas, publishing notes, and a submission prompt.
- **Current issue:** the preparation status of the first issue and placeholders for forthcoming work.
- **Archive:** an entry point for volume indexes and publication status.
- **About:** the journal's purpose, submission scope, publishing principles, and editorial approach.
- **Author guide:** submission scope, manuscript expectations, and ethical guidelines.
- **Responsive layout:** designed for desktop and mobile, including a collapsible mobile navigation menu.
- **Lightweight interactions:** a search panel, archive-view feedback, and a back-to-top button.

> Search and archive filtering are currently front-end placeholders only; they are not connected to a real search index or data source.

### Tech stack

- HTML5
- CSS3 with native responsive styles
- Vanilla JavaScript

### Project structure

```text
.
├── index.html              # Home page
├── current-issue.html      # Current issue
├── archive.html            # Issue archive
├── about.html              # About the journal
├── authors.html            # Author guide
└── assets/
    ├── css/styles.css      # Site-wide styles and responsive layout
    └── js/main.js          # Navigation, search, archive, and back-to-top behavior
```

### Run locally

After cloning the repository, start a static file server from the project root:

```bash
py -m http.server 8000
```

Open <http://localhost:8000> in your browser.

Opening `index.html` directly also works, though a local server more closely matches GitHub Pages.

### Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages** in that repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch to publish (usually `main`) and the `/(root)` folder, then save.
5. Wait for GitHub Pages to publish the site, then open the URL shown on the Pages settings screen.

As a static site, GitHub Pages serves the root-level `index.html` as the entry page.

### Maintaining content

- Update home-page copy and issue highlights in `index.html`.
- Publish an issue in `current-issue.html`, then update the volume record in `archive.html`.
- Revise submission guidance in `authors.html`.
- Change the site-wide visual design in `assets/css/styles.css`.
- Change interaction behavior in `assets/js/main.js`.

Each page currently contains its own header and footer. When changing shared copy, check every page to keep navigation and publication information consistent.

### Contributing

Suggestions and improvements to content, copy, accessibility, and front-end experience are welcome through Issues or Pull Requests. Please preview changes on desktop and mobile, and do not describe placeholder functionality as if it were already live.

### License

This project is distributed under a [Proprietary License](LICENSE). Copyright © 2026 Mengqiu07. All rights reserved.

The full license text is reproduced below. In case of any discrepancy, the Chinese version prevails.

#### I. Scope of License

1. The copyright in this software and its source code (the “Software”) belongs to Mengqiu07.
2. You are authorized only to view and run the Software for personal learning and research purposes.

#### II. Restrictions

Without the prior written permission of the author, you may not:

1. Copy, plagiarize, or republish all or any part of the Software's source code in any form;
2. Modify, adapt, translate, or create derivative works based on the Software;
3. Use the Software for any commercial purpose, including selling, renting, licensing, distributing for profit, or embedding it in a commercial product or service;
4. Redistribute or disseminate all or any part of the Software in any form.

#### III. Disclaimer

The Software is provided “AS IS”, without any express or implied warranty, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the author be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of the Software.

#### IV. Other Terms

1. Any unauthorized use constitutes an infringement of the author's copyright. The author reserves the right to pursue legal remedies.
2. For commercial licensing or other permissions, please contact the author: <lyr_0807@163.com>.
3. This Proprietary License takes effect on the date it is published.
4. In the event of any dispute concerning this Proprietary License, the Chinese version prevails.
