import React, { useState, useEffect } from 'react'
import { ItemInput } from '../components/ItemInput'
import { ItemList } from '../components/ItemList'
import { groceryService } from '../services/grocery.service'
import { socketService } from '../services/socket.service'

export const GroceryPage = () => {

    const [items, setItems] = useState<any>()

    async function addItem(item: string) {
        if (!item) return
        const items = await groceryService.addItem(item)
        setItems(items)
        socketService.emit('update-list', items)
    }

    async function loadItems() {
        const items = await groceryService.getItems()
        setItems(items)
        socketService.emit('update-list', items)
    }

    async function markItem(itemIdx: number) {
        const items = await groceryService.markItem(itemIdx)
        setItems(items)
        socketService.emit('update-list', items)
    }
    async function onDeleteList() {
        const items = await groceryService.deleteList()
        setItems(items)
        socketService.emit('update-list', items)
    }

    function updateItems(items: any) {
        setItems(items)
    }

    useEffect(() => {
        loadItems()
        socketService.emit('roomId', { roomId: 'home' })
        socketService.emit('update-list', items)
        socketService.on('update-list-return', updateItems)

        return () => {
            socketService.off('update-list')
            socketService.off('roomId')
            socketService.off('update-list-return')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <ItemList items={items} markItem={markItem} />
            <ItemInput addItem={addItem} onDeleteList={onDeleteList} />
        </>

    )
}
