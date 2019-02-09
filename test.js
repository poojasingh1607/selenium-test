var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://www.google.com');

var By = webdriver.By;

driver.findElement(By.name('q')).sendKeys('wiki');

driver.findElement(By.name('btnG')).click();
driver.wait(check_title, 1000);

function check_title(){
	var promise = driver.getTitle().then(function(title){
		if(title == 'wiki-Google Search')
		{
			console.log('success');
			return true;
		}
		else
		{
			console.log('fail--'+ title);
		}
	});
	return promise;
}




