'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Feeder', function() {
  browser.get('index.html');

  it('route to #/drivers', function() {
	  var title = element(by.tagName('h1'));
    expect(browser.getLocationAbsUrl()).toMatch("/drivers");
		expect(title.getText()).toEqual('Drivers Championship Standings');
  });
});


