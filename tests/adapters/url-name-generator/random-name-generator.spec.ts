import { RandomNameGenerator } from '@/adapters/url-name-generator'

describe('RandomNameGenerator', () => {
  it('Should return a random string to URL with default length', async () => {
    const sut = new RandomNameGenerator()
    const randomName = await sut.generate()

    expect(sut.urlName).toBeTruthy()
    expect(randomName).toHaveLength(10)
  })

  it('Should return a random string to URL with specific length', async () => {
    const sut = new RandomNameGenerator()
    const randomName = await sut.generate(20)

    expect(sut.urlName).toBeTruthy()
    expect(randomName).toHaveLength(20)
  })
})
