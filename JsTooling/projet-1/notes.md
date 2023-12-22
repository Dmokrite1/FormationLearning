# Notes

forme longue et forme courte

--no-verify
-nv

# Volta

volta install node
volta install typescript

# Volta special version

volta pin node@20   <======== se cale ou install la version 20, 
18 pour version 18 etc etc

# package managers

## npm
npm : Bien que npm ait considérablement amélioré ses performances au fil du temps, il peut être légèrement plus lent que Yarn et pnpm dans certaines situations.

C'est le gestionnaire de paquets par défaut pour Node.js.
Il est largement utilisé et a une grande communauté.
Il est généralement stable et offre de nombreuses fonctionnalités.

## yarn
Yarn : Yarn est souvent considéré comme plus rapide que npm en raison de ses optimisations de performances et de sa gestion améliorée des dépendances.

Développé par Facebook, Yarn a été créé pour résoudre certains problèmes de performance avec npm.
Il introduit des fonctionnalités telles que la gestion des dépendances via un fichier "yarn.lock" pour garantir une reproductibilité des installations.
Il est généralement plus rapide que npm.

yarn install
yarn add image-js
@types/mime.types ou /tout autre nom de package

## pnpm
pnpm : En raison de son approche de partage de packages et de son utilisation efficace de l'espace disque, pnpm peut être le plus rapide dans certaines situations.

Conçu pour résoudre le problème de l'espace disque consommé par les dépendances multiples dans différents projets.
Il partage les packages entre les projets, économisant ainsi de l'espace disque.
Il peut être plus rapide dans certaines situations grâce à son approche de partage de packages.

## il en existe plein d'autres

Bower : Historiquement utilisé pour gérer les dépendances front-end, Bower a perdu en popularité ces dernières années, et npm ou Yarn sont souvent préférés pour les projets modernes.

Composer : Utilisé pour la gestion des dépendances dans les projets PHP, Composer est largement utilisé dans la communauté PHP.

NuGet : Un gestionnaire de paquets pour les projets .NET, utilisé principalement avec les langages tels que C#.

Cargo : Spécifique à Rust, Cargo est le gestionnaire de paquets et de construction officiel pour le langage Rust.

Gradle : Bien que souvent utilisé comme un système de construction, Gradle peut également être utilisé comme un gestionnaire de dépendances pour les projets Java.

CocoaPods : Spécifique à l'écosystème iOS/macOS, CocoaPods est utilisé pour gérer les dépendances dans les projets Swift et Objective-C.

## bun

Très rapide, Run time on remplace alors node par bun

## version des packages

pas de symbole devant la version, ex: 1.4.0 = strictement cette version

un tilde devant la version, ex: ~1.4.0 = toutes les versions patch

le ^ toutes les versions mineures, ex: ^1.4.0

-* devant la version = toutes les versions majeures, ex: -*1.4.0 (astérisque)

Bien sûr, je serai ravi de t'expliquer la numérotation des versions de packages, notamment en utilisant le format "majeure.mineure.patch". Chaque segment de ce format représente une signification spécifique :

Majeure (major) : L'augmentation du numéro majeur indique des changements majeurs et souvent incompatibles avec les versions précédentes. Cela signifie généralement des ajouts de fonctionnalités importantes ou des modifications structurelles majeures.

Mineure (minor) : L'augmentation du numéro mineur indique l'ajout de nouvelles fonctionnalités ou améliorations qui sont rétrocompatibles avec les versions précédentes. Il peut également inclure des corrections de bugs.

Patch (correctif ou révision) : L'augmentation du numéro de correctif indique la correction de bugs ou de problèmes mineurs sans ajouter de nouvelles fonctionnalités majeures. Ces mises à jour sont généralement rétrocompatibles.

Pour illustrer cela avec un exemple, considérons la version "1.4.0" :

1 est la version majeure, ce qui signifie qu'il y a eu des changements importants, peut-être des ajouts de fonctionnalités majeures ou des modifications structurelles.
4 est la version mineure, ce qui indique qu'il y a eu des ajouts de fonctionnalités mineures ou des améliorations rétrocompatibles.
0 est le numéro de correctif, suggérant qu'il n'y a pas eu de corrections de bugs ou de problèmes mineurs depuis la dernière version.