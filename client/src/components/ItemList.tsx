import React from 'react'
import { ItemPreview } from './ItemPreview'


export const ItemList = ({ items, markItem }: { items: any | undefined, markItem: (idx: number) => void }) => {

    return (
        <main className="item-list">
            {items && items.data.map((item: any, idx: number) => (
                <ItemPreview key={`grocery-item-${idx}`} item={item} idx={idx} markItem={markItem} />
            ))}
        </main>
    )
}
