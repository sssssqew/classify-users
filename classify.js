const customers = [
  {name: '나봄', age: 22, city: '서울', state: '도봉구'},
  {name: '다은', age: 34, city: '부산', state: '해운대구'},
  {name: '가온', age: 28, city: '대구', state: '수성구'},
  {name: '보라', age: 25, city: '부산', state: '부산진구'},
  {name: '해련', age: 41, city: '대구', state: '달서구'},
  {name: '여름', age: 56, city: '서울', state: '중랑구'},
  {name: '재찬', age: 9, city: '서울', state: '마포구'},
  {name: '바다', age: 34, city: '부산', state: '해운대구'},
  {name: '초롱', age: 17, city: '대구', state: '달서구'},
  {name: '진솔', age: 37, city: '서울', state: '도봉구'},
  {name: '한울', age: 67, city: '부산', state: '부산진구'},
  {name: '승아', age: 34, city: '대구' , state: '수성구'},
  {name: '다빈', age: 42, city: '부산', state: '동래구'},
  {name: '잔디', age: 38, city: '대구', state: '북구'},
  {name: '새롬', age: 39, city: '서울', state: '마포구'},
  {name: '노을', age: 13, city: '서울', state: '구로구'},
  {name: '한결', age: 24, city: '부산', state: '동래구'},
  {name: '마루', age: 39, city: '서울', state: '마포구'},
]
const criterias = ['city', 'state', 'age']

function generateClassifyFunc(criterias){ 
  let depth = 0

  function classifyByKey(arr){
    const result = {}

    arr.forEach(function(user){  // 분류기준으로 분류
      const basis = user[criterias[depth]]
      if(!result[basis]) result[basis] = []
      result[basis].push(user)
    })

    if(depth === criterias.length-1){ // 분류기준 갯수만큼 분류
      return result 
    }else{
      depth++
      // console.log(result)

      for(let basis in result){  // 객체의 프로퍼티값(배열)을 재분류
        result[basis] = classifyByKey(result[basis])
      }
      return result
    }
  }
  return classifyByKey // depth, criterias 를 기억하는 클로저 
}

const classifyByKey = generateClassifyFunc(criterias)
console.log(classifyByKey(customers))
