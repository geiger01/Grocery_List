import React, { useState } from 'react'


import { AiFillPlusSquare } from "react-icons/ai";

export const ItemInput = ({ addItem, onDeleteList }: { addItem: (item: string) => void, onDeleteList: () => void }) => {

    const [item, setItem] = useState('')

    return (
        <div className="item-input">
            <div className="item-input-wrapper">
                <input value={item} onChange={(e) => setItem(e.target.value)} className="item-input" type="text" />
                <div onClick={() => { addItem(item); setItem('') }} className="plus-icon">
                    <AiFillPlusSquare />
                </div>
            </div>
            <button onClick={onDeleteList}>!!!!!לרוקן את הרשימת קניות</button>
        </div>
    )
}
