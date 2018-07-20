var temp = $widget;

var tempChk = $checkbox;

if (selItem === undefined || selChk === undefined) //First time usage goes here

{

selItem = temp;

selChk = tempChk;

$checkbox.prop('checked', !$checkbox.is(':checked'));

updateDisplay();

}

else {

//First removing element that is checked

$widget = selItem;

$checkbox = selChk;

$checkbox.prop('checked', !$checkbox.is(':checked'));

updateDisplay();

//Updating global variables

selItem = temp;

selChk = tempChk;

//Checking the element that user clicked

$widget = temp;

$checkbox = tempChk;

$checkbox.prop('checked', !$checkbox.is(':checked'));

updateDisplay();

}
