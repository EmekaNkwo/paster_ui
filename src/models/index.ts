export interface IError {
    status: number
    data: {
        error: {
            message: string
        }
    }
}