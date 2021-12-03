import React from 'react'
import { IGroceryItem } from '../services/grocery.service'

interface IItemPreviewProps {
    item: IGroceryItem
}

export const ItemPreview = ({ item }: IItemPreviewProps) => {
    return (
        <div className="item-preview">
            <h1>👈 {item.itemName}</h1>
            <p>{item.desc}</p>
        </div>
    )
}
