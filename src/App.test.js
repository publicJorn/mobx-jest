import { makeAutoObservable, configure } from 'mobx'

let instance

beforeEach(() => {
  configure({ safeDescriptiors: false })

  instance = makeAutoObservable({
    id: 'abc',
    imCalled: (arg) => console.log(arg),
    doStuff: () => this.imCalled('yes'),
  })
})

test('update object', () => {
  const spy = jest.spyOn(instance, 'imCalled')
  instance.doStuff()
  expect(spy).toHaveBeenCalledWith('yes')
})
