const list = {
	next: {
		a: 1
	}
};
const obj2 = list.next;
list.next = {a: 2};
console.log(obj2);
