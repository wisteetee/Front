# Comment lancer le projet ?

Etape 1 : cloner le projet

git clone https://github.com/wisteetee/Front

Etape 2 : lancer docker, attendre la notification "docker is running"

Etape 3 : lancer PHPStorm et se situer sur le dossier ou il y a le projet et le makefile dans la console de l'IDE
cd Projet_Avengers

Etape 4 : taper la commande make bash, normalement il y a ce genre de truc qui apparaît dans la console :

C:\Users\Quentin\PhpstormProjects\untitled>make bash
docker run --rm -it \
                -v C:/Users/Quentin/PhpstormProjects/untitled:/app \
                 -p 3001:3000 \
                 toroia/nodejs \
                 bash
bash-5.0#

Etape 5 : se placer dans le projet : cd HDV_Online_FrontV2

Etape 6 : taper la commande : yarn dev

Attendre que le projet compile, il devrait apparaître :

✔ Client
  Compiled successfully in 4.55s

✔ Server
  Compiled successfully in 4.32s
  
Etape 7 : localhost:3001 pour accéder au site
