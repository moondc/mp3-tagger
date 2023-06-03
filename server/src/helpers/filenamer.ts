import { readMusicMetadata } from './metadata'
const path = require('path');

async function getNewName(filePath: string, pattern: string) {
    let dir = path.dirname(filePath);
    let ext = path.extname(filePath);

    const { title, album, artist } = await readMusicMetadata(filePath);

    let result = pattern;
    result = result.replace(/%B/g, artist!);
    result = result.replace(/%S/g, title!);
    result = result.replace(/%A/g, album!);

    return path.join(dir, result + ext);
}

export { getNewName }