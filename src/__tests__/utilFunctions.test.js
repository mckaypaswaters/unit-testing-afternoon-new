import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

it('shortenText should not shorten anything shorter than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})
it('shortenText will add a ... if the string is longer than 100 characters', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})
it('wordCount should count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})
it('attachUserName should attach a name to a post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})
it('attachUserName should remove any posts without a matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5] // This is because our posts array does not reach index 5
    expect(newPosts).not.toContainEqual(deletedPost)
})