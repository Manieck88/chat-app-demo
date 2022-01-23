import { MessagesBottomBarPOStandalone } from './messages-bottom-bar.po';

describe('WHEN bottom border has been rendered', () => {
    it('AND no value was provided THEN submit cannot be triggered', () => {
        const bottomBarPO = MessagesBottomBarPOStandalone.render();
        bottomBarPO.clickSubmitButton();
        bottomBarPO.expectSubmitCallback.toBeCalledTimes(0);
    });

    it('AND value was provided THEN submit can be triggered', () => {
        const bottomBarPO = MessagesBottomBarPOStandalone.render();
        bottomBarPO.writeMessage('test message');
        bottomBarPO.clickSubmitButton();
        bottomBarPO.expectSubmitCallback.toBeCalled();
    });
});
