# Smart Computer AI 人臉偵測系統

## [README in English](https://github.com/yuwen-c/smartcomputer/blob/master/README.md)
## 上傳照片網址，即可辨識出人臉的部分，並加以標記。
## 串接Clarifai提供的AI人臉辨識API
## 🔆 [實際操作網站](https://yuwen-smartcomputer.netlify.app/)


## 功能
- 使用者登入後，送出包含人臉的照片網址，系統可將人臉部分辨識出來，並加以標記。
- 使用次數會顯示在畫面上，隨著送出網址後即時更新。

@ 登入、註冊、
@ 前後端 資料連結 圖

## 特點 📝
### API 雲端服務
✨ AI Face Detection functionality built by Clarifai API

### 整體架構
✨ 前端網站使用React.js。
－語法類似Javascript，利用多個元件組合而成，元件各自獨立且可重複使用。
✨ [後端server](https://github.com/yuwen-c/smartcomputerAPI)利用node.js, express.js。
－使用Javascript語言，效能強大，可快速建造一個server。 
✨ 前後端以RestfulAPI連接。
－提高可讀性、除錯效率，分離每個端點，可彈性組合成多種邏輯。
✨ 使用者資料儲存於PostgreSQL資料庫。
✨ 資料庫與server以knex相接。
－說明文件清楚，功能強大。

### 安全性 
🔐 將Clarifai API key 設為環境變數，與後端server的code分開，並放在```gitignore```，不會被git紀錄。
🔐 Clarifai API key 部署時設定在Heroku。
🔐 使用者密碼以Bcrypt加密。
🔐 使用者密碼，與姓名等資料分開存放在不同table，減少資料外洩的機率。

### 響應式前端網站及特效
✨ 手機、桌機體驗良好的前端網站。
✨ 利用Tachyons設定達成：針對不同螢幕大小，顯示不同樣式的設計。
✨ 動態背景採用```react-particles-js```
✨ Hover特效採用```react-tilt```

### 部署
✨ 前端網站部署到Netlify。
－適合部署前端網站，不需等待喚醒時間。 
✨ 後端網站部署到Heroku。
－維護、操作容易，適合小流量網站。

## 畫面預覽
- 使用者登入

## 詳細作法