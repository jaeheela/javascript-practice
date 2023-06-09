// 자료구조 (Set)🎉

// => (배열과 같은) 데이터 집합
// => 중복 허용 안함 , 인덱스 없음
// => 다루려는 데이터가 중복을 허용하지 않는 경우, 배열을 사용하면 데이터에 중복이 있는지 일일이 체크하고 제거하는 처리가 필요하지만 
// => 셋을 사용하면 아예 중복된 값은 들어가지 않기 때문에 이와 같은 처리가 필요하지 않음
// => 배열 VS set
// => 배열 : 특정 요소에 접근해야하는 경우, 기타 인덱스가 필요한 상황
// => set : 중복을 제거해야하는 경우, 값의 유무만을 판단해야하는 경우

//new Set() : 새로운 셋 생성
// => 괄호 안에 초깃값으로 배열과 같은 객체(반복가능한)를 전달받으면 
// => 해당 값을 복사하여 중복이 제거된 채로 셋을 생성함

//set.add( : 셋 요소 끝에 주어진 값 추가
// => 추가하려는 값이 만약 중복된 값이면 추가되지 않고 무시됨

//set.delete() : 주어진 값을 셋에서 제거
//=> 성공적으로 제거한 경우 true 반환하고, 제거하지 못한 경우 false 반환
// => 즉, 셋에 없는 값을 제거하려고 시도해도 에러가 발생하지 않고 반환되는 값으로(false) 해당 값이 없다는 것을 알 수 있음

//set.has(): 주어진 값이 셋에 존재하는지에 따라 true 또는 false 반환
//set.clear(): 셋에 들어있는 요소들을 모두 제거하고 비어있는 상태로 만듦
//set.size: 배열의 .length와 같이 셋에 저장된 요소의 크기를 반환
//set.forEach(): 배열과 거의 동일한 데이터 구조로 forEach문 사용가능

//new Set() 사용해 생성
const setOne = new Set();
//add() 이용해 새로운 값 추가
setOne.add(1);
setOne.add(2);
setOne.add(3);
setOne.add(4);
//setOne.add(1); //중복 허용 안함

console.log(setOne); //Set(4) {1, 2, 3, 4}

const setTwo = new Set([1, 2, 3, 4, 3, 4]);
console.log(setTwo); //SSet(4) {1, 2, 3, 4}


// 자료구조 (Map)🎉

//(객체와 같이) 키와 값을 연결하는 방식의 데이터 집합
// 객체와 동일한 콘셉으로 디자인되었음

//Map
// => key값 : 모든 데이터 타입 가능, ey를 문자열로 변환하지 않음
// => 정렬 : 삽입된 순서대로 정렬, 순서보장
// => 크기 : map.size
// => 순회 : 맵 자체로 순회 가능, 반복이 가능한 객체
// => 쓰임 : 키의 순서가 보장되어야할 때, 객체의 키가 객체에 허용되지 않는 데이터 타입일 때

//객체
// => key값 : string, Symol 타입만 가능
// => 정렬 : 정렬 관여x
// => 크기 : 크기를 알기 위해서는 키값 사용 등 직접 판별해야함
// => 순회 : 순회를 위해서 키값을 통해 배열을 얻어 배열을 순회
// => 쓰임 : 그 외

//new Map() : 새로운 맵 생성
// => 괄호 안에 반복이 가능하면서 키와 값이 쌍인 [[1,'a'],[2,'b']]와 같은 객체를 받으면 해당 값이 추가된 맵을 생성함

//map.set(): 주어진 키와 값을 맵에 추가

//set.get() : 인자로 전달받은 키에 해당하는 값을 반환
// => 만약 해당 키가 맵에 존재하지 않을 경우 undefined 반환

//map.delete() : 인자로 전달받은 키에 해당하는 값을 삭제
// => 성공적으로 삭제한 경우 true 반환, 삭제하지 못한 경우 false 반환
// => 즉, 존재하지 않는 키 값을 전달하는 경우 에러가 발생하지 않고 반환되는 값으로(false) 해당 값이 없다고 알려줌

//map.has() : 인자로 전달받은 키가 맵에 존재하는지에 따라 true 또는 false 반환
//map.clear() : 맵에 들어있는 프로퍼티들을 모두 제거하고 비어있는 상태로 만듦
//map.size: 맵에 저장된 요소의 개수(맵의 크기)를 반환

//new Map() 사용해 생성
const MapOne = new Map();
//set() 이용해 새로운 프로퍼티(키와 값의 쌍으로) 추가  
MapOne.set('Hello', 'world');
MapOne.set(123, 456);
console.log(MapOne); //Map(2) {'Hello' => 'world', 123 => 456}
const MapTwo = new Map([[1, 'a'], [2, 'b']]);
console.log(MapTwo); //Map(2) {1 => 'a', 2 => 'b'}
