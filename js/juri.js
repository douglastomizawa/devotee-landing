
function initialize() {
    verifyLanguage();
}
initialize()
function verifyLanguage() {
    let dataTraduction = data;

    // var userLang = navigator.language;
    let location = window.location.hostname;
    // console.log(data)
    switch (location) {
        case location = 'devotee.com.br':
            traductionLanguage(dataTraduction[0].pt);
            break;
        case location = 'devotee.network':
            traductionLanguage(dataTraduction[0].us);
            break;

        default:
            traductionLanguage(dataTraduction[0].us);
            break;
    }
}
function traductionLanguage(data) {

    for (let i = 0; i < Object.values(data).length; i++) {
        let objectKeys = Object.keys(data)[i],
            objectValue = Object.values(data)[i],
            elementIds = document.getElementById(objectKeys);


        switch (!elementIds) {
            case false:
                document.title = objectValue.title
                elementIds.innerHTML = objectValue.text;

                break;
            default:
                break;
        }
    }

}
