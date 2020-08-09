import React from 'react';

import Title from './Title.js';
import { useOrderContext } from './order.js';

import * as styles from './Flavors.module.scss';
import Button from './Button.js';

let id = 0;

function Flavors() {
  const { orderItems, setOrderItems } = useOrderContext();
  const [message, setMessage] = React.useState('');
  return (
    <>
      <Title>Flavors</Title>
      <div className="visually-hidden" role="status">
        {message}
      </div>
      <ul className={styles.list}>
        {getFlavors().map((flavor) => (
          <Flavor
            key={flavor.id}
            onAddToCart={() => {
              setOrderItems((items) => [
                ...items,
                { ...flavor, orderId: id++ },
              ]);
              setMessage(
                `Added. Total items in order: ${
                  orderItems.length + 1
                }. Press C to open cart.`
              );
            }}
            {...flavor}
          />
        ))}
      </ul>
    </>
  );
}

function Flavor({
  name,
  description,
  id,
  price,
  image,
  onAddToCart = () => {},
}) {
  return (
    <li className={styles.item}>
      <div className={styles.itemInfo}>
        <h2 className={styles.itemName}>{name}</h2>
        <p className={styles.itemDesc}>{description}</p>
        <p className={styles.itemPrice}>${price}</p>
        <Button onClick={() => onAddToCart(id)}>
          Add <span className="visually-hidden">{name}</span> to Order
        </Button>
      </div>
      <img
        className={styles.itemImage}
        height="320"
        width="320"
        src={image}
        alt=""
      />
    </li>
  );
}

function getFlavors() {
  return [
    {
      id: '0',
      name: 'The TV Dinner',
      description:
        "How did we make ice cream that's dry and chewy? Even we don't know! Chunks of leathery meatloaf swimming in mashed pea ice cream. Watch out for foil!",
      price: 4.99,
      image: '/images/flavor-tv-dinner.png',
    },
    {
      id: '1',
      name: 'The Coney Island Surprise',
      description:
        'Ever eaten a hot dog and thought, "I wonder what this would taste like as ice cream?" First of all, what\'s wrong with you? Second of all, what\'s wrong with us? Sliced frankfurters and the dillest of relish in red chili (with beans, of course) ice cream.',
      price: 4.99,
      image: '/images/flavor-coney-island.png',
    },
    {
      id: '2',
      name: 'Mystery Meat',
      description:
        'Relive your middle school days with whatever this is. Signed waver required. No refunds.',
      price: 4.99,
      image: '/images/flavor-mystery-meat.png',
    },
    {
      id: '3',
      name: 'Pizza Party',
      description:
        'This combo of pepperoni, olives, Italian sausage and anchovies in an aged-cheddar ice cream will have you saying "Cowabunga, dude!"',
      price: 4.99,
      image: '/images/flavor-pizza-party.png',
    },
    {
      id: '4',
      name: 'Thanksgiving on a Cone',
      description:
        'A good helping of leftover turkey, stuffing, green bean cassarole and giblets in canned cranberry ice cream. One lick will have you remembering that epic family fight of 2015. Topped with some sort of brown gravy.',
      price: 6.99,
      image: '/images/flavor-thanksgiving.png',
    },
    {
      id: '5',
      name: 'Something Fishy',
      description:
        "Taste this cone of lemon dill ice cream filled with chunks of sea bass and you'll be hooked. Get it? Hooked. You know, because it's fish? Actually, you'll probably wish this was the one that got away. You've been warned.",
      price: 5.99,
      image: '/images/flavor-something-fishy.png',
    },
  ];
}

export default Flavors;
