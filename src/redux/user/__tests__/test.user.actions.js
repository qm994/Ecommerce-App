import { UserActionTypes } from '../user.types';
import { setCurrentUser } from '../user.actions';


describe('user actions', () => {
    it('should return an action with and user object', () => {
        const user = {
            id: 12345,
            createdAt: {
                seconds: 1606442252,
                nanoseconds: 40000000
                },
            displayName: "John Ma",
            email: "2964497058@qq.com"
        }
        const expectation = {
            type: UserActionTypes.SET_CURRENT_USER,
            payload: user
        }

        expect(setCurrentUser(user)).toEqual(expectation)
    })
})