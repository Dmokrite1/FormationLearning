import { readdir } from "fs/promises";

/*
* ./ répertoire courant, ../ répertoire parent
readdir('./', {
    withFileTypes: true
}).then(result => {
    console.log(result);
})
*/

async function displayFolder() {
    try {
        const result = await readdir('./', { withFileTypes: true });

        const folders = result.filter(item => item.isDirectory());

        folders.forEach(folder => {
            console.log(folder.name);
        });
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }
}

displayFolder();
