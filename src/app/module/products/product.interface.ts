export type Tproduct = {
    title: string,
    description: string,
    price: number,
    image: string,
    rating?: number
    category: 'bike' | 'cable-machine' | 'dumbbell' | 'treadmill' | 'bench' |'barbell',
    stock:number
    isdeleted?: boolean
}