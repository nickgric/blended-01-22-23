import { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectTodos } from 'redux/todos/todosSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from 'redux/todos/todosSlice';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = todos.find(todo => todo.text === query);
    if (isExist) {
      alert('Такая запись уже есть ');
      return;
    }
    dispatch(addTodo({ text: query, id: nanoid() }));
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
