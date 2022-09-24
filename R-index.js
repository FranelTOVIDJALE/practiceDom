
                   let idIncre = 0;
                       
                       const getusername = document.getElementById('userN');
                        if(getusername){

                        getusername.addEventListener('change', function(event) { 
                            let resultat = getusername.value;
                            console.log(resultat);
                        
                        });
                        }
                       
                        const getcontent = document.getElementById('textarea');
                        if(getcontent){
                        getcontent.addEventListener('change', function(event) { 
                            let resultat1 = getcontent.value;
                            console.log(resultat1);
                        
                        });
                        }
                        const validebtn = document.getElementById('envoyer');
                        
                        if(validebtn){
                        validebtn.addEventListener('click', function(event) { 
                            event.preventDefault();
                        
                //alert('welcome');
                
                function contentBlog(title,content,id){
                    console.log('what');

                    /*creation des blocs*/
                    
                const elt = document.createElement('div');
               
                /*******************id auto incrementation***********/
                elt.id = idIncre;

                /*****************************************************/
                
                elt.classList.add('container');

                const eltH1 = document.createElement('h1');
                eltH1.setAttribute('id','title');

                const eltp = document.createElement('p');
                eltp.classList.add('content');

                const eltp1 = document.createElement('p');
                eltp1.classList.add('delete');
                

                const eltp2 = document.createElement('p');
                eltp2.classList.add('centrage');

                const eltinput = document.createElement('input');
                

                const eltI = document.createElement('i');
                 /************* delete blog ****************/
                 ;
                 eltI.addEventListener('click', function(event){

                 alert('Etes vous sur de vouloir supprimer ?');
                 elt.remove();
                 });

                 /******************************/
                eltp1.innerHTML='Delete';
                eltI.classList.add('fa');
                eltI.classList.add('fa-trash');
                eltI.setAttribute('id','icon');
                

                elt.appendChild(eltH1);
                elt.appendChild(eltp);

                elt.appendChild(eltp2);
                eltp2.appendChild(eltinput);
                eltinput.setAttribute('type',"checkbox");
                

                elt.appendChild(eltp1);
                eltp1.appendChild(eltI);
                
                const getusername = document.getElementById('userN');
                title = getusername.value;

                const getcontent = document.getElementById('textarea');
                content = getcontent.value;
                /************ status cheked or not **************/
                    var i = 1;
                eltinput.addEventListener('click', function(ev) { 
                    i += 1;
                    if(i%2 == 0 ){
                        elt.setAttribute('style','opacity:0.3');
                    }else {
                        elt.setAttribute('style','opacity:1');
                    }
                });
                

                /************ vérification de champs vide **************/
                
                if(title === '' || content ===''){
                    
                    alert('veillez remplir tous les champs')
                }else{
                idIncre++;
                eltH1.innerHTML=title +' '+ 'n°' + idIncre ;
                eltp.innerHTML=content;
         
                console.log(elt);
                return elt;
                }

                }
                let resul = contentBlog();

                let lass = document.getElementsByTagName('body');

                lass[0].appendChild(resul); 
                    
                        })
                        };

                    