// Defines the node object
var Node = function(options) {
  options || (options = {});
  this.value    = options.value;
  this.stop     = options.stop;
  this.parent   = options.parent;
  this.children = options.children || {};
};

var Trie = function() {
  this.head = new Node();

  // Inserts string into the Trie.
  this.insert = function(string) {
    this._insert(string, this.head);
  };

  // Recursive function. Helper function for the insert function.
  this._insert = function(substring, node) {
    var character = substring.slice(0,1); // Grab the first character
    var newNode = node.children[character];
    if (!newNode) {
      newNode = new Node({ value: character, parent: node});
      node.children[character] = newNode; // Set the child of the parent
    }
    if (substring.length == 1) { // If the string length is 1 set stop
      newNode.stop = true;
    } else { // If the string has more characters
      this._insert(substring.slice(1), newNode); // Recursive call for the newly created node.
    }
  };

  // Returns true if string is in the trie. Returns false otherwise.
  this.includes = function(string) {
    return this._includes(string, this.head);
  };

  // Recursive function. Returns true if string is in the trie. Returns false
  // otherwise.
  this._includes = function(substring, node) {
    var character = substring.slice(0,1); // Grab the first character
    var foundNode = node.children[character];
    if(foundNode) {
      var stop = (substring.length - 1) == 0 && foundNode.stop;
      console.log(stop);
      if (stop) { return true; }
      return this._includes(substring.slice(1), foundNode)
    } else {
      return false;
    }
  };

  // Search for all strings that have 'prefix' as the prefix.
  //
  // Returns Array of Strings.
  this.search = function(prefix) {

  };

  // Recursive function. Helper function for the search function.
  this._search = function() {

  };

  // Find the node that correspond to the last character in the string.
  //
  // Returns Node.
  this.findLastNode = function(string) {

  };

  // Recursive function. Helper function for the findLastNode function.
  this._findLastNode = function() {

  };

  // Given a node, return all the strings that are part of this node.
  //
  // Returns Array of Strings.
  this.iterate = function(node) {

  };

  // Recursive helper function for .iterate
  this._iterate = function() {

  };

  // You may find this function useful for implementing iterate().
  //
  // Returns true if object is empty. False otherwise.
  this.isEmpty = function (object) {
    for(var i in object) {
      return false;
    }
    return true;
  }
};

