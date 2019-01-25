// public, protected, private

function Container(id, className, tagName) {
  // public
  this.id = id;
  this.className = className;

  // protected
  this._tagName = tagName;

  // private
  var element;

  this.getElement = function() {
    return element;
  }

  this.setElement = function(newValue) {
    element = newValue;
  }
}

Container.prototype.render = function() {
  var element = this.getElement();

  if (!element) {
    element = document.createElement(this._tagName);
    element.id = this.id;
    element.className = this.className;

    this.setElement(element);
  }

  return element;
}

Container.prototype.remove = function() {
  var element = this.getElement();

  if(element) {
    element.parentElement.removeChild(element);
    this.setElement(null);
  }
}

function Menu(id, className, items) {
  Container.call(this, id, className, 'ul');

  // protected
  this._items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
  var container = Container.prototype.render.call(this);
  
  this._items.forEach(function(item) {
    if(item instanceof Container) {
      container.appendChild(item.render());
    }
  });

  return container;
}

function MenuItem(className, link, title) {
  Container.call(this, '', className, 'li');

  this.link = link;
  this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
  var container = Container.prototype.render.call(this);

  var a = document.createElement('a');
  a.textContent = this.title;
  a.href = this.link;

  container.appendChild(a);

  return container;
}

function SuperMenu(id, className, items, link, title) {
  MenuItem.call(this, 'item', link, title);
  Menu.call(this, id, className, items);
}

SuperMenu.prototype = Object.create(Menu.prototype);
SuperMenu.prototype.render = function() {
  if(this.link && this.title) {
    var menuItem = new MenuItem('item', this.link, this.title).render();
    var menu = Menu.prototype.render.call(this);
    menuItem.appendChild(menu);

    return menuItem;
  } else {
    return Menu.prototype.render.call(this);
  }
}

var menuNames = ['Dresses',
    'Tops',
    'Sweaters/Knits',
    'Jackets/Coats',
    'Blazers',
    'Denim',
    'Leggings/Pants',
    'Skirts/Shorts',
    'Accessories'];

var menuItem1 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem2 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem3 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem4 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem5 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem6 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem7 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem8 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem9 = new MenuItem('menu-list', '#', menuNames[8]);
var menuItem10 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem11 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem12 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem13 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem14 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem15 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem16 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem17 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem18 = new MenuItem('menu-list', '#', menuNames[8]);
var menuItem19 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem20 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem21 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem22 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem23 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem24 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem25 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem26 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem27 = new MenuItem('menu-list', '#', menuNames[8]);
var menuItem28 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem29 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem30 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem31 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem32 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem33 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem34 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem35 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem36 = new MenuItem('menu-list', '#', menuNames[8]);
var menuItem37 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem38 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem39 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem40 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem41 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem42 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem43 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem44 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem45 = new MenuItem('menu-list', '#', menuNames[8]);
var menuItem46 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem47 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem48 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem49 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem50 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem51 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem52 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem53 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem54 = new MenuItem('menu-list', '#', menuNames[8]);
var menuItem55 = new MenuItem('menu-list', '#', menuNames[0]);
var menuItem56 = new MenuItem('menu-list', '#', menuNames[1]);
var menuItem57 = new MenuItem('menu-list', '#', menuNames[2]);
var menuItem58 = new MenuItem('menu-list', '#', menuNames[3]);
var menuItem59 = new MenuItem('menu-list', '#', menuNames[4]);
var menuItem60 = new MenuItem('menu-list', '#', menuNames[5]);
var menuItem61 = new MenuItem('menu-list', '#', menuNames[6]);
var menuItem62 = new MenuItem('menu-list', '#', menuNames[7]);
var menuItem63 = new MenuItem('menu-list', '#', menuNames[8]);


/*var menu1 = new SuperMenu('submenu', 'submenu', [ menuItem1, menuItem2 ], '/shop', 'menu1');;
*/


var menu1 = new SuperMenu('menu', 'menu', [
    menuItem1,
    menuItem2,
    menuItem3,
    menuItem4,
    menuItem5,
    menuItem6,
    menuItem7,
    menuItem8,
    menuItem9,
], '/main', 'HOME');

var menu2 = new SuperMenu('menu', 'menu', [
    menuItem10,
    menuItem11,
    menuItem12,
    menuItem13,
    menuItem14,
    menuItem15,
    menuItem16,
    menuItem17,
    menuItem18,
], '/main', 'MAN');

var menu3 = new SuperMenu('menu', 'menu', [
    menuItem19,
    menuItem20,
    menuItem21,
    menuItem22,
    menuItem23,
    menuItem24,
    menuItem25,
    menuItem26,
    menuItem27,
], '/main', 'WOMAN');

var menu4 = new SuperMenu('menu', 'menu', [
    menuItem28,
    menuItem29,
    menuItem30,
    menuItem31,
    menuItem32,
    menuItem33,
    menuItem34,
    menuItem35,
    menuItem36,
], '/main', 'KIDS');

var menu5 = new SuperMenu('menu', 'menu', [
    menuItem37,
    menuItem38,
    menuItem39,
    menuItem40,
    menuItem41,
    menuItem42,
    menuItem43,
    menuItem44,
    menuItem45,
], '/main', 'ACCOSERIESE');

var menu6 = new SuperMenu('menu', 'menu', [
    menuItem46,
    menuItem47,
    menuItem48,
    menuItem49,
    menuItem50,
    menuItem51,
    menuItem52,
    menuItem53,
    menuItem54,
], '/main', 'FEATURED');

var menu7 = new SuperMenu('menu', 'menu', [
    menuItem55,
    menuItem56,
    menuItem57,
    menuItem58,
    menuItem59,
    menuItem60,
    menuItem61,
    menuItem62,
    menuItem63,
], '/main', 'HOT DEALS');



var menu3 = new SuperMenu('menu', 'menu', [
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7
]);


document.body.appendChild(menu3.render());
