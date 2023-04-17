const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 *
 * }
 */
// class ListNode {
//      constructor(x) {
//        this.value = x;
//       this.next = null;
//      }}

     function removeKFromList(l, k) {
      // обработка случая, когда список пуст
      if (!l) {
        return null;
      }
      
      // обработка случая, когда первый элемент списка должен быть удален
      while (l && l.value === k) {
        l = l.next;
      }
      
      let current = l;
      
      // обход списка и удаление элементов
      while (current && current.next) {
        if (current.next.value === k) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
      
      return l;
    }
module.exports = {
  removeKFromList
};
