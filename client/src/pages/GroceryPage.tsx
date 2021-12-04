import React, { useState, useEffect } from 'react'
import { ItemInput } from '../components/ItemInput'
import { ItemList } from '../components/ItemList'
import { groceryService, IGroceryItem } from '../services/grocery.service'

export const GroceryPage = () => {

    const [items, setItems] = useState<any>()

    async function addItem(item: string) {
        const items = await groceryService.addItem(item)
        setItems(items)
    }

    async function loadItems() {
        const items = await groceryService.getItems()
        setItems(items)
    }

    async function markItem(itemIdx: number) {
        const items = await groceryService.markItem(itemIdx)
        setItems(items)
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
