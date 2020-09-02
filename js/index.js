
    function initialize(){
        verifyLanguage();
    }
    initialize()
    function verifyLanguage(){
        let dataTraduction = data;
        console.log(data)
        // var userLang = navigator.language;
        let location = window.location.href ;.
        console.log(location)
        switch (location) {
            case 'devotee.com.br':
               
                traductionLanguage(dataTraduction[0].pt);
                copyright(dataTraduction[0].pt.copyright);
                break;
            case 'devotee.network':
                traductionLanguage(dataTraduction[1].us);
                copyright(dataTraduction[1].us.copyright);
            break;
        
            default:
                traductionLanguage(dataTraduction[1].us);
                copyright(dataTraduction[1].us.copyright);
                break;
        }
    }
    function traductionLanguage(data){
        for (let i = 0; i < Object.values(data).length; i++) {
            let objectKeys = Object.keys(data)[i],
            objectValue = Object.values(data)[i],
            elementIds =  document.getElementById(objectKeys);
            console.log(elementIds)
            if(objectKeys.indexOf('alt') == -1){
                elementIds.innerHTML = objectValue;
            }
            if(objectKeys.indexOf('src') != -1){
                elementIds.src = objectValue
            } 
        }
    }
    function copyright(text){
        let copyright = document.querySelector('#copyright');
        copyright.innerHTML=` Copyright © ${new Date().getFullYear()} ${text}`
    }
   