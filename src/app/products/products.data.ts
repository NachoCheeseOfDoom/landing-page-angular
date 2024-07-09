export const productData: Product[] = [
    { id: 1, name: 'Bleach', price: 10, description: 'Draw spin ill corn soap metal during diameter question forgotten kids property larger five you mud pupil wash complete avoid fight badly provide cent' },
    { id: 2, name: 'Detergent', price: 7, description: 'Rhythm frame remarkable crew traffic fox trunk clay central writing opinion month right whole brain factory round tea farm goose we directly nature barn' },
    { id: 3, name: 'Window cleaner', price: 15},
    { id: 4, name: 'Soup', price: 3, description: 'Structure brain cut wire film dust satisfied thousand send railroad six setting slipped applied allow three smaller deer move doctor central sets nature accident' },
    { id: 5, name: 'Chair', price: 20 },

]

export interface Product {
    id: number | string
    name: string;
    price: number;
    description?: string;
}