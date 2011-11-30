zombie = require 'zombie'

describe 'Bellota Valley', ->

  browser = {}

  beforeEach ->
    zombie.visit 'http://localhost:3000/bellota', (err, _browser, status) ->
      expect(status).toBe(200)
      browser = _browser
      asyncSpecDone()
    asyncSpecWait()

  it 'should have the correct title', ->
    expect(browser.text 'title').toMatch /Event Mountain/
    expect(browser.text 'title').toMatch /Bellota Valley/
