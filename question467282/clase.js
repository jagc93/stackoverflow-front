class BrandObject {

    constructor() {
        /* this.article_brand_active = $('.tile-motorbike-brands').hasClass('active');
        this.articleBrandContainer = $('.tile-motorbike-brands');
        this.articleBrandTitle = $('#title-brand');
        this.btnNewBrand = $('#btn-new-motorbike-brand');
        this.btnListBrand = $('#btn-list-motorbike-brand');
        this.iconBrand = $('.icon-brand'); */
        console.log('init instance...');
    }

    NBHover() {
        /* this.articleBrandTitle.css('background-color','rgb(76, 175, 80)');
        this.btnNewBrand.css('color','rgb(76, 175, 80)');
        this.btnListBrand.css('color','rgb(189, 189, 189)');
        this.iconBrand.css('color','rgb(76, 175, 80)');
        
        $('#title-brand').removeClass('listBrandActiveBGColor');
        $('.icon-brand').removeClass('listBrandActiveColor'); */
        console.log('execute NBHover');
    }

    NBLeave() {
        /* this.articleBrandTitle.css('background-color','rgb(43, 174, 168)');
        this.btnNewBrand.css('color','rgb(189, 189, 189)');
        this.btnListBrand.css('color','rgb(189, 189, 189)');
        this.iconBrand.css('color','rgba(43, 174, 168, 0.4)'); */
        console.log('execute NBLeave');
    }

    NBActived() {
        /* this.articleBrandContainer.addClass('actived');
        this.articleBrandTitle.addClass('newBrandActiveBGColor');
        this.btnNewBrand.addClass('newBrandActiveColor');
        this.btnListBrand.css('color','rgb(189, 189, 189)');
        this.iconBrand.addClass('newBrandActiveColor'); */
        console.log('execute NBActived');
    }

}