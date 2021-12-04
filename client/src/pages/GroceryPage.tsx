import React, { useState, useEffect } from 'react'
import { ItemInput } from '../components/ItemInput'
import { ItemList } from '../components/ItemList'
import { groceryService, IGroceryItem } from '../services/grocery.service'

export const GroceryPage = () => {

    const [items, setItems] = useState<IGroceryItem[]>()

    function addItem(item: string) {
        groceryService.addItem(item)
        loadItems()
    }

    async function loadItems() {
        const items = await groceryService.getItems()
        setItems(items)
    }

    function markItem(itemIdx: number){
        console.log(itemIdx);
        groceryService.markItem(itemIdx)
        loadItems()
    }

    useEffect(() => {
        loadItems()

    }, [])


    return (
        <>
            <ItemList items={items} markItem={markItem} />
            <ItemInput addItem={addItem} />
        </>

    )
}
