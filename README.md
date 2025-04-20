# Fingerprint - Collecte d'Informations Utilisateur

## Description
Ce projet est une application web qui collecte et analyse les informations des utilisateurs de manière sécurisée. Il s'agit d'un outil de fingerprinting qui permet de recueillir des données sur les visiteurs de votre site web, tout en respectant les bonnes pratiques de sécurité et de confidentialité.

## Fonctionnalités
- Collecte d'informations sur le navigateur et le système
- Détection des capacités média
- Géolocalisation (avec consentement utilisateur)
- Informations réseau
- Interface utilisateur simple et responsive
- Sécurisation HTTPS
- Redirection automatique HTTP vers HTTPS

## Prérequis
- Node.js (version 12 ou supérieure)
- npm (gestionnaire de paquets Node.js)
- Certificats SSL valides (pour HTTPS)

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd fingerprint
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez vos certificats SSL :
   - Placez vos certificats SSL dans le répertoire approprié
   - Mettez à jour les chemins dans `server.js`

## Configuration
1. Modifiez le fichier `server.js` pour pointer vers vos certificats SSL :
```javascript
const options = {
    key: fs.readFileSync('chemin/vers/votre/certificat.key'),
    cert: fs.readFileSync('chemin/vers/votre/certificat.crt')
};
```

2. Personnalisez le contenu de `index.html` selon vos besoins

## Démarrage
Pour démarrer le serveur :
```bash
node server.js
```

Pour une utilisation en production, il est recommandé d'utiliser PM2 :
```bash
pm2 start server.js
```

## Structure du Projet
- `server.js` : Serveur Node.js avec support HTTPS
- `index.html` : Interface utilisateur et logique de collecte de données
- `package.json` : Dépendances et configuration du projet

## Sécurité
- Communication sécurisée via HTTPS
- Redirection automatique HTTP vers HTTPS
- Collecte de données avec consentement utilisateur
- Pas de stockage permanent des données sensibles

## Données Collectées
- User Agent
- Langue du navigateur
- Plateforme
- Résolution d'écran
- Informations réseau
- Capacités média
- Position géographique (avec consentement)
- Adresse IP

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence
Ce projet est sous licence ISC. Voir le fichier `LICENSE` pour plus de détails.

## Support
Pour toute question ou problème, veuillez ouvrir une issue sur le dépôt GitHub.
