import React, { useState } from 'react'


import { AiFillPlusSquare } from "react-icons/ai";

export const ItemInput = ({ addItem }: { addItem: (item: string) => void }) => {

    const [item, setItem] = useState('')

    return (
        <div className="item-input-wrapper">
            <input value={item} onChange={(e) => setItem(e.target.value)} className="item-input" type="text" />
            <div onClick={() => addItem(item)} className="plus-icon">
                <AiFillPlusSquare />
            </div>
        </div>
    )
}
