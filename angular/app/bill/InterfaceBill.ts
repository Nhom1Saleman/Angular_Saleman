export interface IBill{
    billId: string,
    billType: string,
    creater: string,
    createDate: Date,
    customerId: string,
    status: string,
    address: string,
    price: number
}