import { findAllByTestId, getAllByTestId } from '@testing-library/react';
import { MessagesBottomBarPO } from 'components/chat/messages-bottom-bar.po';
import { RootState } from 'store';
import { renderWithRedux } from 'utils/tests/renderWithStore';
import Messages from './messages.container';

export class MessagesPO {
    private elements: {
        sentMessages: HTMLElement[];
        receivedMessages: Promise<HTMLElement[]>;
    };

    protected constructor(protected container: HTMLElement) {
        this.elements = {
            get sentMessages() {
                return getAllByTestId(container, 'message__container--sent-message');
            },
            get receivedMessages() {
                return findAllByTestId(container, 'message__container--received-message');
            },
        };
    }

    getBottomBar() {
        return MessagesBottomBarPO.bindTo(this.container);
    }

    expectSentMessagesToHaveTex(text: string) {
        return expect(this.elements.sentMessages.some((val) => expect(val).toHaveTextContent(text)));
    }

    async expectReceivedMessagesToHaveTex(text: string) {
        const receivedMessages = await this.elements.receivedMessages;
        return expect(receivedMessages.some((val) => expect(val).toHaveTextContent(text)));
    }

    static render(state: RootState) {
        const { container } = renderWithRedux(<Messages />, state);
        return new MessagesPO(container);
    }
}
