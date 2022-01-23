import { fireEvent, getByTestId, render } from '@testing-library/react';
import MessagesBottomBar from './messages-bottom-bar.component';

export class MessagesBottomBarPO {
    private elements: {
        messageInput: HTMLInputElement;
        submitButton: HTMLElement;
    };

    protected constructor(protected container: HTMLElement) {
        this.elements = {
            get messageInput() {
                return getByTestId(container, 'massages-bottom-bar__input--message') as HTMLInputElement;
            },
            get submitButton() {
                return getByTestId(container, 'massages-bottom-bar__button--submit');
            },
        };
    }

    static bindTo(container: HTMLElement) {
        return new MessagesBottomBarPO(container as HTMLElement);
    }

    writeMessage(value: string) {
        fireEvent.change(this.elements.messageInput, { target: { value } });
    }
    clickSubmitButton() {
        fireEvent.click(this.elements.submitButton);
    }
}

export class MessagesBottomBarPOStandalone extends MessagesBottomBarPO {
    protected constructor(protected container: HTMLElement, protected onSubmitSpy: jest.Mock) {
        super(container);
    }

    get expectSubmitCallback() {
        return expect(this.onSubmitSpy);
    }

    static render() {
        const onSubmitSpy = jest.fn();
        const onSelectEmoticon = jest.fn();
        const onSelectAttachment = jest.fn();

        const { container } = render(
            <MessagesBottomBar onSentFn={onSubmitSpy} addAttachment={onSelectAttachment} addEmoticon={onSelectEmoticon} />,
        );

        return new MessagesBottomBarPOStandalone(container, onSubmitSpy);
    }
}
