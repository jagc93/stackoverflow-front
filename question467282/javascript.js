window.onload = () => {
    console.log('Javascript');
    document.getElementById('inputJS').addEventListener('click', () => {
        alert('Ejecuta evento click con Javascript');
    });
    var brandObject = new BrandObject();
    brandObject.NBActived();
    brandObject.NBHover();
    brandObject.NBLeave();
};