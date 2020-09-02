import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key) => {
const [someValues, setSomeValues] = useLocalStorage(key)

const handleChanges = event => {
    setSomeValues({
        ...someValues,
        [event.target.name]: event.target.value
    })
}
return[someValues, handleChanges]
}

//  Call `useLocalStorage` and pass in the key you want to use to store to indicate whether or 
// not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, 
// exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, 
//     setSomeValue] = useLocalStorage('your key here')`
//  - Finally, we need to return something out of `useDarkMode`, so we can use this in our app. 
// What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a 
// setter function to toggle dark mode. Let's just forward the value and the setter that were returned 
// out of the `useLocalStorage` call. Return those two values in an array as well.

//  _In this case `useDarkMode` isn't doing any of it's own logic, just simply composing
// `useLocalStorage` inside it and passing those values back to the component. There are other things 
// we **could** do here to extend even more logic. If you want to try that after you're finished, check
//  out the first stretch goal 👍_