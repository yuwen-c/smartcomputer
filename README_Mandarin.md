# Smart Computer - AI 人臉偵測系統

## [README in English](https://github.com/yuwen-c/smartcomputer/blob/master/README.md)
## 上傳照片網址，即可辨識出人臉的部分，並加以標記。
## 串接Clarifai提供的AI人臉辨識API
## 🔆 [實際操作網站](https://yuwen-smartcomputer.netlify.app/)


## 功能
- 使用者登入後，送出包含人臉的照片網址，系統可將人臉部分辨識出來，並加以標記。
- 使用次數會顯示在畫面上，隨著送出網址後即時更新。

## 特點 📝
### API 雲端服務
✨ 連接Clarifai雲端服務的人臉辨識API，將資料回傳前端。

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

- 桌機版人臉偵測結果畫面，顯示使用者名稱、使用次數，並將人臉框出：

<h2 align="center">
  <img src="example/smart-computer_screenshot.png" alt="screenshot" width="700px" />
  <br>
</h2>

- 手機版人臉偵測結果畫面，將圖片大小適應手機螢幕尺寸：

<h2 align="center">
  <img src="example/smart-computer_detection.png" alt="screenshot" width="300px" />
  <br>
</h2>


## 詳細作法
@ 登入、註冊、
@ 前後端 資料連結 圖

1. 註冊，建立新使用者。使用次數預設為0。


2. Sign in page, Register page整合成同一個EntryPage
- 因為這兩頁的樣式、功能有許多雷同，所以整合成一個component，Don't repear yourself。
- 差異處，用```ternary operator```，根據所在頁面，來判斷要回傳什麼內容。
- 使用useState和useEffect，用function component就能儲存、改變state，且更簡潔。

3. 送出網址部分
- 使用者貼上網址，觸發input state改變。
- 待使用者點送出，此時會改變url state，使圖片顯示在畫面上，並將此網址送到後端。
- 後端會將Clarifai辨識出來的位置回傳到前端，用css設定顯示在畫面上。
- 同時，會再連接到後端，將該名使用者的使用次數+1，並且回傳，顯示。

4. route change   與 navigation
- 頁面路徑共有：sign in/ register/ home。
- route設定為home時，將「是否登入」改為true。
- 依照「是否登入」來決定導覽列要顯示：登入，還是登出。
- route選擇到sign in時，refresh user state。

5. render不同畫面
- 以三元運算子，根據home route，決定不同的render

6. 環境變數設定 後端[放連結] (env檔，server檔，config.js檔，env example檔)
- 開發階段，安裝```dotenv```，（需要在```server.js```引入），將環境變量從```.env```下載到```process.env```。(生產階段不需要)
～安裝為dev Dependencies，減少project大小
- 設定```.env```檔，並且放在```gitignore```以免被追蹤。
~密碼不外流
- 在```.env```設定: clarifai api key and url。

- 另外設定```config.js```檔，裡面用變數去命名```process.env```的環境變數，並且exports到要用的檔案。
~閱讀容易，且可一眼看出所有的變數有哪些。
～push上雲端時，code不需要改動。

- 因為```.env```未上傳，所以另外編輯一個```env.example```，告知團隊需要設定哪些環境變數。


7. 連接AI API
- 將連接API的code放在後端，增加安全性。
- API key直接設定在Heroku的環境變數。

8. 後端以inject語法，將endpoint分類，獨立到分別的檔案中，更清楚明瞭。
