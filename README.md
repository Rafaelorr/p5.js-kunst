# hoe draai je de server

## via python

### instaleer python

Als je python al geïnstaleerd heb installeer dan flask.

- Op linux:
    - debian based distros:
  
        open de terminal
  
        En run `sudo apt update && sudo apt upgrade -y`om alle je packetten te updaten.
  
        Dan run `sudo apt install python3 && sudo apt install pip3` om python en pip te installeren.
  
    - fedora based distros:
  
        open de terminal
  
        En run `sudo dnf update && sudo dnf upgrade -y` om alle je packetten te updaten.
  
        Dan run `sudo dnf install python3 && sudo dnf install pip3`om python en pip te installeren.

- Op windows:
    Gaan naar python.org en download de juiste installer.

    Run de installer en je bent klaar.

### instaleer flask
Open de terminal in de folder met de server code.

Run `pip install -r requirements.txt` om flask te instaleren.

### run de server
Open de terminal in de folder met de server code.

Run `python3 app.py`om de web server te starten.
