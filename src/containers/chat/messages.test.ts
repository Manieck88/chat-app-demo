import { storeMock } from 'mocks/store.mock';
import { MessagesPO } from './messages.po';
import { MessagesBottomBarPO } from 'components/chat/messages-bottom-bar.po';

describe('WHEN messages has been rendered AND message has been sent', () => {
    let messagesPO: MessagesPO;
    let bottomBarCPO: MessagesBottomBarPO;

    beforeEach(() => {
        messagesPO = MessagesPO.render(storeMock);
        bottomBarCPO = messagesPO.getBottomBar();
        bottomBarCPO.writeMessage('test message');
        bottomBarCPO.clickSubmitButton();
    });

    it('THEN sent message is displayed in conversation', () => {
        messagesPO.expectSentMessagesToHaveTex('test message');
    });

    it('THEN received message is returned in conversation with same text', () => {
        messagesPO.expectReceivedMessagesToHaveTex('test message');
    });
});
