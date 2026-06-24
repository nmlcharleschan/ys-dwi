// ============================================================
// Google Sheets RSVP Integration for Wedding Invitation Site
// ============================================================
//
// DEPLOYMENT STEPS:
// 1. In your Google Sheet, go to Extensions → Apps Script
// 2. Replace all default code with this entire file
// 3. Click "Deploy" → "New deployment" → Type: "Web app"
// 4. Set "Execute as" → "Me"
// 5. Set "Who has access" → "Anyone"
// 6. Click "Deploy" → Authorize → Copy the Web App URL
// 7. Paste the URL into your .env file as VITE_GOOGLE_SHEETS_WEBHOOK_URL
//
// NOTE: After editing the script code, you MUST create a NEW deployment
// (not just "Manage deployments"). The URL only updates with new deployments.
// ============================================================

/**
 * Handles CORS preflight OPTIONS requests.
 * Required for browsers to allow cross-origin POST requests.
 */
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
}

/**
 * Handles RSVP form submissions via POST.
 * 
 * Expected JSON body:
 * {
 *   "name": "string",
 *   "attending": true|false,
 *   "transportNeeded": true|false|null,
 *   "message": "string (optional)",
 *   "language": "en"|"zh"
 * }
 */
function doPost(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  try {
    // Guard against empty/malformed bodies
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Empty body' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid JSON' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }

    // Validate required fields
    var name = String(data.name || '').trim();
    if (!name) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Name is required' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }

    var attending = data.attending;
    if (attending === undefined || attending === null) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Attendance is required' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }

    // Prepare row data
    var timestamp = new Date();
    var attendingStr = attending ? 'Yes' : 'No';
    var transportStr = data.transportNeeded === true ? 'Yes' : data.transportNeeded === false ? 'No' : '-';
    var message = String(data.message || '');
    var language = String(data.language || 'en');

    // Append to the active sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([timestamp, name, attendingStr, transportStr, message, language]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Server error: ' + error.message }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}
