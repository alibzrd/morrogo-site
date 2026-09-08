# MorroGo — Website

Site statique simple : `index.html` + `styles.css` + `script.js` + `assets/`.
Aucune dépendance, aucun build — s'ouvre et se déploie tel quel.

## Mettre en ligne (GitHub + Vercel)

### 1. Avec Claude Code (le plus simple)
Ouvrez ce dossier dans Claude Code et dites-lui :
> "Initialise un repo git, crée un dépôt GitHub `morrogo-site` et pousse ce projet."

Claude Code peut faire les étapes 2 et 3 ci-dessous pour vous.

### 2. À la main — GitHub
```bash
cd morrogo-site
git init
git add .
git commit -m "Site MorroGo"
```
Créez un nouveau dépôt sur https://github.com/new (nom libre, ex. `morrogo-site`), puis :
```bash
git remote add origin https://github.com/VOTRE-COMPTE/morrogo-site.git
git branch -M main
git push -u origin main
```

### 3. À la main — Vercel
1. Allez sur https://vercel.com et connectez-vous avec votre compte GitHub.
2. Cliquez **Add New → Project**, sélectionnez le dépôt `morrogo-site`.
3. Aucune configuration nécessaire (site statique) — cliquez **Deploy**.
4. Vercel vous donne une URL du type `morrogo-site.vercel.app`, accessible immédiatement sur mobile comme sur desktop — plus de souci de fichier local.

Ensuite, à chaque modification poussée sur GitHub (`git push`), Vercel republie automatiquement le site.

## Structure
```
index.html
styles.css
script.js
assets/
  img/logo.png
  fonts/coolvetica.otf
  photos/ (hero, marrakech, casablanca, fes, chefchaouen, agafay)
```

## À faire avant mise en ligne définitive
- Remplacer le numéro WhatsApp placeholder si besoin (déjà réglé sur 06 69 93 18 71 → `wa.me/212669931871`)
- Remplacer les emails placeholder (`hello@morrogo.com`) si ce n'est pas l'adresse définitive
- Ajouter de vraies photos pour les 3 membres de l'équipe (actuellement des initiales)
