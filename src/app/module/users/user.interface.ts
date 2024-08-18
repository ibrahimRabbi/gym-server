export type Tsignup = {
    name: string,
    email: string,
    password: string,
    role: 'user' | 'admin'
    profile: string,
    isDeleted?: boolean
}