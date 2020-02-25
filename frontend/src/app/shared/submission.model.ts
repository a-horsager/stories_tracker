export class Submission {
    constructor(
        public sub_iD: number,
        public project: number,
        public market: number,
        public sub_date: string,
        public resp_date: string,
        public status: string,
        public notes: string,
    ) {}
}