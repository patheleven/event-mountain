zombie = require 'zombie'

describe 'Event Mountain Home Page', ->

  browser = {}

  beforeEach ->
    zombie.visit 'http://localhost:3000/', (err, _browser, status) ->
      expect(status).toBe(200)
      browser = _browser
      asyncSpecDone()
    asyncSpecWait()

  it 'should have the correct title', ->
    expect(browser.text 'title').toMatch /Event Mountain/
    expect(browser.text 'title').toMatch /Home/

  it 'should have a subtitle', ->
    expect(browser.html '.logo').toMatch 'Because every mountain has its valleys'

  it 'should have a link to Cylicon Valley', ->
    expect(browser.html '.explore').toMatch '/cylicon'

  it 'should have a link to Bellota Valley', ->
    expect(browser.html '.explore').toMatch '/bellota'