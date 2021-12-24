import { testURL } from '../src/client/js/checkURL'

test('should return true', () => {
    expect(testURL).toBeDefined()
})

test('should be a function', () => {
    expect(typeof testURL).toBe("function")
})

