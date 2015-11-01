# navigating-elevator

頁面右側的豎直固定層充當「導航電梯」，點擊其按鈕會將頁面定位至對應區塊；頁面滾動時，「導航電梯」亦會隨着頁面可見區塊而 highlight 相應按鈕；另外還有「回到頂部」按鈕。

頁面功能看落比較簡單，本可摒棄錨鏈接定位，而採用 JavaScript 視口判斷來定位，順便可以加入順滑動畫，以免跳轉太過倉促。但過程中發覺此項目實在無聊，無謂多嘥時間。
***
## Overview

囊括一個 HTML 檔、JavaScript 腳本檔、CSS 樣式表及若干圖片。
使用到的知識點有`fixed`及其在舊 IE 中的兼容性 hack、CSS Sprite、JavaScript 判斷視口距離、原生 JavaScript 實現 jQuery 的`removeClass` && `hasClass` && `addClass`方法等等。
***
