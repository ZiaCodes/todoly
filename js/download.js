function generatePDF(){
    const page = document.getElementById("box");

    html2pdf()
        .set({
            margin: 1,
            filename: 'todoly.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 3,
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                formate: "a3",
                orientation: 'portrait'
            }
        })
    .from(page)
    .save();
}