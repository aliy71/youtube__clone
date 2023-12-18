export interface IVideoCard {
    label?: string,
    author?: IAuthor,
    views?: string,
    date?: string,
    detail?: string,
}

export interface IAuthor {
    userName?: string,
    userImg?: string,
}