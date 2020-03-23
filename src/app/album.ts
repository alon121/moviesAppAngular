import { Song } from './song';
export class Album {
    name:string;
    albums:Song[];
    description:string;
    constructor(name:string, albums:Song[], description:string){
        this.name = name;
        this.albums = albums;
        this.description = description;
    }
};
