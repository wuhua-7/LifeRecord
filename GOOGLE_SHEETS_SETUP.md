# 📊 Google Sheets 自動同步設置指南

## 步驟 1：設置 Google Apps Script

1. **打開你的試算表**
   - https://docs.google.com/spreadsheets/d/1EzUN9l0pH0-as533cCkkD6IrzwGzKNAGVI6o507dgGQ/edit

2. **開啟 Apps Script 編輯器**
   - 點擊頂部選單：**擴充功能** → **Apps Script**
   - 會打開一個新視窗

3. **貼上代碼**
   - 刪除預設的 `function myFunction() {}` 代碼
   - 複製 `google-apps-script.js` 檔案中的所有代碼
   - 貼到編輯器中

4. **儲存專案**
   - 點擊 💾 儲存圖示
   - 專案名稱可以命名為「生活記錄 API」

## 步驟 2：部署為 Web 應用程式

1. **點擊部署**
   - 點擊右上角的 **部署** → **新增部署作業**

2. **選擇類型**
   - 點擊「選取類型」⚙️ 圖示
   - 選擇 **網頁應用程式**

3. **配置設定**
   - **說明**：生活記錄 API v1
   - **執行身分**：選擇「我」
   - **具有應用程式存取權的使用者**：選擇「任何人」

4. **授權存取**
   - 點擊 **部署**
   - 會要求授權，點擊 **授權存取**
   - 選擇你的 Google 帳號
   - 點擊 **進階** → **前往「生活記錄 API」(不安全)**
   - 點擊 **允許**

5. **複製網址**
   - 部署完成後，會顯示一個 **網頁應用程式網址**
   - 格式類似：`https://script.google.com/macros/s/AKfycby.../exec`
   - **複製這個網址！**

## 步驟 3：更新網站代碼

將複製的網址填入 `public/index.html` 檔案中：

找到這一行（約第 259 行）：
```javascript
const googleSheetApiUrl = null;
```

改為：
```javascript
const googleSheetApiUrl = "你複製的網址";
```

例如：
```javascript
const googleSheetApiUrl = "https://script.google.com/macros/s/AKfycby.../exec";
```

## 步驟 4：測試

1. 提交代碼並推送到 GitHub
2. 等待 Vercel 自動部署
3. 在網站上新增一筆記錄
4. 檢查 Google Sheets 是否出現新記錄

## 🔧 故障排除

### 如果記錄沒有出現：

1. **檢查 Apps Script 部署**
   - 確認「具有應用程式存取權的使用者」設為「任何人」
   - 重新部署（部署 → 管理部署作業 → 編輯 → 部署）

2. **檢查瀏覽器控制台**
   - 按 F12 打開開發者工具
   - 查看 Console 是否有錯誤訊息

3. **檢查 Apps Script 日誌**
   - 在 Apps Script 編輯器中
   - 點擊左側的「執行作業」查看日誌

## 📝 注意事項

- 數據會同時儲存在瀏覽器（localStorage）和 Google Sheets
- 如果 Google Sheets 同步失敗，數據仍會保存在本地
- 可以隨時使用「導出 CSV」功能手動備份
