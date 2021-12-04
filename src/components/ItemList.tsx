import React from 'react'
import { ItemPreview } from './ItemPreview'


export const ItemList = ({ items }: { items: string[] | undefined }) => {

    return (
        <main className="item-list">
            {items && items.map((item, idx) => (
                <ItemPreview key={`grocery-item-${idx}`} item={item} />
            ))}
        </main>
    )
}
