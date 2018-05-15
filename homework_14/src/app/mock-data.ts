export interface Topic {
    id: number;
    topic: string;
    lecturer: string;
    date: string;
}

export const TOPICS: Topic[] = [
    {id: 1, topic: 'CSS', lecturer: "John Doe", date: "13/03/2018"} ,
    {id: 2, topic: 'JavaScript', lecturer: "Pavlo1", date: "15/03/2018"}
];