describe 'my first jasmine experience', ->
  it 'should pass this test', ->
    expect(1 + 1).toEqual(2)

  it 'should load the page and see the header', ->
    loadFixtures('http://localhost:3000/')
    title = document.getElementById('header')
    expect(title).toHaveText('Event Mountain')