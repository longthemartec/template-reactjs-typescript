import { useState } from 'react';
import { useHistory } from 'react-router-dom'

type ResultType = () => void

export const logout = (): ResultType => {
  const history = useHistory();
  const [ login, setLogin ] = useState(false);
  return (): void => {
    console.log(login);
    setLogin(false);
    history.replace('/login');
  }
}
