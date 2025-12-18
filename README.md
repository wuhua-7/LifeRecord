# 🌟 生活記錄系統

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wuhua-7/LifeRecord)

簡單優雅的每日生活追蹤工具，幫助你記錄和管理日常生活。

> 🔗 **GitHub**: https://github.com/wuhua-7/LifeRecord

## ✨ 功能特色

- 📝 每日記錄：記錄三餐、運動、睡眠等生活細節
- 😊 心情追蹤：記錄每日心情狀態
- ⭐ 評分系統：為每一天打分，追蹤生活品質
- 📊 數據統計：查看總記錄數和平均評分
- 💾 本地儲存：使用 localStorage 保存數據
- 📱 響應式設計：完美支援手機和桌面裝置

## 🚀 快速開始

### 本地運行

```bash
# 安裝依賴（可選）
npm install

# 啟動開發伺服器
npm run dev

# 或直接打開 public/index.html
```

### 部署到 Vercel

#### 快速部署（推薦）

點擊下方按鈕一鍵部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wuhua-7/LifeRecord)

#### 手動部署步驟

1. 訪問 [Vercel](https://vercel.com) 並使用 GitHub 登入
2. 點擊 "Add New..." → "Project"
3. 選擇 `wuhua-7/LifeRecord` 倉庫
4. 配置設定：
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Output Directory: `public`
5. 點擊 "Deploy" 開始部署
6. 等待 1-2 分鐘，完成後獲得專屬網址

#### 自動部署

每次推送到 GitHub 的 `main` 分支，Vercel 會自動重新部署你的網站！

## 🛠️ 技術棧

- **React 18** - UI 框架
- **Tailwind CSS** - 樣式框架
- **DaisyUI** - UI 組件庫
- **LocalStorage** - 數據持久化

## 📁 專案結構

```
life-tracker/
├── public/
│   └── index.html      # 主頁面（包含所有代碼）
├── package.json        # 專案配置
├── vercel.json        # Vercel 部署配置
└── README.md          # 專案說明
```

## 🎨 特色設計

- 漸層色彩設計
- 流暢的動畫效果
- 卡片式佈局
- 直觀的用戶界面

## 📝 使用說明

1. 填寫姓名和日期
2. 記錄三餐內容
3. 記錄運動和睡眠時間
4. 選擇當日心情
5. 為這一天評分（1-10）
6. 添加額外備註
7. 點擊提交保存記錄

## 🔗 相關連結

- [Google 表單](https://forms.gle/YOUR_FORM_ID) - 備用數據收集
- [Google 試算表](https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit) - 數據查看

## 📄 授權

MIT License

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

---

Made with ❤️ by [Your Name]
