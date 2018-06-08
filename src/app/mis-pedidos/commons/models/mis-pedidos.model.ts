export class Pedido{
 id: string;
 name: string;
 monedas: MonedasDetail = new MonedasDetail();
}

export abstract class MonedasDetail {
 soles: string;
 dolares: string;
}
