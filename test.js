describe("deleteComments", function () {

  it("удаляет многострочные комментарии", function () {
    assert.equal(deleteComments('мама мыла /* comment */раму'), 'мама мыла раму');
  });

  it("удаляет однострочные комментарии", function () {
    assert.equal(deleteComments('мама мыла//comment\nраму'), 'мама мыла\nраму');
  });

  it("не изменяет текст в одинарных скобках", function () {
    assert.equal(deleteComments("мама '//мыла' раму"), "мама '//мыла' раму");
  });

  it("не изменяет текст в двойных скобках", function () {
    assert.equal(deleteComments('мама "//мыла" раму'), 'мама "//мыла" раму');
  });

  it("не изменяет текст в обратных скобках", function () {
    assert.equal(deleteComments("мама `//мыла` раму"), "мама `//мыла` раму");
  });

  it("не изменяет регулярные выражения", function () {
    assert.equal(deleteComments("мама /мы//ла/ раму"), "мама /мы//ла/ раму");
  });

});