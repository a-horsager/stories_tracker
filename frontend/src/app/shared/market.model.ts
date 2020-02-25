export class Market {
    constructor(
        public mkt_id: number,
        public name: string,
        public type: string,
        public min_words: number,
        public max_words: number,
        public cents_per_word: number,
        public status: string,
        public website: string,
        public sub_format: string,
        public notes: string,
    ) {}
}