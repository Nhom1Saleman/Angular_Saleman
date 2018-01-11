export interface IProducts{
    ProductID: string;
    CreateDate: Date;
    ProductCode: string;
    ProductName: string;
    Description: boolean;
    Unit: string;
    UnitPrice: number;
    QtyAlert: number;
    Quantity: number;
    UnitPrice_Avg: number;
    IsDeleted: boolean;
    UnitPrice_Employee: number;
    ServiceCharge: string;
    WarrantyPeriod: string;
    TotalRows: number;
}