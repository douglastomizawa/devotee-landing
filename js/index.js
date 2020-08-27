class LandingDevotee{
    constructor(){
        this.initialize()
        this.btnClasses;
    }
    initialize(){
        this.copyright();
        this.modal();
        this.modalTerms();
        this.modalPolicy()
        this.getJSONPolicy();
        this.openTabsClick();
        this.execClickTabs()
        this.alternateImg()
    }
    copyright(){
        let copyright = document.querySelector('#copyright')
        copyright.innerHTML=` Copyright © ${new Date().getFullYear()} Devotee. Todos direitos reservados.`
    }
    modalPolicy(){
        let modalId = document.querySelector("#my-modal-policy");
        let btn = "my-btn-policy";
        let close = "close-policy";
        console.log('s')
        this.modal(modalId, btn, close)
    }
    modalTerms(){
        let modalId = document.querySelector("#my-modal-terms");
        let btn = "my-btn-terms";
        let close = "close-terms";
        this.modal(modalId, btn, close)
    }
    modal(modalId, btn, close) {  
        document.addEventListener('click', (e) =>{
            let targetClass = e.target.classList.contains(btn);
            let targetClassClose = e.target.classList.contains(close);
            if(targetClass){
                modalId.style.display = "flex";
            }
            if(targetClassClose){
                modalId.style.display = "none";
            }
		});
    }
    execClickTabs(){
        let btnClass = [];
        document.addEventListener('click', (e) =>{
            let targetClass = e.target.getAttribute('data-click');
            console.log(targetClass)
            switch (targetClass) {
                case 'click-terms':
                    btnClass[0] = 'click-terms'
                    break
                case 'click-policy-privacy':
                    btnClass[0] = 'click-policy-privacy'
                        break
                case 'click-policy-cookies':
                    btnClass[0] = 'click-policy-cookies'
                        break
                case 'click-procedures':
                    btnClass[0] = 'click-procedures'
                        break
                case 'click-security':
                    btnClass[0] = 'click-security'
                        break
                default:
                    break;
            }
        });  
        this.openTabsClick(btnClass)
    }
    
    openTabsClick(btnClass){
        document.addEventListener('click', (e) =>{     
            let targetClass = e.target.classList.contains(btnClass);
            if(targetClass){
                this.hideTabs()
                this.openTabs(e, btnClass)
                this.styleTabsTerms(e, btnClass);
                this.getJSONPolicy()
            }     
		});
    }
    hideTabs(){
        let i, tabcontent
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
    }
    alternateImg(){
        if(window.innerWidth >= '1250'){
           document.getElementById('phone').src = './assets/iPhone@2x.png'     
        }
      
        
    }
    openTabs(evt, cityName) {  
        let i, tabcontent,tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        this.styleTextTabs(evt)
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    styleTextTabs(evt){
        let tabContent,tabs;
        let elementClicked = evt.path[1];
        tabContent = document.getElementsByClassName("content-terms");
        tabs = document.getElementsByClassName("tab");
        console.log(tabContent);
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove('modal-terms'); 
        }
        for (let e = 0; e < tabContent.length-6; e++) {
            console.log(elementClicked.classList.value , tabs[0].children[e].classList.value)
            if(elementClicked.classList.value == tabs[0].children[e].classList.value){
                tabs[0].children[e].classList.add('modal-terms');
            }
         
        }
    }
    styleTabsTerms(evt, cityName){
        console.log(evt)
        console.log(cityName)
    }
    getJSONPolicy(){
        let policyPivacy = JSON.parse(dataprivacy);
        let terms = JSON.parse(dataterms);
        let cookies = JSON.parse(datacookies);
        let procedure = JSON.parse(dataprocedure);
        let security = JSON.parse(datasecurity);
        document.getElementById('terms-of-use').innerHTML = terms[0].content;
        document.getElementById('policy-privacy-1').innerHTML = policyPivacy[0].content;
        document.getElementById('policy-cookies').innerHTML = cookies[0].content;
        document.getElementById('procedure').innerHTML = procedure[0].content;
        document.getElementById('security').innerHTML = security[0].content;
    }
}
