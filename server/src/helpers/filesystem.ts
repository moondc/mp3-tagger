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

export { getFilesRecursively };