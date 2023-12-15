/*
import { mkdir, rmdir, rename } from "fs/promises";

const sleep = (ms: number) => new Promise((res, rej) => setTimeout(res, ms));

async function main () {
    await mkdir("StorageTest");
    console.log("Dossier créé !");

    await sleep(2000);

    await rename("StorageTest", "Storage-Test");
    console.log("Dossier renommé !");
    
    await sleep(2000);

    await rename("Storage-Test", "../Storage-Test");
    console.log("Dossier déplacé !");

    await sleep(2000);

    await rmdir("../Storage-Test");
    console.log("Dossier supprimé");
}

main()
*/

/*
import { promises as fsPromises, existsSync} from "fs";
import { resolve } from 'path';
import { mkdir, appendFile, rmdir } from "fs/promises"

async function createLogDir(): Promise<void> {
   const currentDate = new Date();
   const year = currentDate.getFullYear().toString();
   const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
   const day = currentDate.getDate().toString().padStart(2, '0');

   const logDirectory = resolve(__dirname, 'logs', year, month, day);

   if(!existsSync(logDirectory)) {
    await mkdir(logDirectory, { recursive: true });
   }
}

async function writeLog(message: string): Promise<void> {
    await createLogDir();

    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    const logDirectory = resolve(__dirname, 'logs', year, month, day);
    const logFileName = resolve(logDirectory, `${currentDate.getHours()}.log`);

    await appendFile(logFileName, `${message}\n`, 'utf8');
}

async function clearLogsForToday(): Promise<void> {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const logDirectory = resolve(__dirname, 'logs', year, month, day);

    try {
        await rmdir(logDirectory, { recursive: true });
    } catch (error) {
        console.error(`Erreur lors de la suppression des logs`);
    }
}

export { writeLog, clearLogsForToday };
*/

/*
* Version formateur
*/
