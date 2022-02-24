export interface IItem {
    id: number,
    content: string,
    completed: boolean
}

export interface INewItem {
    content: string,
    completed?: boolean
}