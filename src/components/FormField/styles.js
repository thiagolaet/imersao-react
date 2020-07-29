import styled from 'styled-components';

export const InputField = styled.div`
    label {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 100%;
        min-height: 30px;
    }

    input, textarea {
        margin-top: 10px;
        background-color: var(--black);
        border: none;
        padding: 10px 20px;
        color: var(--white);
        outline: none;
        font-size: 18px;
        margin-bottom: 20px;
        resize: none;
    }

    textarea {
        min-height: 100px;
    }

    label {
        font-size: 20px;
    }
`;