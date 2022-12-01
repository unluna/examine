/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const list =
	{
		val: 1,
		next: {
			val: 2,
			next: {
				val: 3,
				next: {
					val: 4,
					next: {
						val: 5,
						next: null
					}
				}
			}
		}
	};

// 1->2->3->4->5->null
// 2->1->4->3->5->null

const fn = (listNode, k) => {
	// 分组
	const getEnd = (props, k) => {
		let listNode = props;
		while (listNode !== null) {
			k--;
			if (k === 0) {
				return listNode;
			}
			listNode = listNode.next;
		}
		return null;
	};

	// 反转链表
	const reverseList = (props, stop) => {
		let listNode = props;
		let res = stop;
		while (listNode !== null) {
			const {next} = listNode;
			listNode.next = res;
			res = listNode;
			listNode = next;
		}
		return res;
	};

	while (listNode !== null) {

		const groupEnd = getEnd(listNode, k);
		if (groupEnd === null) {
			break;
		}
		// 下一组的开头
		const nextGroupHead = groupEnd.next;
		reverseList(listNode, nextGroupHead);
	}
};

let reverseKGroup = function (head, k) {

	// 返回k个一组，组的尾部，null表示这组不够k个
	let getGroup = function (head, k) {
		while (head != null) {
			k--;
			if (k === 0) return head;
			head = head.next;
		}
		return null;
	};

	// 组的内部反转
	/*
		{
			val: 3,
			next: {
				val: 4,
				next: {
					val: 5,
					next: null
				}
			}
		}
* */
	let reverseList = function (head, stop) {
		let now = head.next;
		 /*
			  {
					val: 2,
					next: {
						val: 3,
						next: {
							val: 4,
							next: {
								val: 5,
								next: null
							}
						}
					}
				}
		* */

		let last = head;
		/*
		{
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: {
						val: 4,
						next: {
							val: 5,
							next: null
						}
					}
				}
			}
		}
		* */
		// 遍历
		while (now !== stop) {
			// 备份now.next
			let next = now.next; //
			// 操作：now指向last
			now.next = last;
			// 往后移动
			last = now;
			now = next;
		}
	};


	// 链表的保护节点（提供入口，防止null异常）
	let entry = new ListNode();
	entry.next = head;
	let last = entry;
	while (head != null) {
		// 分组
		let tail = getGroup(head, k);
		/*
		* {
				val: 2,
				next: {
					val: 3,
					next: {
						val: 4,
						next: {
							val: 5,
							next: null
						}
					}
				}
			}
		* */

		if (tail === null) break;

		let nextHead = tail.next;
		/*
		{
			val: 3,
			next: {
				val: 4,
				next: {
					val: 5,
					next: null
				}
			}
		}
		* */

		// 当前组：head->...->tail
		// 下一组：nextHead->...

		// 组内反转
		reverseList(head, nextHead);

		// 当前组跟下一组、上一组的关系
		// 当前组：变成了tail->...->head
		last.next = tail;

		last = head;
		head = nextHead;
	}
	last.next = head;
	return entry.next;
};

console.log(JSON.stringify(reverseKGroup(list, 2)));
