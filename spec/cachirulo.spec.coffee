zombie = require 'zombie'

describe 'Cachirulo Valley', ->

  browser = {}

  beforeEach ->
    zombie.visit 'http://localhost:3000/cachirulo', (err, _browser, status) ->
      expect(status).toBe(200)
      browser = _browser
      asyncSpecDone()
    asyncSpecWait()

  it 'should have the correct title', ->
    expect(browser.text 'title').toMatch /Event Mountain/
    expect(browser.text 'title').toMatch /Cachirulo Valley/

  it 'should say hi from Cachirulo Valley', ->
    expect(browser.html '.logo').toMatch /Hello from Cachirulo Valley/

  it 'should tell us about the idea behind the valley', ->
    expect(browser.html '.interview').toMatch /How did the idea for an entrepreneurial valley originate?/

  it 'should tell us about the origin of the name', ->
    expect(browser.html '.interview').toMatch /What is the origin of your name/

  it 'should tell us about the philosophy and goals', ->
    expect(browser.html '.interview').toMatch /your philosophy?/
    expect(browser.html '.interview').toMatch /your goals/

  it 'should tell us about how long they have been working together', ->
    expect(browser.html '.interview').toMatch /How long have you been working together/

  it 'should tell us about the activities', ->
    expect(browser.html '.interview').toMatch /What kind of activities do you do?/

  it 'should tell us who can participate', ->
    expect(browser.html '.interview').toMatch /Can anyone participate?/

  it 'should tell us about the sponsors', ->
    expect(browser.html '.interview').toMatch /Do you have sponsors?/

  it 'should tell us about the future of the valley', ->
    expect(browser.html '.interview').toMatch /How do you see the future of the Valley?/
