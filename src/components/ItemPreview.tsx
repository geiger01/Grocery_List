import React from 'react'
import { IGroceryItem } from '../services/grocery.service'

interface IItemPreviewProps {
    item: IGroceryItem
}

export const ItemPreview = ({ item }: IItemPreviewProps) => {
    return (
        <div className="item-preview">
            <h1>{item.itemName}</h1>
            <h5>{item.desc}</h5>
            <h5>{item.amount}</h5>
        </div>
    )
}
