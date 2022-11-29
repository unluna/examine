/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
* 1->2->3->null
* 3->2->1->null
* */


const list = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: null
		}
	}
};

const fn = (props) => {
	let current = props;
	let res = null;

	while (current) {
		const {next} = current;
		current.next = res;
		res = current;
		current = next;
	}
	return res
};

console.log(fn(list));

