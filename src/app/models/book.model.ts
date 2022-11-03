export class Book{
    constructor(
        public type: string,
        public title: string,
        public first_publish_year: number,
        public number_of_pages_median: number,
        public author_name: string[],
        public cover_i: string,
        public subject: string[],
        public first_sentence: string[],
        public key: string
    ){

    }
}