let uId = 0;

export class ItemEntity {
    id: number;
    isCompleted: boolean;
    description: string = '';

    constructor(item: Partial<ItemEntity>) {
        this.isCompleted = false;
        this.id = uId++;

        if (!item) return;
        this.description = item.description || '';
    }
}