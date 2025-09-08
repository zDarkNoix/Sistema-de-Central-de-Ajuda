
function saveOrUpdateDataToSheet(rowIndex, formData) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('BD');

    if (!sheet) {

      sheet = spreadsheet.insertSheet('BD');
      const headers = ['Categoria', 'Topico', 'Assunto', 'Informacao'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const newRow = [];
    newRow[headers.indexOf('Categoria')] = formData.categoria;
    newRow[headers.indexOf('Topico')] = formData.topico;
    newRow[headers.indexOf('Assunto')] = formData.assunto;
    newRow[headers.indexOf('Informacao')] = formData.informacao;


    const targetRow = parseInt(rowIndex, 10);
    if (targetRow > 1 && targetRow <= sheet.getLastRow()) {

      sheet.getRange(targetRow, 1, 1, newRow.length).setValues([newRow]);
      Logger.log(`Dados atualizados com sucesso na linha ${targetRow} da planilha "[BD]".`);
      return { success: true, message: `Dados atualizados com sucesso na linha ${targetRow}!` };
    } else {

      sheet.appendRow(newRow);
      Logger.log('Dados salvos como nova entrada na planilha "[BD]".');
      return { success: true, message: 'Nova informação salva com sucesso!' };
    }

  } catch (e) {
    Logger.log('Erro ao salvar ou atualizar dados na planilha: ' + e.message);
    return { success: false, message: 'Erro ao salvar ou atualizar dados: ' + e.message };
  }
}


function getPainelDataByLineNumber(lineNumber) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('BD');

    if (!sheet) {
      Logger.log('Erro: A planilha "[BD]" não foi encontrada.');
      return null;
    }

    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();


    if (lineNumber <= 1 || lineNumber > lastRow) {
      Logger.log(`Linha inválida ou não existente para leitura: ${lineNumber}`);
      return null;
    }


    const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];


    const rowValues = sheet.getRange(lineNumber, 1, 1, lastColumn).getValues()[0];

    const rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowValues[j];
    }
    Logger.log(`Dados da linha ${lineNumber} recuperados: ` + JSON.stringify(rowObject));
    return rowObject;
  } catch (e) {
    Logger.log('Erro ao recuperar dados por número da linha: ' + e.message);
    return null;
  }
}
