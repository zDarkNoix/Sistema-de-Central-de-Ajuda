
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Painel')
      .addItem('Abrir Painel de Visualização', 'showPainel') // 
      .addItem('Abrir Painel de Registro', 'showRegisterPainel') // 
      .addToUi();
}


function showPainel() {
  const html = HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Painel de Informações - Visualização')
      .setWidth(1920) // 
      .setHeight(1000); // 
  SpreadsheetApp.getUi().showModalDialog(html, 'Painel de Informações - Visualização');
}


function showRegisterPainel() {
  const html = HtmlService.createHtmlOutputFromFile('index_register') // 
      .setTitle('Painel de Informações - Registro')
      .setWidth(1800) // 
      .setHeight(900); // 
  SpreadsheetApp.getUi().showModalDialog(html, 'Painel de Informações - Registro');
}



function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Painel de Informações - Visualização');
}


function getPainelData() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('BD');

    if (!sheet) {
      Logger.log('Erro: A planilha "[BD]" não foi encontrada.');
      return []; // 
    }

    const range = sheet.getDataRange();
    const values = range.getValues();

    if (values.length === 0) {
      return []; // 
    }

    const headers = values[0]; // 
    const data = [];


    for (let i = 1; i < values.length; i++) {
      const row = values[i];
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {

        rowObject[headers[j]] = row[j];
      }
      data.push(rowObject);
    }
    Logger.log('Dados recuperados com sucesso: ' + JSON.stringify(data));
    return data;
  } catch (e) {
    Logger.log('Erro ao recuperar dados: ' + e.message);
    return [];
  }
}
