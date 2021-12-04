import React, { useState, useEffect } from 'react'
import { ItemInput } from '../components/ItemInput'
import { ItemList } from '../components/ItemList'
import { groceryService } from '../services/grocery.service'

export const GroceryPage = () => {

    const [items, setItems] = useState<string[]>()

    async function addItem(item: string) {

        groceryService.addItem(item)
        loadItems()
    }

    async function loadItems() {
        const items = await groceryService.getItems()
        setItems(items)
    }

    useEffect(() => {
        loadItems()

    }, [])


    return (
        <>
            <ItemList items={items} />
            <ItemInput addItem={addItem} />
        </>

    )
}
