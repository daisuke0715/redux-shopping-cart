import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../features/modal/ModalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, totalPrice } = useSelector((store) => store.cart);
  return (
      <section className='cart'>
        <header>
          <h2>買い物かご</h2>
          { amount < 1 && (
          <h4 className='empty-cart'>何も入っていません...</h4>
          )}
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </header>
        <footer>
          <hr />
          <div className='cart-total-price'>
            <h4>
              合計 <span>{totalPrice}円</span>
            </h4>
          </div>
          <button className='btn clear-btn' onClick={() => dispatch(openModal())}>全削除</button> 
        </footer>
      </section>
  );
}

export default CartContainer;