
$(document).ready(() => {
    console.log('jQuery');
    $('#inputJQ').on('click', function() {
        alert('Ejecuta evento click con jQuery');
    });
    var brandObject = new BrandObject();
    brandObject.NBActived();
    brandObject.NBHover();
    brandObject.NBLeave();
});