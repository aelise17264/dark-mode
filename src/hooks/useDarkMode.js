import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue = '') => {
const [someValues, setSomeValues] = useLocalStorage(key, initialValue)
//  const [name, setName] = useLocalStorage('name', '')

const handleChanges = updatedValue => {
    setSomeValues(updatedValue)
}
return[someValues, setSomeValues, handleChanges]
}

