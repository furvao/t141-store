export interface IProduct {
    code: string;
    name: string;
    reference: string;
    weight: number;
    quantity: number;
    size: string;
    imageUrl: string;
    highlight: boolean;
    price: number;
    orderQtd: number;
}

export class Product implements IProduct {

    constructor(public code: string,
        public name: string,
        public reference: string,
        public classificacaoFiscal: string,
        public weight: number,
        public quantity: number,
        public size: string,
        public imageUrl: string,
        public highlight: boolean,
        public price: number,
        public orderQtd: number) {

    }

}