export class Project {
    constructor(
        public proj_id: number,
        public title: string,
        public status: string, 
        public word_count: number,
        public notes: string
    ) {}
}