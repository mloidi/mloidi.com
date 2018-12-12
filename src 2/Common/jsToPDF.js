import jsPDF from 'jspdf';

const addLine = (doc, text, x ,i) => {
    doc.text(text, x, i);
    return doc;
}

export const PDFService = {
    getPDF: (education) => {
        let doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        })
        doc.setFontSize(12);
        let i = 10;
        Object.keys(education).map(key => {
            let x = 10;
            addLine(education[key].title, x, i);
            i = i + 10;
            addLine(education[key].center, x, i);
            i = i + 10;
            addLine(education[key].finishDate, x, i);
            i = i + 10;
            addLine(education[key].location, x, i);
            i = i + 10;
            addLine(education[key].description, x, i);
            i = i + 10;
            addLine(education[key].descriptionDetails, x + 5, i);
            i = i + (10*education[key].descriptionDetails.length);
            return null;
        })
        doc.save('resume.pdf');
    }
};