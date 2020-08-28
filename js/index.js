    var btnClasses;
    function initialize(){
        copyright();
        modal();
        modalTerms();
        modalPolicy()
        getJSONPolicy();
        openTabsClick();
        execClickTabs()
        alternateImg()
    }
    initialize()
    function copyright(){
        let copyright = document.querySelector('#copyright')
        copyright.innerHTML=` Copyright © ${new Date().getFullYear()} Devotee. Todos direitos reservados.`
    }
    function modalPolicy(){
        let modalId = document.querySelector("#my-modal-policy");
        let btn = "my-btn-policy";
        let close = "close-policy";
        modal(modalId, btn, close)
    }
    function modalTerms(){
        let modalId = document.querySelector("#my-modal-terms");
        let btn = "my-btn-terms";
        let close = "close-terms";
        modal(modalId, btn, close)
    }
    function modal(modalId, btn, close) {  
        document.addEventListener('click', function(e) {
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
    function execClickTabs(){
        let btnClass = [];
        document.addEventListener('click', function(e) {
            let targetClass = e.target.getAttribute('data-click');
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
        openTabsClick(btnClass)
    }
    
    function openTabsClick(btnClass){
        document.addEventListener('click', function (e) {     
            let targetClass = e.target.classList.contains(btnClass);
            if(targetClass){
                hideTabs()
                openTabs(e, btnClass)
                getJSONPolicy()
            }     
		});
    }
    function hideTabs(){
        let i, tabcontent
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
    }
    function alternateImg(){
        if(window.innerWidth >= '1250'){
           document.getElementById('phone').src = './assets/iPhone@2x.png'     
        }
      
        
    }
    function openTabs(evt, cityName) {  
        let i, tabcontent,tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        styleTextTabs(evt,'1')
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    function styleTextTabs(evt,analyze){
        if(analyze == '1'){
            let tabContent,tabs;
            let elementClicked = evt.path[1];
            tabContent = document.getElementsByClassName("content-terms");
            tabs = document.getElementsByClassName("tab");
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('modal-terms'); 
            }
            for (let e = 0; e < tabContent.length-6; e++) {
                if(elementClicked.classList.value == tabs[0].children[e].classList.value){
                    tabs[0].children[e].classList.add('modal-terms');
                }
             
            }
        }
        
    }
    function getJSONPolicy(){
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