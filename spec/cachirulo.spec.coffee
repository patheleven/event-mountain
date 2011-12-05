zombie = require 'zombie'

describe 'Cachirulo Valley', ->

  browser = {}

  beforeEach ->
    zombie.visit 'http://localhost:3000/cachirulo', (err, _browser, stat) ->
      expect(stat).toBe(200)
      browser = _browser
      asyncSpecDone()
    asyncSpecWait()

  it 'should show the correct title', ->
    expect(browser.text 'title').toMatch /Event Mountain/
    expect(browser.text 'title').toMatch /Cachirulo Valley/

  it 'should say hi from Cachirulo Valley', ->
    expect(browser.html '.logo').toMatch /Hello from Cachirulo Valley/

  it 'should tell us about the idea of the valley', ->
    expect(browser.html '.interview').toMatch /How did the idea for an entrepreneurial valley originate?/

  it 'should tell us about the origin of the name', ->
    expect(browser.html '.interview').toMatch /What is the origin of your name/

  it 'should tell us about the philosophy and goals', ->
    expect(browser.html '.interview').toMatch /your philosophy/
    expect(browser.html '.interview').toMatch /your goals/