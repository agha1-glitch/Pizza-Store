function addExtras(event) {
  event.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const pizzaName = params.get("pizza");
 const selectedGrosse = document.querySelector('input[name="grosse"]:checked')?.value || "";

  const form = event.target;
  const extras = Array.from(
    form.querySelectorAll('input[name="Veggie-extras"]:checked')
  ).map(cb => cb.value);
  const extras1 = Array.from(
    form.querySelectorAll('input[name="Meat-extras"]:checked')
  ).map(cb => cb.value);
  
  // Werte aus den Number-Inputs auslesen
  const knoblauchAnzahl = parseInt(form.knoblauch.value) || 0;
  const scharfAnzahl = parseInt(form.scharf.value) || 0;

  console.log("Knoblauchsauce:", knoblauchAnzahl);
  console.log("Scharfe Sauce:", scharfAnzahl);

  // Optional: Daten in Warenkorb-Objekt speichern
  const sauces = [];
  for(let i=0; i<knoblauchAnzahl; i++) sauces.push("Knoblauchsauce");
  for(let i=0; i<scharfAnzahl; i++) sauces.push("Scharfe Sauce");

  console.log("Alle gewählten Saucen:", sauces);


  let anzahlsaucen=knoblauchAnzahl+scharfAnzahl;
  let sum =0;
  if(selectedGrosse=="Mittel"){
  extras.forEach(a=>{if(a) sum+=60});
  extras1.forEach(a=>{if(a) sum+=120});
  if(anzahlsaucen>2){
    for (let index = 2; index < anzahlsaucen; index++) {
        sum += 50;
        
    }
  }
  
  }
  if(selectedGrosse=="Klein"){
  extras.forEach(a=>{if(a) sum+=40});
  extras1.forEach(a=>{if(a) sum+=80});
    for (let index = 2; index < anzahlsaucen; index++) {
        sum += 50;
        
    }
  }
  if(selectedGrosse=="Gross"){
  extras.forEach(a=>{if(a) sum+=120});
  extras1.forEach(a=>{if(a) sum+=240});
    for (let index = 3; index < anzahlsaucen; index++) {
        sum += 50;
        
    }
  }
  
  const pizzasauce = form.sauce.value;

  let preis
  let m;
  if(pizzaName==="Margherita"){
      if(selectedGrosse=="Klein"){
          preis= (500 +sum)/100;
      }else
      if(selectedGrosse=="Mittel"){
          preis=(700 + sum)/100;
      }else
      if(selectedGrosse=="Gross"){
          preis=(1100 +sum)/100;
      }
     m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis , "./public/mss_pizza-margherita-klein-o-17cm_qus.png");
  }else
    if(pizzaName==="Salami"){
        if(selectedGrosse=="Klein"){
            preis=(580 +sum)/100;
        }else
        if(selectedGrosse=="Mittel"){
            preis=(820 + sum)/100;
        }else
        if(selectedGrosse=="Gross"){
            preis=(1340 +sum)/100;
        }
    m = new item("pizza", pizzaName,selectedGrosse, extras, extras1, pizzasauce, sauces , preis , "./public/mss_pizza-salami-klein-o-17cm_pdj.png");

    }else
        if(pizzaName==="Alaska"){
            if(selectedGrosse=="Klein"){
                preis=(620 +sum)/100;
            }else
            if(selectedGrosse=="Mittel"){
                preis=(880 + sum)/100;
            }else
            if(selectedGrosse=="Gross"){
                preis=(1460 +sum)/100;
            }
        m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis , "./public/mss_pizza-alaska-klein-o-17cm_uh6.png");
  
        }else
            if(pizzaName=="Bosten"){
                if(selectedGrosse=="Klein"){
                    preis=(700 +sum)/100;
                }else
                if(selectedGrosse=="Mittel"){
                    preis=(1000 + sum)/100;
                }else
                if(selectedGrosse=="Gross"){
                    preis=(1700 +sum)/100;
                }
                m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-boston-klein-o-17cm_7zh.png");

            }else
            if(pizzaName=="Caribean"){
                if(selectedGrosse=="Klein"){
                    preis=(660 +sum)/100;
                }else
                if(selectedGrosse=="Mittel"){
                    preis=(940 + sum)/100;
                }else
                if(selectedGrosse=="Gross"){
                    preis=(1580 +sum)/100;
                }
                m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis , "./public/mss_pizza-caribbean-klein-o-17cm_pvv.png");

                }else
                    if(pizzaName=="Veggie"){
                        if(selectedGrosse=="Klein"){
                            preis=(580 +sum)/100;
                        }else
                        if(selectedGrosse=="Mittel"){
                            preis=(820 + sum)/100;
                        }else
                        if(selectedGrosse=="Gross"){
                            preis=(1340 +sum)/100;
                        }
                    m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis , "./public/mss_pizza-veggie-klein-o-17cm_myb.png");

                    }else
                        if(pizzaName=="Champignon"){
                            if(selectedGrosse=="Klein"){
                                preis=(540 +sum)/100 ;
                            }else
                            if(selectedGrosse=="Mittel"){
                                preis=(760 + sum)/100;
                            }else
                            if(selectedGrosse=="Gross"){
                                preis=(1200 +sum)/100;
                            }
                        m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis, "./public/mss_pizza-champignon-klein-o-17cm_kmw.png");

                        }else
                            if(pizzaName=="Farmer"){
                                if(selectedGrosse=="Klein"){
                                    preis=(700 +sum)/100;
                                }else
                                if(selectedGrosse=="Mittel"){
                                    preis=(10000 + sum)/100;
                                }else
                                if(selectedGrosse=="Gross"){
                                    preis=(17000 +sum)/100;
                                }
                            m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces ,preis , "./public/mss_pizza-farmer-klein-o-17cm_dab.png");

                            }else
                                if(pizzaName=="Hawai"){
                                    if(selectedGrosse=="Klein"){
                                        preis=(620 +sum)/100;
                                    }else
                                    if(selectedGrosse=="Mittel"){
                                        preis=(880 + sum)/100;
                                    }else
                                    if(selectedGrosse=="Gross"){
                                        preis=(1460 +sum)/100;
                                    }
                                m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces ,preis ,"./public/mss_pizza-hawaii-klein-o-17cm_j8u.png");

                                }else
                                    if(pizzaName=="Hot Chili"){
                                        if(selectedGrosse=="Klein"){
                                            preis=(700 +sum)/100;
                                        }else
                                        if(selectedGrosse=="Mittel"){
                                            preis=(1000 + sum)/100;
                                        }else
                                        if(selectedGrosse=="Gross"){
                                            preis=(1700 +sum)/100;
                                        }
                                    m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-hot-chili-scharf-klein-o-17cm_mgv.png" );

                                    }else
                                        if(pizzaName=="Kentacky"){
                                            if(selectedGrosse=="Klein"){
                                              preis=(740 +sum)/100;
                                            }else
                                            if(selectedGrosse=="Mittel"){
                                              preis=(1600 + sum)/100;
                                            }else
                                            if(selectedGrosse=="Gross"){
                                              preis=(1820 +sum)/100;
                                            }
                                        m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-kentucky-klein-o-17cm_4qo.png" );

                                        }else
                                            if(pizzaName=="Miami"){
                                                if(selectedGrosse=="Klein"){
                                                    preis=(700 +sum)/100;
                                                }else
                                                if(selectedGrosse=="Mittel"){
                                                    preis=(1000 + sum)/100;
                                                }else
                                                if(selectedGrosse=="Gross"){
                                                    preis=(1700 +sum)/100;
                                                }
                                            m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-miami-klein-o-17cm_hld.png" );

                                            }else
                                                if(pizzaName=="Nevada"){
                                                    if(selectedGrosse=="Klein"){
                                                        preis=(660 +sum)/100;
                                                    }else
                                                    if(selectedGrosse=="Mittel"){
                                                        preis=(940 + sum)/100;
                                                    }else
                                                    if(selectedGrosse=="Gross"){
                                                        preis=(1580 +sum)/100;
                                                    }
                                                m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-nevada-klein-o-17cm_s3t.png" );

                                                }else
                                                    if(pizzaName=="New York"){
                                                        if(selectedGrosse=="Klein"){
                                                            preis=(580 +sum)/100;
                                                        }else
                                                        if(selectedGrosse=="Mittel"){
                                                            preis=(820 + sum)/100;
                                                        }else
                                                        if(selectedGrosse=="Gross"){
                                                            preis=(1340 +sum)/100;
                                                        }
                                                    m = new item("pizza", pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-new-york-klein-o-17cm_2or.png" );

                                                    }else
                                                        if(pizzaName=="Pan Spizial"){
                                                            if(selectedGrosse=="Klein"){
                                                                preis=(700 +sum)/100;
                                                            }else
                                                            if(selectedGrosse=="Mittel"){
                                                                preis=(1000 + sum)/100;
                                                            }else
                                                            if(selectedGrosse=="Gross"){
                                                                preis=(1700 +sum)/100;
                                                            }
                                                        m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-pan-spezial-klein-o-17cm_lgp.png" );

                                                        }else
                                                            if(pizzaName=="Pastirma" ||pizzaName=="Hänchen"  ){
                                                                if(selectedGrosse=="Klein"){
                                                                    preis=(580 +sum)/100;
                                                                }else
                                                                if(selectedGrosse=="Mittel"){
                                                                    preis=(820 + sum)/100;
                                                                }else
                                                                if(selectedGrosse=="Gross"){
                                                                    preis=(1340 +sum)/100;
                                                                }
                                                            m = new item("pizza" , pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-pastirma-klein-o-17cm_spj.png"  );

                                                            }else
                                                                if(pizzaName=="Rodeo"){
                                                                    if(selectedGrosse=="Klein"){
                                                                        preis=(700 +sum)/100;
                                                                    }else
                                                                    if(selectedGrosse=="Mittel"){
                                                                        preis=(1000 + sum)/100;
                                                                    }else
                                                                    if(selectedGrosse=="Gross"){
                                                                        preis=(1700 +sum)/100;
                                                                    }
                                                                m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-r-klein-o-17cm_pyu.png" );

                                                                }else
                                                                    if(pizzaName=="Sucuk"){
                                                                        if(selectedGrosse=="Klein"){
                                                                            preis=(580 +sum)/100;
                                                                        }else
                                                                        if(selectedGrosse=="Mittel"){
                                                                            preis=(820 + sum)/100;
                                                                        }else
                                                                        if(selectedGrosse=="Gross"){
                                                                            preis=(1340 +sum)/100;
                                                                        }
                                                                    m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-sucuk-klein-o-17cm_ml0.png" );

                                                                    }else
                                                                    if(pizzaName=="Texas"){
                                                                        if(selectedGrosse=="Klein"){
                                                                            preis=(740 +sum)/100;
                                                                        }else
                                                                        if(selectedGrosse=="Mittel"){
                                                                            preis=(1060 + sum)/100;
                                                                        }else
                                                                        if(selectedGrosse=="Gross"){
                                                                            preis=(1820 +sum)/100;
                                                                        }

                                                                    m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-texas-klein-o-17cm_quz.png" );

                                                                    }else
                                                                    if(pizzaName=="Thunfisch"){
                                                                        if(selectedGrosse=="Klein"){
                                                                            preis=(580 +sum)/100;
                                                                        }else
                                                                        if(selectedGrosse=="Mittel"){
                                                                            preis=(820 + sum)/100;
                                                                        }else
                                                                        if(selectedGrosse=="Gross"){
                                                                            preis=(1340 +sum)/100;
                                                                        }
                                                                    m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-thunfisch-klein-o-17cm_e8m.png" );

                                                                    }else
                                                                        if(pizzaName=="Western"){
                                                                            if(selectedGrosse=="Klein"){
                                                                                preis=(740 +sum)/100;
                                                                            }else
                                                                            if(selectedGrosse=="Mittel"){
                                                                                preis=(1060 + sum)/100;
                                                                            }else
                                                                            if(selectedGrosse=="Gross"){
                                                                                preis=(1820 +sum)/100;
                                                                            }
                                                                        m = new item("pizza",pizzaName, selectedGrosse, extras, extras1, pizzasauce, sauces , preis ,"./public/mss_pizza-western-klein-o-17cm_pud.png" );

                                                                        }
                                        
                    
            
  warenkorb.push(m);

  saveCart(); // 🔹 jetzt speichern, bevor redirect
  window.location.href = "index.html";
}

function addExtrasN(event){
     event.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const nudelName = params.get("pizza");
  const form = event.target;
  const extras = Array.from(
    form.querySelectorAll('input[name="Veggie-extras"]:checked')
  ).map(cb => cb.value);
  const extras1 = Array.from(
    form.querySelectorAll('input[name="Meat-extras"]:checked')
  ).map(cb => cb.value);
  
  let sum =0;
  
  extras.forEach(a=>{if(a) sum+=60});
  extras1.forEach(a=>{if(a) sum+=120});
  let m
  if(nudelName=="Broccoli chicken"){
  sum +=780;
   m = new item("nudel", nudelName , "",  extras ,extras1, "",[],  sum , "./public/mss_tagliatelle-broccoli-chicken_ypl.png" );
  }else
    if(nudelName=="Tortellini-tuna"){
        sum +=720;

        m = new item("nudel",nudelName ,"",   extras ,extras1,"",[],sum,"./public/mss_tortellini-tuna_ywk.png" );
        }else
            if(nudelName=="penne-veggie"){
            sum +=780;
            m = new item("nudel",nudelName ,"", extras ,extras1 ,"",[],sum , "./public/mss_penne-veggie_v2s.png" );
            }else
                if(nudelName=="Cherry-bacon"){
                sum +=900;
                m = new item("nudel",nudelName ,"", extras ,extras1,"", [], sum ,"./public/mss_tagliatelle-cherry-bacon_f1j.png" );
                }

                    
            
  warenkorb.push(m);

  saveCart(); // 🔹 jetzt speichern, bevor redirect
    console.log(k)
  window.location.href = "index.html";

}

function addExtrasS(event){
     event.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const nudelName = params.get("pizza");
  const form = event.target;
  const extras = Array.from(
    form.querySelectorAll('input[name="Veggie-extras"]:checked')
  ).map(cb => cb.value);
  const extras1 = Array.from(
    form.querySelectorAll('input[name="Meat-extras"]:checked')
  ).map(cb => cb.value);
    const pizzasauce = form.Dressing.value;


  let sum =0;
  
  extras.forEach(a=>{if(a) sum+=60});
  extras1.forEach(a=>{if(a) sum+=120});
  let m
  if(nudelName=="Gemischter salat"){
  sum +=600;
   m = new item("salat",nudelName ,"", extras , extras1, pizzasauce, [],sum ,"./public/mss_gemischter-salat_ayp.png" );
  }else
    if(nudelName=="chicken-salat"){
        sum +=700;
        m = new item("salat",nudelName ,"",extras , extras1,pizzasauce,[] ,  sum , "./public/mss_chicken-salat_ozr.png" );
        }else
            if(nudelName=="Thunfisch-salat"){
            sum +=700;
                m = new item("salat",nudelName ,"",extras , extras1,pizzasauce,[] ,  sum , "./public/mss_chicken-salat_ozr.png" );
            }else
                if(nudelName=="Griechischer-salat"){
                sum +=700;
                    m = new item("salat",nudelName ,"",extras , extras1,pizzasauce,[] ,  sum , "./public/mss_chicken-salat_ozr.png" );
                }

                    
            
  warenkorb.push(m);

  saveCart(); // 🔹 jetzt speichern, bevor redirect

  window.location.href = "index.html";

}
