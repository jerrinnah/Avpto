import React from 'react'
import CollectionCard from '../cards/collectionCard/CollectionCard'

import { collectionsData } from '../../data/data'

function Collections() {
  return (
    <div>
      <section className="collection">
        <div className="collection__heading container">
          <h4 className="collection__header">Top Collection 2021</h4>
          <a className="collection__link" href="#">
            View all
          </a>
        </div>
        <div className="collection__card-holder container">
          {collectionsData.map((collection) => (
            <CollectionCard
              key={collection.id}
              src={collection.image.src}
              title={collection.title}
              price={collection.price}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Collections
