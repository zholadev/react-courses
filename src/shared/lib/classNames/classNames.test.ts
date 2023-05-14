import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional params', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods params', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', {hovered: true}, ['class1', 'class2'])).toBe(expected)
    })
})