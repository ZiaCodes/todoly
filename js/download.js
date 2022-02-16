function generatePDF(){
    const page = document.getElementById("box");

    html2pdf()
        .set({
            margin: 1,
            filename: 'todoly.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            }
        })
    .from(page)
    .save();
}
