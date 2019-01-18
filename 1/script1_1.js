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
    if (element.parentNode) {
        element.parentNode.removeChild(element);
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

Menu.prototype.remove = function() {
    var element = this.getElement();
    element = document.getElementById(this.id);
    this.setElement(element);
    Container.prototype.remove.call(this);

}

function MenuItem(className, link, title, subMenu) {
    Container.call(this, '', className, 'li');
    this.link = link;
    this.title = title;
    console.log(subMenu);
    this._subMenu = subMenu;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
    var container = Container.prototype.render.call(this);
    var a = document.createElement('a');
    a.textContent = this.title;
    a.href = this.link;

    for (var element in this._subMenu) {
        if (!this._subMenu.hasOwnProperty(element)) {
            continue;
        }
        console.log(this._subMenu[element]);
        var b = document.createElement('a');
        b.textContent = this._subMenu[element].title;
        b.href = this._subMenu[element].link;
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        console.log(b);
        ul.appendChild(li);
        li.appendChild(b);
        a.appendChild(ul);
    }

    container.appendChild(a);
    return container;
}

MenuItem.prototype.remove = function() {
    var element = this.getElement();
    var list = document.gerElementBytagName('li');
    for ( var i = 0; i < list.length; i++) {
        console.log(list[i].firstChild.textContent,this.title);
        if (list[i].firstChild.textContent == this.title) {
            element = list[i];
    }
  }
    this.setElement(element);
    Container.prototype.remove.call(this);
}

var subMenuItem1_1 = new MenuItem('submenu-item', '/', 'homie-1');
var subMenuItem1_2 = new MenuItem('submenu-item', '/', 'homie-2');
var subMenuItem2_1 =  new MenuItem('submenu-item', '/', 'newbie-1');
var subMenuItem2_2 =  new MenuItem('submenu-item', '/', 'newbie-2');
var subMenuItem3_1 =  new MenuItem('submenu-item', '/', 'bloggie-1');
var subMenuItem3_2 =  new MenuItem('submenu-item', '/', 'bloggie-2');



var menuItem1 = new MenuItem('menu-item', '/', 'Home', [subMenuItem1_1,subMenuItem1_2]);
var menuItem2 = new MenuItem('menu-item', '/news', 'News', [subMenuItem2_1,subMenuItem2_2]);
var menuItem3 = new MenuItem('menu-item', '/blog', 'Blog', [subMenuItem3_1,subMenuItem3_2]);

var menu = new Menu('menu', 'menu active', [ menuItem1, menuItem2, menuItem3 ]);

document.body.appendChild(menu.render());
