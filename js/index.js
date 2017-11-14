function rotateMatrix(matrix) {
    var N = matrix.length
    for (var layer = 0; layer < N / 2; layer++) {
        var first = layer
        var last = N - 1 - layer
        for (var i = first; i < last; i++) {
            var offset = i - first
            var top = matrix[first][i]
            matrix[first][i] = matrix[last - offset][first]
            matrix[last - offset][first] = matrix[last][last - offset]
            matrix[last][last - offset] = matrix[i][last]
            matrix[i][last] = top
        }
    }
    return matrix
}

function zeroMatrix(matrix) {
    var positionZero = []
    var M = matrix.length
    var N = matrix[0].length
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            if (matrix[i][j] === 0) {
                var posZero = {
                    r: i,
                    c: j
                }
                positionZero.push(posZero)
            }
        }
    }
    for (var index = 0; index < positionZero.length; index++) {
        matrix[positionZero[index].r].fill(0)
        for (var col = 0; col < N; col++) {
            matrix[col][positionZero[index].c] = 0
        }
    }
    return matrix
}

function isRotateString(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }
    if ((string1 + string1).indexOf(string2) > 0) {
        return true
    } else {
        return false
    }
}

function linkedList() {
    this.head = null

}
linkedList.prototype.push = function(val) {
    var node = {
        value: val,
        next: null
    }
    if (this.head === null) {
        this.head = node
    } else {
        var current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
    }
}
linkedList.prototype.delete = function(val) {
    var current = this.head
    if (current.value === val) {
        this.head = current.next
        current.next = null
    } else {
        var previous = current
        current = current.next
        while (current.next) {
            if (current.value === val) {
                previous.next = current.next
                current.next = null
                return
            } else {
                previous = current
                current = current.next
            }
        }
        if (current.value === val) {
            previous.next = null
        }
    }
}
linkedList.prototype.printList = function() {
    if (!this.head) {
        console.log('empty list')
    } else {
        var current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}
linkedList.prototype.checkDuplicate = function(node) {
    var current = this.head
    while (current) {
        if (current.value === node.value) {
            return true
        } else {
            current = current.next
        }
    }
    return false
}
linkedList.prototype.removeDuplicate = function() {
    var previous = this.head
    var current = previous.next
    while (current) {
        if (checkDuplicate(current)) {
            previous.next = current.next
        }
        previous = current
        current = current.next
    }
}
linkedList.prototype.findKthToLast = function(k) {
    var current = this.head
    var count = 0
    var found = false
    if (!this.head || k < 1) {
        return
    } else {
        while (current) {
            count = count + 1
            if (count === found) {
                found = true
            }
            if (found) {
                console.log(current.value)
            }
        }
    }

}
linkedList.prototype.findKthToLast2 = function(k, head) {
    if (head === null || k < 1) {
        return;
    } else if (k === 1) {
        console.log(head.value);
        findKthToLast2(k, head.next);
    } else {
        findKthToLast2(k - 1, head.next);
    }
}
linkedList.prototype.deleteMiddleNode = function(node) {
    if (node && node.next != null) {
        var temp = node.next
        node.value = temp.value
        node.next = temp.next
    }
}
linkedList.prototype.partition = function(val) {
    var leftLinkedList = new linkedList()
    var pointerLeft = leftLinkedList.head
    var rightLinkedList = new linkedList()
    var pointerRight = rightLinkedList.head
    var current = this.head
    while (current) {
        if (current.value < val) {
            // leftLinkedList.printList();
            if (!leftLinkedList.head) {
                leftLinkedList.head = current
            } else {
                pointerLeft.next = current

            }
            pointerLeft = current
        } else {

            //   rightLinkedList.printList();
            if (!rightLinkedList.head) {
                rightLinkedList.head = current
            } else {
                pointerRight.next = current
            }
            pointerRight = current
        }
        current = current.next
    }
    pointerLeft.next = rightLinkedList.head
    pointerRight.next = null
    leftLinkedList.printList();
    rightLinkedList.printList();
    return leftLinkedList
}

function sumList(list1, list2) {
    var pointerList1 = list1.head;
    var pointerList2 = list2.head;
    var list3 = new linkedList();
    var sum = 0
    var carry = 0
    while (pointerList1 != null || pointerList2 != null) {
        sum = carry + (pointerList1 != null ? pointerList1.value : 0) + (pointerList2 != null ? pointerList2.value : 0)
        carry = Math.floor(sum / 10)
        list3.push(sum % 10)
        if (pointerList1 != null) {
            pointerList1 = pointerList1.next
        }
        if (pointerList2 != null) {
            pointerList2 = pointerList2.next
        }
    }
    if (carry === 1) {
        list3.push(carry)
    }
    return list3
}

linkedList.prototype.printMiddle = function() {
    var slowPointer = this.head
    var fastPointer = this.head
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next
        slowPointer = slowPointer.next
    }
    console.log(slowPointer.value)

}
linkedList.prototype.isPalindrome = function() {
    var arrayValue = []
    var slowPointer = this.head
    var fastPointer = this.head
    var isEven = true
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next
        arrayValue.push(slowPointer.value)
        slowPointer = slowPointer.next
    }
    if (fastPointer != null) {
        isEven = false
    }
    if (!isEven) {
        slowPointer = slowPointer.next
    }
    var _isPalindrome = true
    for (var j = arrayValue.length - 1; j >= 0; j--) {
        if (arrayValue[j] != slowPointer.value) {
            _isPalindrome = false
            break
        } else {
            slowPointer = slowPointer.next
        }
    }
    return _isPalindrome
}

