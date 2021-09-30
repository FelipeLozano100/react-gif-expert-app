import React, { useState } from 'react'
import { AddCategori } from './components/AddCategori'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategori setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((categoria) => (
                        <GifGrid
                            key={categoria}
                            category={categoria}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
