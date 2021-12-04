import React from 'react'


export const ItemPreview = ({ item }: { item: string }) => {
    return (
        <div className="item-preview">
            <h3>👈 {item}</h3>
        </div>
    )
}
