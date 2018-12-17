function buttonAfronden() {
    let document = new jsPDF("p", "mm", "a4");
    var width = document.internal.pageSize.getWidth();
    var height = document.internal.pageSize.getHeight();

    // Printer popup tonen om direct te printen
    //print(width, height);

    //alert(width); //  210.0015555555555 millimeter  =  793.706667 pixel
    //alert(height); // 297.0000833333333 millimeter  =  1122.52 pixel

    document.addImage(imgData, 'PNG', 0, 0, width, height);

    let invoiceInputVan = $('#invoiceInputVan').val();
    let invoiceInputVoor = $('#invoiceInputVoor').val();
    let invoiceInputFactNo = $('#invoiceInputFactNo').val();
    let invoiceInputFactDat = $('#invoiceInputFactDat').val();
    let invoiceInputBetVoorw = $('#invoiceInputBetVoorw').val();
    let invoiceInputBetDat = $('#invoiceInputBetDat').val();

    let invoiceInputWerkzaamh = $('#invoiceInputWerkzaamh').val();
    let invoiceInputUren = $('#invoiceInputUren').val();
    let invoiceInputPrijs = $('#invoiceInputPrijs').val();
    //let invoiceInputBedrag = $('#invoiceInputBedrag').val();
    let invoiceInputPrijsTotaalBedrag = $('#invoiceInputPrijsTotaalBedrag').val();
    let invoiceInputSubtotaal = $('#invoiceInputSubtotaal').val();
    let invoiceInputBTW = $('#invoiceInputBTW').val();
    let invoiceInputTotaal = $('#invoiceInputTotaal').val();

    // links boven
    document.text(20, 50, invoiceInputVan);
    document.text(20, 75, invoiceInputVoor);
    document.text(20, 90, invoiceInputFactDat);
    document.text(20, 105, invoiceInputBetVoorw);

    //midden onder tabel
    document.text(115, 202, invoiceInputBetDat);
    document.text(120, 207, invoiceInputFactNo);

    document.text(20, 128, invoiceInputWerkzaamh);
    document.text(40, 67, invoiceInputUren);
    document.text(40, 72, invoiceInputPrijs);
    document.text(40, 77, invoiceInputPrijsTotaalBedrag);

    document.save('Document_by_MANTAX')
}