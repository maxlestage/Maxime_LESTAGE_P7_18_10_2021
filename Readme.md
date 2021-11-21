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
DBPASSWORD=azerty           #Remplacer "azety par votre mot de passe" mysql
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
```

La configuration du fichier `.env` terminé, vous pouvez à présent passer à la suite, nous allons voir comment installer le frontend ensemble.

### Initialiser le frontend

Ouvrez le frontend avec une nouvelle fenêtre `$ cd frontend`

Le frontend a été installé à l'aide de `yarn`, ainsi je vous recommande pour éviter toutes erreurs de l'installer vous aussi à l'aide de cette commande : `$ npm install --global yarn`

Une fois `yarn` installé, vous allez pouvoir éxécuter la commande `$ yarn add`

Parfait vous avez installé toutes les dependances nécessaire pour faire touner votre application frontend, à présent vous pouvez la tester à l'aide de la commande : `$ yarn start`

Bon test ! 😉
