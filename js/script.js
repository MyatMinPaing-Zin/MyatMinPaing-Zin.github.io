function downloadPDF() {
    // URL to your PDF file
    var pdfURL = 'mmpz_resume.pdf';

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = pdfURL;

    // Set the download attribute with the filename you want
    link.download = 'Myat_Min_Paing_Zin_resume.pdf';

    // Programmatically click on the link to initiate download
    link.click();
}