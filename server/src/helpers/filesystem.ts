import fs from 'fs';
import path from 'path';
import { readMusicMetadata } from './metadata';

function getFilesRecursively(directory: string): string[] {
    let results: string[] = [];

    const items = fs.readdirSync(directory);
    for (let i = 0; i < items.length; i++) {
        const fullPath = path.join(directory, items[i]);
        const stat = fs.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(fullPath));
        } else {
            results.push(fullPath);
        }
    }

    return results;
}

const findFileInDirectory = (dir: string, fileName: string): string | null => {
    const files = fs.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
        const fullPath = path.join(dir, files[i]);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            const recursiveResult = findFileInDirectory(fullPath, fileName);
            if (recursiveResult) return recursiveResult;
        } else if (stats.isFile() && files[i] === fileName) {
            return fullPath;
        }
    }

    return null; // return null if the file was not found
};

function renameFileSync(oldPath: string, newPath: string): boolean {
    try {
        fs.renameSync(oldPath, newPath);
        return true
    } catch (error) {
        console.error(`Error while renaming file: ${error}`);
        return false;
    }
}

async function findFileWithMissingTag(dir: string): Promise<string> {
    const files: string[] = getFilesRecursively(dir);
    for (let i = 0; i < files.length; i++) {
        const filepath = files[i];
        const metadata: any = await readMusicMetadata(filepath);
        if (isNullOrEmpty(metadata.title)) {
            return filepath;
        }
        if (isNullOrEmpty(metadata.artist)) {
            return filepath;
        }
        if (isNullOrEmpty(metadata.album)) {
            return filepath;
        }
    }
    return '';
}

function isNullOrEmpty(input: string) {
    const result = input === null || input === '' || input === undefined;
    return result;
}

export { getFilesRecursively, findFileInDirectory, renameFileSync, findFileWithMissingTag };