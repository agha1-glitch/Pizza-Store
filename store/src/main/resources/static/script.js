

let warenkorb = JSON.parse(sessionStorage.getItem("warenkorb")) || [];






function kundezeigen() {
    console.log(k);

// Entfernung vom Express-Backend abrufen
     fetch("/KundeAdresse", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(k)
      })
          .then(res => {
              if (!res.ok) throw new Error("Serverfehler: " + res.status);
              return res.text(); // oder res.json(), wenn dein Backend JSON zurückgibt
          })
          .then(data => {

              console.log("Antwort vom Server:", data);
              const p = document.getElementById("Entfernung");
              p.textContent = "DIE ENTFERNUNG BETRÄGT : " + data;

              p.style.background = "linear-gradient(135deg, #4e9af1, #6cd4ff)";
              p.style.color = "white";
              p.style.padding = "10px 20px";
              p.style.borderRadius = "12px";
              p.style.fontSize = "1.2rem";
              p.style.fontWeight = "bold";
              p.style.textAlign = "center";
              p.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              p.style.display = "inline-block";
              p.style.marginTop = "10px";
          })
          .catch(err => {
              console.error("Fehler beim Abrufen:", err);
          });

}


    function nudel(name , sum , bild , extras,extras1 ){
        this.name=name;
        this.grosse="";
        this.extras=extras;
        this.extras1=extras1;
        this.pizzasauce="";
        this.sauce="";
        this.bild=bild;
        this.preis=sum/100;
        this.type="nudel";
    }

    function salat(name , preis , bild , extras , extras1 , sauce  ){
        this.name=name;
        this.preis=preis/100;
        this.bild=bild;
        this.extras=extras;
        this.extras1=extras1;
        this.sauce=sauce;
        this.type="salat";


    }
//-------------------------------------------------------------------------------------------------------

    function item(type, name , grosse , extras, extras1 , pizzasauce , sauce , sum, bild){
        this.type= type;
        this.name=name;
        this.grosse=grosse;
        this.extras=extras;
        this.extras1=extras1;
        this.pizzasauce=pizzasauce;
        this.sauce=sauce;
        this.bild=bild;
        this.preis=sum/100;

    }



//---------------------------------------------------------------------------------------------------------------






function hinzufugen(event, name, preis, bild){
    event.preventDefault();

    let vorspeis = new item("vorspeise", name, "normal", ["keine"], ["keine"], "keine", ["keine"], preis, bild);
    console.log(vorspeis);

    // In Warenkorb hinzufügen
    warenkorb.push(vorspeis);

    saveCart();
    renderCart();
}



function renderCart() {
        const articlesSection = document.getElementById("Articles");
        if (!articlesSection) return;

        articlesSection.innerHTML = ""; // leeren




        warenkorb.forEach((item, index) => {
            if (!item) return;

            // Artikel-Container
            const article = document.createElement("article");
            article.style.border = "1px solid #ccc";
            article.style.padding = "12px";
            article.style.marginBottom = "15px";
            article.style.display = "flex";
            article.style.alignItems = "flex-start";
            article.style.borderRadius = "8px";
            article.style.background = "#f9f9f9";

            // Bild
            const img = document.createElement("img");
            img.src = item.bild || "placeholder.png"; // Falls kein Bild vorhanden
            img.alt = item.name;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.objectFit = "cover";
            img.style.marginRight = "15px";
            img.style.borderRadius = "6px";

            // Inhalt
            const content = document.createElement("div");

            const title = document.createElement("h3");
            title.textContent = item.name;

            const details = document.createElement("p");
            details.textContent = `Größe: ${item.grosse || "-"} | Sauce: ${item.pizzasauce || "-"} | Preis: ${item.preis?.toFixed(2) || 0} €`;
            const extrasVeggie = document.createElement("p");
            extrasVeggie.textContent = "Veggie-Extras: " + (item.extras?.length ? item.extras.join(", ") : "keine");

            const extrasMeat = document.createElement("p");
            extrasMeat.textContent = "Meat-Extras: " + (item.extras1?.length ? item.extras1.join(", ") : "keine");

            const sauces = document.createElement("p");
            sauces.textContent = "Weitere Saucen: " + (item.sauce || "keine");

            // Entfernen-Button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌ Entfernen";
            removeBtn.style.marginTop = "10px";
            removeBtn.onclick = () => {
                warenkorb.splice(index, 1);
                saveCart();
                renderCart();
            };

            // Alles zusammenbauen
            content.appendChild(title);
            content.appendChild(details);
            content.appendChild(extrasVeggie);
            content.appendChild(extrasMeat);
            content.appendChild(sauces);
            content.appendChild(removeBtn);

            article.appendChild(img);
            article.appendChild(content);

            articlesSection.appendChild(article);
        });
    }
let k = loadKunde();

window.addEventListener("DOMContentLoaded", () => {
    console.log("Aktueller Kunde:", k);
    renderCart();
    kundezeigen();
});
function saveCart() {
    sessionStorage.setItem("warenkorb", JSON.stringify(warenkorb));
    sessionStorage.setItem("kunde", JSON.stringify(k));
}

function loadKunde() {
    const data = sessionStorage.getItem("kunde");
    return data ? JSON.parse(data) : null;
}




    function kunde(name , tel , adresse , bestellung){
        this.name=name;
        this.tel=tel;
        this.adresse=adresse;
        this.bestellung=bestellung;

    }

    const bestellbutton = document.getElementById("bestellbutton");

    bestellbutton.addEventListener("click", function () {
        // Kunde erstellen
        kunden = loadKunde();
        const order={
            kunde:kunden,
            items:warenkorb

        }
        console.log(order.items)



        // Bestellung ans Express Backend senden
        fetch("/api/bestellung", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        })
            .then(res => res.text())
            .then(data => console.log(data));

    });
