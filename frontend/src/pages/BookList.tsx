import React, { useState, useEffect } from 'react'
import Book from '../components/Book'

function BookList() {
    const [books, setBooks] = useState<BookType[]>([])

    async function fetchBook() {
        await fetch(process.env.REACT_APP_BACKEND_URL + '/book/list')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
            })
    }

    useEffect(() => {
        fetchBook()
    }, [])

    return (
        <div>
            <div className="container max-w-[50%] mx-auto font-nato">
                <div className="header">
                    <h3 className="bg-white py-4 text-xl font-bold text-center">
                        Books
                    </h3>
                </div>
                <div className="book-list">
                    <div className="grid gap-x-0.5 md:grid-cols-2">
                        {books.map((book) => {
                            return <Book key={book.id} {...book} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookList

interface BookType {
    id: number
    title: string
    price: string
    image: string
    discount?: number
}
