
    function kunde(name, tel, adresse, bestellung) {
        this.name = name;
        this.tel = tel;
        this.adresse = adresse;
        this.bestellung = bestellung;
    }

    async function checkDistance(event) {
        event.preventDefault();

        const street = document.getElementById("street").value;
        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
        const r = document.getElementById("kunde-name").value;
        const t = document.getElementById("kunde-rufnummer").value;

        const fullAddress = `${street}, ${zip} ${city}`;
        const kunden = new kunde(r, t, fullAddress, null);


        fetch("http://localhost:8080/KundeAdresse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(kunden)
        })
            .then(res => {
                if (!res.ok) throw new Error("Serverfehler: " + res.status);
                return res.text(); // oder res.json() falls Backend JSON zurückgibt
            })
            .then(data => {
                console.log("Antwort vom Backend:", data);
                entfernung=data;

            })
            .catch(err => console.error("Fehler beim Senden:", err));


        // ✅ in sessionStorage speichern
        sessionStorage.setItem("kunde", JSON.stringify(kunden));

        // ✅ weiterleiten (Parameter sind optional – du brauchst sie nicht zwingend)
        window.location.href = "index.html";
    }
