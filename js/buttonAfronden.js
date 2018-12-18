function buttonAfronden() {
    let document = new jsPDF("p", "mm", "a4");
    document.setFontSize(8);

    var width = document.internal.pageSize.getWidth();      // alert(width); //  210.0015555555555 millimeter  =  793.706667 pixel
    var height = document.internal.pageSize.getHeight();    // alert(height); // 297.0000833333333 millimeter  =  1122.52 pixel

    document.addImage(imgData, 'PNG', 0, 0, width, height);

    // links boven
    let invoiceInputVan = $('#invoiceInputVan').val();
    let invoiceInputVoor = $('#invoiceInputVoor').val();
    let invoiceInputFactDat = $('#invoiceInputFactDat').val();
    let invoiceInputBetVoorw = $('#invoiceInputBetVoorw').val();    

    // midden onder tabel
    let invoiceInputBetDat = $('#invoiceInputBetDat').val();
    let invoiceInputFactNo = $('#invoiceInputFactNo').val();


    // regel 1 van factuur
    let invoiceInputWerkzaamh = $('#invoiceInputWerkzaamh').val();
    let invoiceInputUren = $('#invoiceInputUren').val();
    let invoiceInputPrijs = $('#invoiceInputPrijs').val();
    let invoiceInputPrijsTotaalBedrag = $('#invoiceInputPrijsTotaalBedrag').val();

    // totalen afronding factuur
    let invoiceInputSubtotaal = $('#invoiceInputSubtotaal').val();
    let invoiceInputBTW = $('#invoiceInputBTW').val();
    let invoiceInputTotaal = $('#invoiceInputTotaal').val();

    // --------------------------------------------------------------

    // links boven
    document.text(20, 50, invoiceInputVan);
    document.text(20, 75, invoiceInputVoor);
    document.text(20, 90, invoiceInputFactDat);
    document.text(20, 105, invoiceInputBetVoorw);

    // midden onder tabel
    document.text(113.5, 203.2, invoiceInputBetDat);
    document.text(120, 207, invoiceInputFactNo);

    // regel 1 van factuur
    document.text(20, 131, invoiceInputWerkzaamh);
    document.text(105, 131, invoiceInputUren);
    document.text(143, 131, invoiceInputPrijs);
    document.text(178, 131, invoiceInputPrijsTotaalBedrag);

    // totalen afronding factuur
    document.text(178, 143, invoiceInputSubtotaal);
    document.text(178, 155, invoiceInputBTW);
    document.text(178, 166, invoiceInputTotaal);

    // document.setFont("arial");
    // document.setFontType("regular");

    // Printer popup tonen om direct te printen
    //print(width, height);
    document.save('Document_by_MANTAX')
}