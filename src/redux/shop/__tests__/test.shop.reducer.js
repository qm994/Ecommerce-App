import shopReducer from '../../shop/shop.reducer';
import SHOP_DATA from '../../shop/shop-data';
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils';
import { fetchCollectionsStartAsync, fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFailure } from '../shop.actions';

describe('shop reducer', () => {
    it('should return the initial state', () => {
      expect(shopReducer(undefined, {type: "undefined"})).toEqual(
        {
            collections: {}
        }
      )
    })
})

it('test the fetch collection asyn', () => {
  const mockAsyn = jest.fn().mockReturnValue()
})