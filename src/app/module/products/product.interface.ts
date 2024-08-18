export type Tproduct = {
    title: string,
    description: string,
    price: number,
    image: string,
    rating?: number
    category: 'bike' | 'cable-machine' | 'dumbbell' | 'treadmill',
    stock:number
    isdeleted?: boolean
}