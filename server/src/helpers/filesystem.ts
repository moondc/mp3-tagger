import fs from 'fs';
import path from 'path';

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

export { getFilesRecursively, findFileInDirectory };