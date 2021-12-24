import { handleSubmit, post } from '../src/client/js/formHandler'

test('should return true', () => {
    expect(handleSubmit).toBeDefined()
})

test('should be a function', () => {
    expect(typeof handleSubmit).toBe("function")
})

test('should return true', () => {
    expect(post).toBeDefined()
})

test('should be a function', () => {
    expect(typeof post).toBe("function")
})
