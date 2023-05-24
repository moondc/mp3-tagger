import NodeID3 from 'node-id3';

function readMusicMetadata(filePath: string): Promise<NodeID3.Tags> {
    return new Promise((resolve, reject) => {
        NodeID3.read(filePath, (err: Error, tags: NodeID3.Tags) => {
            if (err) {
                reject(err);
            } else {
                resolve(tags);
            }
        });
    });
}

export { readMusicMetadata }
