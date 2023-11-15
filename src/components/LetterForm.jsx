import React, { useState } from 'react';
import Button from 'ui/Button';
import styled from 'styled-components';


const Form = styled.form`
    width:500px;
    height: 40%;
    margin:1rem auto;
    background-color:#b8b8ff;
    // #8093f1;
    border-radius: 1.5rem;
    padding:1.5rem;
`;

const Section = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    width:100%;
    height: 2rem;
    font-size: 1.1rem;
    padding:0.5rem;
    margin-left:0.5rem;
`

const Textarea = styled.textarea`
    width:100%;
    height: 7rem;
    font-size: 1.2rem;
    margin-left: 0.5rem;
    padding:1rem 0.5rem;
    resize: none;   
`;

const Select = styled.select`
    width:4rem;
    margin-left:0.5rem;
`

export default function LetterForm({ filters }) {
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.nickname.trim() === '' || form.content.trim() === '') {
            alert('닉네임과 내용은 필수 입력값입니다.');
            return;
        }
        setForm(initialState);

    }
    return (
        <>
            <h3>팬레터 작성하기✏️</h3>
            <Form onSubmit={handleSubmit}>
                <Section>
                    <label htmlFor="nickname">Nickname:</label>
                    <Input type='text' id="nickname" name='nickname' value={form.nickname} onChange={handleChange} maxLength={20} placeholder='최대 20자까지 가능합니다.' />
                </Section>
                <Section>
                    <label htmlFor="content">Content:</label>
                    <Textarea id='content' name='content' value={form.content} onChange={handleChange} placeholder='최대 100자까지만 작성 가능합니다.' maxLength={100} />
                </Section>
                <Section>
                    <label htmlFor='who'>TO:</label>
                    <Select id='who'>
                        {filters.map((member, idx) => (
                            <option key={idx}>{member}</option>
                        ))}
                    </Select>
                </Section>
                <Button text="Register" />
            </Form>
        </>
    );
}

const initialState = { nickname: '', content: '' };
