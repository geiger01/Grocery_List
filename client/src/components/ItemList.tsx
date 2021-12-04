import React from 'react'
import { IGroceryItem } from '../services/grocery.service'
import { ItemPreview } from './ItemPreview'


export const ItemList = ({ items, markItem }: { items: IGroceryItem[] | undefined, markItem: (idx: number) => void }) => {

    return (
        <main className="item-list">
            {items && items.map((item, idx) => (
                <ItemPreview key={`grocery-item-${idx}`} item={item} idx={idx} markItem={markItem} />
            ))}
        </main>
    )
}
