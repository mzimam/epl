<div id="sheet-table" style="width:100%; overflow-x:auto;"></div>

<script>
// URL CSV publik Google Sheets
const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWok6qdy_CYTU__CSacjOSJeJb0ACrUWk7t8e0iCGI8Vtb_1adXoEnEaIrrK9FDeEMm-dKHtedo17v/pub?gid=1740956210&single=true&output=csv";

// Fungsi fetch dan parse CSV
fetch(csvUrl)
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').map(row => row.split(','));
    let html = '<table border="1" cellspacing="0" cellpadding="5" style="width:100%; border-collapse: collapse;">';
    
    rows.forEach((row, index) => {
      html += '<tr>';
      row.forEach(cell => {
        html += index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`;
      });
      html += '</tr>';
    });

    html += '</table>';
    document.getElementById('sheet-table').innerHTML = html;
  })
  .catch(error => console.error('Error loading CSV:', error));
</script>
