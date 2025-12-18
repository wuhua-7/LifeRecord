// Google Apps Script 代碼
// 請複製此代碼到你的 Google Sheets 中

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // 如果是第一次使用，添加標題行
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['姓名', '日期', '早餐', '午餐', '晚餐', '運動', '睡眠', '心情', '評分', '備註', '提交時間']);
    }
    
    // 添加新記錄
    sheet.appendRow([
      data.name || '',
      data.date || '',
      data.breakfast || '',
      data.lunch || '',
      data.dinner || '',
      data.exercise || '',
      data.sleep || '',
      data.mood || '',
      data.rating || '',
      data.notes || '',
      new Date().toLocaleString('zh-TW')
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: '記錄已保存' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
