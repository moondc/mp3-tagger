import NodeID3 from 'node-id3';

function readMusicMetadata(filePath: string): void {
    NodeID3.read(filePath, (err: Error, tags: NodeID3.Tags) => {
        if (err) {
            console.error('Error reading ID3 tags:', err);
            return;
        }

        console.log(tags);
    });
}

export { readMusicMetadata }
