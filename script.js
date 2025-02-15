window.onload = function() {
    document.getElementById("current-datetime").value = new Date().toLocaleString();

    let yearSelect = document.getElementById("year");
    for (let year = 2000; year <= 2030; year++) {
        let option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
};

function calculateWheatConsumed() {
    let studentsWheat = document.getElementById("students-wheat").value;
    document.getElementById("wheat-consumed").value = (studentsWheat * 0.1).toFixed(2);
}

function calculateRiceConsumed() {
    let studentsRice = document.getElementById("students-rice").value;
    document.getElementById("rice-consumed").value = (studentsRice * 0.1).toFixed(2);
}

function calculateFruitCost() {
    let fruitStudents = document.getElementById("fruit-students").value;
    document.getElementById("fruit-cost").value = (fruitStudents * 5).toFixed(2);
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("MDM Calculator Monthly Report", 10, 10);
    doc.text("Created By: Manoj Bansal (9888666363)", 10, 20);
    doc.text("Guided By: CHT Sh. Surinder Kumar Vig", 10, 30);

    doc.text("Report Data:", 10, 40);
    doc.text(document.getElementById("school-name").value, 10, 50);

    doc.save("MDM_Report.pdf");
}