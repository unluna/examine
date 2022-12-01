/*
* 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
* */

/*
* 输入：l1 = [1,2,4], l2 = [1,3,4]
* 输出：[1,1,2,3,4,4]
* */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const list1 = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4,
				next: null
			}
		}
	}
};
const list2 = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 4,
			next: {
				val: 5,
				next: null
			}
		}
	}
};
const fn = (list1, list2) => {
	let _res = new ListNode();
	let res = _res;
	let _list1 = list1;
	let _list2 = list2;

	while (_list1 !== null && _list2 !== null) {
		if (_list1.val <= _list2.val) {
			res.next = _list1;
			_list1 = _list1.next;
		} else {
			res.next = _list2;
			_list2 = _list2.next;
		}
		res = res.next;
	}
	if (_list1) {
		res.next = _list1;
	}
	if (_list2) {
		res.next = _list2;
	}
	return _res.next;
};

console.log(JSON.stringify(fn(list1, list2)));
