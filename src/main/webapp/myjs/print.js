
function PrintElem(elem)
    {
       alert();
        Popup($(elem).html());
    }

    function Popup(data)
    {
        var printCart = window.open('', 'Product Items');
        printCart.document.write('<html><head><title></title>');
             printCart.document.write('<style> table{ border-collapse: collapse;width: 100%}   </style>');
        printCart.document.write('</head><body >');
        printCart.document.write('<center>')
        printCart.document.write(data);
        printCart.document.write('</center>')
        printCart.document.write('</body></html>');

        printCart.print();
        printCart.close();

        return true;
    }
    
        function printreport(inv){
      PopPrintview($(inv).html()); 

}

    function PopPrintview(data)
    {
        var printCart = window.open('', 'Product Items');
        printCart.document.write('<html><head><title></title>');
        printCart.document.write('</head><body >');
        printCart.document.write('<style> table{ border-collapse: collapse;width: 100%}   </style>');
      
         printCart.document.write('<img style="background-color:#baf8ff;float: left"  src="UploadImage/drapeau.jpg" alt="" height="40"/> <img style="background-color:#baf8ff;float: right"  src="UploadImage/drapeau.jpg" alt="" height="40"/>');
        printCart.document.write('<center/><span style="font-size:15pt">Online Cardiovascular Diseases Predactions </span></center>');
        printCart.document.write('<center>')
        printCart.document.write(data);
        printCart.document.write('</center>')
        printCart.document.write('</body></html>');

        printCart.print();
        printCart.close();

        return true;
    }
