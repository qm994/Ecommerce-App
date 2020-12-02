import shopReducer from '../../shop/shop.reducer';
import SHOP_DATA from '../../shop/shop-data';


describe('shop reducer', () => {
    it('should return the initial state', () => {
      expect(shopReducer(undefined, {type: "undefined"})).toEqual(
        {
            collections: {}
        }
      )
    })
})