function sumListForward(list1, list2) {
    var current = list1.head
    var sum1 = 0;
    var sum2 = 0;
    var list3 = new linkedList();
    while (current) {
        sum1 = sum1 * 10 + current.value
        current = current.next
    }
    current = list2.head
    while (current) {
        sum2 = sum2 * 10 + current.value
        current = current.next
    }
    var sum = sum1 + sum2
    var sumInString = sum.toString()
    for (var i = 0; i < sumInString.length; i++) {
        list3.push(sumInString[i])
    }
    return list3
}

function getIntersection(list1, list2) {
    var pointer1 = list1.head
    var pointer2 = list1.head
    var count1 = 1
    var count2 = 1
    while (pointer1) {
        pointer1 = pointer1.next
        count1 = count1 + 1
    }
    while (pointer2) {
        pointer2 = pointer2.next
        count2 = count2 + 1
    }
    if (pointer2.value !== pointer1.value) {
        return -1
    }
    var d = count1 - count2
    pointer1 = list1.head
    pointer2 = list1.head
    if (d < 0) {
        d = -d
        for (var i = 1; i < d; i++) {
            pointer2 = pointer2.next
        }
    } else {
        for (var i = 1; i < d; i++) {
            pointer1 = pointer1.next
        }
    }
    while (pointer1 != pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    return pointer1
}
var matrixTest = [
        [1, 2, 3, 9],
        [5, 0, 7, 8],
        [9, 10, 0, 12],
        [13, 3, 15, 16]
    ]
    // console.log(matrixTest[0])
    // console.log(zeroMatrix(matrixTest))

// console.log(isRotateString('waterbottle', 'erbottlewat'), true);
// console.log(isRotateString('waterbottle', 'erbotlewatt'), false);
// console.log(isRotateString('aaata', 'aataa'), true);
var lls = new linkedList();
lls.push(5)
lls.push(8)
lls.push(7)
var lls2 = new linkedList();
lls2.push(2)
lls2.push(3)
lls2.push(4)
var lls3 = new linkedList();
lls3.push('m');
lls3.push('a');
lls3.push('d');
lls3.push('a');
lls3.push('m');
var ResultList = sumList(lls, lls2)
ResultList.printList()
ResultList.printMiddle()
console.log(lls3.isPalindrome());