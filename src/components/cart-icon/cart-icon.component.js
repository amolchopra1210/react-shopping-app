import React from 'react'
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {ToggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {selectCartItemsCount}  from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const cartIcon = ({toggleCartHidden, itemCount}) => (
    
    <div className = "cart-icon" onClick = {toggleCartHidden}>
        <ShoppingIcon className = "shopping-icon"/>
        <span className = "item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => (dispatch(ToggleCartHidden()))
})
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);