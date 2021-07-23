/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/');
  
});

Scenario('Liking a Restaurant', ({ I }) => {
  I.seeElement('.box-items');
  I.click(locate('.box-items').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorites');
  I.seeElement('.box-items');
});

Scenario('Unlike a restaurant', ({ I }) => {
  I.seeElement('.box-items');
  I.click(locate('.box-items').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorites');
  I.seeElement('.box-items');

  I.seeElement('.box-items');
  I.click(locate('.box-items').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
});
