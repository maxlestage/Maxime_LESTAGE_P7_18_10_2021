# Utiliser Groupomania localement

Pour utiliser Groupomania localement, vous devez commencer par faire un :  
`$ git clone git@github.com:maxlestage/Maxime_LESTAGE_P7_18_10_2021.git`

Une fois le repo recupéré, rendez-vous dans dedans à l'aide de la commande :  
`$ cd Maxime_LESTAGE_P7_18_10_2021`

---

## Installer le projet

### Initialiser le backend

Faites un `$ cd backend` puis `$ npm install`, cela permet de récuperer toutes données nécessaires au bon fonctionnement de l'application.

Une fois l’installation complète, vous allez pouvoir installer Mysql, Mysql et le système de base de donnés qui va nous permettre de gérer nos données.

Pour installer Mysql sur votre machine, je vous partage ce tutoriel : <https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql/7152681-installez-le-sgbd-mysql>

Mysql installé, nous allons configuré ensemble notre fichier `.env`.

Depuis votre éditeur ou à l'aide de nano, éditer votre votre fichier d'environnement comme suit :

```env
#Le mot de passe de la session à été généré à l’aide de pwgen, mais vous pouvez le définir vous mêmes, si vous le souhaitez
SECRET_SESSION=Wee3ohwooxohf3IeC9Lah9vee

# config db :
DBHOST=localhost
DBUSER=root                 #Renommez si vous avez configuré un utilisateur
DBPASSWORD=azerty           #Remplacer "azerty" par votre mot de passe mysql
DB=Groupomania              #Par défaut la base de donnée sera nommée "Groupomania"
DIALECT=mysql

        #Par défaut un admin aura les propriétées suivantes, vous pouvez remplacer ces valeurs si vous le souhaitez.

# config admin :
LASTNAME=admin
FIRSTNAME=admin
MAIL=admin@groupomania.admin.com
PASSWORD=admin007
BIRTHDAY=19840101
PROFILEPICTURE=admin.png
ISENABLE=0
```

La configuration du fichier `.env` terminé, vous pouvez à présent passer à la suite, nous allons voir comment installer le frontend ensemble.

### Initialiser le frontend

Ouvrez le frontend avec une nouvelle fenêtre `$ cd frontend`

Le frontend a été installé à l'aide de `yarn`, ainsi je vous recommande pour éviter toutes erreurs de l'installer vous aussi à l'aide de cette commande : `$ npm install --global yarn`

Une fois `yarn` installé, vous allez pouvoir éxécuter la commande `$ yarn install` et testé `$ yarn add` si besoin.

Parfait vous avez installé toutes les dependances nécessaire pour faire touner votre application frontend, à présent vous pouvez la tester à l'aide de la commande : `$ yarn start`

Bon test ! 😉

## Remerciement

### Je souhaite remercier plusieurs personnes qui m’ont accompagné pendant mon parcours de développement web :

Christophe Gianorsi, qui était mon premier mentor,tu m'as donnée une organisation dans mon travail et le sens de la gestion des ressources.

Babacar Sylla, qui m’a beaucoup aidé lorsque que j’ai rencontré des problèmes d’apprentissage avec le langage Ruby et le framework Ruby On Rails.

Jérémy Debelleix, qui m’a accompagné pour les dernières semaines de formation, tu as pu être disponible pour m’aider et tu m’as remonté le morale plus d’une fois.

Thomas Gaudin "Nymous", rencontré sur le serveur de Grafikart, merci infiniment pour ton aide, pour ces « petits » grands cours du soir, pour ton partage de connaissance et ta disponibilité régulière pour m'aider dans mon apprentissage.

"Nuker", rencontré sur le serveur de Grafikart également, merci pour ton aide régulière sur le langage Ruby au début de ma formation.

"Aœrnis", ma première rencontre sur Discord, merci infiniment pour tout le temps que tu m’as consacré en début de parcours lors des pauses du midi, tu as toujours été de bons conseils et disponible pour m’accompagner dans le métier de développeurs web.

Maman, pour avoir supporté mes sauts d’humeurs quand rien ne fonctionnait comme il le fallait, et aussi quand le moral était au plus bas.
