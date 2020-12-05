import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        // once we start, dispatch FETCH_COLLECTIONS_START and make isFetching -> TRUE
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          // once we get the data, we dispatch FETCH_COLLECTIONS_SUCCESS, 
          // collection -> get data; isFetching -> false
          dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(
            error => dispatch(fetchCollectionsFailure(error.message))
        )
    }
}