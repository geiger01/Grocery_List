import React from 'react'

export const ItemPreview = ({ item, idx, markItem }: { item: any, idx: number, markItem: (idx: number) => void }) => {
    return (
        <div className="item-preview">
            <h3 onClick={() => markItem(idx)} className={`${item.isMarked ? 'marked' : ''}`}>👈 {item.itemName}</h3>
        </div>
    )
}
