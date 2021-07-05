import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconConteiner, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconConteiner onClick={toggleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconConteiner>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);