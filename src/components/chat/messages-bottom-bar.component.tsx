import React, { useState } from 'react';
import { EmojiSmile, Paperclip, Send } from 'react-bootstrap-icons';

interface MessagesBottomBarProps {
    onSentFn(val: string): void;
    addAttachment(): void;
    addEmoticon(): void;
}

const MessagesBottomBar = ({ onSentFn, addAttachment, addEmoticon }: MessagesBottomBarProps) => {
    const [value, setValue] = useState('');

    function handleEnterSubmit(e: React.KeyboardEvent) {
        if (e.code === 'ENTER') {
            onSentFn(value);
            setValue('');
        }
    }

    function handleSubmitButton() {
        if (value) {
            onSentFn(value);
            setValue('');
        }
    }

    return (
        <div className="border-top d-flex align-items-center">
            <input
                type="text"
                placeholder="Type your message here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-100 px-5 h-100 border-0"
                onKeyPress={handleEnterSubmit}
                data-testid="massages-bottom-bar__input--message"
            />
            <div className="d-flex p-3">
                <div className="icon-button d-flex p-2">
                    <Paperclip width={24} height={24} className="text-secondary" onClick={addAttachment} />
                </div>
                <div className="icon-button d-flex p-2" onClick={addEmoticon}>
                    <EmojiSmile width={24} height={24} className="text-secondary" />
                </div>
                <div
                    className="send-button bg-primary rounded-circle d-flex ms-2 p-2"
                    onClick={handleSubmitButton}
                    data-testid="massages-bottom-bar__button--submit"
                >
                    <Send width={22} height={22} className="text-white pe-1" />
                </div>
            </div>
        </div>
    );
};

export default MessagesBottomBar;
