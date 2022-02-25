function saveimages(dates) {
    console.log(dates[0]);
}

var html2canvas = function(param1, param2) {
    param2.onrendered(param1);
}

var takeScreenShot = async function() {
    var allImages = [];
console.log('Antes del primer llamado del html2canvas')
    await html2canvas(document.getElementById("target"), {
            useCORS: true,
            onrendered: function(canvas) { allImages.push(canvas);
        }
    });
    console.log('Antes del segundo llamado llamado del html2canvas')
    await html2canvas(document.getElementById("target2"), {
            useCORS: true,
            onrendered: function(canvas2) { allImages.push(canvas2);
        }
    });

    console.log(allImages);
    saveimages(allImages);
}

window.onload = function() {
    takeScreenShot();
}