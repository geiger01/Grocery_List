import React from 'react'
import { IGroceryItem } from '../services/grocery.service'
import { ItemPreview } from './ItemPreview'

interface IItemListProps {
    items: IGroceryItem[] | undefined;
}

export const ItemList = ({ items }: IItemListProps) => {

    return (
        <main className="item-list">
            {items && items.map((item, idx) => (

                <ItemPreview key={`grocery-item-${idx}`} item={item} />
            ))}
        </main>
    )
}
